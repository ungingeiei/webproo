function submit(){
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password").value
    let confirm = document.getElementById("confirm").value

    // if((username.length < 5)){
    //     alert("ผิดจ้า")
    // }
    // if(!(email.includes("@") & email.includes(".com"))){
    //     alert("ผิดจ้า")
    // }
    // if(!(phone[3]=="-" && phone[7]=="-" && phone.length == 12)){
    //     alert("ผิดจ้าา")
    // }
    if(!(password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) &&/[!@#$%^&*()]/.test(password))){
        alert("ผิดจ้า")
    }
    if(!(confirm == password))
        alert ("ผืดจ้าา")
}