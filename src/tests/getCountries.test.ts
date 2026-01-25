import { getCountries } from "../index";

// MOCK AFRICA (GH & NG) COUNTRIES
jest.mock(
  "../data/africa/countries.json",
  () => ({
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
  }),
  { virtual: true }
);

describe("getCountries", () => {
  it("should return all countries with countryCode", async () => {
    const countries = await getCountries();

    expect(countries).toHaveLength(2);

    expect(countries).toEqual([
      {
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
        countryCode: "NG",
      },
      {
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
        countryCode: "GH",
      },
    ]);
  });
});
