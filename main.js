import './style.css'
const products = [
  {
    id: 1,
    name: 'The blue  split leaf resort shirt',
    price: 10.99,
    image: './asimg/dress1.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 5
  },
  {
    id: 2,
    name: 'The zazzle-resort-shirt',
    price: 19.99,
    image: './asimg/drees2.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 3
  },
  {
    id: 3,
    name: 'The red indian clan shirt ',
    price: 14.49,
    image: './asimg/dress3.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 5
  },
  {
    id: 4,
    name: 'The vintage Huma shirt',
    price: 8.99,
    image: './asimg/dress5.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 2
  },
  {
    id: 5,
    name: 'The floral-allure-resort-shirt ',
    price: 24.99,
    image: './asimg/dress5.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 4
  },
  {
    id: 6,
    name: 'The blue wave-shirt ',
    price: 12.99,
    image: './asimg/dress6.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 3
  },
  {
    id: 7,
    name: 'The vintage huma shirt',
    price: 7.49,
    image: './asimg/dress7.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 4
  },
  {
    id: 8,
    name: 'The floral-allure-resort-shirt',
    price: 29.99,
    image: './asimg/dress8.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 4
  },
  {
    id: 9,
    name: 'The floral-allure-resort-shirt',
    price: 17.99,
    image: './asimg/dree9.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 4
  },
  {
    id: 10,
    name: 'The zazzle-resort-shirt',
    price: 11.49,
    image: './asimg/dress10.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 5
  },
  {
    id: 11,
    name: 'The vintage huma shirt',
    price: 6.99,
    image: './asimg/paprika11.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 3
  },
  {
    id: 12,
    name: 'The blue wave-shirt ',
    price: 34.99,
    image: './asimg/dress8.webp',
    imagelove: './asimg/red.png',
    imagecov: './asimg/cover.png',
    stars: 4
  }
]
const lists = ['home', 'aboutus', 'login', 'buynow', 'logout']
const pricelist = [
  { description: 'precio less than 10', value: 9.99 },

  { description: 'precio between 10€ to 20€', value: 19.99 },
  { description: 'precio more than 20€', value: 20 }
]
const ratingproduct = [
  { description: 'product with 5 stars', value: 5 },
  { description: 'product in between 3 and 4 stars', value: 4 },
  { description: 'products less than 3 star', value: 3 }
]
let PRICE = parseInt('')
let STARS = parseInt('')

const filtrar = () => {
  const filterd = []
  for (const product of products) {
    if (PRICE < product.price) {
      filterd.push(product)
    }
    console.log(filterd)
  }
  printproducts(filterd)
}
const header = document.querySelector('header')
const img = document.createElement('img')
img.src = './asimg/logo.png'
img.className = 'logo'
const navhead = document.createElement('nav')
navhead.className = 'home'
const ulhead = document.createElement('ul')
ulhead.className = 'flex-container'

const btnmenu = document.createElement('button')
btnmenu.className = 'menu'

const btnimg = document.createElement('img')
btnimg.src = './asimg/menu.png'
for (const list of lists) {
  const lihead = document.createElement('li')
  lihead.textContent = list
  ulhead.appendChild(lihead)
}
btnmenu.addEventListener('click', () => {
  navhead.classList.toggle('menu_vertical')

  console.log(ulhead)
})
header.appendChild(img)

navhead.appendChild(ulhead)
header.appendChild(navhead)
btnmenu.appendChild(btnimg)
header.appendChild(btnmenu)

const maindiv = document.querySelector('#app')
const aside = document.createElement('aside')
aside.className = 'side_filter'
maindiv.appendChild(aside)
//-----putting filter-------//
//putting selector on the leftside
const divfilter = document.createElement('div')
divfilter.className = 'mainfilter'
const createfilter = (options) => {
  const selector = document.createElement('select')

  const tittleh2 = document.createElement('option')
  tittleh2.textContent = 'search for item'
  divfilter.appendChild(selector)
  selector.appendChild(tittleh2)
  options.forEach((option) => {
    const optionvalues = document.createElement('option')

    optionvalues.textContent = option.description
    optionvalues.value = option.value

    selector.appendChild(optionvalues)
  })

  selector.addEventListener('change', (e) => {
    PRICE = e.target.value
    STARS = e.target.value
    filtrar()
  })
}

aside.appendChild(divfilter)
createfilter(pricelist)
createfilter(ratingproduct)

const clearbutton = document.createElement('button')
clearbutton.textContent = 'clear filter'
divfilter.appendChild(clearbutton)

//creating products on the rightside

const printproducts = (items) => {
  const productscontainer = document.createElement('div')
  productscontainer.innerHTML = ''
  productscontainer.className = 'productscontiner'
  for (const product of items) {
    const productdiv = document.createElement('div')

    productdiv.className = 'product'
    const imgdiv = document.createElement('div')
    imgdiv.className = 'productsize'
    const productimage = document.createElement('img')
    productimage.src = product.image
    imgdiv.appendChild(productimage)
    productdiv.appendChild(imgdiv)
    const hoverdiv = document.createElement('div')
    hoverdiv.className = 'love'
    const lovebutton = document.createElement('button')
    const buynowbutton = document.createElement('button')

    const loveimg = document.createElement('img')
    const buynowimg = document.createElement('img')

    const productname = document.createElement('h3')
    productname.textContent = product.name
    const precio = document.createElement('p')
    precio.textContent = `${product.price}€`
    const divstars = document.createElement('div')
    divstars.className = 'points'
    for (let i = 0; i < 5; i++) {
      const divpoint = document.createElement('div')
      divpoint.className = 'stars'
      if (product.stars > i) {
        divpoint.classList.add('fill')
      }
      divstars.appendChild(divpoint)
    }
    loveimg.src = product.imagelove
    buynowimg.src = product.imagecov
    lovebutton.appendChild(loveimg)
    buynowbutton.appendChild(buynowimg)
    hoverdiv.appendChild(lovebutton)
    hoverdiv.appendChild(buynowbutton)
    productdiv.appendChild(productname)
    productdiv.appendChild(hoverdiv)
    productdiv.appendChild(precio)
    productdiv.appendChild(divstars)
    productscontainer.appendChild(productdiv)
  }
  maindiv.appendChild(productscontainer)
}
printproducts(products)
