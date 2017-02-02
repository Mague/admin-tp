import { AdminTpPage } from './app.po';

describe('admin-tp App', function() {
  let page: AdminTpPage;

  beforeEach(() => {
    page = new AdminTpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
