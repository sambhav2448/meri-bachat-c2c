const cheerio = require('cheerio');
const axios = require('axios');
const first_class = '_4ddWXP';
let dummy = 'https://www.flipkart.com/search?q=BOAT+BASSHEADS+228';
module.exports = getItem = async (fpk_url_init) => {
  const response = await axios.get(fpk_url_init);

  const $ = cheerio.load(response.data);

  const prod_fist = $('._4ddWXP>a').attr('href');

  return `https://www.flipkart.com${prod_fist}`;
  //   return 'sam';
  //   console.log(prod_fist);
};
