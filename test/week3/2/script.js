function submit(){
    const images =[
        '0.png',
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png',
    ]
    //ทำสุ่มทีล่ะตัว
    document.getElementById('random-image0').src = images[Math.floor(Math.random() * images.length)]
    document.getElementById('random-image1').src = images[Math.floor(Math.random() * images.length)]
    document.getElementById('random-image2').src = images[Math.floor(Math.random() * images.length)]
    document.getElementById('random-image3').src = images[Math.floor(Math.random() * images.length)]
    document.getElementById('random-image4').src = images[Math.floor(Math.random() * images.length)]
    document.getElementById('random-image5').src = images[Math.floor(Math.random() * images.length)]


}
submit();