const got = require('got');

function* range(start, stop) {
  for (let i = start; i < stop; i++) yield i;
}

(async () => {
  try {
    for (const n of range(1, 10)) {
      const response = await got(`https://jsonplaceholder.typicode.com/users/${n}`);
      const data = JSON.parse(response.body);
      const { lat, lng } = data.address.geo;
      console.log('data:', n, data, lat, lng);
    }
  } catch (error) {
    console.log(error.response.body);
  }
})();
