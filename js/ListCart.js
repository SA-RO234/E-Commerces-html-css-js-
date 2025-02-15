var viewcart = document.getElementById("AllList");
var cartQTY = document.getElementById("cart-QTY");
let productqty = 0;
UpdatecartView();
//  Update cart View
function UpdatecartView() {
  viewcart.innerHTML = ""; // clear current cart View
  //  Retrieve cart from localStorage
  var Allcart = JSON.parse(localStorage.getItem("MyAllcart")) || [];
  Allcart.forEach((item) => {
    viewcart.innerHTML += `
        <div class="itemList" id="${item.id}">
            <img src="${item.img}" alt="" />
            <div class="priceAll">
              <p class="price">Price : ${item.price}</p>
              <p class="discount">Discount : ${item.discount}</p>
            </div>
            <div class="qty">
              <button type="button"  onclick="IncrementQTY(${item.id})" class="increment">+</button>
              <span id="qty" class="qtyin">${item.qty}</span>
              <button type="button"  onclick="decrementQty(${item.id})" class="descrement">-</button>
            </div>
            <button dataidRemove="${item.id}"  type="button" class="close" id="close">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        `;
  });

  productqty = JSON.parse(localStorage.getItem("procutQTY"));
  cartQTY.innerText = productqty;
}

//  Close Product or cancel Product
// var buttonClose = document.querySelectorAll(".close");
// buttonClose.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const closeButton = event.target.closest(".close");
//     if (closeButton) {
//       var CancelID = closeButton.getAttribute("dataidRemove");
//       var productForRemove = JSON.parse(localStorage.getItem("MyAllcart"));
//       localStorage.removeItem(`buttonDisabled-${CancelID}`, "false");
//       var updateCart = productForRemove.filter((item) => item.id !== CancelID);
//       localStorage.setItem("MyAllcart", JSON.stringify(updateCart));
//     }
//   });
//   UpdatecartView();
// });

var dateBuy = document.getElementById("dateNow");

var day = new Date().getDay();
var month = new Date().getMonth();
var year = new Date().getFullYear();

dateBuy.textContent = `${day} / ${month} / ${year}`;

// UpdateQTy();
// function UpdateQTy() {
//   const products = document.querySelectorAll(".itemList");
//   products.forEach((product) => {
//     //  // Quetity button
//     var Qty = product.querySelector(".qtyin");
//     var buttonIncrement = product.querySelector(".increment");
//     var buttonDiscrement = product.querySelector(".descrement");
//     var qty = product.querySelector("#qty");
//     buttonIncrement.addEventListener("click", () => {
//       var myqty = parseInt(qty);
//     });

//     buttonDiscrement.addEventListener("click", () => {
//       let currentQTY = parseInt(Qty.textContent);
//       if (currentQTY > 1) {
//         Qty.textContent = currentQTY - 1;
//       }
//     });

//     //  Cancel Product
//     const buttonClose = product.querySelector(".close");
//     // buttonClose.addEventListener("click", () => {

//     // });
//   });
// }

//  Function handle increment and decrement of each product

function IncrementQTY(id) {
  let cart = JSON.parse(localStorage.getItem("MyAllcart")) || [];
  cart = cart.map((item) => {
    if (item.id === id || item.id === String(id)) {
      item.qty = parseInt(item.qty, 10) + 1;
    }
    return item;
  });
  localStorage.setItem("MyAllcart", JSON.stringify(cart));
  UpdatecartView(); // Refresh cart view
}

function decrementQty(id) {
  let cart = JSON.parse(localStorage.getItem("MyAllcart")) || [];
  cart = cart.map((item) => {
    if (item.id === id && parseInt(item.qty, 10) > 1) {
      item.qty = parseInt(item.qty, 10) - 1; // Decrement quantity, but not less than 1
    }
    return item;
  });
  localStorage.setItem("MyAllcart", JSON.stringify(cart));
  UpdatecartView(); // Refresh cart view
}
