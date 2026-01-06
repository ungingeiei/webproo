let count = 0
function submit(){
    count += 1
    if( count % 2){
        let firstname = document.getElementById("firstname").textContent="First Name:"
        let lastname = document.getElementById("lastname").textContent="Last Name"
        let country = document.getElementById("country").textContent="Country"
        let select = document.getElementById("select").textContent="Select a Country"
        let Thailand = document.getElementById("Thailand").textContent="Thailand"
        let Vietnam = document.getElementById("Vietnam").textContent="Vietnam"
        let Laos = document.getElementById("Laos").textContent="Laos"
        let Malaysia = document.getElementById("Malaysia").textContent="Malaysia"
        let Singapore = document.getElementById("Singapore").textContent="Singapore"
        let Philippines = document.getElementById("Philippines").textContent="Philippines"
        let Myanmar = document.getElementById("Myanmar").textContent="Myanmar"
        let Cambodia = document.getElementById("Cambodia").textContent="Cambodia"
        let Brunei = document.getElementById("Brunei").textContent="Brunei"
        let bt = document.getElementById("bt").textContent="Chang to Thai"
    }
    else {
        let firstname = document.getElementById("firstname").textContent="ชื่อ:"
        let lastname = document.getElementById("lastname").textContent="นามสกุล:"
        let country = document.getElementById("country").textContent="ประเทศ:"
        let select = document.getElementById("select").textContent="เลือกประเทศ"
        let Thailand = document.getElementById("Thailand").textContent="ไทย"
        let Vietnam = document.getElementById("Vietnam").textContent="เวียดนาม"
        let Laos = document.getElementById("Laos").textContent="ลาว"
        let Malaysia = document.getElementById("Malaysia").textContent="มาเลย์เซีย"
        let Philippines = document.getElementById("Philippines").textContent="ฟิลิปปินส์"
        let Myanmar = document.getElementById("Myanmar").textContent="เมียนมาร์"
        let Cambodia = document.getElementById("Cambodia").textContent="กัมพูชา"
        let Brunei = document.getElementById("Brunei").textContent="บรูไน"
        let bt = document.getElementById("bt").textContent="เปลี่ยนเป็นภาษาอังกฤษ"

    }
    


}