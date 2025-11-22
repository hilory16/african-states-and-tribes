describe("getCountries", () => {
  const runWithMock = async (mockData: any) => {
    jest.doMock("../data/africa/countries.json", () => mockData, {
      virtual: true,
    });

    jest.resetModules();

    const { getCountries } = await import("../index");
    return getCountries();
  };

  // ----------------------------------------------------
  it("should return all countries with countryCode", async () => {
    const mockData = {
      NG: {
        phoneCode: 234,
        capitalCity: "Abuja",
        colonialMaster: [{ name: "United Kingdom", countryCode: "GB" }],
        flagEmoji: "🇳🇬",
        name: "Nigeria",
        currency: "Nigerian naira",
        currencyCode: "NGN",
        currencySymbol: "₦",
        officialLanguage: "English",
        majorEthnicGroups: ["Fulani", "Hausa", "Igbo", "Yoruba"],
        timezones: [{ iana: "Africa/Lagos", gmtOffset: "+01:00" }],
      },
      GH: {
        phoneCode: 233,
        capitalCity: "Accra",
        colonialMaster: [{ name: "United Kingdom", countryCode: "GB" }],
        flagEmoji: "🇬🇭",
        name: "Ghana",
        currency: "Ghanaian cedi",
        currencyCode: "GHS",
        currencySymbol: "₵",
        officialLanguage: "English",
        majorEthnicGroups: ["Akan", "Ewe"],
        timezones: [{ iana: "Africa/Accra", gmtOffset: "+00:00" }],
      },
    };

    const countries = await runWithMock(mockData);

    expect(countries).toHaveLength(2);
    expect(countries[0]).toMatchObject({ countryCode: "NG" });
    expect(countries[1]).toMatchObject({ countryCode: "GH" });
  });

  // ----------------------------------------------------
  it("should return an empty array if countries.json is empty", async () => {
    const countries = await runWithMock({});
    expect(countries).toEqual([]);
  });

  // ----------------------------------------------------
  it("should handle malformed countries.json structure", async () => {
    const mockData = {
      INVALID: null,
      TEST: 123,
    };

    const countries = await runWithMock(mockData);

    expect(countries).toEqual([
      { countryCode: "INVALID" },
      { countryCode: "TEST" },
    ]);
  });
});
