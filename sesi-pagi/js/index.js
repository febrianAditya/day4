// alert("aku terpanggil")

let inputPasswordUser = prompt("Please input your passwprd")
let passwordDataBase = "admin123"
// console.log(inputPasswordUser);

if (inputPasswordUser === passwordDataBase) {
    console.log("berhasil login");
    document.getElementById("center-content").style.display = "block"
}else {
    // console.log("gagal login");
    alert("Gagal Login")
    
}
