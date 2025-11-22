describe("getCountry", () => {
  const runWithMock = async (mockData: any, countryCode: string) => {
    // Mock countries.json for the test
    jest.doMock("../data/africa/countries.json", () => mockData, {
      virtual: true,
    });

    jest.resetModules(); // Clear import cache

    const { getCountry } = await import("../index");
    return getCountry(countryCode);
  };

  // ----------------------------------------
  it("should return a country if it exists", async () => {
    const mockData = {
      NG: { name: "Nigeria", capitalCity: "Abuja" },
      GH: { name: "Ghana", capitalCity: "Accra" },
    };

    const result = await runWithMock(mockData, "NG");

    expect(result).toEqual({
      name: "Nigeria",
      capitalCity: "Abuja",
      countryCode: "NG",
    });
  });

  // ----------------------------------------
  it("should return {} if the country does not exist", async () => {
    const mockData = {
      NG: { name: "Nigeria" },
    };

    const result = await runWithMock(mockData, "ZZ");

    expect(result).toEqual({});
  });

  // ----------------------------------------
  it("should return {} when countries.json is empty", async () => {
    const result = await runWithMock({}, "NG");
    expect(result).toEqual({});
  });

  // ----------------------------------------
  it("should safely handle malformed entries", async () => {
    const mockData = {
      BAD: null,
      TEST: "invalid",
    };

    const result = await runWithMock(mockData, "BAD");

    // Since BAD is null, getCountries will map it to:
    // { countryCode: "BAD" }
    expect(result).toEqual({ countryCode: "BAD" });
  });
});
