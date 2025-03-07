
export function Navbar(){
  return `
      <div class="navbar-left">
        <button type="button" id="Menu">
          <img src="/assets/menu.png" alt="" />
        </button>
        <div class="line"></div>
        <-a href="/ListCart.html">
          <img src="/assets/Buy.png" alt="" />
        </-a>
        <span id="cart-QTY">0</span>
      </div>
      <div class="navList" id="navList">
        <div class="item" id="fetch-Winter">
          <img src="/assets/menuIcon/menu1.png" alt="" />
          <h1>Winter clothing</h1>
        </div>
        <div class="item" id="Trousers-jeans">
          <img src="/assets/menuIcon/menu2.png" alt="" />
          <h1>Trousers & jeans</h1>
        </div>
        <div class="item" id="Shoes-sandle">
          <img src="/assets/menuIcon/menu3.png" alt="" />
          <h1>Shoes & sandle</h1>
        </div>
        <div class="item" id="Hats-caps">
          <img src="/assets/menuIcon/menu4.png" alt="" />
          <h1>Hats & caps</h1>
        </div>
        <div class="item" id="Bags-purses">
          <img src="/assets/menuIcon/menu5.png" alt="" />
          <h1>Bags & purses</h1>
        </div>
        <div class="item" id="Ladies-Whatches">
          <img src="/assets/menuIcon/menu6.png" alt="" />
          <h1>Ladies Whatches</h1>
        </div>
      </div>
      <div class="nabar-right">
        <button type="button">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button type="button">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    `
  
}

export default Navbar;
