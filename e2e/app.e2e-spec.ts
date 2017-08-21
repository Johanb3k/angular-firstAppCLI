import { AngularFirstAppCLIPage } from './app.po';

describe('angular-first-app-cli App', () => {
  let page: AngularFirstAppCLIPage;

  beforeEach(() => {
    page = new AngularFirstAppCLIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
