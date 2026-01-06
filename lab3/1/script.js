function submit() {
  let username = document.getElementById("Username").value;
  let email = document.getElementById("Email").value;
  let phone = document.getElementById("Phone").value;
  let password = document.getElementById("Password").value;
  let confrim = document.getElementById("Confrim").value;
  let checkEmail = ["@", ".com"];
  if(username.length<5){
      alert("ต้องไม่ต่ำกว่า 5 ตัวอักษร");
      return false;
  }
  if(!(email.includes('@') && email.includes(".com"))){
      alert("Email ต้องมี @ หรือ .com");
      return;
  }
  if(!(phone.length == 12 && phone[3] == "-" && phone[7] == "-")){
      alert("หมายเลขโทรไม่ถูกต้อง");
      return;
  }
  if (!(password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) &&/[!@#$%^&*()]/.test(password))) {
    alert("password ไม่ถูกต้อง");
        return;
  }
    if(!(confrim == password)){
        alert("รหัสไม่ตรงตามที่ตั้ง")
        return;
    }
}
