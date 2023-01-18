import * as cheerio from 'cheerio';
// import axios from 'axios';

// const URL = 'https://www.number49s.co.za/number-49s-hot-picks';

// async function scrapeData() {
//   const response = await axios.get(URL);
//   const $ = cheerio.load(response.data);
//   const data = $('#random-ball-1').text();
//   console.log(data);
// }

const URL = 'https://www.number49s.co.za/number-49s-hot-picks';
async function scrapeData() {
    const response = await fetch(URL, {
        mode: "no-cors"
    });
    const result = await response.text();
    console.log(result);
    const $ = cheerio.load(response);
    const data = $('#random-ball-1').text();
    console.log(data);  
}
export default scrapeData;