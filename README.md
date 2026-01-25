# African-states-and-tribes

A lightweight zero-dependency JavaScript/TypeScript utility library for African countries and their corresponding states and tribes, dynamically loaded by country code. It provides structured access to comprehensive data on African countries and their administrative geography and ethnic groups.

The library includes country-level metadata (such as name, capital, currency, phone code, flag, and ISO codes), supports geographic hierarchies including local government areas (LGAs) and other administrative subdivisions across all countries, and offers detailed tribal distributions by region or state, as well as major ethnic group data per country.

<!-- A zero-dependency JavaScript library for structured access to African countries’ metadata, ethnic groups, and administrative divisions — including tribal distributions and local government areas. -->

<!-- african-countries-data -->


## 🚀 Features

✅ List all African countries

✅ Fetch a single country by its ISO code

✅ Get state/tribal data for each country (on-demand)

✅ Lightweight and async — loads only what you need

✅ Simple, modular, and TypeScript-friendly

✅ **NEW:** Modular imports — import only specific countries to reduce bundle size


# Install
`npm i african-states-and-tribes`

# 📚 Documentation

- [Modular Imports Guide](./MODULAR_IMPORTS.md) - Complete guide on using modular imports to optimize bundle size
- [Usage Examples](./EXAMPLES.md) - Real-world examples and use cases

# Usage

## 🎯 Modular Imports (Recommended for Bundle Size Optimization)

Import only the countries you need to keep your bundle size minimal:

```js
// Import specific country
import { getCountry, getStates, getCountryAndStates } from 'african-states-and-tribes/countries/ng';

// Get Nigeria data
const nigeria = await getCountry();
console.log(nigeria); // { name: 'Nigeria', countryCode: 'NG', ... }

// Get Nigeria states/tribes
const states = await getStates();
console.log(states); // [{ name: 'Abia', tribes: ['Igbo'], ... }, ...]

// Get Nigeria with states
const nigeriaWithStates = await getCountryAndStates();
console.log(nigeriaWithStates); // { name: 'Nigeria', states: [...], ... }
```

**Bundle Size Benefits:**
- Default import (all countries): **~337KB**
- Single country (modular): **~44KB average** (87% smaller!)
- Multiple countries scale linearly

See [EXAMPLES.md](./EXAMPLES.md) for more use cases including React, Next.js, and lazy loading.


**Available country codes for modular imports:**
`ao`, `bf`, `bi`, `bj`, `bw`, `cd`, `cf`, `cg`, `ci`, `cm`, `cv`, `dj`, `dz`, `eg`, `er`, `et`, `ga`, `gh`, `gm`, `gn`, `gq`, `gw`, `ke`, `km`, `lr`, `ls`, `ly`, `ma`, `mg`, `ml`, `mr`, `mu`, `mw`, `mz`, `na`, `ne`, `ng`, `rw`, `sc`, `sd`, `sl`, `sn`, `so`, `ss`, `st`, `sz`, `td`, `tg`, `tn`, `tz`, `ug`, `za`, `zm`, `zw`

## 📦 Default Usage (All Countries)

  - ES6 Module usage
   
     ```js
     import { 
        getCountries, 
        getCountry, 
        getCountryStates, 
        getCountriesAndStates, 
        getCountryAndState 
    } from 'african-states-and-tribes'
     ```

  - ES5 Module usage
  
    ```js
    const africanStates = require('african-states-and-tribes')
    ```

