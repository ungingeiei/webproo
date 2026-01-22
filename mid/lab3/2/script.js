function submit(){
    document.getElementById("i0").src = `${random()}.png`
    document.getElementById("i1").src = `${random()}.png`
    document.getElementById("i2").src = `${random()}.png`
    document.getElementById("i3").src = `${random()}.png`
    document.getElementById("i4").src = `${random()}.png`
    document.getElementById("i5").src = `${random()}.png`
}
function random(){
    let randomindex = Math.floor(Math.random()*10)
    return randomindex;
}