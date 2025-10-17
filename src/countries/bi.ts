import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Burundi country data
 * @returns Burundi country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["BI"],
    countryCode: "BI",
  };
}

/**
 * Get Burundi states/tribes data
 * @returns Array of state/tribe data for Burundi
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/BI.json");
    return Object.values(jsonTribesData["BI"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for BI:`, err.message);
    return [];
  }
}

/**
 * Get Burundi country with states/tribes data
 * @returns Burundi country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
