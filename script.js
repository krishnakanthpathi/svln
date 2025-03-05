const productsDiv = document.getElementById("productsDiv");
const url = "https://6321f07afd698dfa29032037.mockapi.io/test/all/svln";

async function fetchProducts() {
    const response = await fetch(url);
    const data = await response.json();
    viewAllProducts(data);
}

function createProductElement(imgUrl, productName, productRate, content, cap) {
  return `
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div class="card h-100 shadow-sm">
          <img src="${imgUrl}" class="card-img-top img-fluid" alt="${content}">
          <div class="card-body d-flex flex-column">
              <h5 class="card-title text-uppercase text-warning fw-bold">${productName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">₹${productRate}</h6>
              <p class="card-text flex-grow-1">${content}</p>
              <p class="card-text fw-bold">Capacity: ${cap}</p>
          </div>
      </div>
  </div>`;
}

async function viewAllProducts(data) {
    data.forEach(product => {
        const productElement = createProductElement(product.avatar, product.productname, product.cost, product.content, product.cap);
        productsDiv.innerHTML += productElement;
    });
    document.querySelector('.spinner-border').classList.add("d-none");
}

document.addEventListener('DOMContentLoaded', fetchProducts);

// Add Product
async function postData(url, data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

const uploadFile = document.getElementById("ProductImg");
let productImgUrl = "";

uploadFile.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            productImgUrl = this.result;
        });
        reader.readAsDataURL(file);
    }
});

const addProductForm = document.querySelector(".addProduct");
const closeBtn = document.querySelector(".close_btn");

addProductForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const productName = document.getElementById("ProductName").value;
    const cost = document.getElementById("cost").value;
    const productContent = document.getElementById("ProductContent").value;
    const capacity = document.getElementById("Capacity").value;

    const productObj = {
        productname: productName,
        avatar: productImgUrl,
        author: "Murali Krishna",
        content: productContent,
        cost: cost,
        cap: capacity
    };

    postData(url, productObj).then(() => {
        alert("Product added successfully");
        closeBtn.click();
        window.location.reload();
    });
});

// Preview Image
const previewImg = document.querySelector(".preview_img");

uploadFile.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            previewImg.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);
    }
});

// Authorizing
const userName = document.getElementById("user");
const pass = document.getElementById("pass");
const formLog = document.getElementById("login_dash");
const dash = document.getElementById("Dash");

formLog.addEventListener('click', () => {
    if (userName.value === "krishna" && pass.value === "kk") {
        dash.click();
    }
});