import AfricanCountries from "./data/africa/countries.json";

async function getTribeData(countryCode: string) {
  try {
    const jsonTribesData = await import(
      `./data/africa/tribes/${countryCode}.json`
    );
    return Object.values(jsonTribesData[countryCode] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for ${countryCode}:`, err.message);
    return [];
  }
}

// Get All African Countries
async function getCountries() {
  const countries = Object.keys(AfricanCountries).map((item) => ({
    ...AfricanCountries[item as keyof typeof AfricanCountries],
    countryCode: item,
  }));

  return countries;
}

async function getCountriesAndStates() {
  const countries = await getCountries();

  const embeddedData = await Promise.all(
    countries.map(async (item) => ({
      ...item,
      states: await getTribeData(item.countryCode),
    }))
  );

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

// async function getCountriesAndStates(countryCode: string) {
//   const country = await getCountry(countryCode);
//   const tribes = await getTribeData(countryCode);
//   if (Object.keys(country).length > 0) {
//     return {
//       ...country,
//       tribalDistribution: tribes,
//     };
//   }

//   return {};
// }

async function getCountryAndState(countryCode: string) {
  const country = await getCountry(countryCode);
  const tribes = await getTribeData(countryCode);
  if (Object.keys(country).length > 0) {
    return {
      ...country,
      states: tribes,
    };
  }

  return {};
}
//

// Get Tribes
async function getCountryStates(countryCode: string) {
  const tribes = await getTribeData(countryCode);

  return tribes;
}

export {
  getCountries,
  getCountriesAndStates,
  getCountry,
  getCountryAndState,
  getCountryStates,
};
