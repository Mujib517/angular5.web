import { browser, element, by } from 'protractor';

describe("Home Page", () => {

    browser.get('/');

    it('should have title Angular5.Web', () => {
        expect(browser.getTitle()).toBe("Angular5.Web");
    });

    it("Should have Home Page heading", () => {
        var headings = element.all(by.css("h1"));
        var heading = headings.get(0);
        expect(heading.getText()).toBe("Home Page");
    });

    it("Should navigate to contact page", () => {
        var anc = element(by.css('a[href="/contact"]'));
        anc.click();
        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/contact");
    });

    it("Should navigate to products page", () => {
        var anc = element(by.css('a[href="/products"]'));
        anc.click();
        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/products");
    });

    it("Should navigate to new product page", () => {
        var btn = element(by.css(".btn.btn-primary"));
        btn.click();
        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/products/new");
    });

    it("Should have save button disabled", () => {
        var btn = element(by.css(".btn.btn-success"));
        expect(btn.isEnabled()).toBe(false);
    });

    it("Should enable the button when all validations pass", () => {
        var brand = element(by.css('input[formcontrolname="brand"]'));
        var model = element(by.css('input[formcontrolname="model"]'));
        var price = element(by.css('input[formcontrolname="price"]'));

        brand.sendKeys("Samsung");
        model.sendKeys("S8");
        price.sendKeys(200);

        browser.sleep(2000);

        var btn = element(by.css(".btn.btn-success"));
        expect(btn.isEnabled()).toBe(true);
    });

    it("Should navigate to products page", () => {
        var anc = element(by.css('a[href="/products"]'));
        anc.click();

        var divs = element.all(by.css(".well"));
        var div0 = divs.get(0);
        var link = div0.element(by.css("a"));
        link.click();
    });
});