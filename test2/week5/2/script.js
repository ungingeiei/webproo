let count = 0
function submit(){
    count += 1
    if(count%2 == 0){
        document.getElementById("name").textContent = "First Name:"
        document.getElementById("surname").textContent = "Last Name"


    }

}