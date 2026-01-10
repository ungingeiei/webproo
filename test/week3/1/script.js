
function submit(){
    let user = document.getElementById("user").value
    let email = document.getElementById("Email").value
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password").value
    let arr = [0,1,2,3,4,5,6,7,8,9]
    let confirm = document.getElementById("confirm").value

    if(user.length < 5 ){
        alert("ต่ำกว่า 5 จ้าาา")
        return
    }
    if(!((email.includes("@")) &&(email.includes(".com")))){
        alert("ผิดดด")
        return
    }
    if(!((arr.includes(phone[0]) && arr.includes(phone[1]) &&phone[3] == "-") && (phone[7] == "-") && (phone.length == 12))){
        alert("ผิดด")
        return
    }

   if(!( password.length >8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) &&/[!@#$%^&*()]/.test(password))){
        alert("ผิดด")
        return
   }
    if(!(confirm == password)){
        alert("ผิดด")
        return
    }

    console.log("Success")
}
