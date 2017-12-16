const ul = document.getElementById('coins--container');
const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=100';


console.log('function fired!');
// fetch data from url
fetch(url)
.then((resp) => resp.json())
.then(function(data) {

  const coins = data;

  // for each coin, create a list with properties
  for(var prop in coins){
    console.log(coins[prop]);
    // create new elements for list / sub-lists
    const liTop = document.createElement('li');
    const ulBottom = document.createElement('ul');
    const liOne = document.createElement('li');
    const liTwo = document.createElement('li');
    const liThree = document.createElement('li');

    // add a title for top list
    liTop.className = 'coin_title';

    // append top line data and elements
    ul.append(liTop);
    liTop.append(`${coins[prop].id}`);
    liTop.append(ulBottom);

    // append sub-list of properties
    ulBottom.append(liOne, liTwo, liThree);
    liOne.append(`Price: $${coins[prop].price_usd}`);
    liTwo.append(`Available: $${coins[prop].available_supply}`);
    liThree.append(`Market Cap: $${coins[prop].market_cap_usd}`);
  }
})

// log errors
.catch(function(error) {
  console.log(error);
});
