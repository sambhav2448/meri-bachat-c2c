const HttpError = require('../models/http-error');
const fkart = require('../scraping-api/searchFlipkart');
const fkart_final = require('../scraping-api/flipkart-ch');
const ptm = require('../scraping-api/searchPaytm');
const ptm_final = require('../scraping-api/paytm-ch');
const rd = require('../scraping-api/searchRd');
const rd_final = require('../scraping-api/reliance-ch');

const getflipkart = async (req, res) => {
  keyword = req.body.search;

  try {
    const searchParam = keyword.split(' ').join('+');
    fpk_url_init = `https://www.flipkart.com/search?q=${searchParam}`.toString();
    const f_url = await fkart(fpk_url_init);
    const f_data = await fkart_final(f_url);
    res.status(200).json({ ProductData: { productDetails: f_data } });
  } catch (error) {
    console.log(error);
    console.log('---------------------');
    res.status(404).json({ mesg: 'error in flipkart' });
  }
};

const getpaytm = async (req, res) => {
  keyword = req.body.search;

  try {
    const searchParam = keyword.split(' ').join('+');
    paytm_url_init = `https://paytmmall.com/shop/search?q=${searchParam}`.toString();
    const p_url = await ptm(paytm_url_init);
    const p_data = await ptm_final(p_url);
    res.status(200).json({ ProductData: { productDetails: p_data } });
  } catch (error) {
    console.log(error);
    console.log('---------------------');
    res.status(404).json({ mesg: 'error in paytm' });
  }
};

const getrd = async (req, res) => {
  keyword = req.body.search;

  try {
    const searchParam = keyword.split(' ').join('+');
    rd_url_init = `https://www.reliancedigital.in/search?q=${searchParam}`.toString();
    const rd_url = await rd(rd_url_init);
    const rd_data = await rd_final(rd_url);
    res.status(200).json({ ProductData: { productDetails: rd_data } });
  } catch (error) {
    console.log(error);
    console.log('---------------------');
    res.status(404).json({ mesg: 'error in rd' });
  }
};

exports.getSearchflipkart = getflipkart;
exports.getSearchpaytm = getpaytm;
exports.getSearchrd = getrd;
