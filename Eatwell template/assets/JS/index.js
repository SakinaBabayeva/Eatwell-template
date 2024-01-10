const products=document.getElementById('products');
const pages=document.getElementById('page');

let page=1;
let limit=3;
let db;






async function getProducts(){

const response= await axios.get (`https://65680f8f9927836bd97407de.mockapi.io/products?page=${page}&limit=${limit}`);
const data=response.data;
db=data;
db.map(item=>{
 const box=document.createElement ('div');
box.className='boxDiv col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 ';
box.innerHTML=`
<p>${item.title}</p>
<img src='${item.image}'  alt=''>
<button onclick ='addToBasket(${item.id})'>Add to basket</button>


`;

 products.appendChild(box);
 
});
page++;
}

pages.addEventListener('click',getProducts)
function addToBasket(id){
let cart=JSON.parse (localStorage.getItem('cart')) || []
cart.push (db.find(item => item.id==id))
localStorage.setItem('cart',JSON.stringify(cart))
}

const inp=document.getElementById("inp");
const search=document.getElementById("search");
const searchDiv=document.getElementById("searchDiv");
function getSearch() {
    products.style.display="none"
    pages.style.display="none"
    searchDiv.style.display="block"
    axios.get('https://65680f8f9927836bd97407de.mockapi.io/products')
    .then(res=>{
        db=res.data
       
        let filteredData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
        console.log(filteredData);
        filteredData.map(item => {
                const box = document.createElement('div')
                box.className = 'myBox col-xl-12 col-lg-12 col-md- 12 col-sm-12 col-12'
                box.innerHTML = `
           <div class="myBoxdiv">
           <img src="${item.image}" alt="">
          
           <p>${item.title}</p>
           </div>

            `;
                searchDiv.appendChild(box);
            });
        });
};
 search.addEventListener('click', getSearch)

   






formreg.addEventListener('submit', axiosPost);

const sortButton = document.getElementById('sortButton')

function getSort() {
    products.innerHTML = ''
    axios.get('https://65680f8f9927836bd97407de.mockapi.io/products')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => a.price - b.price)
        sortData.map(item =>{
            const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
           <div class="classBox">
           <img src="${item.image}" alt="">
           <h5>${item.title}</h5>
           <p>${item.description}</p>
           <p>$${item.price}</p>
           <button onclick="adToBasket(${item.id})">Add To Cart</button>
           </div>
            `;
            products.appendChild(box)

        });
    });
};
sortButton.addEventListener('click',getSort)

const myForm = document.getElementById("myForm");
const nameInp = document.getElementById("nameInp")
const emialInp = document.getElementById("emialInp")
const sendMessage = document.getElementById("sendMessage")


myForm.addEventListener("submit",function(event){
    event.preventDefault()
    axios.post("https://65680f8f9927836bd97407de.mockapi.io/products",{
        name: nameInp.value,
        email: emialInp.value,

    })
    .then((res)=>{
        console.log(res.data);
        myForm.reset();
    })
})