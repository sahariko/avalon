const puppeteer = require('puppeteer');
const faker = require('faker');

const START_GAME_BUTTON_SELECTOR = '.start-game-button';

let browser;

const loginWithUser = async() => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.type('#name', faker.name.firstName());
    await page.keyboard.press('Enter');

    await page.waitForSelector(START_GAME_BUTTON_SELECTOR);
    await page.click(START_GAME_BUTTON_SELECTOR);
};

(async () => {
  browser = await puppeteer.launch({
      headless: false
  });

  for (let i = 0; i < 5; i++) {
      await loginWithUser();
  }
})();
