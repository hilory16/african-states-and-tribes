import AfricanCountries from "../data/africa/countries.json";
import { TribeDataNotFoundError } from "../errors";

/**
 * Get Nigeria country data
 * @returns Nigeria country object
 */
export async function getCountry() {
  return {
    ...AfricanCountries["NG"],
    countryCode: "NG",
  };
}

/**
 * Get Nigeria states/tribes data
 * @returns Array of state/tribe data for Nigeria
 * @throws {TribeDataNotFoundError} When tribe data is not available
 */
export async function getStates() {
  try {
    const jsonTribesData = await import("../data/africa/tribes/NG.json");
    return Object.values(jsonTribesData["NG"] || {});
  } catch (err) {
    throw new TribeDataNotFoundError(
      `Tribe data not available for NG. This country may not have tribal data in our database.`
    );
  }
}

/**
 * Get Nigeria country with states/tribes data
 * @returns Nigeria country object with states property
 */
export async function getCountryAndStates() {
  const country = await getCountry();
  try {
    const states = await getStates();
    return {
      ...country,
      states,
    };
  } catch (err) {
    if (err instanceof TribeDataNotFoundError) {
      return {
        ...country,
        states: [],
      };
    }
    throw err;
  }
}
