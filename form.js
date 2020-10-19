//const supaya tidak bisa diubah ubah
//var sama dengan let 
const lbnama = document.getElementById("nama");
const lbemail = document.getElementById("email");
const txalamat = document.getElementById("alamat");
const btnsubmit = document.getElementById('submit');
const table = document.getElementById('tb');
let nomor = 1 ;

function Registrasi(e){
    //biar tidak refres saat di submit
    e.preventDefault(); 

    //mengambil input dari event
    let nama = e.target[0];
    let email = e.target[1];
    let alamat = e.target[2];

    console.log(alamat.value); 

    //cek apakah input kosong, jika kosong maka "false"
    let validasi = {
        'nama':nama.value != '' ? true : false,
        'email':email.value != '' ? true : false,
        'alamat':alamat.value != '' ? true : false
    }
    if (!validasi.nama || !validasi.email || !validasi.alamat) {
        confirm('Data tidak boleh kosong !');
        return 
    }

    let konfirmasi = confirm('Registrasi berhasil ditambahkan !');
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    
    cell1.textContent = nomor;
    cell2.textContent = nama.value;
    cell3.textContent = email.value;
    cell4.textContent = alamat.value;
    nomor++
    
}