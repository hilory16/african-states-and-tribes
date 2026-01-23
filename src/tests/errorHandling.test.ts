import { getCountry, getCountryStates, InvalidCountryCodeError, TribeDataNotFoundError } from "../index";

describe("Error Handling", () => {
  it("should throw InvalidCountryCodeError for invalid country code", async () => {
    await expect(getCountry("INVALID")).rejects.toThrow(InvalidCountryCodeError);
    await expect(getCountry("INVALID")).rejects.toThrow("Invalid country code: 'INVALID'");
  });

  it("should throw InvalidCountryCodeError for empty country code", async () => {
    await expect(getCountry("")).rejects.toThrow(InvalidCountryCodeError);
    await expect(getCountry(null as any)).rejects.toThrow(InvalidCountryCodeError);
  });

  it("should work with valid country code (case insensitive)", async () => {
    const country1 = await getCountry("NG");
    const country2 = await getCountry("ng");
    
    expect(country1.name).toBe("Nigeria");
    expect(country2.name).toBe("Nigeria");
    expect(country1.countryCode).toBe("NG");
  });

  it("should handle missing tribe data gracefully", async () => {
    try {
      const states = await getCountryStates("CV");
      expect(Array.isArray(states)).toBe(true);
    } catch (err) {
      expect(err).toBeInstanceOf(TribeDataNotFoundError);
    }
  });
});