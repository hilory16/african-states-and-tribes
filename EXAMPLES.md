# Usage Examples

This file contains practical examples demonstrating how to use the modular imports feature.

## Example 1: Single Country Application

If your application only needs data for Nigeria:

```javascript
// Before (loads all 54 countries - ~337KB)
import { getCountry, getCountryStates } from 'african-states-and-tribes';

const nigeria = await getCountry('NG');
const states = await getCountryStates('NG');
```

```javascript
// After (loads only Nigeria - ~69KB, 79% smaller!)
import { getCountry, getStates } from 'african-states-and-tribes/countries/ng';

const nigeria = await getCountry();
const states = await getStates();
```

**Bundle size savings: ~268KB (79% reduction)**

## Example 2: Multi-Country Regional App

Building an app for West African countries:

```javascript
// Import only the countries you need
import * as nigeria from 'african-states-and-tribes/countries/ng';
import * as ghana from 'african-states-and-tribes/countries/gh';
import * as senegal from 'african-states-and-tribes/countries/sn';
import * as ivoryCoast from 'african-states-and-tribes/countries/ci';

// Use them
const countries = await Promise.all([
  nigeria.getCountry(),
  ghana.getCountry(),
  senegal.getCountry(),
  ivoryCoast.getCountry()
]);

console.log(`Loaded ${countries.length} West African countries`);
```

**Bundle size: ~150KB vs 337KB (55% smaller)**

## Example 3: Country Selector with Lazy Loading

Load country data only when selected by the user:

```javascript
async function loadCountryData(countryCode) {
  const lowerCode = countryCode.toLowerCase();
  
  try {
    // Dynamically import only when needed
    const countryModule = await import(`african-states-and-tribes/countries/${lowerCode}`);
    const data = await countryModule.getCountryAndStates();
    return data;
  } catch (error) {
    console.error(`Failed to load data for ${countryCode}:`, error);
    return null;
  }
}

// Usage in a UI
selectElement.addEventListener('change', async (e) => {
  const countryCode = e.target.value;
  const data = await loadCountryData(countryCode);
  displayCountryData(data);
});
```

**Initial bundle: ~5KB, loads country data on demand**

## Example 4: React Component with Code Splitting

```jsx
import { useState, useEffect } from 'react';

function CountryDetails({ countryCode }) {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        // Dynamic import with code splitting
        const module = await import(
          `african-states-and-tribes/countries/${countryCode.toLowerCase()}`
        );
        const data = await module.getCountryAndStates();
        setCountryData(data);
      } catch (error) {
        console.error('Error loading country data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [countryCode]);

  if (loading) return <div>Loading...</div>;
  if (!countryData) return <div>Error loading data</div>;

  return (
    <div>
      <h1>{countryData.name}</h1>
      <p>Capital: {countryData.capitalCity}</p>
      <p>Currency: {countryData.currency}</p>
      <h2>States/Regions</h2>
      <ul>
        {countryData.states.map(state => (
          <li key={state.stateCode}>{state.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Example 5: Next.js with Server-Side Rendering

```javascript
// pages/countries/[code].js
import { getCountry, getStates } from 'african-states-and-tribes/countries/ng';

export async function getServerSideProps({ params }) {
  // Import the specific country module
  const countryModule = await import(
    `african-states-and-tribes/countries/${params.code}`
  );
  
  const country = await countryModule.getCountry();
  const states = await countryModule.getStates();

  return {
    props: {
      country,
      states
    }
  };
}

export default function CountryPage({ country, states }) {
  return (
    <div>
      <h1>{country.name}</h1>
      <h2>States/Regions: {states.length}</h2>
      {/* ... */}
    </div>
  );
}
```

## Example 6: Using Named Exports

```javascript
// Import multiple countries via the countries index
import { 
  nigeria, 
  kenya, 
  southAfrica 
} from 'african-states-and-tribes/countries';

// Use them
const [ng, ke, za] = await Promise.all([
  nigeria.getCountryAndStates(),
  kenya.getCountryAndStates(),
  southAfrica.getCountryAndStates()
]);

console.log(`${ng.name}: ${ng.states.length} states`);
console.log(`${ke.name}: ${ke.states.length} counties`);
console.log(`${za.name}: ${za.states.length} provinces`);
```

## Example 7: TypeScript with Type Safety

```typescript
import { 
  getCountry, 
  getStates, 
  getCountryAndStates 
} from 'african-states-and-tribes/countries/ng';

// Types are automatically inferred
const country = await getCountry(); 
// Type: { name: string; countryCode: string; capitalCity: string; ... }

const states = await getStates();
// Type: Array<{ name: string; stateCode: string; tribes: string[]; ... }>

const data = await getCountryAndStates();
// Type: { ..., states: Array<...> }

// Use with type annotations
function displayCountry(data: Awaited<ReturnType<typeof getCountry>>) {
  console.log(`${data.name} - ${data.capitalCity}`);
}

displayCountry(country);
```

## Example 8: Migration Path

Gradually migrate from default imports to modular imports:

```javascript
// Phase 1: Current code (no changes needed)
import { getCountry } from 'african-states-and-tribes';
const nigeria = await getCountry('NG');

// Phase 2: Identify which countries you actually use
// Update code to use modular imports for those countries
import { getCountry as getNigeria } from 'african-states-and-tribes/countries/ng';
import { getCountry as getKenya } from 'african-states-and-tribes/countries/ke';

const nigeria = await getNigeria();
const kenya = await getKenya();

// Phase 3: Use modular imports throughout
import * as ng from 'african-states-and-tribes/countries/ng';
import * as ke from 'african-states-and-tribes/countries/ke';

const nigeriaData = await ng.getCountryAndStates();
const kenyaData = await ke.getCountryAndStates();
```

## Bundle Size Comparison

Real-world measurements from the library:

| Import Method | Bundle Size | Savings |
|--------------|-------------|---------|
| Default (all countries) | 337 KB | - |
| Single country (modular) | ~44 KB avg | ~79% |
| 3 countries (modular) | ~132 KB | ~61% |
| 5 countries (modular) | ~220 KB | ~35% |

## Best Practices

1. **Use modular imports when possible**: If you know which countries your app needs, always use modular imports to reduce bundle size.

2. **Lazy load when appropriate**: For user-selectable countries, use dynamic imports to load data only when needed.

3. **Keep backward compatibility**: The default imports still work perfectly for tools, scripts, or apps that need all countries.

4. **Consider your use case**:
   - Single country app? → Use modular import
   - Multiple known countries? → Use multiple modular imports
   - User-selected country? → Use dynamic imports
   - Need all countries? → Use default imports

5. **Monitor your bundle**: Use tools like webpack-bundle-analyzer to verify your actual bundle size after implementing modular imports.
