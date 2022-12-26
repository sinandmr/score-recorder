const games = [
  {
    id: 'uno-flip',
    title: 'UNO Flip',
    to: '/uno'
  },
  {
    id: '101',
    title: '101 Okey',
    to: '/101'

  },
  {
    id: 'tavla',
    title: 'Tavla',
    to: '/tavla'
  }
];

games.map(game => Object.freeze(game));

export default games;