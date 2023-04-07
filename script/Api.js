

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const apiUrl = 'https://api.wazirx.com/api/v2/tickers';

// fetch(proxyUrl + apiUrl)
// .then((apidata)=>{
//     console.log(apidata);
//     return apidata.json();
// })
// .then((actualdata)=>{
//     console.log(actualdata);

// })
// .catch((error)=>{
//        console.log("this is error");
// });
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://api.wazirx.com/api/v2/tickers';

fetch(proxyUrl + apiUrl)
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#data-table');
    let count = 0;
    Object.keys(data).forEach(coin => {
      if (count >= 10) {
        return;
      }
      const ticker = data[coin];
      const buySellPrice = `${ticker.buy} / ${ticker.sell}`;
      const row = tableBody.insertRow();
      row.insertCell().textContent = coin.toUpperCase();
      row.insertCell().textContent = ticker.last;
      row.insertCell().textContent = buySellPrice;
      const difference = (ticker.last - ticker.open).toFixed(2);
      row.insertCell().textContent = difference;
      const savings = ((difference / ticker.open) * 100).toFixed(2) + '%';
      row.insertCell().textContent = savings;
      count++;
    });
  })
  .catch(error => console.error(error));



// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const apiUrl = 'https://api.wazirx.com/api/v2/tickers';

// fetch(proxyUrl + apiUrl)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


//const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
// const apiUrl = 'https://api.wazirx.com/api/v2/tickers';

// fetch(proxyUrl + apiUrl)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


// const proxyUrl = 'http://localhost:8080/';
// const apiUrl = 'https://api.wazirx.com/api/v2/tickers';

// fetch(proxyUrl + apiUrl)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


// const apiUrl = 'https://api.wazirx.com/api/v2/tickers';

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


// const apiUrl = 'https://api.wazirx.com/api/v2/tickers';
// const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

// fetch(corsProxyUrl + apiUrl)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));




