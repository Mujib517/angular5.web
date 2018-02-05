import { ContactComponent } from './contact.component';

describe("Contact Component", () => {
    let comp;

    beforeEach(() => {
        comp = new ContactComponent();
    });

    it('should have showElement Property defined', () => {
        expect(comp.showElement).toBeDefined();
    });

    it('should have showElement set to true', () => {
        expect(comp.showElement).toBe(true);
    });

    afterEach(() => {
        comp = null;
    });
});