# Docs

  - **Get all Countries** 

    ```js
    import { getCountries } from 'african-states-and-tribes'

    getCountries().then(countries =>{
        console.log(countries)
    })
    ```

    Output:

    ```
        [
            {
                    phoneCode: 244,
                    capitalCity: "Luanda",
                    colonialMaster: [
                        {
                            name: "Portugal",
                            countryCode: "PT"
                        }
                    ],
                    countryCode: "AO",
                    flagEmoji: "🇦🇴",
                    name: "Angola",
                    currency: "Angolan kwanza",
                    currencyCode: "AOA",
                    currencySymbol: "Kz",
                    officialLanguage: "Portuguese",
                    majorEthnicGroups: ["Bakongo", "Mbundu", "Ovimbundu"],
                    timezones: [
                        {
                            iana: "Africa/Luanda",
                            gmtOffset: "+01:00"
                        }
                    ]
            },
            {
                    phoneCode: 229,
                    capitalCity: "Porto-Novo",
                    colonialMaster: [
                        {
                            name: "France",
                            countryCode: "FR"
                        }
                    ],
                    countryCode: "BJ",
                    flagEmoji: "🇧🇯",
                    name: "Benin",
                    currency: "West African CFA franc",
                    currencyCode: "XOF",
                    currencySymbol: "Fr",
                    officialLanguage: "French",
                    majorEthnicGroups: ["Bariba", "Fon (Dahomey)", "Yoruba"],
                     timezones: [
                        {
                            iana: "Africa/Porto-Novo",
                            gmtOffset: "+01:00"
                        }
                    ]
            }
            ...
        ]
    ```
  - **Get All African Countries + State/Tribal Data**
  
    ```js
    import { getCountriesAndStates } from 'african-states-and-tribes'

    getCountriesAndStates().then(countries =>{
        console.log(countries)
    })
    ```

    Output:

    ```
     [
        {
            phoneCode: 244,
            capitalCity: "Luanda",
            colonialMaster:"",
            countryCode:"AO",
            flagEmoji: "🇦🇴",
            name: "Angola",
            currency: "Angolan kwanza",
            currencyCode:"AOA",
            currencySymbol:"Kz",
            officialLanguage: "Portuguese",
            majorEthnicGroups: ["Bakongo", "Mbundu", "Ovimbundu"],
            states:[
                {
                    capitalCity:"Caxito",
                    subdivisions:["Ambriz", "Bula Atumba", "Dande", "Dembos","Nambuangongo", "Pango Aluquém"],
                    geoPoliticalZone:"",
                    location:"North",
                    name: "Bengo",
                    stateCode: "BGO",
                    tribes:["Bakongo", "Kimbundu (Mbundu)", "Kikongo","Songo"],
                    type: "province"
                },
                {
                    capitalCity:"Benguela",
                    subdivisions:[],
                    geoPoliticalZone:"",
                    location:"West Central",
                    name: "Benguela",
                    stateCode: "BGU",
                    tribes:["Herero", "Khoisan (San)", "Nyaneka-Nkhumbi", "Ovimbundu"],
                    type: "province"
                },
                ... // list of state/province/region and tribes that can be found there.
            ]
        }
        ...
     ]

    ```

  - **Get Specific Country by CountryCode**

    ```js
    import { getCountry } from 'african-states-and-tribes'

    getCountry("NG").then(country =>{
        console.log(country)
    })

    ```

    Output:

    ```
        {
            phoneCode: 234,
            capitalCity: "Abuja",
            colonialMaster: [
                {
                    name: "United Kingdom",
                    countryCode: "GB"
                }
            ],
            countryCode:"NG",
            flagEmoji: "🇳🇬",
            name: "Nigeria",
            currency: "Nigerian naira",
            currencyCode:"NGN",
            currencySymbol:"₦",
            officialLanguage: "English",
            majorEthnicGroups:["Fulani", "Hausa", "Igbo", "Yoruba"],
            timezones: [
                {
                    "iana": "Africa/Lagos",
                    "gmtOffset": "+01:00"
                }
            ]
        }

    ```
  - **Get Specific Country + State/Tribal Data by CountryCode**

    ```js
    import { getCountryAndState } from 'african-states-and-tribes'

     getCountryAndState("NG").then(country =>{
        console.log(country)
    })
    ```

    Output:

    ```
        {
            phoneCode: 234,
            capitalCity: "Abuja",
            colonialMaster: [
                {
                    name: "United Kingdom",
                    countryCode: "GB"
                }
            ],
            countryCode:"NG",
            flagEmoji: "🇳🇬",
            name: "Nigeria",
            currency: "Nigerian naira",
            currencyCode:"NGN",
            currencySymbol:"₦",
            officialLanguage: "English",
            majorEthnicGroups:["Fulani", "Hausa", "Igbo", "Yoruba"],
            states:[
                 {
                    capitalCity:"Umuahia",
                    subdivisions: ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South"],
                    geoPoliticalZone: "South East",
                    location:"South East",
                    name: "Abia",
                    stateCode: "AB",
                    tribes:["Igbo"],
                    type: "state"
                }
            ]
        }

    ```

  - **Get a Country's State/Tribal Data Only**

    ```js
    import { getCountryStates } from 'african-states-and-tribes'

    getCountryStates("NG").then(tribes =>{
        console.log(tribes)
    })
    ```

    Output:

    ```
      [
         {
            capitalCity:"Umuahia",
            subdivisions: ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South"],
            geoPoliticalZone: "South East",
            location:"South East",
            name: "Abia",
            stateCode: "AB",
            tribes:["Igbo"],
            type: "state"
        },
        {
            capitalCity:"Uyo",
            subdivisions: ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat Enin", "Nsit Atai", "Nsit Ibom", "Nsit Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung Uko", "Ukanafun", "Uruan", "Urue Offong/Oruko", "Uyo"],
            geoPoliticalZone: "South South",
            location:"South South",
            name: "Akwa Ibom",
            stateCode: "AK",
            tribes:["Anang","Andoni", "Eket", "Ibeno", "Ibibio", "Obolo", "Okobo (Okkobor)", "Oron" ],
            type: "state"
        },
        ...
      ]
    ```

  - **Get a Tribe Region**

    ```js
    import { getTribeRegion } from 'african-states-and-tribes'

     getTribeRegion("Yoruba").then(regions =>{
        console.log(regions)
    })
    ```

    Output:

    ```
        [
            {
                capitalCity: 'Kandi',
                country: 'Benin',
                countryCode: 'BJ',
                geoPoliticalZone: '',
                location: 'North East',
                name: 'Alibori',
                stateCode: '',
                subdivisions: [],
                tribes: ['Bariba', 'Boko', 'Dendi (Songhai)', 'Fulani', 'Gurma', 'Kyenga', 'Mokole Yoruba'],
                type: 'department'
            },
            {
                capitalCity: 'Allada',
                country: 'Benin',
                countryCode: 'BJ',
                geoPoliticalZone: '',
                location: 'South Centre',
                name: 'Atlantique',
                stateCode: '',
                subdivisions: [],
                tribes: [ 'Adja (Aja)', 'Ayizo', 'Tofin', 'Fon (Dahomey)', 'Yoruba' ],
                type: 'department'
            },
            ...
        ]
    ```

    Notes
    - All functions are asynchronous – you must use await or .then()

    - Tribe/state data is dynamically imported using import() for performance



    | Key                                    | Description                        
    |----------------------------------------|-----------------------------
    | capitalCity                            | Country's capital city   
    | colonialMaster                         | Country's colonial master   
    | countryCode                            | Country's 2-alphabet country code   
    | flagEmoji                              | Country's flag emoji
    | name                                   | Country name
    | currency                               | Country's official currency
    | currencyCode                           | Country's official currency code
    | currencySymbol                         | Country's official currency symbol
    | officialLanguage                       | Country's official language
    | majorEthnicGroups                      | Major ethnic found in the country
    | states                                 | Array containing country's states/provinces/regions
    | states.capitalCity                     | state/region/province capital city
    | states.subdivisions                    | state/region/province administrative sub divisions such as Local Government
    | states.geoPoliticalZone                | Geopolitical zone in which the state/region/province falls under
    | states.location                        | state/region/province location on country's map
    | states.name                            | state/region/province
    | states.stateCode                       | state/region/province official code
    | states.tribes                          | Tribes found in state/region/province
    | states.type                            | type of either state/region/province


# Data Sources
- https://www.vanguardngr.com/2017/05/full-list-of-all-371-tribes-in-nigeria-states-where-they-originate/
- https://euaa.europa.eu/
- https://www.citypopulation.de/
- https://www.odsef.fss.ulaval.ca/sites/odsef.fss.ulaval.ca/files/odsef_assani_web.pdf
