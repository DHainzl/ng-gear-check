import { NgGearCheckPage } from './app.po';

describe('ng-gear-check App', function() {
  let page: NgGearCheckPage;

  beforeEach(() => {
    page = new NgGearCheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
