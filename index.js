// //pencarian kamar hotel menggunakan if else
// let kamar = prompt('')
// if(kamar==='A01'){
//     alert('kamar A01 berada di lantai 2')
// }else if (kamar==='A02'){
//     console.log(`kamar A02 berada di lantai 3`)
// }else{
//     alert ('Mohon maaf kode kamar yang anda masukan salah')
// }

//pencarian gaji karyawan menggunakan function
// function gajiKaryawan(masaKerjaPerBulan,masaKerjaPerTahun,perProyek){
//     var bonus
//     var gajiPokok
//     var tunjangan
//     var gajiBersih
//     gajiPokok=masaKerjaPerBulan*2500000
//     tunjangan=masaKerjaPerTahun*600000
//     bonus=perProyek*400000
//     gajiBersih=gajiPokok+tunjangan+bonus
//     return gajiBersih
//     }
//     console.log('Gaji bersih anda selama 3 tahun adalah Rp. '+gajiKaryawan(6,6,7))

//popup kalkulator menggunakan while dan if else
// var ulang = true 

// while ( ulang == true ){

// var nilai1=prompt("Masukkan angka yang akan dikali,dibagi,ditambah,atau dikurang :");
// var jadi =  prompt('mau dikali,dibagi,ditambah,atau dikurang')
// var nilai2=prompt("angka "+nilai1+ " mau dikali,dibagi,ditambah,atau dikurang?");

// var kali = nilai1*nilai2
// //var input = 'bagi'
// var bagi = nilai1/nilai2
// var tambah = nilai1 + nilai2;
// var kurang = nilai1-nilai2
// //if(jadi == input){
// //    alert("Hasil dari "+nilai1+"*"+nilai2+"="+kali);
// //}

// if(jadi == '*'){
//     var result = kali
// }else if(jadi == '/'){
//     var result = bagi
// }else if(jadi == '+'){
//     var result = tambah
// }else if(jadi == '-'){
//     var result = kurang
// }else {
//     alert('mohon maaf sombol yang anda masukan salah')
// }


// alert("Hasil dari "+nilai1+jadi+nilai2+"="+result);
// ulang = confirm('apakah anda mau menglang data nya')
// }

// alert ( 'terimakasih')

// Input nomor kamar yang akan dicari
// var nomorKamar = prompt('silahkan masukan kode kamar yang ingin anda cari');

// // Melakukan pencarian kamar dengan switch case
// switch (nomorKamar) {
//   case 101:
//     alert("Kamar 101 telah ditemukan.");
//     break;
//   case 205:
//     alert("Kamar 205 telah ditemukan.");
//     break;
//   case 306:
//     alert("Kamar 306 telah ditemukan.");
//     break;
//   case 407:
//     alert("Kamar 407 telah ditemukan.");
//     break;
//   default:
//     alert("Kamar tidak ditemukan.");
// }

//melooping sebuah kamar hotel bisa menggunakan alert dan prom atau menggunakan console.log
// Jumlah kamar hotel
// var jumlahKamar = prompt('masukan jumlah kamar hotel');
// var jumlahKamar = 10

// // Melakukan perulangan untuk mencetak nomor kamar
// for (var nomorKamar = 1; nomorKamar <= jumlahKamar; nomorKamar++) {
// //   alert("Kamar " + nomorKamar)
//   console.log("Kamar " + nomorKamar)
// }