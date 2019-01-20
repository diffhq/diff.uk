const puppeteer = require("puppeteer");

describe("main site view", () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it("works", async () => {
    const page = await browser.newPage();
    await page.goto("https://localhost:8000");
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});
