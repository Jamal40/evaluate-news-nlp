import { checkForName } from "../src/client/js/nameChecker";

describe("Testing the checjing for name functionality", () => {
  test("Testing that checkForName() function exists", () => {
    expect(checkForName).toBeDefined();
  });
});

describe("Testing the submit functionality", () => {
  test("passing Picard returns true", () => {
    expect(checkForName("Picard")).toBe(true);
  });
});

describe("Testing the submit functionality", () => {
  test("passing Janeway returns true", () => {
    expect(checkForName("Janeway")).toBe(true);
  });
});

describe("Testing the submit functionality", () => {
  test("passing Kirk returns true", () => {
    expect(checkForName("Kirk")).toBe(true);
  });
});

describe("Testing the submit functionality", () => {
  test("passing Archer returns true", () => {
    expect(checkForName("Archer")).toBe(true);
  });
});

describe("Testing the submit functionality", () => {
  test("passing Georgiou returns true", () => {
    expect(checkForName("Georgiou")).toBe(true);
  });
});

describe("Testing the submit functionality", () => {
  test("passing Jamal returns false", () => {
    expect(checkForName("Jamal")).toBe(false);
  });
});
