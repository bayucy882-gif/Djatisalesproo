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

            document.getElementById("status").innerHTML =
            "Check In Berhasil";

        },

        function(error){

            alert("GPS gagal diakses.");

        }

    );

}
