## Contributing guide

There are two kinds of contributions you can make to our project. There are listed below.

### Update data

If there are new data from Polish Ministry of Health about confirmed cases of coronavirus in Poland, but there are not included to our project data on `master` branch you can:
1. Open `src/data.js` file
1. If the city where the cases occure is on the map find it in `points` array and update:
  1. `last_modified_timestamp` to the current epoch timestamp
  1. `source` add news source. Allowed are only government related portals or social media accounts
  1. `description` extract information about number of the new cases and add it to the description. Do not replace current content of point description
  1. increase or decrease number of infected, deaths or cured, according to your source
1. If there is a new location of coronavirus cases add entity to `points` array based on example below:
    ```
    {
        'id': UNIQUE NUMBER,
        'name': NAME OF THE CITY,
        'location': {'lat': LATITUDE OF THE CENTER OF THE CITY, 'lon': LONGITUDE OF THE CENTER OF THE CITY},
        'deaths': NUMBER OF DEATHS BY CORONAVIRUS IN THE CITY,
        'cured': NUMBER OF CURED CASES IN THE CITY,
        'infected': NUMBER OF INFECTED PEOPLE IN THE CITY,
        'type': 'ACTIVE',
        'created_timestamp': CURRENT EPOCH TIMESTAMP,
        'last_modified_timestamp': CURRENT EPOCH TIMESTAMP,
        'description': INFORMATION ABOUT NUMBER OF THE NEW CASES, SHOULD BE SHORT,
        'source': [GOVERMENT RELATED SOURCE]
    }
    ```
1. In both cases create a new pull request

### Improve app

We try to keep the app simple, but if you see a field for improvement or bug please open an issue or create a pull request with you ideas. Thank you