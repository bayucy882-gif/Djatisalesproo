let dataOutlet = JSON.parse(localStorage.getItem("outlet")) || [];

tampilOutlet();

function simpanOutlet() {

    let nama = document.getElementById("namaOutlet").value;
    let pemilik = document.getElementById("pemilik").value;
    let alamat = document.getElementById("alamat").value;
    let nohp = document.getElementById("nohp").value;
    let rute = document.getElementById("rute").value;
    let latitude = document.getElementById("latitude").value;
    let longitude = document.getElementById("longitude").value;
    if (nama === "" || pemilik === "") {
        alert("Nama Outlet dan Pemilik wajib diisi!");
        return;
    }

    dataOutlet.push({
        nama: nama,
        pemilik: pemilik,
        alamat: alamat,
        nohp: nohp,
        rute: rute
    });

    localStorage.setItem("outlet", JSON.stringify(dataOutlet));

    document.getElementById("namaOutlet").value = "";
    document.getElementById("pemilik").value = "";
    document.getElementById("alamat").value = "";
    document.getElementById("nohp").value = "";

    tampilOutlet();

    alert("Outlet berhasil disimpan!");
}

function tampilOutlet() {

    let html = "";

    dataOutlet.forEach(function(outlet, index) {

        html += `
        <div style="border:1px solid #ccc;padding:10px;margin-top:10px;border-radius:8px;">
            <b>${outlet.nama}</b><br>
            Pemilik : ${outlet.pemilik}<br>
            Alamat : ${outlet.alamat}<br>
            No HP : ${outlet.nohp}<br><br>
            Rute : ${outlet.rute}<br>
            <button onclick="hapusOutlet(${index})">
                Hapus
            </button>
        </div>
        `;

    });

    document.getElementById("daftarOutlet").innerHTML = html;
}

function hapusOutlet(index) {

    if (confirm("Hapus outlet ini?")) {

        dataOutlet.splice(index, 1);

        localStorage.setItem("outlet", JSON.stringify(dataOutlet));

        tampilOutlet();

    }

}
function ambilLokasiOutlet(){

    if(!navigator.geolocation){
        alert("Browser tidak mendukung GPS");
        return;
    }

    navigator.geolocation.getCurrentPosition(

        function(pos){

            document.getElementById("latitude").value =
            pos.coords.latitude;

            document.getElementById("longitude").value =
            pos.coords.longitude;

            alert("Koordinat berhasil diambil.");

        },

        function(){

            alert("Gagal mengambil lokasi.");

        }

    );

}
