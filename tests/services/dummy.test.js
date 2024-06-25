import {exe} from "../../src/services/dummy-service.js";

test("My Name is", async () => {
    const res=exe();
    expect(res).toBe('adeeb');//what output is expected
});