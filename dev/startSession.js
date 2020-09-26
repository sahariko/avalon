const puppeteer = require('puppeteer');
const faker = require('faker');

let browser;

const loginWithUser = async() => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.type('#name', faker.name.firstName());
    await page.keyboard.press('Enter');
};

(async () => {
  browser = await puppeteer.launch({
      headless: false
  });

  for (let i = 0; i < 5; i++) {
      await loginWithUser();
  }
})();
