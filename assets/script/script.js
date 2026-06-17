/* ─── CONFIGURAZIONE MAPPA ─── */
const map = L.map('map', { 
    zoomControl: false, 
    minZoom: 2, 
    maxBounds: [[-85, -180], [85, 180]],
    maxBoundsViscosity: 1.0,
    bounceAtZoomLimits: false,
    attributionControl: false
});
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(map);

/* ─── STATO DELL'APPLICAZIONE ─── */
let selection = [];         // Memorizza le pubblicazioni selezionate per la comparazione
let compareMode = false;    // Indica se la modalità comparazione è attiva
let currentImportanceFilter = 'all';
const markers = L.featureGroup();

/* ─── ELEMENTI DOM ─── */
const compareSelectBtn = document.getElementById('compare-select-btn');
const comparePreviewArea = document.getElementById('compare-preview-area');
const compareActionsArea = document.getElementById('compare-actions');
const comparePreviewSlot1 = document.getElementById('compare-preview-slot-1');
const comparePreviewSlot2 = document.getElementById('compare-preview-slot-2');
const legendBtn = document.getElementById('legend-btn');
const purposeOverlay = document.getElementById('purpose-overlay');
const archiveView = document.getElementById('archive-view');
const sourcesView = document.getElementById('sources-view');
const lightbox = document.getElementById('lightbox');

/* ─── FUNZIONI DI UTILITÀ ─── */
function getPubColor(t) {
    if (t.importance == 1) return "var(--imp-high)";
    if (t.importance == 2) return "var(--imp-med)";
    return "var(--imp-low)";
}

function toggleLegend() {
    const legend = document.getElementById('map-legend');
    legend.style.display = (legend.style.display === 'flex') ? 'none' : 'flex';
}

/* ─── LOGICA DI COMPARAZIONE ─── */
function updateComparePreview(pub, slotElement, index) {
    if (pub && pub.img) {
        slotElement.innerHTML = `<button class="remove-btn" onclick="removeFromSelection(${index})">−</button><img src="${pub.img}" alt="${pub.newspaper}"><div class="newspaper-name-overlay">${pub.city}, ${pub.country}</div>`;
    } else if (pub && pub.country === "China") { // Caso speciale Cina (No Image)
        slotElement.innerHTML = `<button class="remove-btn" onclick="removeFromSelection(${index})">−</button><span style="color:#666; letter-spacing:1px; text-transform:uppercase;">no image</span><div class="newspaper-name-overlay">${pub.country}</div>`;
    } else {
        slotElement.innerHTML = '';
    }
}

function refreshPreviews() {
    clearAllComparePreviews();
    if (selection[0]) updateComparePreview(selection[0], comparePreviewSlot1, 0);
    if (selection[1]) updateComparePreview(selection[1], comparePreviewSlot2, 1);
    
    const startBtn = document.getElementById('start-compare-btn');
    if (selection.length === 2) {
        startBtn.classList.add('enabled');
        startBtn.disabled = false;
    } else {
        startBtn.classList.remove('enabled');
        startBtn.disabled = true;
    }
}

function clearComparePreviewSlot(slotElement) {
    slotElement.innerHTML = '';
}

function clearAllComparePreviews() {
    clearComparePreviewSlot(comparePreviewSlot1);
    clearComparePreviewSlot(comparePreviewSlot2);
}

function removeFromSelection(index) {
    const pubToRemove = selection[index];
    if (!pubToRemove) return;

    markers.eachLayer(layer => {
        if (layer.pubData && layer.pubData.id === pubToRemove.id) {
            layer.setStyle({ weight: 0, color: '#fff' });
        }
    });

    selection.splice(index, 1);
    refreshPreviews();
    if (document.getElementById('archive-view').style.display === 'block') renderArchive();
}

function toggleSelection(pubId) {
    const pub = publications.find(p => p.id === pubId);
    if (!pub) return;
    const isSelected = selection.includes(pub);
    if (isSelected) {
        removeFromSelection(selection.indexOf(pub));
    } else {
        if (selection.length < 2) {
            selection.push(pub);
            markers.eachLayer(layer => {
                if (layer.pubData && layer.pubData.id === pubId) {
                    layer.setStyle({ weight: 3, color: '#fff' });
                }
            });
            refreshPreviews();
        }
    }
    map.closePopup();
}

