// _3WhJ

const cheerio = require('cheerio');
const axios = require('axios');
const first_class = '_4ddWXP';

// let paytm_url_init =
//   'https://paytmmall.com/shop/search?q=black%20jbl%20over%20ear%20headphones&from=organic&child_site_id=6&site_id=2&category=6490&brand=2906';
module.exports = getItem = async (paytm_url_init) => {
  try {
    const response = await axios.get(paytm_url_init);

    const $ = cheerio.load(response.data);

    const prod_first = $('._3WhJ > a').attr('href');

    return `https://paytmmall.com${prod_first}`;
    // console.log(prod_first);
  } catch (e) {
    console.log(e);
  }
};
