
const productsDiv = document.getElementById("pt")
const url = "https://6321f07afd698dfa29032037.mockapi.io/test/all/svln"


async function fetchProducts() {
  const response = await fetch(`https://6321f07afd698dfa29032037.mockapi.io/test/all/svln`);
    const data = await response.json()
    loop = data.length

    viewAllProducts(data)
    
}

function CreateProductElement(imgUrl,productName,productRate,content,cap,id) {
    const productU =  `
    <tr class="table-primary" >
              
              <td>
                <img src="${imgUrl}" id="1" class="img-fluid img-responsive img-thumbnail rounded-top" width="200" alt="">
              </td>
              <td class="border border-2 fw-bold ">${productName} <br>
              ${productRate}<br>
              ${content}<br></td>
              <td>
                <a href="#"  class="btn m-1 ms-0 d-none btn-primary">Edit  <i class="fa fa-edit" aria-hidden="true"></i></a>
                <a href="#" onclick="DeleteProduct('https://6321f07afd698dfa29032037.mockapi.io/test/all/svln/${id}')" class="btn m-1 ms-0 btn-danger">Delete <i class="fa-solid fa-trash"></i> </a>

              </td>
              
    </tr>
    `
   return productU
  }
  
  async function viewAllProducts(data) {

    data.forEach(data => {
      
      const ProductElement  = CreateProductElement(data.avatar,data.productname,data.cost,data.content,data.cap,data.id)
    
      productsDiv.innerHTML += (ProductElement)
    
      // console.log(element);
    });

    
  
  }
  
  document.addEventListener('DOMContentLoaded',fetchProducts)
  
 async function DeleteProduct(url) {
  alert("do u want to delete")
  if(alert){
    fetch(url, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    })
  }

}


  