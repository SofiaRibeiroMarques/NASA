// ── TEXTURE BASE64 ──────────────────────────────────────────────
const EARTH_DATA = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QDpRXhpZgAASUkqAAgAAAAEAA4BAgCKAAAAPgAAAJiCAgAJAAAAyAAAABoBBQABAAAA0QAAABsBBQABAAAA2QAAAAAAAAAiSGlnaCBxdWFsaXR5IHN1cmZhY2UgbWFwLCBuYXR1cmFsIGNvbG9ycywgY2xvdWRzIGNvdmVyLkNsb3VkcyBtYXAgY29tZXMgZnJvbSBlYXJ0aG9ic2VydmF0b3J5L25hc2EuVGhlIHNvZnR3YXJlIHRvIGNyZWF0ZUEhUGhvdG9zaG9wIENTNSJ4aW5nbWluMDcsAQAAAQAAACwBAAABAAAA/+EGGWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBkYzpSaWdodHM9InhpbmdtaW4wNyIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMTgyMDU4Nzg1IiB4bXBSaWdodHM6V2ViU3RhdGVtZW50PSJodHRwczovL3d3dy5pc3RvY2twaG90by5jb20vbGVnYWwvbGljZW5zZS1hZ3JlZW1lbnQ/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmwiIHBsdXM6RGF0YU1pbmluZz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi92b2NhYi9ETUktUFJPSElCSVRFRC1FWENFUFRTRUFSQ0hFTkdJTkVJTkRFWElORyIgPgo8ZGM6Y3JlYXRvcj48cmRmOlNlcT48cmRmOmxpPnhpbmdtaW4wNzwvcmRmOmxpPjwvcmRmOlNlcT48L2RjOmNyZWF0b3I+PGRjOmRlc2NyaXB0aW9uPjxyZGY6QWx0PjxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+JnF1b3Q7SGlnaCBxdWFsaXR5IHN1cmZhY2UgbWFwLCBuYXR1cmFsIGNvbG9ycywgY2xvdWRzIGNvdmVyLkNsb3VkcyBtYXAgY29tZXMgZnJvbSBlYXJ0aG9ic2VydmF0b3J5L25hc2EuVGhlIHNvZnR3YXJlIHRvIGNyZWF0ZUEhUGhvdG9zaG9wIENTNSZxdW90OzwvcmRmOmxpPjwvcmRmOkFsdD48L2RjOmRlc2NyaXB0aW9uPgo8cGx1czpMaWNlbnNvcj48cmRmOlNlcT48cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz48cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5pc3RvY2twaG90by5jb20vcGhvdG8vbGljZW5zZS1nbTE4MjA1ODc4NS0/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmw8L3BsdXM6TGljZW5zb3JVUkw+PC9yZGY6bGk+PC9yZGY6U2VxPjwvcGx1czpMaWNlbnNvcj4KCQk8L3JkZjpEZXNjcmlwdGlvbj4KCTwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/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";

// ── SCENE SETUP ─────────────────────────────────────────────────
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 5000);
camera.position.z = 550;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
renderer.setClearColor(0x00040e);
document.body.appendChild(renderer.domElement);
window.addEventListener('resize', () => (camera.aspect = innerWidth / innerHeight, camera.updateProjectionMatrix(), renderer.setSize(innerWidth, innerHeight)));

// ── STARS & LIGHTS ───────────────────────────────────────────────
const starGeo = new THREE.BufferGeometry();
const starPos = new Float32Array(4500);
for (let i = 0; i < 4500; i++) starPos[i] = (Math.random() - 0.5) * 4000;
starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 1.2, sizeAttenuation: false })));

const sunLight = new THREE.DirectionalLight(0xfff0c8, 1.4);
sunLight.position.set(-300, 100, -200);
scene.add(sunLight, new THREE.AmbientLight(0x1a1c28, 1));

