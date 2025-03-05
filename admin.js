const productsDiv = document.getElementById("pt");
const url = "https://6321f07afd698dfa29032037.mockapi.io/test/all/svln";

async function fetchProducts() {
  const response = await fetch(url);
  const data = await response.json();
  viewAllProducts(data);
}

function createProductElement(imgUrl, productName, productRate, content, cap, id) {
  return `
    <tr class="table-primary">
      <td>
        <img src="${imgUrl}" class="img-fluid img-thumbnail rounded-top" width="200" alt="${content}">
      </td>
      <td class="border border-2 fw-bold">
        ${productName}<br>
        ₹${productRate}<br>
        ${content}<br>
      </td>
      <td>
        <a href="#" class="btn m-1 ms-0 d-none btn-primary">Edit <i class="fa fa-edit" aria-hidden="true"></i></a>
        <a href="#" onclick="deleteProduct('${url}/${id}')" class="btn m-1 ms-0 btn-danger">Delete <i class="fa-solid fa-trash"></i></a>
      </td>
    </tr>
  `;
}

async function viewAllProducts(data) {
  data.forEach(product => {
    const productElement = createProductElement(product.avatar, product.productname, product.cost, product.content, product.cap, product.id);
    productsDiv.innerHTML += productElement;
  });
}

document.addEventListener('DOMContentLoaded', fetchProducts);

async function deleteProduct(url) {
  if (confirm("Do you want to delete this product?")) {
    await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    });
    alert("Product deleted successfully");
    window.location.reload();
  }
}