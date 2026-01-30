import AfricanCountries from "./data/africa/countries.json";
import { Country, RegionResult } from "./types";
import { InvalidCountryCodeError, TribeDataNotFoundError, DataLoadError } from "./errors";
import { isValidCountryCode, normalizeCountryCode } from "./utils/validation";

/**
 * Fetches tribe data for a given African country code.
 * @param countryCode - The ISO code of the country.
 * @returns Array of tribe data objects for the country.
 * @throws {InvalidCountryCodeError} When the country code is invalid
 * @throws {TribeDataNotFoundError} When tribe data is not available for the country
 */
async function getTribeData(countryCode: string) {
  const normalizedCode = normalizeCountryCode(countryCode);
  
  if (!isValidCountryCode(normalizedCode)) {
    throw new InvalidCountryCodeError(
      `Invalid country code: '${countryCode}'. Must be a valid ISO 3166-1 alpha-2 code for an African country.`
    );
  }

  try {
    const jsonTribesData = await import(
      `./data/africa/tribes/${normalizedCode}.json`
    );
    return Object.values(jsonTribesData[normalizedCode] || {});
  } catch (err) {
    throw new TribeDataNotFoundError(
      `Tribe data not available for ${normalizedCode}. This country may not have tribal data in our database.`
    );
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
 * @returns The country object.
 * @throws {InvalidCountryCodeError} When the country code is invalid
 */
async function getCountry(countryCode: string) {
  const normalizedCode = normalizeCountryCode(countryCode);
  
  if (!isValidCountryCode(normalizedCode)) {
    throw new InvalidCountryCodeError(
      `Invalid country code: '${countryCode}'. Must be a valid ISO 3166-1 alpha-2 code for an African country.`
    );
  }

  const countries = await getCountries();
  const selectCountry = countries.find(
    (item) => item.countryCode === normalizedCode
  );

  if (!selectCountry) {
    throw new DataLoadError(
      `Country data not found for ${normalizedCode}. This should not happen for valid country codes.`
    );
  }

  return selectCountry;
}

/**
 * Retrieves a country and its tribe data as states by country code.
 * @param countryCode - The ISO code of the country.
 * @returns Country object with states property.
 * @throws {InvalidCountryCodeError} When the country code is invalid
 * @throws {TribeDataNotFoundError} When tribe data is not available (optional, will set states to empty array)
 */
async function getCountryAndState(countryCode: string) {
  const country = await getCountry(countryCode);
  
  try {
    const tribes = await getTribeData(countryCode);
    return {
      ...country,
      states: tribes,
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
/**
 * Retrieves tribe data (states) for a given country code.
 * @param countryCode - The ISO code of the country.
 * @returns Array of tribe data objects for the country.
 * @throws {InvalidCountryCodeError} When the country code is invalid
 * @throws {TribeDataNotFoundError} When tribe data is not available for the country
 */
async function getCountryStates(countryCode: string) {
  return await getTribeData(countryCode);
}

/**
 * Finds all regions where a specific tribe is located across Africa
 * @param tribeName - The name of the tribe to search for
 * @returns Promise resolving to an array of objects containing combined state and country information where the tribe is found
 * @throws {Error} When tribeName is empty or invalid
 */
async function getTribeRegion(tribeName: string): Promise<RegionResult[]> {
  if (!tribeName || typeof tribeName !== 'string' || tribeName.trim().length === 0) {
    throw new Error(
      `Invalid tribe name: '${tribeName}'. Tribe name must be a non-empty string.`
    );
  }

  const countries = await getCountriesAndStates() as Country[];
  
  const regions: RegionResult[] = [];

  countries.forEach((country) => {
    if (country.states && Array.isArray(country.states)) {
      const matchingStates = country.states.filter((state) => 
        state.tribes?.some(
          (tribe) => tribe.toLowerCase().includes(tribeName.toLowerCase())
        )
      );

      matchingStates.forEach((state) => {
        regions.push({
          capitalCity: state.capitalCity,
          country: country.name,
          countryCode: country.countryCode,
          geoPoliticalZone: state.geoPoliticalZone || "",
          location: state.location || "",
          name: state.name,
          stateCode: state.stateCode,
          subdivisions: state.subdivisions || [],
          tribes: state.tribes || [],
          type: state.type || ""
        });
      });
    }
  });

  return regions;
}

export {
  getCountries,
  getCountriesAndStates,
  getCountry,
  getCountryAndState,
  getCountryStates,
  getTribeRegion
};

export {
  InvalidCountryCodeError,
  TribeDataNotFoundError,
  DataLoadError
} from "./errors";

export {
  isValidCountryCode,
  normalizeCountryCode,
  getValidCountryCodes
} from "./utils/validation";
