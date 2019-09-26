import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a Navbar', () => {
    page.navigateTo();
    expect(page.getNavbar()).toBeTruthy();
  });
});
