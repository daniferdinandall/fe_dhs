import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    // console.log(value.jam_kerja)
    let content =
        isiTabel.replace("#NAMA#", value.mahasiswa.nama)
            .replace("#NPM#", value.mahasiswa.npm)
            .replace("#PROGRAM STUDI#", value.program_studi.nama)
            .replace("#FAKULTAS#", value.fakultas.nama)
            .replace("#KODEMATKUL#", value.mata_kuliah[0].kode_matkul)
            .replace("#NAMAMATKUL#", value.mata_kuliah?value.mata_kuliah[0].nama:"HARIKERJA")
            .replace("#SKS#", value.mata_kuliah ? value.mata_kuliah[0].sks : "#JAMKERJA#")
            .replace("#NILAI#", value.mata_kuliah ? value.mata_kuliah[0].nilai : "#JAMMASUK#")
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}