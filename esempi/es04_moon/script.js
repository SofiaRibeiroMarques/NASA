let piastrella


function preload(){
    piastrella = loadImage("tiles/moon_thin.png")
}

function setup(){
createCanvas(900, 900, WEBGL)
piastrella.loadPixels()

}

function draw(){

    background(0)
    stroke(255)
    
    rotateX(PI/3)
    if (mouseIsPressed){
    rotateZ(mouseX * 0.01)
    }

    const spaziatura = 5
    strokeWeight(0.9999)


    const numeroPuntiX = piastrella.width
    const margineX = -(numeroPuntiX -1) * spaziatura /2


    const numeroPuntiY = piastrella.height
    const margineY = -(numeroPuntiY -1) * spaziatura /2

    noFill() 
    beginShape(POINTS)
for (let j = 0; j < numeroPuntiY; j++)
        for(let i=0; i<numeroPuntiX; i++){
    const px = i * spaziatura + margineX
    const py = j * spaziatura + margineY
    //const colore = piastrella.get(i, j)
   // const grigio = brightness(colore)
    const rosso = piastrella.pixels[(j * piastrella.width + i) * 4]
    const pz = rosso * 0.3
            vertex(px, py, pz)
        }
        endShape()
}

    

