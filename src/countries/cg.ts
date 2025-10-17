import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Republic of the Congo country data
 * @returns Republic of the Congo country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["CG"],
    countryCode: "CG",
  };
}

/**
 * Get Republic of the Congo states/tribes data
 * @returns Array of state/tribe data for Republic of the Congo
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/CG.json");
    return Object.values(jsonTribesData["CG"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for CG:`, err.message);
    return [];
  }
}

/**
 * Get Republic of the Congo country with states/tribes data
 * @returns Republic of the Congo country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
