import { Selector } from 'testcafe';
import { pageUrl } from '../../../../_constants';
import { mockManualRequests } from '../../../../_utils/mock-requests';
import { navigateToActPage } from '../../../../_utils/navigate-to-act-page';
import { getFirstActField } from '../../../../_utils/get-first-act-field';

fixture`Agreement module in act revise page test`.page`${pageUrl}`
  .requestHooks(mockManualRequests())
  .beforeEach(async (browser) => {
    await browser.maximizeWindow().wait(2000);
  });

test.skip('get title text', async (browser) => {
  await navigateToActPage(browser);

  const textComponent = Selector("div[data-find='title'] span");

  const reviseId = getFirstActField('reviseId');

  await browser
    .expect(textComponent.innerText)
    .contains(`Акт сверки № ${reviseId}`);
});

test.skip('get button send', async (browser) => {
  await navigateToActPage(browser);

  const buttonComponentWrapper = Selector("[data-find='button-send']").exists;

  await browser.expect(buttonComponentWrapper).ok();
});

test.skip('get button delete', async (browser) => {
  await navigateToActPage(browser);

  const buttonComponentWrapper = Selector("[data-find='button-delete']").exists;

  await browser.expect(buttonComponentWrapper).ok();
});

test.skip('get button download', async (browser) => {
  await navigateToActPage(browser);

  const buttonComponentWrapper = Selector("[data-find='button-download']")
    .exists;

  await browser.expect(buttonComponentWrapper).ok();
});

test.skip('get block contact name', async (browser) => {
  await navigateToActPage(browser);

  const textComponent = Selector("[data-find='contract-name']").exists;

  await browser.expect(textComponent).ok();
});

test.skip('get contact name value', async (browser) => {
  await navigateToActPage(browser);

  const textComponent = Selector("[data-find='contract-name-value'] span")
    .innerText;

  const expectedValue = getFirstActField('contractName');

  await browser.expect(textComponent).contains(expectedValue);
});

test.skip('get block status description', async (browser) => {
  await navigateToActPage(browser);

  const textComponent = Selector("[data-find='status-description']").exists;

  await browser.expect(textComponent).ok();
});

test.skip('get status description value', async (browser) => {
  await navigateToActPage(browser);

  const textComponent = Selector("[data-find='status-description-value'] span")
    .innerText;

  const expectedValue = getFirstActField('statusDescription');

  await browser.expect(textComponent).contains(expectedValue);
});

test.skip('get block start date', async (browser) => {
  await navigateToActPage(browser);

  const textComponent = Selector("[data-find='start-date']").exists;

  await browser.expect(textComponent).ok();
});

test.skip('get start date value', async (browser) => {
  await navigateToActPage(browser);

  const textComponent = Selector("[data-find='start-date-value'] span")
    .innerText;

  const startDateExpected = '02.07.2017';

  await browser.expect(textComponent).contains(startDateExpected);
});

test.skip('get block until date', async (browser) => {
  await navigateToActPage(browser);

  const textComponent = Selector("[data-find='until-date']").exists;

  await browser.expect(textComponent).ok();
});

test.skip('get until date value', async (browser) => {
  await navigateToActPage(browser);

  const textComponent = Selector("[data-find='until-date-value'] span")
    .innerText;

  const untilDateExpected = '31.07.2017';

  await browser.expect(textComponent).contains(untilDateExpected);
});
