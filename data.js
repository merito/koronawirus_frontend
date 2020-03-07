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
    'last_modified_timestamp': '1583530394',
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
  }
];
export {points};

export function getPointById(id, points) {
  var index;
  for (index in points) {
    if (points[index].id == id.toString()){
      return points[index]
    }
  }
 }
