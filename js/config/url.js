export let urlAPI = "https://ws-dani.herokuapp.com/dhs-all";
export let urlGetPresensi = "https://ws-dani.herokuapp.com/dhs-all";
export let urlPOST = "https://ws-dani.herokuapp.com/ins"

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.reload(); //reload halaman setelah klik ok pada alert
}