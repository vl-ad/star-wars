const { test, expect } = require('@playwright/test');

const notActiveStarSelector = '[class^=star]:not([class*=active])';
const listSelector = '[class*=list]';

test('favourites', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  // we were redirected to the "/people" page
  await expect(page).toHaveURL(/.*people/);

  // find not favourite card
  await page.waitForSelector(notActiveStarSelector);

  // not active start
  const star = await page.locator(notActiveStarSelector).first();

  // save the id
  const cardId = await star.getAttribute('data-id');

  // click on the star
  await page.click(notActiveStarSelector);

  // Click on the "Favourites" section
  await page.click('text=Favourites');

  // we were redirected to the "/favourites" page
  await expect(page).toHaveURL(/.*favourites/);

  // list is visible
  await page.waitForSelector(listSelector);
  const isListVisible = await page.isVisible(listSelector);
  expect(isListVisible).toBeTruthy();

  // favourite card is present on the page
  const isCardVisible = await page.isVisible(`[data-id="${cardId}"]`);
  expect(isCardVisible).toBeTruthy();
});
