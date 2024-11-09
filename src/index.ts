import AfricanCountries from "./data/africa/countries.json";

async function getTribeData(countryCode: string) {
  const jsonTribesData = await import(
    `./data/africa/tribes/${countryCode}.json`
  );

  return Object.values(jsonTribesData[countryCode]);
}

// Get All African Countries
async function getCountries() {
  const countries = Object.keys(AfricanCountries).map((item) => ({
    ...AfricanCountries[item as keyof typeof AfricanCountries],
    countryCode: item,
  }));

  return countries;
}

async function getCountriesAndTribalData(countryCode: string) {
  const countries = await getCountries();
  const tribeData = await getTribeData(countryCode);
  const embeddedData = countries.map((item) => ({
    ...item,
    tribalDistribution: tribeData,
  }));

  return embeddedData;
}
//

// Get an African Country
async function getCountry(countryCode: string) {
  const countries = await getCountries();
  const selectCountry = countries.find(
    (item) => item.countryCode === countryCode
  );

  if (selectCountry) return selectCountry;
  return {};
}

async function getCountryAndTribalData(countryCode: string) {
  const country = await getCountry(countryCode);
  const tribes = await getTribeData(countryCode);
  if (Object.keys(country).length > 0) {
    return {
      ...country,
      tribalDistribution: tribes,
    };
  }

  return {};
}
//

// Get Tribes
async function getTribesByCountry(countryCode: string) {
  const tribes = await getTribeData(countryCode);

  return tribes;
}

export {
  getCountries,
  getCountriesAndTribalData,
  getCountry,
  getCountryAndTribalData,
  getTribesByCountry,
};
