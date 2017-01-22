import { AluminiPage } from './app.po';

describe('alumini App', function() {
  let page: AluminiPage;

  beforeEach(() => {
    page = new AluminiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
