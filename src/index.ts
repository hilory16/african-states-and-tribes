import AfricanCountries from "./data/africa/countries.json";
import NGTribes from "./data/africa/tribes/NG.json";

// Get All African Countries
function getAfricanCountries() {
  const countries = Object.keys(AfricanCountries).map((item) => ({
    ...AfricanCountries[item as keyof typeof AfricanCountries],
    countryCode: item,
  }));

  return countries;
}

function getAfricanCountriesAndTribes(countryCode: string) {}
//

// Get an African Country
function getCountryByCode(countryCode: string) {}
function getCountryAndTribeByCode(countryCode: string) {}
//

// Get Tribes
function getTribesByCountry(countryCode: string) {}

export {
  getAfricanCountries,
  getAfricanCountriesAndTribes,
  getCountryByCode,
  getCountryAndTribeByCode,
  getTribesByCountry,
};
