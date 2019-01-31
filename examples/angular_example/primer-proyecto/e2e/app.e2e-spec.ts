import { PrimerProyectoPage } from './app.po';

describe('primer-proyecto App', function() {
  let page: PrimerProyectoPage;

  beforeEach(() => {
    page = new PrimerProyectoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
