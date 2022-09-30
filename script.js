const productsDiv = document.getElementById("productsDiv")
const url = "https://6321f07afd698dfa29032037.mockapi.io/test/all/svln"


async function fetchProducts() {
  const response = await fetch(`https://6321f07afd698dfa29032037.mockapi.io/test/all/svln`);
    const data = await response.json()
    loop = data.length

    viewAllProducts(data)
    
}


function CreateProductElement(imgUrl,productName,productRate,content,cap) {
  const productU =  `
  <div class="col-sm-6 bg-white p-3 d-flex  align-items-center">
  <div class="row-content">
    <img src="${imgUrl}" class="img-fluid  img-thumbnail" height="180" width ="180"  alt="${content}" srcset="">
  </div>
  <div class="contentS  align-self-stretch  ps-2">
    <p class="h3 border border-warning fs-4 fw-bold text-uppercase p-2 border-2">${productName}</p>
    <p class="rate text-muted"><b>₹</b>${productRate}</p>
    <p class="border border-2 p-2  fw-bolder "  style="resize:none ;" disabled>
      
     ${content}
    </p>

    <p class="  fw-bolder "  style="resize:none ;" >Capactiy : ${cap}
    </p>
  </div>
</div>`
 return productU
}


async function viewAllProducts(data) {

  data.forEach(data => {
    
    const ProductElement  = CreateProductElement(data.avatar,data.productname,data.cost,data.content,data.cap,data.id)
  
    productsDiv.innerHTML += (ProductElement)


  });
 
   document.querySelector('.spinner-border').classList.add("d-none")
  

  

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
  const Capacity = document.getElementById("Capacity")
   
  const Product_obj = {
    productname:ProductName.value   ,
    avatar: ProductImgUrl,
    author:"Murali krishna",
    content:ProductContent.value ,
    cost :Cost.value ,
    cap:Capacity.value

  }


  postData(url , Product_obj);
  console.log(url,Product_obj);


  console.log(url,Product_obj);

  closeBtn.click();
  if (postData) {
    alert("added successfully")
    
  }
  // window.location.reload();

  
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