
import { describe, expect, it } from "@jest/globals";


interface State {
  name: string;
  stateCode: string;
  capitalCity: string;
  type: string;
  tribes: string[];
  subdivisions: string[];
  location: string;
  geoPoliticalZone?: string;
}


const statesData: State[] = [
  {
    name: "Lagos",
    stateCode: "LA",
    capitalCity: "Ikeja",
    type: "State",
    tribes: ["Awori", "Egun", "Yoruba"],
    subdivisions: ["Ikeja", "Epe"],
    location: "South-West",
    geoPoliticalZone: "South West",
  },
  {
    name: "Kaduna",
    stateCode: "KD",
    capitalCity: "Kaduna",
    type: "State",
    tribes: [
      "Adara (Kadara)",
      "Atyap (Attakar)",
      "Ayu",
      "Bassa",
      "Bina (Binawa)",
      "Fulani",
      "Gure",
      "Gwandara",
      "Gwari (Gbari)",
      "Gwong(Kagoma)",
      "Hausa",
      "Jaba",
      "Kagoro",
      "Kaje (Kache)",
      "Kajuru (Kajurawa)",
      "Kamaku (Karnukawa)",
      "Kanikon",
      "Kanuri",
      "Kariya",
      "Kiballo (Kiwollo)",
      "Koro (Kwaro)",
      "Kurama",
      "Mada",
      "Manchok",
      "Moruwa (Moro’a, Morwa)",
      "Ninzam (Ninzo)",
      "Nunku",
      "Rishuwa",
      "Rumada",
      "Rumaya",
      "Srubu (Surubu)",
      "Uncinda",
    ],
    subdivisions: ["Zaria", "Kachia"],
    location: "North-West",
  },
];

describe("getTribeRegion", () => {
  it("should correctly map states with tribes", () => {
    const mappedStates = [];

    for (const state of statesData) {
     
      if (!Array.isArray(state.tribes)) continue;

      const hasTribe = state.tribes.some((tribe) => tribe === "Yoruba");

      if (hasTribe) {
        mappedStates.push({
          name: state.name,
          stateCode: state.stateCode,
          capitalCity: state.capitalCity,
          type: state.type,
          tribes: state.tribes,
          subdivisions: state.subdivisions,
          location: state.location,
          geoPoliticalZone: state.geoPoliticalZone || "",
        });
      }
    }

    expect(mappedStates.length).toBeGreaterThan(0);
    expect(mappedStates[0].tribes).toContain("Yoruba");
  });
});
