import AfricanCountries from "../data/africa/countries.json";

const VALID_COUNTRY_CODES = Object.keys(AfricanCountries);

export function isValidCountryCode(countryCode: string): boolean {
  if (!countryCode || typeof countryCode !== 'string') {
    return false;
  }
  
  return VALID_COUNTRY_CODES.includes(countryCode.toUpperCase());
}

export function normalizeCountryCode(countryCode: string): string {
  return countryCode?.trim().toUpperCase() || '';
}

export function getValidCountryCodes(): string[] {
  return [...VALID_COUNTRY_CODES];
}