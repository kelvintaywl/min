// NOTE: these tests assume we have the app served locally at port 5000.
const serverURL = "http://localhost:5000";

describe("index page", () => {
  beforeAll(async () => {
    await page.goto(serverURL, { waitUntil: "domcontentloaded" });
  });

  it('should be titled "MIN"', async () => {
    const title = await page.title();
    expect(title).toEqual("MIN!");
  });

  it("should have a button with label", async () => {
    const button = await page.$("button");
    const button_text = await (
      await button.getProperty("textContent")
    ).jsonValue();
    expect(button_text).toMatch(/import this$/);
  });

  it("should have a empty pre element at start", async () => {
    const pre = await page.$("#pre-display");
    const pre_text = await (await pre.getProperty("innerHTML")).jsonValue();
    expect(pre_text).toEqual("");
  });

  it("should insert quote in pre when button is clicked", async () => {
    const button = await page.$("button");

    // when
    await button.evaluate((button) => button.click());

    // then
    const pre = await page.$("#pre-display");

    const pre_text = await (await pre.getProperty("innerHTML")).jsonValue();
    expect(pre_text).toMatch(/The Zen of Python, by Tim Peters/);
  });
});
