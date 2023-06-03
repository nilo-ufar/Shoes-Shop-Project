let $ = document
let backBtn = $.querySelector('#back')
let shoeTitle = $.querySelector('h1')
let shoeDesc = $.querySelector('p')
let shoeImage = $.querySelector('img')

let productsArray = [
    { id: 1, title: 'Stan Smith Blue Shoes', price: 84, img: 'images/1.png', desc: 'Timeless appeal. Effortless style. Everyday versatility. For over 50 years and counting, adidas Stan Smith Shoes have continued to hold their place as an icon. This pair shows off a fresh redesign as part of adidas\' commitment to use only recycled polyester by 2024. With a vegan upper and an outsole made from rubber waste, they still have iconic style, they\'re just made with the planet in mind.\n' +
            '\n' +
            'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.' },

    { id: 2, title: 'Stan Smith Green Shoes', price: 95, img: 'images/2.png', desc: 'Timeless appeal. Effortless style. Everyday versatility. For over 50 years and counting, adidas Stan Smith Shoes have continued to hold their place as an icon. This pair shows off a fresh redesign as part of adidas\' commitment to use only recycled polyester by 2024. With a vegan upper and an outsole made from rubber waste, they still have iconic style, they\'re just made with the planet in mind.\n' +
            '\n' +
            'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.' },

    { id: 3, title: 'Stan Smith Yellow Shoes', price: 78, img: 'images/3.png', desc: 'Timeless appeal. Effortless style. Everyday versatility. For over 50 years and counting, adidas Stan Smith Shoes have continued to hold their place as an icon. This pair shows off a fresh redesign as part of adidas\' commitment to use only recycled polyester by 2024. With a vegan upper and an outsole made from rubber waste, they still have iconic style, they\'re just made with the planet in mind.\n' +
            '\n' +
            'This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.' },
]

let locationParams = new URLSearchParams(location.search)
let mainProductID = locationParams.get('id')

let mainProductObject = productsArray.find(function (product) {
    return product.id === Number(mainProductID)
})

if (mainProductObject) {
    shoeTitle.innerHTML = mainProductObject.title
    shoeDesc.innerHTML = mainProductObject.desc
    shoeImage.setAttribute('src', mainProductObject.img)
}

backBtn.addEventListener('click', function () {
    history.back()
})
