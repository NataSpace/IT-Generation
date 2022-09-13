let bitcoinPrice = prompt("What is Bitcoin price today?");
let cost = prompt("How much $ do you have?");

if (bitcoinPrice > 0 && cost > 0) {
  alert(`You can buy ${cost / bitcoinPrice} BTC`);
}
