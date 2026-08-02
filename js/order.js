alert("order.js berhasil dimuat");
alert(localStorage.getItem("outletTerakhir"));
let dataOrder = JSON.parse(localStorage.getItem("order")) || [];
let dataOutlet = JSON.parse(localStorage.getItem("outlet")) || [];

tampilOutlet();
tampilOrder();

function tampilOutlet() {

    let pilih = document.getElementById("outlet");

    pilih.innerHTML = "<option value=''>Pilih Outlet</option>";

    dataOutlet.forEach(function(item) {
        pilih.innerHTML += `
            <option value="${item.nama}">
                ${item.nama}
            </option>
        `;
    });
let outletTerakhir = localStorage.getItem("outletTerakhir");

if(outletTerakhir){

    pilih.value = outletTerakhir;

}
}

function hitungTotal() {

    let harga = parseInt(document.getElementById("produk").value) || 0;
    let qty = parseInt(document.getElementById("qty").value) || 0;

    let total = harga * qty;

    document.getElementById("total").innerHTML =
    "Rp " + total.toLocaleString("id-ID");

}

function simpanOrder() {
    let tanggal = document.getElementById("tanggal").value;
    let outlet = document.getElementById("outlet").value;
    let produk = document.getElementById("produk").options[
        document.getElementById("produk").selectedIndex
    ].text;

    let harga = Number(document.getElementById("produk").value);
    let qty = Number(document.getElementById("qty").value);
    let total = harga * qty;

    if (tanggal == "" || outlet == "" || harga == 0 || qty == 0) {
        alert("Lengkapi data order!");
        return;
    }

    dataOrder.push({
        tanggal: tanggal,
        outlet: outlet,
        produk: produk,
        qty: qty,
        total: total
    });

    localStorage.setItem("order", JSON.stringify(dataOrder));

    document.getElementById("produk").selectedIndex = 0;
    document.getElementById("qty").value = "";
    document.getElementById("total").innerHTML = "Rp0";

    tampilOrder();

    alert("Order berhasil disimpan!");

}

function tampilOrder() {

    let html = "";

    dataOrder.forEach(function(item, index) {

        html += `
<div style="border:1px solid #ccc;padding:10px;margin-top:10px;border-radius:8px">

Tanggal : ${item.tanggal}<br>

<b>${item.outlet}</b><br>

${item.produk}<br>

Qty : ${item.qty}<br>

Total : Rp ${item.total.toLocaleString("id-ID")}<br><br>

<button onclick="editOrder(${index})">✏️ Edit</button>

<button onclick="hapusOrder(${index})">🗑️ Hapus</button>

</div>
`;

    });

    document.getElementById("listOrder").innerHTML = html;

}
function hapusOrder(index){

    if(confirm("Hapus order ini?")){

        dataOrder.splice(index,1);

        localStorage.setItem("order",JSON.stringify(dataOrder));

        tampilOrder();

    }

}

function editOrder(index){

    alert("Fitur edit akan kita lengkapi pada langkah berikutnya.");

}    document.getElementById("listOrder").innerHTML = html;

}
function hapusOrder(index){

    if(confirm("Hapus order ini?")){

        dataOrder.splice(index,1);

        localStorage.setItem("order",JSON.stringify(dataOrder));

        tampilOrder();

    }

}

function editOrder(index){

    alert("Fitur edit akan kita lengkapi pada langkah berikutnya.");

}
}
function hapusOrder(index){

    if(confirm("Hapus order ini?")){

        dataOrder.splice(index,1);

        localStorage.setItem("order",JSON.stringify(dataOrder));

        tampilOrder();

    }

}

function editOrder(index){

    alert("Fitur edit akan kita lengkapi pada langkah berikutnya.");

}        dataOrder.splice(index,1);

        localStorage.setItem("order",JSON.stringify(dataOrder));

        tampilOrder();

    }

}

function editOrder(index){

    alert("Fitur edit akan kita lengkapi pada langkah berikutnya.");

}
