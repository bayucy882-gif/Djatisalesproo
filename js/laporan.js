let dataOrder =
JSON.parse(localStorage.getItem("order")) || [];

tampilLaporan();

function tampilLaporan(){

let html = "";

let totalQty = 0;
let totalOmzet = 0;

dataOrder.forEach(function(item){

totalQty += Number(item.qty);
totalOmzet += Number(item.total);

html += `
<div style="
border:1px solid #ccc;
padding:10px;
margin-bottom:10px;
border-radius:8px">

<b>${item.outlet}</b><br>

${item.tanggal}<br>

${item.produk}<br>

Qty : ${item.qty}<br>

<b>Rp ${item.total.toLocaleString("id-ID")}</b>

</div>
`;

});

document.getElementById("listLaporan").innerHTML = html;

document.getElementById("totalOrder").innerHTML =
"Total Order : " + dataOrder.length;

document.getElementById("totalQty").innerHTML =
"Total Qty : " + totalQty;

document.getElementById("totalOmzet").innerHTML =
"Total Omzet : Rp " +
totalOmzet.toLocaleString("id-ID");

}
