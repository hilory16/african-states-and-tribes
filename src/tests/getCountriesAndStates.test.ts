describe("getCountriesAndStates", () => {
  const mockCountries = {
    NG: { name: "Nigeria", capitalCity: "Abuja" },
    GH: { name: "Ghana", capitalCity: "Accra" },
  };

  const mockTribesNG = {
    NG: {
      LAG: {
        name: "Lagos",
        tribes: ["Yoruba"],
      },
    },
  };

  const mockTribesGH = {
    GH: {
      ACC: {
        name: "Accra Region",
        tribes: ["Akan"],
      },
    },
  };

  // Helper to run test with mocks
  const runWithMocks = async (options: { countries: any; tribes?: any }) => {
    jest.resetModules();
    jest.doMock("../data/africa/countries.json", () => options.countries, {
      virtual: true,
    });

    // Mock tribe imports
    jest.doMock(
      "../data/africa/tribes/NG.json",
      () => options.tribes?.NG || {},
      { virtual: true }
    );
    jest.doMock(
      "../data/africa/tribes/GH.json",
      () => options.tribes?.GH || {},
      { virtual: true }
    );

    const { getCountriesAndStates } = await import("../index");
    return getCountriesAndStates();
  };

  // ----------------------------------------------------------
  it("should return each country with its tribe data embedded as states", async () => {
    const result = await runWithMocks({
      countries: mockCountries,
      tribes: { NG: mockTribesNG, GH: mockTribesGH },
    });

    expect(result).toEqual([
      {
        name: "Nigeria",
        capitalCity: "Abuja",
        countryCode: "NG",
        states: Object.values(mockTribesNG.NG),
      },
      {
        name: "Ghana",
        capitalCity: "Accra",
        countryCode: "GH",
        states: Object.values(mockTribesGH.GH),
      },
    ]);
  });

  // ----------------------------------------------------------
  it("should return states as empty array if tribe file does not exist", async () => {
    // No mock tribes to simulate missing file
    const result = await runWithMocks({
      countries: mockCountries,
      tribes: {},
    });

    expect(result[0].states).toEqual([]);
    expect(result[1].states).toEqual([]);
  });

  // ----------------------------------------------------------
  it("should handle malformed tribe structure gracefully", async () => {
    const malformedTribes = {
      NG: { NG: null },
      GH: { GH: 123 },
    };

    const result = await runWithMocks({
      countries: mockCountries,
      tribes: malformedTribes,
    });

    expect(result[0]).toMatchObject({
      countryCode: "NG",
      states: [], // null → []
    });

    expect(result[1]).toMatchObject({
      countryCode: "GH",
      states: [], // number → []
    });
  });

  // ----------------------------------------------------------
  it("should return empty array when countries.json is empty", async () => {
    const result = await runWithMocks({
      countries: {},
      tribes: {},
    });

    expect(result).toEqual([]);
  });
});
