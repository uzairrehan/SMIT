const slideImages = [
    "https://burgerlab.com.pk/wp-content/uploads/2024/05/app-banner-2.jpg?c062ef&c062ef",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6q8_0SwnNkM0c0vOT_twL1yzrcvlGuToSw&s",
    "https://pixexid.com/api/download/image/a-burger-with-a-sense-of-wanderlust-backpacks-through-a-food-landscape-with-fry-9hbp0rfh.jpeg"
];

const products = [
    {
      image:
        "https://burgerlab.com.pk/wp-content/uploads/2022/01/doppler.png?c062ef&c062ef",
      productName: "THE DOPPLER",
      price: "$10.00",
    },
    {
      image:
        "https://burgerlab.com.pk/wp-content/uploads/2022/01/quadra.png?c062ef&c062ef",
      productName: "QUADRA RELOADED",
      price: "$20.00",
    },
    {
      image:
        "https://burgerlab.com.pk/wp-content/uploads/2022/01/all-american-4.png?c062ef&c062ef",
      productName: "ALL AMERICAN DOUBLE CHEESE",
      price: "$30.00",
    },
    {
      image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
      productName: "Big Bang",
      price: "$40.00",
    },
  ];


    
function addSlider() {
    for (let i = 0; i < slideImages.length; i++) {
        let image =  slideImages[i]
        let slides = document.querySelector(".slides")
        slides.innerHTML +=`
        <img src="${image}" >
        `
    }
}
addSlider()

function addProducts() {
    for (let i = 0; i < products.length; i++) {
        let productList = document.querySelector(".product-list")
        productList.innerHTML +=`
        <div class="product-item">
           <img src="${products[i].image}" alt="Product ${i+1}">
           <h3>${products[i].productName}</h3>
           <p>${products[i].price}</p>
           <button onclick="addToCart(products[${i}])">+</button>
        </div> `
    }
}
addProducts()
let cart = []

function addToCart(el){
    cart.push(el)
    el.qty = 1
    el.totalPrice = el.totalPrice * el.qty ;        
    console.log(el);
} 




