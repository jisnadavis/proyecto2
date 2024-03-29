import './style.css'

const products = [
  {
    id: 1,
    name: 'The blue  split leaf resort shirt',
    price: 10.99,
    image: '/asimg/dress1.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 5
  },
  {
    id: 2,
    name: 'The zazzle-resort-shirt',
    price: 19.99,
    image: '/asimg/drees2.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 3
  },
  {
    id: 3,
    name: 'The red indian clan shirt ',
    price: 14.49,
    image: '/asimg/dress3.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 5
  },
  {
    id: 4,
    name: 'The vintage Huma shirt',
    price: 8.99,
    image: '/asimg/dress5.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
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
    image: '/asimg/dress6.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 3
  },
  {
    id: 7,
    name: 'The vintage huma shirt',
    price: 7.49,
    image: '/asimg/dress7.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 4
  },
  {
    id: 8,
    name: 'The floral-allure-resort-shirt',
    price: 29.99,
    image: '/asimg/dress8.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 4
  },
  {
    id: 9,
    name: 'The floral-allure-resort-shirt',
    price: 17.99,
    image: '/asimg/dree9.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 2
  },
  {
    id: 10,
    name: 'The zazzle-resort-shirt',
    price: 11.49,
    image: '/asimg/dress10.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 5
  },
  {
    id: 11,
    name: 'The vintage huma shirt',
    price: 6.99,
    image: '/asimg/paprika11.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
    stars: 3
  },
  {
    id: 12,
    name: 'The blue wave-shirt ',
    price: 34.99,
    image: '/asimg/dress8.webp',
    imagelove: '/asimg/red.png',
    imagecov: '/asimg/cover.png',
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
  { description: 'products less than 3 star', value: 2 }
]
let PRICE = parseInt('')
let STARS = parseInt('')

const filtrarprecio = () => {
  const pricelessthan10 = []
  const pricebw10_20 = []
  const pricemore20 = []

  for (const product of products) {
    if (PRICE < product.price) {
      pricemore20.push(product)
    } else if (product.price > 10 && PRICE > product.price) {
      pricebw10_20.push(product)
    } else if (product.price < PRICE) pricelessthan10.push(product)
  }
  const create20 = () => {
    if (PRICE == 20) {
      printproducts(pricemore20)
    }
  }
  const create19 = () => {
    if (PRICE == 19.99) {
      printproducts(pricebw10_20)
    }
  }
  const create10 = () => {
    if (PRICE == 9.99) {
      printproducts(pricelessthan10)
    }
  }
  create20()
  create19()
  create10()
}
const filtrarstar = () => {
  const star5 = []
  const star3_4 = []
  const starless3 = []
  for (const product of products) {
    if (product.stars == 5) {
      star5.push(product)
    } else if (product.stars == 4 || product.stars == 3) {
      star3_4.push(product)
    } else if (product.stars < 3) {
      starless3.push(product)
    }
    const create5 = () => {
      if (STARS == 5) {
        printproducts(star5)
      }
    }
    const create3_4 = () => {
      if (STARS == 4) {
        printproducts(star3_4)
      }
    }
    const lessthan3 = () => {
      if (STARS == 2) {
        printproducts(starless3)
      }
    }
    create5()
    create3_4()
    lessthan3()
  }
}
const filtrartwo = () => {
  const selectedPrice = parseFloat(selectorprice.value)
  const selectedRating = parseInt(selectorstar.value)

  const filteredProducts = products.filter((product) => {
    const meetsPriceCriteria =
      selectedPrice === 0 || product.price <= selectedPrice
    const meetsRatingCriteria =
      selectedRating === 0 || product.stars >= selectedRating

    return meetsPriceCriteria && meetsRatingCriteria
  })
  printproducts(filteredProducts)
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
const aside = document.createElement('div')
aside.className = 'side_filter'
maindiv.appendChild(aside)
//-----putting filter-------//
//putting selector on the leftside
const divfilter = document.createElement('div')
divfilter.className = 'mainfilter'
//creating the selector for price
const selectorprice = document.createElement('select')

const maintitle = document.createElement('Option')
maintitle.textContent = 'elige un rango de precio'
maintitle.disabled = true
selectorprice.appendChild(maintitle)
pricelist.forEach((pricevalue) => {
  const optionprice = document.createElement('option')
  optionprice.textContent = pricevalue.description
  optionprice.value = pricevalue.value
  selectorprice.selectedIndex = 0
  selectorprice.appendChild(optionprice)
})
selectorprice.addEventListener('change', (e) => {
  PRICE = e.target.value
  filtrarprecio()
})
//filter for star
const selectorstar = document.createElement('select')

const maintitle1 = document.createElement('Option')
maintitle1.textContent = 'elige un rango puntacion'
maintitle1.disabled = true
selectorstar.appendChild(maintitle1)
ratingproduct.forEach((rate) => {
  const optionrate = document.createElement('option')
  optionrate.textContent = rate.description
  optionrate.value = rate.value
  selectorstar.selectedIndex = 0
  selectorstar.appendChild(optionrate)
})
selectorstar.addEventListener('change', (e) => {
  STARS = e.target.value
  filtrarstar()
})
//resetbutton
const filterdiv = document.createElement('div')
filterdiv.className = 'reset'
const filterbtn = document.createElement('button')
filterbtn.textContent = 'buscar'
filterbtn.addEventListener('click', filtrartwo)
const resetbutton = document.createElement('button')
resetbutton.textContent = 'reset filter'
resetbutton.addEventListener('click', () => {
  selectorprice.selectedIndex = 0
  selectorstar.selectedIndex = 0
  printproducts(products)
  selectorprice.disabled = false
  selectorstar.disabled = false
})

divfilter.appendChild(selectorprice)
divfilter.appendChild(selectorstar)
aside.appendChild(divfilter)
aside.appendChild(filterdiv)
filterdiv.appendChild(filterbtn)
filterdiv.appendChild(resetbutton)

//creating products on the rightside
const productscontainer = document.createElement('div')
productscontainer.className = 'productscontiner'
const printproducts = (items) => {
  productscontainer.innerHTML = ''

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
}
maindiv.appendChild(productscontainer)
printproducts(products)