function executeComparison() {
    if (selection.length === 2) {
        openComparison(selection[0], selection[1]);
        markers.eachLayer(layer => { if (layer.setStyle) layer.setStyle({ weight: 0, color: '#fff' }); });
        _toggleCompareModeInternal(false);
    }
}

function _toggleCompareModeInternal(activate) {
    compareMode = (activate === undefined) ? !compareMode : activate;
    if (compareMode) {
        compareSelectBtn.classList.add('hidden');
        comparePreviewArea.classList.add('visible');
        compareActionsArea.classList.add('visible');
        // Invece di inline style, è meglio usare classi CSS se possibile, 
        // ma per ora manteniamo la logica esistente pulita:
        compareSelectBtn.style.display = 'none';
        comparePreviewArea.style.display = 'flex';
        compareActionsArea.style.display = 'flex';
    } else {
        compareSelectBtn.style.display = 'block';
        comparePreviewArea.style.display = 'none';
        compareActionsArea.style.display = 'none';
        selection = [];
        markers.eachLayer(l => { if(l.setStyle) l.setStyle({weight: 0}); });
        clearAllComparePreviews();
        refreshPreviews();
    }
    if (archiveView.style.display === 'block') renderArchive();
}

const toggleCompareMode = () => _toggleCompareModeInternal();

/* ─── INIZIALIZZAZIONE MARKERS ─── */
publications.forEach(t => {
    const color = getPubColor(t);
    const m = L.circleMarker(t.coords, { radius: 7, fillColor: color, stroke: true, color: '#fff', weight: 0, fillOpacity: 0.9 }).addTo(markers);
    m.pubData = t;
    const selectBtnHtml = `<button class="popup-select-btn" data-id="${t.id}" onclick="toggleSelection('${t.id}')">Select</button>`;
    const popupHtml = t.country === "China" 
        ? `<div style="width:260px; padding:5px; font-size:12px; line-height:1.5; max-height:215px; overflow-y:auto;"><strong style="color:#eee; font-size:8px; display:block; margin-bottom:5px; text-transform:uppercase;">Analysis</strong>${t.analysis}${selectBtnHtml}</div>`
        : `<div style="width:180px"><strong>${t.newspaper}</strong><br><small>${t.city}, ${t.country}</small><div class="popup-img-container"><img src="${t.img}" data-pub-id="${t.id}"></div>${selectBtnHtml}</div>`;
    m.bindPopup(popupHtml);
});

map.on('popupopen', function(e) {
    const container = e.popup._container;
    const btn = container.querySelector('.popup-select-btn');
    if (btn) {
        btn.style.display = compareMode ? 'block' : 'none';
        const pubId = btn.getAttribute('data-id');
        const pub = publications.find(p => p.id === pubId);
        const isSelected = selection.includes(pub);
        btn.innerText = isSelected ? 'Remove' : 'Select';
        btn.classList.toggle('is-remove', isSelected);
    }
});

/* ─── RENDERING SCHEDE ─── */
const renderCard = (t, color) => `
    <div class="card-header">
        <div class="header-left">
            <div class="dot" style="background:${color}"></div>
            <span class="journal-name">${t.country || 'Historical Context'}</span>
        </div>
    </div>
    <div class="image-box">
        ${t.img ? `<img src="${t.img}">` : `<span style="color:#666; font-size:11px; letter-spacing:1px; text-transform:uppercase;">no image</span>`}
    </div>
    <div class="card-footer">
        <div class="footer-label">${t.newspaper || t.country} • ${t.city || t.continent}</div>
        <div class="footer-scroll-area">
            ${t.main_headline ? `
                <div class="footer-desc">
                    <strong>Front Page Headline</strong> “${t.main_headline}”
                    ${t.main_headline_en && t.main_headline_en !== t.main_headline ? `<br><span style="font-style: italic; font-size: 0.9em; color: #666;">“${t.main_headline_en}”</span>` : ''}
                </div>` : ''}
            <div class="footer-desc"><strong>Analysis</strong> ${t.analysis || '—'}</div>
            ${t.visual ? `<div class="footer-desc"><strong>Visual Hierarchy</strong> ${t.visual}</div>` : ''}
            ${t.tone ? `<div class="footer-desc"><strong>Rhetorical Tone</strong> ${t.tone}</div>` : ''}
        </div>
    </div>`;

