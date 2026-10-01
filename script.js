// Cart Counter
let cart = 0;

function addCart() {
    cart++;
    document.getElementById("cart-count").textContent = cart;
    alert("Product added to cart!");
}

// Product Filter
function filterProducts(category) {

    const products = document.querySelectorAll(".card");

    products.forEach(product => {

        if (category === "all") {
            product.style.display = "block";
        }
        else if (product.classList.contains(category)) {
            product.style.display = "block";
        }
        else {
            product.style.display = "none";
        }

    });

}

// Search Function
const searchBox = document.getElementById("search");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let products = document.querySelectorAll(".card");

        products.forEach(function(product){

            let name = product.querySelector("h3").textContent.toLowerCase();

            if(name.includes(value)){
                product.style.display="block";
            }
            else{
                product.style.display="none";
            }

        });

    });

}


const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let message=document.getElementById("message").value.trim();

if(name==="" || email==="" || message===""){
alert("Please fill all the fields.");
return;
}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
alert("Please enter a valid email address.");
return;
}

alert("Message sent successfully!");

form.reset();

});

}