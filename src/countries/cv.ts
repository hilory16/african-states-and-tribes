import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Cabo Verde country data
 * @returns Cabo Verde country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["CV"],
    countryCode: "CV",
  };
}

/**
 * Get Cabo Verde states/tribes data
 * @returns Array of state/tribe data for Cabo Verde
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/CV.json");
    return Object.values(jsonTribesData["CV"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for CV:`, err.message);
    return [];
  }
}

/**
 * Get Cabo Verde country with states/tribes data
 * @returns Cabo Verde country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
