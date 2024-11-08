# African-states-and-tribes.

"African States & Tribes" is an open source project that simplifies the management of data related to African states and tribes. It enables users to easily fetch, sort, and filter information about various states and tribal groups across Africa. This project is ideal for developers working on projects involving regional data, educational resources, or applications that focus on the rich cultural diversity of Africa. Enhance your application's geographical and cultural data integration with this comprehensive tool.

# Install
`npm i country-state-city`

# Usage

  - ES6 Module usage
   
     ```js
     import * as africanState from 'african-states-and-tribes'
     ```

  - ES5 Module usage
  
    ```js
    let africanState = require('cafrican-states-and-tribes')
    ```

# Docs

  - **Get all African Countries**

    ```js
    import * as africanState from 'african-states-and-tribes'

    const country = africanState.getAfricanCountries()
    console.log(country)
    ```

    Output:
    ```
        [
            {
                    "phoneCode": 244,
                    "capitalCity": "Luanda",
                    "colonialMaster":"",
                    "countryCode":"AO",
                    "flagEmoji": "🇦🇴",
                    "name": "Angola",
                    "currency": "Angolan kwanza",
                    "currencyCode":"AOA",
                    "currencySymbol":"Kz",
                    "officialLanguage": "Portuguese",
                    "majorEthnicGroups":["Bakongo", "Chokwe", "Herero", "Humbi", "Kimbundu", "Mbundu", "Ngangela", "Ovimbundu"]
            },
            {
                    "phoneCode": 229,
                    "capitalCity": "Porto-Novo",
                    "colonialMaster":"",
                    "countryCode":"BJ",
                    "flagEmoji": "🇧🇯",
                    "name": "Benin",
                    "currency": "West African CFA franc",
                    "currencyCode":"XOF",
                    "currencySymbol":"Fr",
                    "officialLanguage": "French",
                    "majorEthnicGroups":["Adja (Aja)","Bariba","Dendi (Songhai)","Fon (Dahomey)","Fulani","Lukpa","Tammari (Betammaribe)","Yoruba"]
            },
            ...
        ]
    ```

   - **Get All African Countries + Tribal Data**

    ```js
    import * as africanState from 'african-states-and-tribes'

    const country = africanState.getAfricanCountriesAndTribes("NG")
    console.log(country)
    ```

    Output:
    ```
     [
        {
            "phoneCode": 244,
            "capitalCity": "Luanda",
            "colonialMaster":"",
            "countryCode":"AO",
            "flagEmoji": "🇦🇴",
            "name": "Angola",
            "currency": "Angolan kwanza",
            "currencyCode":"AOA",
            "currencySymbol":"Kz",
            "officialLanguage": "Portuguese",
            "majorEthnicGroups":["Bakongo", "Chokwe", "Herero", "Humbi", "Kimbundu", "Mbundu", "Ngangela", "Ovimbundu"]
            tribes:[
                {
                    "capitalCity":"Caxito",
                    "subdivisions":["Ambriz", "Bula Atumba", "Dande", "Dembos","Nambuangongo", "Pango Aluquém"],
                    "geoPoliticalZone":"",
                    "location":"North",
                    "name": "Bengo",
                    "stateCode": "BGO",
                    "tribes":["Bakongo", "Kimbundu (Mbundu)", "Kikongo","Songo"],
                    "type": "province"
                },
                {
                    "capitalCity":"Benguela",
                    "subdivisions":[],
                    "geoPoliticalZone":"",
                    "location":"West Central",
                    "name": "Benguela",
                    "stateCode": "BGU",
                    "tribes":["Herero", "Khoisan (San)", "Nyaneka-Nkhumbi", "Ovimbundu"],
                    "type": "province"
                },
                ... // list of state/province/region and tribes that can be found there.
            ]
        }
        ...
     ]
    ```

  - **Get Specific Country by CountryCode**

    ```js
    import * as africanState from 'african-states-and-tribes'

    const country = africanState.getCountryCode('NG')
    console.log(country)
    ```

    Output:
    ```
        {
            "phoneCode": 234,
            "capitalCity": "Abuja",
            "colonialMaster":"",
            "countryCode":"NG",
            "flagEmoji": "🇳🇬",
            "name": "Nigeria",
            "currency": "Nigerian naira",
            "currencyCode":"NGN",
            "currencySymbol":"₦",
            "officialLanguage": "English",
            "majorEthnicGroups":["Fulani", "Hausa","Kanuri","Ibibio", "Igbo","Ijaw", "Tiv","Yoruba"]
        }
    ```

    - **Get Specific Country + Tribal Data by CountryCode**

    ```js
    import * as africanState from 'african-states-and-tribes'

    const country = africanState.getCountryAndTribeByCode("NG")
    console.log(country)
    ```

    Output:
    ```
        {
            "phoneCode": 234,
            "capitalCity": "Abuja",
            "colonialMaster":"",
            "countryCode":"NG",
            "flagEmoji": "🇳🇬",
            "name": "Nigeria",
            "currency": "Nigerian naira",
            "currencyCode":"NGN",
            "currencySymbol":"₦",
            "officialLanguage": "English",
            "majorEthnicGroups":["Fulani", "Hausa","Kanuri","Ibibio", "Igbo","Ijaw", "Tiv","Yoruba"]
            tribes:[
                 "ABIA":{
                    "capitalCity":"Umuahia",
                    "subdivisions": ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South"],
                    "geoPoliticalZone": "South East",
                    "location":"South East",
                    "name": "Abia",
                    "stateCode": "AB",
                    "tribes":["Igbo"],
                    "type": "state"
                }
            ]
        }
    ```


    - **Get a Country's Tribal Data Only**

    ```js
    import * as africanState from 'african-states-and-tribes'

    const country = africanState.getTribesByCountry("NG")
    console.log(country)
    ```

    Output:
    ```
      [
         {
            "capitalCity":"Umuahia",
            "subdivisions": ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South"],
            "geoPoliticalZone": "South East",
            "location":"South East",
            "name": "Abia",
            "stateCode": "AB",
            "tribes":["Igbo"],
            "type": "state"
        },
        {
            "capitalCity":"Uyo",
            "subdivisions": ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat Enin", "Nsit Atai", "Nsit Ibom", "Nsit Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung Uko", "Ukanafun", "Uruan", "Urue Offong/Oruko", "Uyo"],
            "geoPoliticalZone": "South South",
            "location":"South South",
            "name": "Akwa Ibom",
            "stateCode": "AK",
            "tribes":["Anang","Andoni", "Eket", "Ibeno", "Ibibio", "Obolo", "Okobo (Okkobor)", "Oron" ],
            "type": "state"
        },
        ...
      ]
    ```

