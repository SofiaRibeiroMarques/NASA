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
Per la parte della mappa interattiva mi sono ispirata al sito nicholsonconstruction.com (https://www.nicholsonconstruction.com/drill-down/the-hanford-nuclear-site) che al suo interno mostra delle mappe che hanno degli elementi cliccabili che contengono delle informazioni.
Per la visualizzazione delle front pages, ho seguito il layout della pagina Artandculture google (https://artsandculture.google.com/category/artist) per avere una maggiore organizzazione dei contenuti per semplificare l'esperienza utenti.



## Design dell’interfaccia e modalità di interazione
Il sito utilizza un layout one-page organizzato in sezioni verticali, che consente una navigazione fluida sia tramite scroll sia attraverso un menu di navigazione. La struttura è pensata per guidare l’utente in modo chiaro tra le diverse aree tematiche, mantenendo una continuità visiva senza interruzioni tra una sezione e l’altra. L’interazione avviene principalmente tramite click su elementi del menu e su pannelli interattivi, che permettono di mostrare o nascondere contenuti senza ricaricare la pagina, favorendo un’esplorazione più dinamica e non lineare.
Un elemento distintivo dell’interfaccia è la mappa interattiva, che rappresenta visivamente i diversi paesi coinvolti nell’analisi. Su di essa sono presenti dei pallini cliccabili, ciascuno associato a uno specifico contesto nazionale: selezionandoli, l’utente può accedere a contenuti dedicati, come articoli, immagini o approfondimenti relativi al modo in cui i media di quel paese hanno raccontato lo sbarco sulla Luna. Questo sistema rende l’esperienza più immediata e intuitiva, permettendo di passare rapidamente da un contesto all’altro attraverso un’interazione diretta e visiva.




## Tecnologia usata
A differenza di altri archivi digitali tradizionali, il sito utilizza pannelli interattivi e sezioni navigabili all’interno della stessa pagina, permettendo all’utente di esplorare i contenuti senza ricaricare continuamente nuove pagine. Questa logica migliora l’esperienza utente e rende la consultazione più fluida e intuitiva.


```JavaScript
 // NORTH AMERICA
  { id:"fl", 
  continent:"North America", 
  country:"USA", city:"St. Petersburg, FL", 
  newspaper:"St. Petersburg Times", 
  coords:[27.76, -82.64], 
  img:"img/1.jpg", 
  analysis:"A bold celebration that brings lunar success ’close to home’ given its proximity to Cape Canaveral. The paper emphasizes the American triumph, linking the space endeavor directly to local and national pride. The narrative is steeped in evident patriotism, turning the moon landing into a personal event for every reader.", 
  visual: "Giant headline occupying nearly half the upper section, with ’Moon, We’re Onto You’ in massive characters. Below, close-up photos of the astronauts’ faces and a moonwalk simulation balance visual impact with human details.", 
  tone: "Colloquial and triumphant, treating the Moon like a newly conquered territory. The language is direct and engaging, celebrating the mission’s audacity and success.", importance: 1, 
  main_headline: "Moon, We’re Onto You", 
  headline_description: "Moon, We’re Onto You.", 
  tone_category: "celebratory", 
  language_category: "celebratory", 
  main_headline_en: "Moon, We’re Onto You" },
```


## Target e contesto d’uso
Il progetto è rivolto principalmente a studenti, ricercatori, storici che studiano media e giornalismo interessati ad analizzare come i media di diversi paesi hanno interpretato lo sbarco sulla Luna.
Può essere utilizzato sia in ambito didattico, come supporto a corsi universitari, sia per attività di ricerca e approfondimento, favorendo una comprensione più ampia delle differenze culturali, politiche e comunicative nella narrazione di un evento globale.


