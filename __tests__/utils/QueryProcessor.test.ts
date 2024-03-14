import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });
    test('should return name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Wikignometry"
          ));
    });
    test('should return plus', () => {
        const query = "What is 19 plus 37?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "56"
          ));
    });

    test('should return largest', () => {
        const query = "Which of the following numbers is the largest: 50, 24, 31?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "50"
          ));
    });

    test('should return mul', () => {
        const query = "What is 90 multiplied by 89?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "8010"
          ));
    });
    // test('should return mul', () => {
    //     const query = "Which of the following numbers is both a square and a cube: 1089, 2197, 3924, 1860, 4096, 1071, 4983?";
    //     const response: string = QueryProcessor(query);
    //     expect(response).toBe((
    //         "8010"
    //       ));
    // });
});