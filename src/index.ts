import AfricanCountries from "./data/africa/countries.json";

/**
 * Fetches tribe data for a given African country code.
 * @param countryCode - The ISO code of the country.
 * @returns Array of tribe data objects for the country.
 */
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

/**
 * Retrieves all African countries with their metadata.
 * @returns Array of country objects with countryCode property.
 */
async function getCountries() {
  const countries = Object.keys(AfricanCountries).map((item) => ({
    ...AfricanCountries[item as keyof typeof AfricanCountries],
    countryCode: item,
  }));

  return countries;
}

/**
 * Retrieves all African countries and embeds their tribe data as states.
 * @returns Array of country objects with states property containing tribe data.
 */
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
/**
 * Retrieves a single African country by its code.
 * @param countryCode - The ISO code of the country.
 * @returns The country object or empty object if not found.
 */
async function getCountry(countryCode: string) {
  const countries = await getCountries();
  const selectCountry = countries.find(
    (item) => item.countryCode === countryCode
  );

  if (selectCountry) return selectCountry;
  return {};
}

/**
 * Retrieves a country and its tribe data as states by country code.
 * @param countryCode - The ISO code of the country.
 * @returns Country object with states property or empty object if not found.
 */
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
/**
 * Retrieves tribe data (states) for a given country code.
 * @param countryCode - The ISO code of the country.
 * @returns Array of tribe data objects for the country.
 */
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