// ── SCENE GRAPH & HELPERS ────────────────────────────────────────
const pivot = scene.add(new THREE.Group());
const earthGroup = pivot.add(new THREE.Group());
const getEl = id => document.getElementById(id);
const createMesh = (geo, mat, group) => group.add(new THREE.Mesh(geo, mat));
const createLine = (geo, mat, group) => group.add(new THREE.Line(geo, mat));
const createCircleGeo = (r, seg = 128) => new THREE.BufferGeometry().setFromPoints(
  Array.from({ length: seg + 1 }, (_, i) => {
    const a = (i / seg) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r)
  })
);

// ── EARTH & ORBIT ────────────────────────────────────────────────
const earthMesh = createMesh(new THREE.SphereGeometry(200, 64, 48), new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load(EARTH_DATA), specular: new THREE.Color(0x222244), shininess: 15 }), earthGroup);
createMesh(new THREE.SphereGeometry(205, 64, 48), new THREE.MeshPhongMaterial({ color: 0x2255ff, transparent: true, opacity: 0.07, side: THREE.FrontSide, depthWrite: false }), earthGroup);
const eqLine = createLine(createCircleGeo(202), new THREE.LineBasicMaterial({ color: 0xff3232, opacity: 0.85, transparent: true }), earthGroup);
const orbitLine = createLine(createCircleGeo(228), new THREE.LineBasicMaterial({ color: 0x00ffc8, opacity: 0.15, transparent: true }), pivot);
orbitLine.rotation.x = THREE.MathUtils.degToRad(51.6);

// ── ISS, NADIR & TRAIL ───────────────────────────────────────────
const issGroup = pivot.add(new THREE.Group());
const nadirGroup = pivot.add(new THREE.Group());
const issCore = createMesh(new THREE.SphereGeometry(5, 12, 12), new THREE.MeshBasicMaterial({ color: 0xffee50 }), issGroup);
const issGlow = createMesh(new THREE.SphereGeometry(11, 12, 12), new THREE.MeshBasicMaterial({ color: 0x00ffb4, transparent: true, opacity: 0.5 }), issGroup);
const issHalo = createMesh(new THREE.SphereGeometry(20, 12, 12), new THREE.MeshBasicMaterial({ color: 0x00ffb4, transparent: true, opacity: 0.15 }), issGroup);
createLine(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-14, 0, 0), new THREE.Vector3(14, 0, 0)]), new THREE.LineBasicMaterial({ color: 0x50a0ff }), issGroup);

const nadirDot = createMesh(new THREE.SphereGeometry(3, 8, 8), new THREE.MeshBasicMaterial({ color: 0xddfff0 }), nadirGroup);
const nadirGlow = createMesh(new THREE.SphereGeometry(7, 8, 8), new THREE.MeshBasicMaterial({ color: 0x00ffb4, transparent: true, opacity: 0.3 }), nadirGroup);

const nadirLineGeo = new THREE.BufferGeometry();
nadirLineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
const nadirLine = createLine(nadirLineGeo, new THREE.LineBasicMaterial({ color: 0x00ffb4, opacity: 0.35, transparent: true }), pivot);

const TRAIL_LEN = 90;
const trailGeo = new THREE.BufferGeometry();
trailGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(TRAIL_LEN * 3), 3));
const trailLine = createLine(trailGeo, new THREE.LineBasicMaterial({ color: 0x00ffb4, opacity: 0.6 }), pivot);
let trailBuf = [];

// ── INTERACTION ──────────────────────────────────────────────────
let isDragging = false, prevMX = 0, prevMY = 0, rotX = 0.3, rotY = 0;
const handleDragStart = (x, y) => { isDragging = true; prevMX = x; prevMY = y; };
const handleDragEnd = () => { isDragging = false; };
const handleDrag = (x, y) => {
  if (!isDragging || !x) return;
  rotY += (x - prevMX) * 0.007;
  rotX += (y - prevMY) * 0.007;
  rotX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotX));
  prevMX = x; prevMY = y;
};
['mousedown', 'touchstart'].forEach(evt => renderer.domElement.addEventListener(evt, e => handleDragStart(e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY), { passive: true }));
['mouseup', 'mouseleave', 'touchend'].forEach(evt => renderer.domElement.addEventListener(evt, handleDragEnd, { passive: true }));
['mousemove', 'touchmove'].forEach(evt => renderer.domElement.addEventListener(evt, e => handleDrag(e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY), { passive: true }));
renderer.domElement.addEventListener('wheel', e => { camera.position.z = Math.max(250, Math.min(1200, camera.position.z + e.deltaY * 0.5)); }, { passive: true });

