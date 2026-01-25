# Modular Imports Guide

This guide explains how to use modular imports to optimize your bundle size.

## Why Modular Imports?

By default, importing from `african-states-and-tribes` loads data for all 54 African countries, which increases your bundle size. With modular imports, you can import only the specific countries you need, significantly reducing your application's bundle size.

## Bundle Size Comparison

- **Default import (all countries)**: ~832KB of data files
- **Modular import (single country)**: ~5-30KB per country (varies by country)

**Example savings:** If you only need Nigeria data, you save ~800KB+ of unnecessary data!

## How to Use Modular Imports

### Import a Specific Country

```javascript
// Import only Nigeria
import { getCountry, getStates, getCountryAndStates } from 'african-states-and-tribes/countries/ng';

// Get country metadata
const nigeria = await getCountry();

// Get states/tribes data
const states = await getStates();

// Get everything together
const nigeriaWithStates = await getCountryAndStates();
```

### Import Multiple Countries

```javascript
// Import multiple specific countries
import * as nigeria from 'african-states-and-tribes/countries/ng';
import * as kenya from 'african-states-and-tribes/countries/ke';
import * as ghana from 'african-states-and-tribes/countries/gh';

const nigerianStates = await nigeria.getStates();
const kenyanStates = await kenya.getStates();
const ghanaianStates = await ghana.getStates();
```

### Import All Countries via Named Exports

If you want to use multiple countries but still want tree-shaking support:

```javascript
import { nigeria, kenya, ghana } from 'african-states-and-tribes/countries';

const nigeriaData = await nigeria.getCountry();
const kenyaData = await kenya.getCountry();
const ghanaData = await ghana.getCountry();
```

## Available Country Codes

Each country is available as a lowercase 2-letter ISO code:

| Code | Country | Code | Country | Code | Country |
|------|---------|------|---------|------|---------|
| `ao` | Angola | `na` | Namibia | `ss` | South Sudan |
| `bf` | Burkina Faso | `ne` | Niger | `st` | Sao Tome and Principe |
| `bi` | Burundi | `ng` | Nigeria | `sz` | Eswatini |
| `bj` | Benin | `rw` | Rwanda | `td` | Chad |
| `bw` | Botswana | `sc` | Seychelles | `tg` | Togo |
| `cd` | DR Congo | `sd` | Sudan | `tn` | Tunisia |
| `cf` | Central African Republic | `sl` | Sierra Leone | `tz` | Tanzania |
| `cg` | Republic of Congo | `sn` | Senegal | `ug` | Uganda |
| `ci` | Ivory Coast | `so` | Somalia | `za` | South Africa |
| `cm` | Cameroon | `zm` | Zambia | | |
| `cv` | Cape Verde | `zw` | Zimbabwe | | |
| `dj` | Djibouti | `eg` | Egypt | | |
| `dz` | Algeria | `er` | Eritrea | | |
| `et` | Ethiopia | `ga` | Gabon | | |
| `gh` | Ghana | `gm` | Gambia | | |
| `gn` | Guinea | `gq` | Equatorial Guinea | | |
| `gw` | Guinea-Bissau | `ke` | Kenya | | |
| `km` | Comoros | `lr` | Liberia | | |
| `ls` | Lesotho | `ly` | Libya | | |
| `ma` | Morocco | `mg` | Madagascar | | |
| `ml` | Mali | `mr` | Mauritania | | |
| `mu` | Mauritius | `mw` | Malawi | | |
| `mz` | Mozambique | | | | |

## API Reference

Each country module exports three functions:

### `getCountry()`

Returns the country's metadata (name, capital, currency, etc.) without states/tribes data.

```javascript
const country = await getCountry();
// Returns: { name, countryCode, capitalCity, currency, ... }
```

### `getStates()`

Returns only the states/tribes data for the country.

```javascript
const states = await getStates();
// Returns: [{ name, stateCode, tribes, subdivisions, ... }, ...]
```

### `getCountryAndStates()`

Returns the country metadata with embedded states/tribes data.

```javascript
const countryWithStates = await getCountryAndStates();
// Returns: { name, countryCode, ..., states: [...] }
```

## TypeScript Support

All modular imports include full TypeScript type definitions:

```typescript
import { getCountry, getStates, getCountryAndStates } from 'african-states-and-tribes/countries/ng';

// Types are automatically inferred
const country = await getCountry(); // Type: Country
const states = await getStates(); // Type: State[]
const data = await getCountryAndStates(); // Type: CountryWithStates
```

## Migration from Default Imports

If you're currently using the default import and want to migrate to modular imports:

### Before (Default Import)

```javascript
import { getCountry, getCountryStates } from 'african-states-and-tribes';

const nigeria = await getCountry('NG');
const states = await getCountryStates('NG');
```

### After (Modular Import)

```javascript
import { getCountry, getStates } from 'african-states-and-tribes/countries/ng';

const nigeria = await getCountry(); // No need to pass country code
const states = await getStates(); // No need to pass country code
```

## Backward Compatibility

The default imports are still fully supported and work exactly as before. You can gradually migrate to modular imports without breaking existing code.

```javascript
// Still works perfectly
import { getCountries, getCountry, getCountryStates } from 'african-states-and-tribes';
```
