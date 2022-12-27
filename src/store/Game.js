import { createSlice } from '@reduxjs/toolkit';

export const Game = createSlice({
  name: 'game',
  initialState: {
    game: '',
    rounds: '123',
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
