import AfricanCountries from "./data/africa/countries.json";
import NGTribes from "./data/africa/tribes/NG.json";

function getAllAfricanCountries() {
  const countries = Object.keys(AfricanCountries).map((item) => ({
    ...AfricanCountries[item as keyof typeof AfricanCountries],
    countryCode: item,
  }));

  return countries;
}

function getCountryByCode(countryCode: string) {}

function getTribalDataByCode(countryCode: string) {}

export { getAllAfricanCountries, getCountryByCode, getTribalDataByCode };
