const { test, expect } = require('@playwright/test');

const cardSelector = '[class^=container]';
const starSelector = '[class^=star]';

test('check home page', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  // we were redirected to the "/people" page
  await expect(page).toHaveURL(/.*people/);

  // The title is "Star Wars"
  await expect(page).toHaveTitle(/Star Wars/);

  // The "People" section is active
  const activeSection = await page.innerText('a[class*=active]');
  expect(activeSection).toBe('People');

  // check that a card is present
  await page.waitForSelector(cardSelector);
  const isCardVisible = await page.isVisible(cardSelector);
  expect(isCardVisible).toBeTruthy();

  // the star is visible
  await page.waitForSelector(starSelector);
  const isStarVisible = await page.isVisible(starSelector);
  expect(isStarVisible).toBeTruthy();
});

test('change the location', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  // we were redirected to the "/people" page
  await expect(page).toHaveURL(/.*people/);

  // Click on the "Planets" section
  await page.click('text=Planets');

  // we were redirected to the "/planets" page
  await expect(page).toHaveURL(/.*planets/);
});
