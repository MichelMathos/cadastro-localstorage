document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productName = document.getElementById('productName');
    const productDescription = document.getElementById('productDescription');
    const productValue = document.getElementById('productValue');
    const productAvailability = document.getElementById('productAvailability');
    const productTable = document.getElementById('productTable');
    const listagemHeader = document.getElementById('listagemHeader');
    const addNewProduct = document.getElementById('addNewProduct');
    const listProducts = document.getElementById('listProducts');
    const tbody = productTable.querySelector('tbody');
    const popup = document.createElement('div');
    popup.className = 'popup';
    document.body.appendChild(popup);

    const loadProducts = () => {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        tbody.innerHTML = '';
        products.sort((a, b) => parseFloat(a.value) - parseFloat(b.value)).forEach((product, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.value}</td>
                <td><button class="delete-btn" data-index="${index}">Excluir</button></td>
            `;
            if (product.availability === 'Não') {
                row.classList.add('not-available');
            }
            row.addEventListener('mouseover', (e) => {
                popup.style.display = 'block';
                popup.textContent = `Descrição: ${product.description} Disponível: ${product.availability}`;
                popup.style.top = `${e.clientY + 10}px`;
                popup.style.left = `${e.clientX + 10}px`;
            });
            row.addEventListener('mousemove', (e) => {
                popup.style.top = `${e.clientY + 10}px`;
                popup.style.left = `${e.clientX + 10}px`;
            });
            row.addEventListener('mouseout', () => {
                popup.style.display = 'none';
            });
            tbody.appendChild(row);
        });
    };

    const showListagem = () => {
        listagemHeader.classList.remove('hidden');
        productTable.classList.remove('hidden');
        addNewProduct.classList.remove('hidden');
        productForm.classList.add('hidden');
        loadProducts();
    };

    const deleteProduct = (index) => {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        loadProducts();
    };

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newProduct = {
            name: productName.value,
            description: productDescription.value,
            value: parseFloat(productValue.value).toFixed(2),
            availability: productAvailability.value
        };

        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));

        productForm.reset();
        showListagem();
    });

    addNewProduct.addEventListener('click', () => {
        listagemHeader.classList.add('hidden');
        productTable.classList.add('hidden');
        addNewProduct.classList.add('hidden');
        productForm.classList.remove('hidden');
    });

    listProducts.addEventListener('click', showListagem);

    tbody.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            const productName = e.target.closest('tr').children[0].textContent;
            const confirmDeletion = confirm(`Tem certeza que deseja excluir o produto ${productName}?`);
            if (confirmDeletion) {
                deleteProduct(index);
            }
        }
    });

    // Carrega a listagem de produtos ao carregar a página
    showListagem();
});
