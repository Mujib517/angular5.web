import { ProductListComponent } from './product-list.component';
import { Observable } from 'rxjs/Observable';

describe("Product List Component", () => {
    let comp, svc, activatedRoute;

    beforeEach(function () {

        let obs = new Observable(o => {
            o.next(10);
            o.complete();
        });

        svc = jasmine.createSpyObj("svc", ["get"]);
        svc.get = jasmine.createSpy("get").and.returnValue(obs);

        activatedRoute = {
            snapshot: {
                data: {
                    products: {
                        data: ["Nokia", "Samsung"]
                    }
                }
            }
        };
        comp = new ProductListComponent(svc, activatedRoute);
    });

    it("should have products undefined", () => {
        expect(comp.products).toBeUndefined();
    });

    it("should have products defined", () => {
        comp.ngOnInit();

        expect(comp.products).toBeDefined();
    });

    it("should have products defined", () => {
        comp.ngOnInit();
        expect(comp.products.length).toBe(2);
    });

    describe("refresh()", () => {

        it("should call productSvc.get", () => {
            comp.refresh();
            expect(svc.get).toHaveBeenCalledWith();
        });

        it('should show error on console', () => {
            let obs = new Observable(o => {
                o.error({ errMsg: "Failed" });
            });

            comp.refresh();

            svc.get.and.returnValue(obs);
        });


    });

    afterEach(function () {
        comp = null;
    });
});