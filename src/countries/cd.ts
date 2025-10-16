import AfricanCountries from "../data/africa/countries.json";

/**
 * Get Democratic Republic of the Congo country data
 * @returns Democratic Republic of the Congo country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["CD"],
    countryCode: "CD",
  };
}

/**
 * Get Democratic Republic of the Congo states/tribes data
 * @returns Array of state/tribe data for Democratic Republic of the Congo
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/CD.json");
    return Object.values(jsonTribesData["CD"] || {});
  } catch (err) {
    console.warn(`⚠️ No tribe data found for CD:`, err.message);
    return [];
  }
}

/**
 * Get Democratic Republic of the Congo country with states/tribes data
 * @returns Democratic Republic of the Congo country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  const states = await getStates();
  return {
    ...country,
    states,
  };
}
