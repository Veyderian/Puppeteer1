let page;
afterEach(() => {
	page.close();
})
describe("Github page tests", () => {
	beforeEach(async() => {
		page = await browser.newPage();
		await page.goto("https://github.com/team");
	}, 800000);

	test("The h1 header content'", async() => {
		const firstLink = await page.$("header div div a");
		await firstLink.click();
		//await page.waitForTimeout(65000);cc
		await page.waitForSelector('h1');
		const title2 = await page.title();
		await page.waitForTimeout(65000);
		expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
		//await page.screenshot({	path: './screenshots./example.png'
	});
		// 	expect(title2).toEqual('GitHub: Let’s build from here · GitHub');
		//  expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
		// }, 50000);
	test("The first link attribute", async() => {
		const actual = await page.$eval("a", link => link.getAttribute('href'));
		await page.screenshot({
			path: './screenshots/test2.png'
		});
		expect(actual).toEqual("#start-of-content");
	}, 10000);

	test("The page contains Sign in button", async() => {
		//const btnSelector = ".btn-large-mktg.btn-mktg";
		const btnSelector = ".btn-large-mktg.btn-muted-mktg";
		await page.waitForSelector(btnSelector, {
			visible: true,
		});
		const actual = await page.$eval(btnSelector, link => link.textContent);
		await page.screenshot({
			path: './screenshots/test3.png'
		});
		await page.waitForTimeout(5000);
		expect(actual).toContain("Sign up for free")
	}, 60000);
});

describe("Github page tests1", () => { // мои тесты
	beforeEach(async() => {
		page = await browser.newPage();
		// Go to https://github.com/explore
		await page.goto('https://github.com/explore');
	});
	test('test1', async() => {
		const heading = "body > div.logged-in.env-production.page-responsive > div.application-main > main > div:nth-child(2) > div > div > div.col-md-8.col-lg-6.py-4 > article:nth-child(2) > div.border-top.color-bg-default.p-3.rounded-bottom-2 > div.d-flex > h3 > a"
			//const heading = ".h3 color-fg-default wb-break-word mb-2"
		await page.waitForSelector(heading);
		//await page.waitForTimeout(80000);
		await page.click(heading);
		await expect(page).toHaveURL('https://www.youtube.com/playlist?list=PL0lo9MOBetEE0goMLEl97vO7slruNVj43', 80000);
	});

	test('test2', async() => {
		//const manu = await page.$("header div div button", {timeout: 70000});
		const menu = "#dialog-show-dialog-8a1d3721-1281-4a61-b118-f31fa0529034";
		await page.waitForSelector(menu);
		//await page.waitForTimeout(45000);
		await page.click(menu);
		//await page.waitForTimeout(65000);
		await page.waitForSelector("scrollable-region");
		const dropDownList = await page.$("#item-538772df-9fff-48b7-9446-c539ca0a530e > span.ActionListItem-label");
		await dropDownList.click();
		expect(actual).toContain("Issues");
	});
	
	test('test3', async() => {
		const tab = await page.waitForSelector(".js-selected-navigation-item d-inline-block py-2 py-md-3 mr-3 mr-md-4 no-underline subnav-link", );
		await page.click(tab);
		await page.waitForTimeout(65000);
		await page.waitForSelector(".f4 color-fg-muted col-md-6 mx-auto");
		expect(actual).toContain("Browse popular topics on GitHub.");
	}, {
		timeout: 100000
	});
});