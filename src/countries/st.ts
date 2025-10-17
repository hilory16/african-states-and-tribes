import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Sao Tome And Principe country data
 * @returns Sao Tome And Principe country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["ST"],
    countryCode: "ST",
  };
}

/**
 * Get Sao Tome And Principe states/tribes data
 * @returns Array of state/tribe data for Sao Tome And Principe
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/ST.json");
    return Object.values(jsonTribesData["ST"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for ST:`, err.message);
    return [];
  }
}

/**
 * Get Sao Tome And Principe country with states/tribes data
 * @returns Sao Tome And Principe country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
