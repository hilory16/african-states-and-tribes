import * as index from "../index";

// MOCK AFRICA (GH & NG) COUNTRIES
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

// MOCK NG TRIBES AND STATES
jest.mock(
  "../data/africa/tribes/NG.json",
  () => ({
    NG: {
      ABIA: {
        capitalCity: "Umuahia",
        subdivisions: [
          "Aba North",
          "Aba South",
          "Arochukwu",
          "Bende",
          "Ikwuano",
          "Isiala Ngwa North",
          "Isiala Ngwa South",
          "Isuikwuato",
          "Obi Ngwa",
          "Ohafia",
          "Osisioma",
          "Ugwunagbo",
          "Ukwa East",
          "Ukwa West",
          "Umuahia North",
          "Umuahia South",
        ],
        geoPoliticalZone: "South East",
        location: "South East",
        name: "Abia",
        stateCode: "AB",
        tribes: ["Igbo"],
        type: "state",
      },
    },
  }),
  { virtual: true }
);

// MOCK NG TRIBES AND STATES
jest.mock(
  "../data/africa/tribes/GH.json",
  () => ({
    GH: {
      "AHAFO REGION": {
        capitalCity: "Goaso",
        subdivisions: [
          "Asunafo North",
          "Asunafo South",
          "Asutifi North",
          "Asutifi South",
          "Tano North",
          "Tano South",
        ],
        geoPoliticalZone: "Central",
        location: "Central Ghana",
        name: "Ahafo",
        stateCode: "AHR",
        tribes: ["Akan", "Brong", "Ewe"],
        type: "region",
      },
    },
  }),
  { virtual: true }
);

describe("African States & Tribes Library", () => {});
