let s1 = document.getElementById("s1").textContent = random()
let s2 = document.getElementById("s2").textContent = random()
let s3 = document.getElementById("s3").textContent = random()
let s4 = document.getElementById("s4").textContent = random()
let s5 = document.getElementById("s5").textContent = random()
let s6 = document.getElementById("s6").textContent = random()
let s7 = document.getElementById("s7").textContent = random()
let s8 = document.getElementById("s8").textContent = random()




function submit(){
    document.getElementById("g1").textContent = cal(s1)
    document.getElementById("g2").textContent = cal(s2)
    document.getElementById("g3").textContent = cal(s3)
    document.getElementById("g4").textContent = cal(s4)
    document.getElementById("g5").textContent = cal(s5)
    document.getElementById("g6").textContent = cal(s6)
    document.getElementById("g7").textContent = cal(s7)
    document.getElementById("g8").textContent = cal(s8)
}
function random(){
    return Math.floor(Math.random() * (100 - 40 + 1)) + 40;
}
function cal(score){
    if(score <= 100 && score >= 80){
        return "A"
    }else if(score <= 79 && score >= 70){
        return "B"
    }else if(score <= 69 && score >= 60){
        return "C"
    }else if(score <= 59 && score >= 50){
        return "D"
    }else{
        return "F"
    }
}