// ── DATA & HUD ───────────────────────────────────────────────────
let lat = 0, lon = 0;
const issTo3D = (la, lo, r) => {
  const phi = THREE.MathUtils.degToRad(la), theta = THREE.MathUtils.degToRad(lo);
  return new THREE.Vector3(r * Math.cos(phi) * Math.cos(theta), -r * Math.sin(phi), r * Math.cos(phi) * Math.sin(theta));
};

const fetchData = async (url) => (await fetch(url)).json();

const fetchISS = async () => {
  try {
    const d = await fetchData("https://api.wheretheiss.at/v1/satellites/25544");
    ({ latitude: lat, longitude: lon } = d);
    updateHUD();
    fetchGeo();
  } catch (e) { console.warn("ISS fetch failed", e); }
  setTimeout(fetchISS, 5000);
};

const fetchGeo = async () => {
  try {
    const g = await fetchData(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=it`);
    getEl("region").textContent = g.countryName || g.locality || "Oceano / Int'l Waters";
  } catch (e) { }
};

const fetchCrew = async () => {
  try {
    const d = await fetchData("https://api.open-notify.org/astros.json");
    getEl("crew-count").textContent = d.people.length;
    getEl("crew-list").innerHTML = d.people.map(p => `<div class="crew-name">· ${p.name}</div>`).join("");
  } catch (e) { }
};

const updateHUD = () => {
  getEl("lat").textContent = `${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? "N" : "S"}`;
  getEl("lon").textContent = `${Math.abs(lon).toFixed(4)}° ${lon >= 0 ? "E" : "W"}`;
  getEl("refresh").textContent = `ogni 5s · ${new Date().toLocaleTimeString("it-IT")}`;
};
const updateClock = () => { getEl("clock").textContent = new Date().toLocaleTimeString("en-GB", { timeZone: "UTC", hour12: false }); };

setInterval(updateClock, 1000);
updateClock(); fetchISS(); fetchCrew();

// ── ANIMATE ──────────────────────────────────────────────────────
let earthRotY = 0;
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime(), pulse = (Math.sin(t * 3) + 1) / 2;

  earthMesh.rotation.y = eqLine.rotation.y = (earthRotY += 0.0004);

  if (!isDragging) rotY += 0.0018;
  pivot.rotation.set(rotX, rotY, 0);

  const issPos = issTo3D(lat, lon, 228);
  const nadirPos3 = issTo3D(lat, lon, 200);

  issGroup.position.copy(issPos);
  issGlow.material.opacity = 0.35 + pulse * 0.3;
  issHalo.material.opacity = 0.08 + pulse * 0.12;

  nadirGroup.position.copy(nadirPos3);
  nadirGlow.material.opacity = 0.2 + pulse * 0.35;

  const np = nadirLine.geometry.attributes.position;
  np.setXYZ(0, nadirPos3.x, nadirPos3.y, nadirPos3.z);
  np.setXYZ(1, issPos.x, issPos.y, issPos.z);
  np.needsUpdate = true;

  trailBuf.push(issPos.clone());
  if (trailBuf.length > TRAIL_LEN) trailBuf.shift();

  const tp = trailLine.geometry.attributes.position;
  const fillPos = trailBuf[0] || issPos;
  for (let i = 0; i < TRAIL_LEN; i++) {
    const p = trailBuf[i] || fillPos;
    tp.setXYZ(i, p.x, p.y, p.z);
  }
  tp.needsUpdate = true;
  trailLine.geometry.setDrawRange(0, trailBuf.length);

  renderer.render(scene, camera);
}
animate();