function openComparison(t1, t2) {
    [[t1, 'box-usa'], [t2, 'box-ussr']].forEach(([t, id]) => {
        const color = getPubColor(t);
        const el = document.getElementById(id);
        el.style.borderTop = `3px solid ${color}`;
        el.innerHTML = renderCard(t, color);
    });
    document.getElementById('comparison-overlay').style.display = 'flex';
}

function openDetail(pubId) {
    const t = publications.find(p => p.id === pubId);
    const color = getPubColor(t);
    const b = document.getElementById('detail-card');
    b.style.borderTop = `3px solid ${color}`;
    b.innerHTML = renderCard(t, color);
    document.getElementById('detail-overlay').style.display = 'flex';
}

const closeDetail = () => { document.getElementById('detail-overlay').style.display = 'none'; };
const closeComparison = () => { document.getElementById('comparison-overlay').style.display = 'none'; };

/* ─── ARCHIVIO ─── */
function toggleGridSelection(pubId) {
    const pub = publications.find(p => p.id === pubId);
    if (selection.includes(pub)) selection = selection.filter(p => p !== pub);
    else if (selection.length < 2) selection.push(pub);
    refreshPreviews();
    renderArchive();
}

function filterImportance(val) {
    currentImportanceFilter = val;
    renderArchive();
}

markers.addTo(map);
map.fitBounds(markers.getBounds().pad(0.1));

/* ─── EVENT LISTENER GLOBALI ─── */
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG' && e.target.closest('.popup-img-container')) {
        openDetail(e.target.getAttribute('data-pub-id'));
    } else if (e.target.tagName === 'IMG' && e.target.closest('.image-box')) {
        const lightbox = document.getElementById('lightbox');
        document.getElementById('lightbox-img').src = e.target.src;
        lightbox.style.display = 'flex';
    }
});

purposeOverlay.style.display = 'flex';
const closePurposeModal = () => { purposeOverlay.style.display = 'none'; };
purposeOverlay.querySelector('.close-purpose-btn').addEventListener('click', closePurposeModal);

window.addEventListener('keydown', (e) => {
    if(e.key === "Escape") { 
        closeComparison(); closeDetail(); closePurposeModal();
        document.getElementById('lightbox').style.display = 'none'; 
        if (compareMode) _toggleCompareModeInternal(false);
    }
});

/* ─── NAVIGAZIONE VISTE ─── */
function showView(viewName) {
    document.querySelectorAll('.nav-tab[onclick]').forEach(t => t.classList.toggle('active', t.getAttribute('onclick').includes(viewName)));
    archiveView.style.display = viewName === 'archive' ? 'block' : 'none';
    sourcesView.style.display = viewName === 'sources' ? 'block' : 'none';
    
    // Gestione visibilità elementi mappa
    legendBtn.style.display = (viewName === 'map' || viewName === 'archive') ? 'none' : 'none'; // Da regolare base a design
    legendBtn.style.display = (viewName === 'map') ? 'flex' : 'none';
    document.getElementById('compare-select-container').style.display = (viewName === 'sources') ? 'none' : 'flex';

    if (viewName === 'archive') {
        document.getElementById('map-legend').style.display = 'none';
        renderArchive();
    }
    if (viewName === 'sources') {
        renderSources();
    }
}

