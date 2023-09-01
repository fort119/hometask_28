console.log(window.location.search);
const categories = document.querySelector(".categories");
const links = document.querySelectorAll('.categories__link');
const listOfGoods = document.querySelector(".list-of-goods");
console.log(listOfGoods);
const infoAboutGoods = document.querySelector(".info-about-goods");

console.log(links);

const categoriesList = `
   <h1 class="categories__caption">Categories</h1>
   <ul>
     <li>
       <a class="categories__link" href="?bikes">bikes</a>
     </li>
     <li>
       <a class="categories__link" href="?scooters">scooters</a>
     </li>
     <li>
       <a class="categories__link" href="?rollers">rollers</a>
     </li>
   </ul>
`
categories.innerHTML = categoriesList;

const data = {
  bikes: [
    { name: 'BMX', price: 200, about: 'good for tricks', picture: 'bmx.jpg' },
    { name: 'MTB', price: 400, about: 'good for hillclimb', picture: 'mtb.jpg' },
    { name: 'Sport', price: 100, about: 'good for racing', picture: 'sportBike2.jpg' }
  ],
  scooters: [
    { name: 'sport', price: 23, about: 'good for sport', picture: 'scooter1.jpeg' },
    { name: 'super-sport', price: 20, about: 'very good for sport', picture: 'scooter2.jpeg' },
    { name: 'ultra-sport', price: 41, about: 'extremely good for sport', picture: 'scooter3.jpeg' },
    { name: 'cruisers', price: 7, about: 'good for cruising around', picture: 'scooter4.jpg' }
  ],
  rollers: [
    { name: 'with brakes', price: 23, about: 'good for begginers', picture: 'rollers1.jpg' },
    { name: 'without brakes', price: 20, about: 'good for professionals', picture: 'rollers2.jpg' },
    { name: 'blue', price: 41, about: 'nice blue color', picture: 'rollers3.jpg' },
    { name: 'pink', price: 7, about: 'nice pink color', picture: 'rollers4.jpg' }
  ]
}

const goodsCategory = window.location.search.replace("?", "");
console.log(goodsCategory);

function check1() {
  if (goodsCategory) {
    const listOfGoodsFromCategory = data[goodsCategory];
    const goodsNames = listOfGoodsFromCategory.map(goods => goods.name);

    console.log(goodsNames);
    listOfGoods.innerHTML = "";
    goodsNames.forEach(name => {
      const div = document.createElement('div');
      div.classList.add("category__item")
      div.innerHTML = `
      <p class="category__item-descr">${name}</p>
      <div><img src="assets/images/${listOfGoodsFromCategory.find(product => product.name === name).picture}" width = "200px" height = "200px"></div>
      <div class="category__item-btn">
        <button class = "btn">Details</button>
      </div>
      `;

      listOfGoods.appendChild(div);

      //
      const buttons = document.querySelectorAll('.btn');
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const buyBtn = document.createElement('button');
          buyBtn.textContent = 'Buy';
          buyBtn.addEventListener('click', function () {
            const productInfo = listOfGoodsFromCategory.find(product => product.name === name);
            alert(`You've bought ${productInfo.name}!`);
            window.location.href = 'http://127.0.0.1:5500/'
          })


          const aboutProduct = document.createElement('div');
          aboutProduct.classList.add('product-about');
          aboutProduct.innerHTML = `
          <h2>${name}</h2>
          <p>Price: ${listOfGoodsFromCategory.find(product => product.name === name).price}$</p>
          <div><img src="assets/images/${listOfGoodsFromCategory.find(product => product.name === name).picture}" width = "256px"></div>
          <p>About: ${listOfGoodsFromCategory.find(product => product.name === name).about}</p>
          `;
          aboutProduct.appendChild(buyBtn);

          div.addEventListener('click', () => {
            infoAboutGoods.textContent = '';
            infoAboutGoods.appendChild(aboutProduct);
          });
        })

      })
    })
  }
}

check1();