# Countries Covered.
- Angola
- Algeria
- Benin - Departments/Communes
- Botswana
- Burkina Faso
- Burundi
- Cabo Verde
- Cameroon
- Central African Republic
- Chad
- Comoros
- Democratic Republic of the Congo
- Republic of the Congo
- Cote D'Ivoire
- Djibouti
- Egypt
- Equatorial Guinea
- Eritrea
- Ethiopia
- Gabon
- Ghana
- Gambia
- Guinea
- Guinea-Bissau
- Kenya
- Lesotho
- Liberia
- Libya
- Madagascar
- Malawi
- Mali
- Mauritania
- Mauritius
- Morocco
- Mozambique
- Namibia
- Niger
- Nigeria - States/Local Government
- Rwanda
- Sao Tome And Principe
- Senegal
- Seychelles
- Sierra Leone
- Somalia - Regions/Districts
- South Africa
- South Sudan
- Sudan
- Eswatini
- Tanzania
- Togo
- Tunisia
- Uganda
- Zambia
- Zimbabwe

# Data Sources
- https://www.vanguardngr.com/2017/05/full-list-of-all-371-tribes-in-nigeria-states-where-they-originate/
- https://euaa.europa.eu/
- https://www.citypopulation.de/
- https://www.odsef.fss.ulaval.ca/sites/odsef.fss.ulaval.ca/files/odsef_assani_web.pdf