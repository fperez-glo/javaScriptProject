document.addEventListener('DOMContentLoaded', () => {
    obtenerProductos();
});

document.addEventListener()

const obtenerProductos = async() => {
    try{
        const response = await fetch('soyTuMarket.json')
        const productData = await response.json();
        setProductos(productData);
    } catch {
        console.log(error);
    }
}

//selecciono mi contenedor de tarjetas de los productos
const productContainer = document.querySelector('#productList');

const setProductos = (productData) => {
    const template = document.querySelector('#productListTemplate').content;
    const fragment = new DocumentFragment();
    productData.forEach(product => {
        template.querySelector('img').setAttribute('src',product.srcImg);
        template.querySelector('#productTitle').textContent = product.prodTitle;
        template.querySelector('#productDescription').textContent = product.descripcion;
        template.querySelector('#productPrice').textContent = `$ ${product.precio}`;

        //Clono el template y lo guardo en un
        const templateClone = template.cloneNode(true);

        fragment.appendChild(templateClone);
    })
    productContainer.appendChild(fragment);
};