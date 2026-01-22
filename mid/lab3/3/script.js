let random1 = document.getElementById("random1").textContent = random()
let random2 = document.getElementById("random2").textContent = random()

function random(){
    return Math.floor(Math.random()*(100-40+1))+40;
}
function submit(){
    document.getElementById("cal1").textContent = cal(random1)
    document.getElementById("cal2").textContent = cal(random2)

}
function cal(score){
    if(score<= 100 && score >=80){
        return "A";
    }else if(score <= 79 && score >= 70){
        return "B"
    }else if(score <=69 && score >= 60){
        return "C"
    }else if(score <= 59 && score >= 50){
        return "D"
    }else{
        return "F"
    }

}