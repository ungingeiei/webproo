function randomScore() {
  return Math.floor(Math.random() * (100 - 40 + 1)) + 40;
}
let num1 = document.getElementById("1").innerHTML = randomScore()
let num2 = document.getElementById("2").innerHTML = randomScore()
let num3 = document.getElementById("3").innerHTML = randomScore()
let num4 = document.getElementById("4").innerHTML = randomScore()
let num5 = document.getElementById("5").innerHTML = randomScore()
let num6 = document.getElementById("6").innerHTML = randomScore()
let num7 = document.getElementById("7").innerHTML = randomScore()
let num8 = document.getElementById("8").innerHTML = randomScore()

function submit(){
    document.getElementById("1.1").innerHTML = cal(num1)
    document.getElementById("2.2").innerHTML = cal(num2)
    document.getElementById("3.3").innerHTML = cal(num3)
    document.getElementById("4.4").innerHTML = cal(num4)
    document.getElementById("5.5").innerHTML = cal(num5)
    document.getElementById("6.6").innerHTML = cal(num6)
    document.getElementById("7.7").innerHTML = cal(num7)
    document.getElementById("8.8").innerHTML = cal(num8)
}

function cal(score){
    if(100 >= score && score>=80){
        return "A"
    }else if(79>= score && score>=70){
        return "B"
    }else if(69>= score && score>=60){
        return "C"
    }else if(59>= score && score>=50){
        return "D"
    }else if(score<50){
        return "F"
    }

}
