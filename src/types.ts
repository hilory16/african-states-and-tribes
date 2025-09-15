export type Country = {
  name: string;
  countryCode: string;
  capitalCity: string;
  flagEmoji: string;
  phoneCode: number;
  currency: string;
  currencyCode: string;
  currencySymbol: string;
  officialLanguage: string;
  majorEthnicGroups?: string[];
  states?: State[];
  timezones?: Array<{ iana: string; gmtOffset: string }>;
};

export type RegionResult = {
  capitalCity: string;
  country: string;
  countryCode: string;
  geoPoliticalZone: string;
  location: string;
  name: string;
  stateCode: string;
  subdivisions: string[];
  tribes: string[];
  type: string;
};

export type State = {
  name: string;
  stateCode: string;
  capitalCity: string;
  geoPoliticalZone?: string;
  location?: string;
  tribes?: string[];
  subdivisions?: string[];
  type?: string;
};
