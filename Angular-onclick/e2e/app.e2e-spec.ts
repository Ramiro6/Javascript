import { AngularOnclickPage } from './app.po';

describe('angular-onclick App', () => {
  let page: AngularOnclickPage;

  beforeEach(() => {
    page = new AngularOnclickPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
