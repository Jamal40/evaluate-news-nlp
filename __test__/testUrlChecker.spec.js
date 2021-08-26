import { checkForURL } from "../src/client/js/urlChecker";

describe("Testing checking Url functionality", () => {
  test("Testing that checkForURL() function is defined", () => {
    expect(checkForURL).toBeDefined();
  });
});

describe("Testing checking Url functionality", () => {
  test("Testing that passing google url returns true", () => {
    expect(checkForURL("https://www.google.com/")).toBe(true);
  });
});

describe("Testing checking Url functionality", () => {
  test("Testing that passing single word returns false", () => {
    expect(checkForURL("Jamal")).toBe(false);
  });
});
