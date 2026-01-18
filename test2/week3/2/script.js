function random(){
    let randomindex = Math.floor(Math.random() * 10);
    return randomindex
}
function submit(){
    document.getElementById("img1").src = `${random()}.png`
    document.getElementById("img2").src = `${random()}.png`
    document.getElementById("img3").src = `${random()}.png`
    document.getElementById("img4").src = `${random()}.png`
    document.getElementById("img5").src = `${random()}.png`
    document.getElementById("img6").src = `${random()}.png`

    
}

