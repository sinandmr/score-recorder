import { createSlice } from '@reduxjs/toolkit';

export const Game = createSlice({
  name: 'game',
  initialState: {
    game: '',
    wins: '', // for "Tavla (Backgammon)" game
    rounds: '2',
    numberOfTeams: '',
    teams: [],
  },
  reducers: {
    setState: (state, action) => {
      const { name } = action.payload;
      state[name] = action.payload.data;
    }
  },
});

export const { setState } = Game.actions;

export default Game.reducer;
