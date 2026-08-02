let dataOutlet =
JSON.parse(localStorage.getItem("outlet")) || [];

tampilOutlet();
function ambilLokasi(){

    if(!navigator.geolocation){
        alert("Browser tidak mendukung GPS");
        return;
    }

    document.getElementById("status").innerHTML="Mengambil lokasi...";

    navigator.geolocation.getCurrentPosition(

        function(pos){

            document.getElementById("lat").innerHTML =
            pos.coords.latitude;

            document.getElementById("lng").innerHTML =
            pos.coords.longitude;
let index = document.getElementById("pilihOutlet").value;
alert("Index outlet = " + index);
if(index==""){
    alert("Pilih outlet terlebih dahulu!");
    return;
}
            document.getElementById("status").innerHTML =
            "Check In Berhasil";

        },

        function(error){

    alert(
        "Kode Error: " + error.code +
        "\nPesan: " + error.message
    );

}

    );

}
function tampilOutlet(){

    let html = '<option value="">-- Pilih Outlet --</option>';

    dataOutlet.forEach(function(item,index){

        html += `<option value="${index}">
        ${item.nama}
        </option>`;

    });

    document.getElementById("pilihOutlet").innerHTML = html;

}
