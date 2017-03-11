import { TestservePage } from './app.po';

describe('testserve App', () => {
  let page: TestservePage;

  beforeEach(() => {
    page = new TestservePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
