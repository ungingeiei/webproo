function submit() {
    let num = document.getElementById("num").value;
    let tb = document.getElementById("tb");
    while (tb.firstChild) {
        tb.removeChild(tb.firstChild);
    }
    for (let i = 1; i <= 12; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = `${num} x ${i} =`;
        let td2 = document.createElement("td");
        td2.textContent = num * i;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tb.appendChild(tr);
    }
}
