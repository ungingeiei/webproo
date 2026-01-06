let imgs = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","0.png"];
function changeTheImage(){
    for(let i=1 ; i<= 6 ; i++){
        let randomindex = Math.floor(Math.random() * imgs.length);
        let img_new = document.getElementById(i.toString());//toString() แปลงเป็นตัวอักษร ให้ตรงกับ id
        img_new.src = imgs[randomindex];
    }   
}