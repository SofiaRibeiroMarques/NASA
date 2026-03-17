//let rx1 = 200
//let ry1 = 200

//let rx2 = 200
//let ry2 = 200

const numero = 100

let rx = []
let ry = []

function setup(){
    createCanvas(500, 500)
        background(200)

rx[0] = 200
ry[0] = 200

rx[1] = 200
ry[1] = 200

console.log(rx.length)


}

function draw(){

    fill(0)
    noStroke()

    rect(rx[0], ry[0], 4, 4)

    fill(255)
    rect(rx[1], ry[1], 4, 4)

 rx[0] += random(-4, 4)
 ry[0] += random(-4, 4)
rx[1] += random(-4, 4)
ry[1] += random(-4, 4)

}

