//สุ่มเลข
let num1 =   Math.floor(Math.random() * (100 - 40 + 1)) + 40;
let num2 =   Math.floor(Math.random() * (100 - 40 + 1)) + 40;
let num3 =   Math.floor(Math.random() * (100 - 40 + 1)) + 40;
let num4 =   Math.floor(Math.random() * (100 - 40 + 1)) + 40;
let num5 =   Math.floor(Math.random() * (100 - 40 + 1)) + 40;
let num6 =   Math.floor(Math.random() * (100 - 40 + 1)) + 40;
let num7 =   Math.floor(Math.random() * (100 - 40 + 1)) + 40;
let num8 =   Math.floor(Math.random() * (100 - 40 + 1)) + 40;
//เอาเลขไปใส่
document.getElementById("score1").textContent = num1
document.getElementById("score2").textContent = num2
document.getElementById("score3").textContent = num3
document.getElementById("score4").textContent = num4
document.getElementById("score5").textContent = num5
document.getElementById("score6").textContent = num6
document.getElementById("score7").textContent = num7
document.getElementById("score8").textContent = num8

function submit(){
    document.getElementById("grade1").textContent = cal(num1)
    document.getElementById("grade2").textContent = cal(num2)
    document.getElementById("grade3").textContent = cal(num3)
    document.getElementById("grade4").textContent = cal(num4)
    document.getElementById("grade5").textContent = cal(num5)
    document.getElementById("grade6").textContent = cal(num6)
    document.getElementById("grade7").textContent = cal(num7)
    document.getElementById("grade8").textContent = cal(num8)
}

function cal(eiei){
    if(eiei <= 100 && eiei >=80){
        return "A";
    }else if(eiei <= 79 && eiei >= 70){
        return "B";
    }else if(eiei <= 69 && eiei >= 60){
        return "C";
    }else if(eiei <= 59 && eiei >= 50 ){
        return "D"
    }else if(eiei < 50){
        return "F"
    }
}

