const numero = 1000
const formiche =[]


function setup(){
    createCanvas(500, 500)
        background(200)

    for(let i = 0; i <numero; i++){
    formiche[i] ={
        x : width/2,
        y : height/2,
        colore : color(random(255), random(255), random(255))  
         }
    }


}

function draw(){
    noStroke()
for(let i = 0; i <numero; i++){
    fill(formiche[i].colore)
    rect(formiche[i].x, formiche[i].y, 4, 4)

 formiche[i].x += random(-4, 4)
  formiche[i].y += random(-4, 4)


}
}

