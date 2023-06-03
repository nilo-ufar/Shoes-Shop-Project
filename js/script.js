let productsContainer = document.querySelector('.container')

let productsArray = [
    { id: 1, title: 'Stan Smith Blue Shoes', price: 84, img: 'images/1.png' },
    { id: 2, title: 'Stan Smith Green Shoes', price: 95, img: 'images/2.png' },
    { id: 3, title: 'Stan Smith Yellow Shoes', price: 78, img: 'images/3.png' },
]

productsArray.forEach(function (product) {
    productsContainer.insertAdjacentHTML('beforeend', '<div class="product-card"><h1>' + product.title + '</h1><p>Stan Smith, Forever. Always iconic. Now more sustainable.</p><div class="product-pic" style="background-image: url(' + product.img + ');"></div><div class="product-info"><div class="product-price">$' + product.price + '</div><a href="product.html?id=' + product.id + '" class="product-button">See More</a></div></div>')
})