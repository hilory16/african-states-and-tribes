import * as index from "../index";

// MOCK AFRICA COUNTRIES
jest.mock("../data/africa/countries.json", () => ({
  NG: { name: "Nigeria", capital: "Abuja" },
  GH: { name: "Ghana", capital: "Accra" },
}));

jest.mock("../data/africa/tribes/NG.json", () => ({
  functionA: jest.fn(() => "mocked functionA"),
}));

describe("African States & Tribes Library", () => {});
