const production = document.getElementById("production");

function getCart () {
    production.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    cart.map((item, index) => {
        const card = document.createElement("div");
        card.className = "cardBox col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" ;
        card.innerHTML = `
                 
                  <div class="cardTextBox">
                  <p>${item.title}</p>
                  <img src='${item.image}' alt="">
                  <button onclick="removeItem(${index})">Delete</button>
                  </div>
              `;
        production.appendChild(card);
      });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
}

    getCart()

