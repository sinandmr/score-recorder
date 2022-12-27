export const OKEY_101 = 'uno-flip';
export const UNO = '101';
export const TAVLA = 'tavla';

const games = [
  {
    id: UNO,
    title: 'UNO',
    to: '/uno'
  },
  {
    id: OKEY_101,
    title: '101 Okey',
    to: '/101'

  },
  {
    id: TAVLA,
    title: 'Tavla',
    to: '/tavla'
  }
];

games.map(game => Object.freeze(game));

export default games;