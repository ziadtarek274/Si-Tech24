const products = document.querySelector(".products");

const productNames = [
  "POS System", "Barcode Scanner", "Thermal Printer",
  "Cash Drawer", "Receipt Printer", "Label Printer",
  "Barcode Printer", "Touch POS Screen", "POS Keyboard",
  "Thermal Paper Roll"
];

// for (let i = 1; i < 1; i++) {
//   const card = document.createElement("div");
//   card.className = "product-card";

//   card.innerHTML = `
//     <img src="https://via.placeholder.com/300x200">
//     <h3>${productNames[i % productNames.length]}</h3>
//     <p class="price">${i * 300} EGP</p>
//     <button class="buy">Buy</button>
//     <button class="details">Details</button>
//   `;

//   products.appendChild(card);
// }

document.addEventListener("click", e => {
  if (e.target.classList.contains("buy")) {
    const phone = "201127203547";
    const message = "السلام عليكم، أريد شراء هذا المنتج.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
});
document.addEventListener("click", e => {
  if (e.target.classList.contains("details")) {
    const phone = "201127203547";
    const message = "اسلام عليكم : كنت محتاج تفاصيل اكتر عن المنتج";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
});