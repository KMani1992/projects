import { CtracPage } from './app.po';

describe('ctrac App', () => {
  let page: CtracPage;

  beforeEach(() => {
    page = new CtracPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
