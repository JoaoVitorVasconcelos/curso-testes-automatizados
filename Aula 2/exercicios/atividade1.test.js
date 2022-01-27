const StringManipulations = require('../atividade1');

let stringM;
let shortStringM;
let strStringM;
let shortStrStringM;

describe("String Manipulations class mock", () => {

    it('should call the String Manipulations constructor', () => {
        strStringM = 'testes';
        stringM = new StringManipulations(strStringM);
    });

    it('should call the String Manipulations constructor', () => {
        shortStrStringM = 't';
        shortStringM = new StringManipulations(shortStrStringM);
    });

});

describe("Atividade 1 teste", () => {
    test("Returns the first substring that matches the given string", () => {
        const output = 't';
        const actual = stringM.findFirstMatch("testes");
        expect(actual).toEqual(output);
    });

    test("Returns the last substring that matches the given string", () => {
        const output = 's';
        const actual = stringM.findLastMatch("testes");
        expect(actual).toEqual(output);
    });

    test("Returns the substring between two given other strings", () => {
        const output = 'tes';
        const actual = stringM.substringBetweenMatches("tes", "tes");
        expect(actual).toEqual(output);
    });

    test("The first 2 and last 2 characters of the original string.", () => {
        const output = 'tees';
        const actual = stringM.both_ends();
        expect(actual).toEqual(output);
    });

    test("if returns string changed to *", () => {
        const output = '*abble';
        const actual = shortStringM.fix_start("babble");
        expect(actual).toEqual(output);
    });

});
