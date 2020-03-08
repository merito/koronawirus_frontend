var points = [
  {
    'id': '17',
    'name': 'Ostróda',
    'location': {'lat': '53.696319', 'lon': '19.964721'},
    'deaths': 0,
    'cured': 0,
    'infected': 2,
    'type': 'ACTIVE',
    'created_timestamp': '1583530394',
    'last_modified_timestamp': '1583611118',
    'description': 'Pacjent hospitalizowany w szpitalu w Ostródzie to osoba, która podróżowała w autobusie z  tzw. pacjentem zero (u niego po raz pierwszy stwierdzono nowego wirusa), który zaraził się w Niemczech i przebywa teraz w szpitalu w Zielonej Górze. - Otrzymaliśmy informację o pozytywnym wyniku jeszcze jednego pasażera autobusu. Pacjent ten był w kwarantannie domowej. W tej chwili przebywa w szpitalu w Ostródzie i czuje się dobrze – mówi prof. Łukasz Szumowski.',
    'source': ['https://www.gov.pl/web/koronawirus/cztery-nowe-potwierdzone-przypadki-koronawirusa-w-polsce', 'https://www.gov.pl/web/koronawirus/kolejny-potwierdzony-przypadek-koronawirusa-w-polsce']
  }, {
    'id': '18',
    'name': 'Szczecin',
    'location': {'lat': '53.428624', 'lon': '14.552310'},
    'deaths': 0,
    'cured': 0,
    'infected': 2,
    'type': 'ACTIVE',
    'created_timestamp': '1583530489',
    'last_modified_timestamp': '1583530489',
    'description': 'Dwójka pacjentów hospitalizowanych w Szczecinie wróciła samochodem z Włoch. Zgłosili się do powiatowego sanepidu.\n– Ta dwójka pacjentów postępowała zgodnie z instrukcjami – mówi prof. Szumowski. – Zgłosili się do sanepidu, poinformowali, że byli na terenach podwyższonego ryzyka i u nich prawdopodobieństwo zarażenia określono jako umiarkowanie wysokie. Nie mieli wtedy objawów i dlatego zostali objęci kwarantanną domową i zostali zdalnie, telemedycznie zwolnieni z pracy. Gdy poczuli się gorzej, zostali skierowani do szpitala i objęci opieką medyczną.',
    'source': ['https://www.gov.pl/web/koronawirus/cztery-nowe-potwierdzone-przypadki-koronawirusa-w-polsce']
  },
  {
    'id': '19',
    'name': 'Wrocław',
    'location': {'lat': '51.107791', 'lon': '17.038618'},
    'deaths': 0,
    'cured': 0,
    'infected': 1,
    'type': 'ACTIVE',
    'created_timestamp': '1583530663',
    'last_modified_timestamp': '1583530663',
    'description': 'Czwarty z pacjentów też zgłosił się do lokalnych służb sanitarno-epidemiologicznych, ponieważ miał objawy, a przebywał w Wielkiej Brytanii, która jest zaliczana do krajów o wysokim ryzyku zakażenia.',
    'source': ['https://www.gov.pl/web/koronawirus/cztery-nowe-potwierdzone-przypadki-koronawirusa-w-polsce']
  },
  {
    'id': '20',
    'name': 'Zielona Góra',
    'location': {'lat': '51.935483', 'lon': '15.506224'},
    'deaths': 0,
    'cured': 0,
    'infected': 1,
    'type': 'ACTIVE',
    'created_timestamp': '1583529325',
    'last_modified_timestamp': '1583529325',
    'description': 'Pierwszy przypadek koronawirusa w Polsce',
    'source': ['https://www.gov.pl/web/koronawirus/pierwszy-przypadek-koronawirusa-w-polsce']
  },{
    'id': '21',
    'name': 'Racibórz',
    'location': {'lat': '50.091490', 'lon': '18.219813'},
    'deaths': 0,
    'cured': 0,
    'infected': 1,
    'type': 'ACTIVE',
    'created_timestamp': '1583671445',
    'last_modified_timestamp': '1583671445',
    'description': '2 nowe przypadki zakażenia #koronawirus potwierdzono dziś u mężczyzny z woj. śląskiego i kobiety z woj. mazowieckiego. Pacjenci są hospitalizowani w szpitalach w Raciborzu i Warszawie. Oboje są w dobrym stanie. Służby sanitarno-epidemiologiczne docierają do wszystkich, którzy mogli mieć kontakt z zakażonymi. Część osób już trafiła na kwarantannę.',
    'source': ['https://twitter.com/MZ_GOV_PL/status/1236628432676675585?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1236628432676675585&ref_url=https%3A%2F%2Fwiadomosci.gazeta.pl%2Fwiadomosci%2F7%2C114883%2C25768896%2Cministerstwo-zdrowia-sa-dwa-nowe-przypadki-koronawirusa-w.html']
  },{
    'id': '22',
    'name': 'Warszawa',
    'location': {'lat': '52.229832', 'lon': '21.011689'},
    'deaths': 0,
    'cured': 0,
    'infected': 1,
    'type': 'ACTIVE',
    'created_timestamp': '1583671445',
    'last_modified_timestamp': '1583671445',
    'description': '2 nowe przypadki zakażenia #koronawirus potwierdzono dziś u mężczyzny z woj. śląskiego i kobiety z woj. mazowieckiego. Pacjenci są hospitalizowani w szpitalach w Raciborzu i Warszawie. Oboje są w dobrym stanie. Służby sanitarno-epidemiologiczne docierają do wszystkich, którzy mogli mieć kontakt z zakażonymi. Część osób już trafiła na kwarantannę.',
    'source': ['https://twitter.com/MZ_GOV_PL/status/1236628432676675585?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1236628432676675585&ref_url=https%3A%2F%2Fwiadomosci.gazeta.pl%2Fwiadomosci%2F7%2C114883%2C25768896%2Cministerstwo-zdrowia-sa-dwa-nowe-przypadki-koronawirusa-w.html']
  }
];
export {points};

export function getLastUpdate(points) {
  var index, lastUpdate='1583530394';
  for (index in points) {
    if (Number(points[index].last_modified_timestamp) > Number(lastUpdate)) {
      lastUpdate = points[index].last_modified_timestamp
    }
  }
  return lastUpdate;
}

export function getPointById(id, points) {
  var index;
  for (index in points) {
    if (points[index].id == id.toString()){
      return points[index]
    }
  }
 }

 export function getInfectedNumber(points) {
   var index, sum=0;
   for (index in points) {
     sum += points[index].infected
   }
   return sum;
 }

 export function getCuredNumber(points) {
   var index, sum=0;
   for (index in points) {
     sum += points[index].cured
   }
   return sum;
 }

 export function getDeathsNumber(points) {
   var index, sum=0;
   for (index in points) {
     sum += points[index].deaths
   }
   return sum;
 }
