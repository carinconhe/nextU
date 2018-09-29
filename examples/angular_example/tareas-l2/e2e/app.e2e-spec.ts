import { TareasPage } from './app.po';

describe('tareas App', function() {
  let page: TareasPage;

  beforeEach(() => {
    page = new TareasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('t works!');
  });
});
