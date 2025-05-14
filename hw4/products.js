const products = [ 
{ "description" : "B&O is a Danish company that designs and manufactures audio products, television sets, and telephones. It was founded in 1925 by Peter Bang and Svend Olufsen",
"image" : "1.jpg",
"title" : "B&O 5.1"
},
{ "description" : "B&O is a Danish company that designs and manufactures audio products, television sets, and telephones. It was founded in 1925 by Peter Bang and Svend Olufsen",
"image" : "2.jpg",
"title" : "B&O TV"
},
{ "description" : "Market leader in the UK. Roberts produce a wide range of DAB digital radios. Roberts is a consumer electronics company producing DAB, analogue and wi-fi ...",
"image" : "3.jpg",
"title" : "Roberts Radio"
},
{ "description" : "Toshiba is a diversified manufacturer and marketer of advanced electronic and electrical products, spanning information & communications equipment and systems",
"image" : "4.jpg",
"title" : "Toshiba TV"
},
{ "description" : "B&O is a Danish company that designs and manufactures audio products, television sets, and telephones. It was founded in 1925 by Peter Bang and Svend Olufsen",
"image" : "5.jpg",
"title" : "B&O Audio"
},
{ "description" : "B&O is a Danish company that designs and manufactures audio products, television sets, and telephones. It was founded in 1925 by Peter Bang and Svend Olufsen",
"image" : "6.jpg",
"title" : "B&O Remote"
}
];

const productsContainer = document.querySelector("#products");

const productCards = products.map(product =>
`
<div class="product">
    <h2>
        <a href="#">${product.title}</a>
    </h2>
    <a href="#">
        <img src="images/${product.image}" alt="content">
    </a>
    <p>${product.description}</p>
</div>
`).join('');

productsContainer.innerHTML = productCards;