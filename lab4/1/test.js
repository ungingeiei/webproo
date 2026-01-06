function submit(){
    let num = document.getElementById("num").value
    let tb= document.getElementById("tb")
    while (tb.rows.length > 0) {
        tb.deleteRow(0);
    }

    for(let i=1;i<= 12;i++){
        let row = tb.insertRow()
        let cell0 = row.insertCell(0)
        let cell1 = row.insertCell(1)
        let number = `${num} x ${i} =`
        cell0.textContent = number;
        cell1.textContent = i*num;
    
    }
}