/* ─── RENDERING CONTENUTI ─── */
function renderSources() {
    sourcesView.innerHTML = `
        <div class="continent-block">
            <div class="continent-title">Information Sources</div>
            <ul>
                <li>Santa Maria Times. (n.d.). Apollo 11 Headlines.<br><a href="https://santamariatimes.com/news/archives/headlines-apollo-11-moon-landing/collection_2fa322a0-8815-53ca-bf3b-3a1b92e92c36.html#16" target="_blank">https://santamariatimes.com/news/archives/headlines-apollo-11-moon-landing/collection_2fa322a0-8815-53ca-bf3b-3a1b92e92c36.html#16</a></li>
                <li>SYV News. (n.d.). Apollo 11 Headlines.<br><a href="https://syvnews.com/news/archives/headlines-apollo-11-moon-landing/collection_3c0d5e05-ab70-5d3f-88fc-f43c67b7f810.html#12" target="_blank">https://syvnews.com/news/archives/headlines-apollo-11-moon-landing/collection_3c0d5e05-ab70-5d3f-88fc-f43c67b7f810.html#12</a></li>
                <li>Issuu. (n.d.). L'Impronta di Neil Arm.<br><a href="https://issuu.com/quotidianonet/docs/1969.07.21_-_l_impronta_di_neil_arm" target="_blank">https://issuu.com/quotidianonet/docs/1969.07.21_-_l_impronta_di_neil_arm</a></li>
                <li>la Repubblica. (n.d.). Prime pagine giornali italiani.<br><a href="https://www.repubblica.it/scienze/2019/07/13/foto/allunaggio_luglio_1969_le_prime_pagine_dei_giornali_italiani-230917118/1/" target="_blank">https://www.repubblica.it/scienze/2019/07/13/foto/allunaggio_luglio_1969_le_prime_pagine_dei_giornali_italiani-230917118/1/</a></li>
                <li>History Stack Exchange. (n.d.). What was the internal Soviet reaction to the moon landing?<br><a href="https://history.stackexchange.com/questions/15023/what-was-the-internal-soviet-reaction-to-the-moon-landing" target="_blank">https://history.stackexchange.com/questions/15023/what-was-the-internal-soviet-reaction-to-the-moon-landing</a></li>
            </ul>
        </div>
    `;
}

function renderArchive() {
    archiveView.innerHTML = "";
    const toolbar = document.createElement('div');
    toolbar.className = 'archive-toolbar';
    toolbar.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-end; width:100%;">
            <div class="archive-filters">
                <span class="filter-label">Coverage Importance:</span>
                <div class="importance-filters">
                    <button class="filter-btn ${currentImportanceFilter === 'all' ? 'active' : ''}" onclick="filterImportance('all')">All</button>
                    <button class="filter-btn ${currentImportanceFilter === '1' ? 'active' : ''}" onclick="filterImportance('1')">Full Page</button>
                    <button class="filter-btn ${currentImportanceFilter === '2' ? 'active' : ''}" onclick="filterImportance('2')">Significant</button>
                    <button class="filter-btn ${currentImportanceFilter === '3' ? 'active' : ''}" onclick="filterImportance('3')">Brief</button>
                </div>
            </div>
        </div>
        ${compareMode ? `<div class="compare-hint">Select two images to compare different perspectives.</div>` : ''}
    `;
    archiveView.appendChild(toolbar);
    const filteredPubs = currentImportanceFilter === 'all' ? publications : publications.filter(p => p.importance == currentImportanceFilter);
    const continents = [...new Set(filteredPubs.map(t => t.continent))];
    let fullHtml = "";
    continents.forEach(cont => {
        const items = filteredPubs.filter(t => t.continent === cont);
        if(items.filter(t => t.img).length === 0) return;
        let html = `<div class="continent-block"><div class="continent-title">${cont}</div>`;
        const countries = [...new Set(items.map(i => i.country))];
        countries.forEach(country => {
            const cItems = items.filter(t => t.country === country && t.img);
            if(cItems.length === 0) return;
            html += `<div class="country-block"><div class="country-title">${country}</div><div class="grid-container">`;
            cItems.forEach(t => {
                const isSelected = selection.includes(t);
                html += `<div class="grid-item ${isSelected ? 'selected' : ''}" onclick="${compareMode ? `toggleGridSelection('${t.id}')` : `openDetail('${t.id}')`}" title="${t.newspaper}">
                            <div class="grid-img-wrapper"><img src="${t.img}" onerror="console.error('Errore caricamento immagine per: ${t.newspaper}', this.src)"></div>
                            <div class="grid-info"><div class="grid-city">${t.city}</div><div class="grid-journal">${t.newspaper}</div></div>
                         </div>`;
            });
            html += `</div></div>`;
        });
        fullHtml += html + `</div>`;
    });
    archiveView.insertAdjacentHTML('beforeend', fullHtml);
}