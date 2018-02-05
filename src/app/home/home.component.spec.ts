import { HomeComponent } from './home.component';

describe("HomeComponent", () => {

    let comp;
    let logger;

    beforeEach(function () {
        logger = jasmine.createSpyObj("logger", ["warn"]);
        comp = new HomeComponent(logger);
    });

    it("should call logger.warn method", () => {
        expect(logger.warn).toHaveBeenCalledWith("Component loading very slow");
    });

    afterEach(() => {
        comp = null;
    });
});