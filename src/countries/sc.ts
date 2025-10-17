import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Seychelles country data
 * @returns Seychelles country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["SC"],
    countryCode: "SC",
  };
}

/**
 * Get Seychelles states/tribes data
 * @returns Array of state/tribe data for Seychelles
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/SC.json");
    return Object.values(jsonTribesData["SC"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for SC:`, err.message);
    return [];
  }
}

/**
 * Get Seychelles country with states/tribes data
 * @returns Seychelles country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
