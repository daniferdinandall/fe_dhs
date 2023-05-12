import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabelPresensi } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    // (new Date("2009-05-12T08:25:08.551Z")).getTime()
    let value2 = value.sort((a, b) => (new Date(b.datetime)).getTime() - (new Date(a.datetime)).getTime());
    console.log(value2)
    let content =
        isiTabelPresensi.replace("#NAMA#", value2.biodata.nama?value2.biodata.nama:"#NAMA#")
            .replace("#NOHP#", value2.biodata.phone_number ? value2.biodata.phone_number : (value2.phone_number ? value2.phone_number : '#NOHP#'))
            .replace("#JABATAN#", value2.biodata.jabatan)
            .replace("#LOKASI#", value2.location)
            .replace("#STATUS#", value2.checkin)
            .replace("#HARIKERJA#", value2.biodata.hari_kerja ? value2.biodata.hari_kerja : "HARIKERJA")
            .replace("#JAMKERJA#", value2.biodata.jam_kerja ? value2.biodata.jam_kerja[0].durasi : "#JAMKERJA#")
            .replace("#JAMMASUK#", value2.biodata.jam_kerja ? value2.biodata.jam_kerja[0].jam_masuk : "#JAMMASUK#")
            .replace("#JAMKELUAR#", value2.biodata.jam_kerja ? value2.biodata.jam_kerja[0].jam_keluar : "#JAMKELUAR#")
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabelPresensi", content);
}