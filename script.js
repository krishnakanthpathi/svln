const productsDiv = document.getElementById("productsDiv")
const url = "https://6321f07afd698dfa29032037.mockapi.io/test/all/svln"

loop = 0 ;
async function Getproducts(id) {
  const response = await fetch(`https://6321f07afd698dfa29032037.mockapi.io/test/all/svln/${id}`);
    const data = await response.json()
  
    return data
    
}

async function fetchProducts() {
  const response = await fetch(`https://6321f07afd698dfa29032037.mockapi.io/test/all/svln`);
    const data = await response.json()
    loop = data.length

    viewAllProducts()
    
}


async function addProducts(url = "",data = {}) {
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function CreateProductElement(imgUrl,productName,productRate,content) {
  const productU =  `<div class="col-sm-6 bg-white p-3 d-flex ">
  <div class="img-fluid">
    <img src="${imgUrl}" class="img-fluid img-responsive" width="436px" height="436px"  alt="${content}" srcset="">
  </div>
  <div class="content flex-grow-1 overflow-hidden p-3">
    <p class="h3">${productName}</p>
    <p class="rate text-muted">$${productRate}</p>
    <p class="border-warning border-1 "  style="resize:none ;" disabled> ${content}
    </p>
  </div>
</div>`
 return productU
}

async function viewAllProducts() {
  for (let i = 1; i < loop +1 ; i++) {
    const data =  await Getproducts(i)
    const ProductElement  = CreateProductElement(data.avatar,data.productname,data.cost,data.content)

    productsDiv.innerHTML += (ProductElement)
    console.log("Succefull");
    // reloadPage() 
  }
  

}

document.addEventListener('DOMContentLoaded',fetchProducts)



// {{{{{{{{{{{{{{{{{{{{{{{{  add Product  }}}}}}}}}}}}}}}}}}}}}}}}

async function postData(url , data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const upload_file   = document.getElementById("ProductImg")
var ProductImgUrl = ""
upload_file.addEventListener("change" , function() {
  const file = this.files[0]
        if (file) {
            const reader = new FileReader();
            reader.addEventListener('load' ,function(){

             ProductImgUrl = this.result
             console.log(this.result);

            });
        reader.readAsDataURL(file)
        }
      })   

const AddProduct  = document.querySelector(".addProduct");
const closeBtn = document.querySelector(".close_btn")

AddProduct.addEventListener("submit", function (e)  {

  e.preventDefault()
  const ProductName = document.getElementById("ProductName")
  const Cost = document.getElementById("cost")
  const ProductContent = document.getElementById("ProductContent")
   
  const Product_obj = {
    productname:ProductName.value   ,
    avatar: ProductImgUrl,
    author:"Murali krishna",
    content:ProductContent.value ,
    cost :Cost.value

  }


  postData(url , Product_obj);
  console.log(url,Product_obj);


  // console.log(url,Product_obj);

  closeBtn.click();

  window.location.reload();

  
})


// {{{{{{{{{{{{{{{{{{{{{{{{ preview img}}}}}}}}}}}}}}}}}}}}}}}}
const preview_img = document.querySelector(".preview_img");

    upload_file.addEventListener("change",function () {
        const file = this.files[0]
        if (file) {
            const reader = new FileReader();
            reader.addEventListener('load' ,function(){
            preview_img.setAttribute("src",this.result)
                
            });
            reader.readAsDataURL(file)
        }

 });


// {{{{{{{{{{{{{{{{{{{{{{{{{{{{ Authorizing... }}}}}}}}}}}}}}}}}}}}}}}}}}}}


const userName = document.getElementById("user")
const pass = document.getElementById("pass")
const form_log = document.getElementById("login_dash")
const Dash = document.getElementById("Dash")


form_log.addEventListener('click' , () => {
  
  if (userName.value == "krishna" && pass.value == "kk") {
      Dash.click()      
  }
  
})