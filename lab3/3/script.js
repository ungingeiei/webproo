function randomScore() {
  return Math.floor(Math.random() * (100 - 40 + 1)) + 40;
}
function submit(){
    //เพิ่มเลขเกรดลงใน HTML ผ่านการเรียนฟังชั่นคำนวนเกรดแล้วใส่เลขเกรดลงไป
    document.getElementById('grade2').innerHTML = gradeCal(num2)
    document.getElementById('grade3').innerHTML = gradeCal(num3)
    document.getElementById('grade4').innerHTML = gradeCal(num4)
    document.getElementById('grade5').innerHTML = gradeCal(num5)
    document.getElementById('grade6').innerHTML = gradeCal(num6)
    document.getElementById('grade7').innerHTML = gradeCal(num7)
    document.getElementById('grade8').innerHTML = gradeCal(num8)
    document.getElementById('grade9').innerHTML = gradeCal(num9)
    //ประกาศตัวแปรนอกฟังชั่นแบบนี้สามารถเรียกใช้ที่ไหนก็ได้ (num2,3,4,5,...)
}
function gradeCal(grade){
    if(100>=grade && grade >= 80){
        return 'A'
    }else if(79 >= grade && grade >=70){
        return 'B'
    }else if(69 >= grade && grade >=60){
        return 'C'
    }else if(59 >= grade && grade >=50){
        return 'D'
    }else{
        return 'B'
    }
}

//สุ่มเกรดกับเอาไปใส่ในช่องคะแนนเลขเกรดเก็บอยู่ในตัวแปร
    let num2 = document.getElementById("2").innerHTML = randomScore();
    let num3 = document.getElementById("3").innerHTML = randomScore();
    let num4 = document.getElementById("4").innerHTML = randomScore();
    let num5 = document.getElementById("5").innerHTML = randomScore();
    let num6 = document.getElementById("6").innerHTML = randomScore();
    let num7 = document.getElementById("7").innerHTML = randomScore();
    let num8 = document.getElementById("8").innerHTML = randomScore();
    let num9 = document.getElementById("9").innerHTML = randomScore();

