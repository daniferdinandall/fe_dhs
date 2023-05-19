import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabelPresensi } from "../temp/table.js";

var Myvar = {}
export function isiTablePresensi(results) {
    // results.reverse().forEach(isiRow);
    // let value2 = value.sort((a, b) => (new Date(b.datetime)).getTime() - (new Date(a.datetime)).getTime());
    Myvar.length = results.length;
    results.sort((a, b) => new Date(b.datetime) - new Date(a.datetime)); //mengurutkan berdasasrkan datetime in descending order
    results.forEach(isiRow);
  
}
function isiRow(value) {
    // (new Date("2009-05-12T08:25:08.551Z")).getTime()
    // console.log(value)
    document.getElementById("jml").innerHTML = "" + Myvar.length + " Data";
    let content =
        isiTabelPresensi.replace("#NAMA#", value.biodata.nama?value.biodata.nama:"#NAMA#")
            .replace("#NOHP#", value.biodata.phone_number ? value.biodata.phone_number : (value.phone_number ? value.phone_number : '#NOHP#'))
            .replace("#JABATAN#", value.biodata.jabatan)
            .replace("#LOKASI#", value.location)
            .replace("#STATUS#", value.checkin)
            .replace("#HARIKERJA#", value.biodata.hari_kerja ? value.biodata.hari_kerja : "HARIKERJA")
            .replace("#JAMKERJA#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].durasi : "#JAMKERJA#")
            .replace("#JAMMASUK#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].jam_masuk : "#JAMMASUK#")
            .replace("#JAMKELUAR#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].jam_keluar : "#JAMKELUAR#")
            .replace('#IDEDIT#', value._id)
            .replace('#IDHAPUS#', value._id)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabelPresensi", content);
}