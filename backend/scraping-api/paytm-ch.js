const cheerio = require('cheerio');
const axios = require('axios');

module.exports = getData = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    paytm_name = $('.NZJI').text();
    paytm_price = parseFloat($('._1V3w').text());
    paytm_mrp = parseFloat($('._2b_6').text().split(' ')[1]);
    return {
      website: 'Paytm Mall',
      paytm_price,
      paytm_mrp,
      paytm_name,
      prod_link: url,
    };
  } catch (err) {
    console.log(err, 'paytm-ch');
    // return priceData;
  }
};

// getData();
