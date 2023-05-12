// import { get } from "https://bukulapak.github.io/api/process.js"; 
// import { isiTabel } from "./temp/table.js";
// let urlAPI = "https://ws-dani.herokuapp.com/presensi";
// get(urlAPI,isiTablePresensi);
// function isiTablePresensi(results){
//     console.log(results);
//     results.forEach(isiRow);
// }
// // function isiRow(value){
// //     console.log(value)
// // }

// function isiRow(value) {
//     let content = 
//     isiTabel.replace("#NAMA#", value.biodata.nama)
//             .replace("#NOHP#", value.biodata.phone_number)
//             .replace("#JABATAN#", value.biodata.jabatan)
//             .replace("#LOKASI#", value.location)
//             .replace("#STATUS#", value.checkin)
//             .replace("#HARIKERJA#", value.biodata.hari_kerja)
//             .replace("#WARNA#", getRandomColor())
//             .replace(/#WARNALOGO#/g, getRandomColorName());
//         addInner("iniTabel", content);
// }

import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePresensi } from "./controller/getPresensi.js";
import { urlGetPresensi } from "./config/url.js";
get(urlGetPresensi, isiTablePresensi);
