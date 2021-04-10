// class="sp grid"

// _3WhJ

const cheerio = require('cheerio');
const axios = require('axios');
const first_class = '_4ddWXP';

// const u =
//   'https://www.reliancedigital.in/search?q=jbl%20blue%20headphones:relevance';
module.exports = getItem = async (u) => {
  try {
    const response = await axios.get(u);
    const $ = cheerio.load(response.data);
    const prod_first = $('.sp.grid > a').attr('href');
    return `https://www.reliancedigital.in${prod_first}`;
    // console.log(prod_first);
  } catch (e) {
    console.log(e);
  }
};
