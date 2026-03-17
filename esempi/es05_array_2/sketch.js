const formiche =[]
let mappa
let dim = 10

function preload(){
    mappa = loadImage("img/shrek-scaled.jpg")



}

function setup(){
    createCanvas(500, 500)
        background(200)
for(let j = 0; j <mappa.height; j++){
    for(let i = 0; i <mappa.width; i++){
    formiche.push({
        x : i * dim,
        y : j * dim,
        colore : mappa.get(i, j), 
        dim : dim
         })
    }
}

}

function draw(){
    noStroke()
for(let i = 0; i <formiche.length; i++){
    fill(formiche[i].colore)
    rect(formiche[i].x, formiche[i].y, 4, 4)

 formiche[i].x += random(-1, 1)
  formiche[i].y += random(-1, 1)


}
}
