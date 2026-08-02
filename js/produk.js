let dataProduk = JSON.parse(localStorage.getItem("produk")) || [];

tampilProduk();

function simpanProduk(){

    let kode = document.getElementById("kodeProduk").value;
let nama = document.getElementById("namaProduk").value;
let harga = Number(document.getElementById("hargaProduk").value);
let status = document.getElementById("statusProduk").value;
    if(kode=="" || nama=="" || harga<=0){
        alert("Lengkapi data produk!");
        return;
    }

    dataProduk.push({
    kode:kode,
    nama:nama,
    harga:harga ,
    status:status
});

    localStorage.setItem("produk",JSON.stringify(dataProduk));

    document.getElementById("kodeProduk").value="";
document.getElementById("namaProduk").value="";
document.getElementById("hargaProduk").value="";
document.getElementById("statusProduk").selectedIndex=0;

    tampilProduk();

}

function tampilProduk(){

    let html="";

    dataProduk.forEach(function(item,index){

        html+=`
        <div style="border:1px solid #ccc;padding:10px;margin-top:10px;border-radius:8px">

        <b>${item.nama}</b><br>

        Harga :
        Rp ${item.harga.toLocaleString("id-ID")}

        <br><br>

        <button onclick="hapusProduk(${index})">

        Hapus

        </button>

        </div>
        `;

    });

    document.getElementById("listProduk").innerHTML=html;

}

function hapusProduk(index){

    if(confirm("Hapus produk?")){

        dataProduk.splice(index,1);

        localStorage.setItem("produk",JSON.stringify(dataProduk));

        tampilProduk();

    }

}
