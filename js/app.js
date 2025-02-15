let Menu = document.querySelector("#Menu");
let Navlist = document.querySelector("#navList");
var WinterButton = document.getElementById("fetch-Winter");
var TrousersButton = document.getElementById("Trousers-jeans");
var ShoesButton = document.getElementById("Shoes-sandle");
var HatsButton = document.getElementById("Hats-caps");
var BagsButton = document.getElementById("Bags-purses");
var LadiesButton = document.getElementById("Ladies-Whatches");

Menu.addEventListener("click", () => {
  Navlist.classList.toggle("openNavList");
});

let qtyProduct = 0;
var AllcardList = document.getElementById("AllListcard");
//  Addtocart and Show at View cart
AllcardList.addEventListener("click", function (event) {
  if (event.target && event.target.id === "addtocart") {
    var productid = event.target.getAttribute("data-id");
    var productimg = event.target.getAttribute("data-img");
    var productqty = event.target.getAttribute("data-qty");
    var productprice = event.target.getAttribute("data-price");
    var productdiscount = event.target.getAttribute("data-discout");

    event.target.setAttribute("disabled", "true");
    event.target.style.opacity = "0.5";
    localStorage.setItem(`buttonDisabled-${productid}`, "true");
    const item = {
      id: productid,
      img: productimg,
      qty: productqty,
      price: productprice,
      discount: productdiscount,
    };
    // Call function for add new item to cart
    Addtocart(item);
  }
});

//  Fetch other product by click button
BagsButton.addEventListener("click", () => FetchDataandDisplay("Bag"));
ShoesButton.addEventListener("click", () => FetchDataandDisplay("Shoes"));
HatsButton.addEventListener("click", () => FetchDataandDisplay("Hats"));
WinterButton.addEventListener("click", () => FetchDataandDisplay("Winter"));
TrousersButton.addEventListener("click", () => FetchDataandDisplay("Trousers"));
LadiesButton.addEventListener("click", () => FetchDataandDisplay("Whatches"));

FetchDataandDisplay("Bag"); // default product in content

function Addtocart(newProduct) {
  //  get current data from localStorage
  let cart = JSON.parse(localStorage.getItem("MyAllcart")) || [];
  cart.push(newProduct);
  localStorage.setItem("MyAllcart", JSON.stringify(cart)) || [];
}

function FetchDataandDisplay(arrayName) {
  fetch("Product.json")
    .then((response) => {
      if (response.ok) {
        console.log("Network response is Ok (202)  " + response.statusText);
      } else {
        console.log("Network response was not ok ! " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      if (data[arrayName]) {
        DisplayEachProduct(data[arrayName]);
      } else {
        throw new Error(`Array ${arrayName} not found in JSON file.`);
      }
    })
    .catch((error) => {
      console.error("Error Fetching or Processing data ! ", error);
    });
}

function DisplayEachProduct(items) {
  let allList = document.querySelector("#AllListcard");
  allList.innerHTML = "";
  items.forEach((item) => {
    allList.innerHTML += `
    <div class="card-container">
            <img src="${item.img}" alt="" />
            <div class="card-bottom">
              <div class="price">
                <p class="oldPrice">${item.price}</p>
                <p class="newPrice" >${item.discount}</p>
              </div>
              <div class="line"></div>
              <div class="right">
                <p>${item.discription}</p>
              </div>
            </div>
            <button type="button"  data-id="${item.id}" data-qty="${item.qty}" data-img="${item.img}" data-price="${item.price}" data-discout="${item.discount}" 
             class="addtocart" id="addtocart">Add To Card</button>
          </div>
    `;
  });

  // Reapply disabled state to dynamically generated buttons
  const buttons = document.querySelectorAll("#AllListcard button");
  buttons.forEach((button) => {
    const productID = button.getAttribute("data-id");
    if (localStorage.getItem(`buttonDisabled-${productID}`) === "true") {
      button.setAttribute("disabled", "true");
      button.style.opacity = "0.5";
    }
  });

  //  getcurrent QTY
  getCurrentQuetity();
}

document.addEventListener("DOMContentLoaded",()=>{
  getCurrentQuetity();
})

//  function get currrent or update quetity
function getCurrentQuetity() {
  const qtyText1 = document.querySelector("#cartindex-QTY");
  const qtyText2 = document.querySelector("#cartList-QTY");
  let myqty;
  let Productqutity = JSON.parse(localStorage.getItem("MyAllcart"));
  myqty = Productqutity.reduce((sum, item) => sum + parseInt(item.qty), 0);
  // Check if elements exist before updating
  if (qtyText1) qtyText1.textContent = myqty;
  if (qtyText2) qtyText2.textContent = myqty;
}


