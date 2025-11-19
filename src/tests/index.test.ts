import * as index from "../index";

// MOCK AFRICA COUNTRIES
jest.mock(
  "../data/africa/countries.json",
  () => ({
    NG: {
      phoneCode: 234,
      capitalCity: "Abuja",
      colonialMaster: [
        {
          name: "United Kingdom",
          countryCode: "GB",
        },
      ],
      countryCode: "NG",
      flagEmoji: "🇳🇬",
      name: "Nigeria",
      currency: "Nigerian naira",
      currencyCode: "NGN",
      currencySymbol: "₦",
      officialLanguage: "English",
      majorEthnicGroups: ["Fulani", "Hausa", "Igbo", "Yoruba"],
      timezones: [
        {
          iana: "Africa/Lagos",
          gmtOffset: "+01:00",
        },
      ],
    },
    GH: {
      phoneCode: 233,
      capitalCity: "Accra",
      colonialMaster: [
        {
          name: "United Kingdom",
          countryCode: "GB",
        },
      ],
      countryCode: "GH",
      flagEmoji: "🇬🇭",
      name: "Ghana",
      currency: "Ghanaian cedi",
      currencyCode: "GHS",
      currencySymbol: "₵",
      officialLanguage: "English",
      majorEthnicGroups: ["Akan", "Ewe"],
      timezones: [
        {
          iana: "Africa/Accra",
          gmtOffset: "+00:00",
        },
      ],
    },
  }),
  { virtual: true }
);

jest.mock("../data/africa/tribes/NG.json", () => ({
  functionA: jest.fn(() => "mocked functionA"),
}));

describe("African States & Tribes Library", () => {});
