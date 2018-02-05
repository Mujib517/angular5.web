import { ProductService } from './product.service';

describe("Product Service", () => {

    let svc, http;

    beforeEach(function () {
        http = jasmine.createSpyObj("http", ["get"]);
        svc = new ProductService(http);
    });

    it('should make a web service call and get data', function () {
        svc.get();
        expect(http.get).toHaveBeenCalledWith("https://exp-rest-api.herokuapp.com/api/products/");
    });
});