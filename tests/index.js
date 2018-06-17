import { Selector } from 'testcafe';

fixture('Getting Started')
  .page('https://github.com');

test('Find "testcafe-example" repo on GitHub', async (t) => {
  const repo = Selector('#js-pjax-container > div > div.columns > div.column.three-fourths.codesearch-results > div > ul > div > div.col-8.pr-3 > h3 > a');
  // search github
  await t
    .typeText('form[action="/search"]', 'testcafe-example user:mjhea0')
    .pressKey('enter');
  // check li for results
  await t
    .expect(repo.innerText).contains('mjhea0/testcafe-example');
});
