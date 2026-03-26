SUPSI 2026  
Corso d’interaction design, CV429.01  
Docenti: A. Gysin, G. Profeta  

Progetto 1: La conquista dello spazio

# MOONPRINT
Autore: Sofia Marques \
[MOONPRINT](https://sofiaribeiromarques.github.io/NASA/progetto/index.html)


## Introduzione e tema
Il sito visualizza come lo sbarco sulla Luna sia stato narrato dai giornali di diversi paesi il 21 luglio 1969.
Piuttosto che funzionare come un semplice archivio, la piattaforma analizza le scelte editoriali fatte dalle diverse testate.
Attraverso una mappa interattiva, gli utenti possono esplorare le prime pagine dei quotidiani di vari paesi.

Attraverso visualizzazioni dei dati, il progetto mostra come lo stesso evento storico sia stato interpretato e raccontato in modi diversi a seconda del contesto culturale e politico.
L’esperienza integra inoltre un archivio di telecronache storiche e comunicazioni audio tra gli astronauti e Houston, sincronizzate con i momenti chiave dell’evento, permettendo di confrontare l’evento reale con la narrazione costruita dai media.
Il progetto diventa così non solo un archivio, ma un’indagine interattiva su come i media globali hanno costruito il significato di uno degli eventi più iconici della storia contemporanea.


## Riferimenti progettuali
- indicare delle pagine web che mi hanno ispirato per realizzare il progetto e/o mi ha dato delle idee per le interazioni



## Design dell’interfaccia e modalità di interazione
(indicare qual'è il tipo di layout che ho utilizzato, come ho strutturato la pagina(es. interazione di click e passaggio da pagina a pagina con un menu), come si interagisce con le diverse pagine. allegare delle immagini/video per mostrare l'interfaccia(almeno 1 video).)




## Tecnologia usata
(spiegare quali sono le caratteristiche dal punto di vista tecnico che distingue il progetto dagli altri. le logiche che ho utilizzato per usufruire dell'interfaccia(es. panneli interattivi all'interno della pagina). Inserire una parte particolare del mio codice.)


```JavaScript
const image = new Image();
image.onload = () => {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(
		gl.TEXTURE_2D,
		level,
		internalFormat,
		srcFormat,
		srcType,
		image
	);
	if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
		gl.generateMipmap(gl.TEXTURE_2D);
	} else {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	}
};
image.src = url;
```


## Target e contesto d’uso
(... contesto ideale per fruire della pagina.)


