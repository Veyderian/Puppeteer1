const puppeteeer = require('puppeteer');

(async() => {
    const browser = await puppeteeer.launch({
        headless: false,
        // slowMo: 300,
        defaultViewport: null,
        args: ['--start-maximized'],
        devtools: true
    });
    const page = await browser.newPage();
    await page.goto('https://www.rbc.ru/', {timeout: 200000});

    const crose = "#popmechanic-form-82810 > div > div.popmechanic-close"

await page.waitForSelector(crose);
await page.click(crose);

//  const notNow = await page.$("push-allow__button push-allow__button_no js-push-allow-link");
const notNow = "body > div.push-allow.js-push-allow > div.push-allow__block.js-push-allow-block.js-push-allow-block-subscribe.active > div.push-allow__controls > div:nth-child(2) > a";

await page.waitForSelector(notNow);
 await page.click(notNow);

 const crose1 =  "body > div.live-tv-popup.js-live-tv-popup.active > div.live-tv-popup__head > div";
 await page.waitForSelector(crose1);
await page.click(crose1);

const crose2 =  "body > header > div > div.topline__inner.l-row.js-topline > div.topline__right > div.topline__disable-adv.g-desktop > a";
await page.waitForSelector(crose2);
await page.click(crose2);


await page.waitForTimeout(5000);

const emailSel = 'input[type="email"]';
await page.type(emailSel, 'yourmail@gmail.com, {delay: 100}');

await page.screenshot({path: 'example.png'});

// await browser.close();

})();