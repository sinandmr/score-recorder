const teams = [
  {
    id: '1',
    title: 'Birinci Takım',
    nick: 'Develer'
  },
  {
    id: '2',
    title: 'İkinci Takım',
    nick: 'Cüceler'
  },
  {
    id: '3',
    title: 'Üçüncü Takım',
    nick: 'Kızlar'
  },
  {
    id: '4',
    title: 'Dördüncü Takım',
    nick: 'Erkekler'
  },
  {
    id: '5',
    title: 'Beşinci Takım',
    nick: 'Kediler'
  }
];

teams.map(team => Object.freeze(team));

export default teams;