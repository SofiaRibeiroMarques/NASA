SUPSI 2026  
Corso d’interaction design, CV429.01  
Docenti: A. Gysin, G. Profeta  

Progetto 1: La conquista dello spazio

# MOONPRINT
Autore: Sofia Marques \
[MOONPRINT](https://sofiaribeiromarques.github.io/NASA/progetto/index.html)


## Introduzione e tema
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec. Nisi est sit amet facilisis magna etiam tempor. Nisl nisi scelerisque eu ultrices vitae. Id aliquet lectus proin nibh nisl. Urna nec tincidunt praesent semper feugiat nibh. Imperdiet dui accumsan sit amet nulla facilisi morbi. Aliquet enim tortor at auctor urna nunc. Id cursus metus aliquam eleifend mi. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Odio morbi quis commodo odio aenean sed. Turpis cursus in hac habitasse. Sed enim ut sem viverra aliquet eget sit. Iaculis at erat pellentesque adipiscing commodo. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Ipsum faucibus vitae aliquet nec ullamcorper sit. Tempus quam pellentesque nec nam aliquam sem et tortor. Turpis egestas sed tempus urna et pharetra pharetra massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.


## Riferimenti progettuali
- indicare delle pagine web che mi hanno ispirato per realizzare il progetto e/o mi ha dato delle idee per le interazioni



## Design dell’interfaccia e modalità di interazione
- indicare qual'è il tipo di layout che ho utilizzato, come ho strutturato la pagina(es. interazione di click e passaggio da pagina a pagina con un menu), come si interagisce con le diverse pagine. allegare delle immagini/video per mostrare l'interfaccia(almeno 1 video). 




## Tecnologia usata
spiegare quali sono le caratteristiche dal punto di vista tecnico che distingue il progetto dagli altri. le logiche che ho utilizzato per usufruire dell'interfaccia(es. panneli interattivi all'interno della pagina). 

Inserire una parte particolare del mio codice.


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
... contesto ideale per fruire della pagina.


