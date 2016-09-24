import { DropitPage } from './app.po';

describe('dropit App', function() {
  let page: DropitPage;

  beforeEach(() => {
    page = new DropitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
