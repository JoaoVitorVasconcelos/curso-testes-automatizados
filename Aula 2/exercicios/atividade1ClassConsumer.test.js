const StringManipulations = require('../atividade1ClassConsumer');

let stringM;
let strStringM;

describe("String Manipulations class mock", () => {

  it('should call the String Manipulations constructor', () => {
    strStringM = 'Rua de teste';
    stringM = new StringManipulations(strStringM);
  });

});

describe("Atividade 1 - Class Consumer Test", () => {
  test(" Searches for the street name in the given address", () => {
    const output = 'R';
    const actual = stringM.findStreetName("Rua de teste");
    expect(actual).toEqual(output);
  });

  test("if returns string changed to *", () => {
    const output = '*est';
    const actual = stringM.hideStreetName("test");
    expect(actual).toEqual(output);
  });

});
