import { JestBreakpointBugPage } from './app.po';

describe('jest-breakpoint-bug App', () => {
  let page: JestBreakpointBugPage;

  beforeEach(() => {
    page = new JestBreakpointBugPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
