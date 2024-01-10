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