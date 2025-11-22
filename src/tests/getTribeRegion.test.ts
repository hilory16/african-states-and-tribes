import { getTribeRegion } from "../index"; // <-- fix path if needed

describe("getTribeRegion", () => {
  it("should return an array", async () => {
    const result = await getTribeRegion("Yoruba");
    expect(Array.isArray(result)).toBe(true);
  });

  it("should return only states that contain the specified tribe", async () => {
    const result = await getTribeRegion("Yoruba");

    expect(result.length).toBeGreaterThan(0);

    for (const state of result) {
      const containsTribe = state.tribes.some((t) =>
        t.toLowerCase().includes("yoruba")
      );
      expect(containsTribe).toBe(true);
    }
  });

  it("should return an empty array for a tribe that does not exist", async () => {
    const result = await getTribeRegion("NON_EXISTENT_TRIBE_123");
    expect(result).toEqual([]);
  });

  it("should return objects with the required structure", async () => {
    const result = await getTribeRegion("Yoruba");

    const sample = result[0];
    expect(sample).toHaveProperty("name");
    expect(sample).toHaveProperty("stateCode");
    expect(sample).toHaveProperty("capitalCity");
    expect(sample).toHaveProperty("type");
    expect(sample).toHaveProperty("tribes");
    expect(sample).toHaveProperty("subdivisions");
    expect(sample).toHaveProperty("location");
    expect(sample).toHaveProperty("geoPoliticalZone");
  });
});
