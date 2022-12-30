import { createSlice } from '@reduxjs/toolkit';
import { TAVLA } from 'constants/games';

export const Game = createSlice({
  name: 'game',
  initialState: {
    game: '',
    rounds: '', // for OKEY_101 and UNO
    wins: '', // for TAVLA
    numberOfTeams: '',
    teams: []
  },
  reducers: {
    setState: (state, action) => {
      const { name } = action.payload;
      state[name] = action.payload.data;
    },
    setTeams: (state, action) => {
      state.teams.push(action.payload);
    },
    setScore: (state, action) => {
      const { index, score } = action.payload;
      state.teams[index].scores.push(score);
      state.teams[index].total += parseInt(score);
      if (state.game === TAVLA) {
        state.teams[index === 0 ? 1 : 0].scores.push(0);
      }
    },
    setPenalty: (state, action) => {
      const { index } = action.payload;
      state.teams[index].penalty += 1;
      state.teams[index].total += state.game === TAVLA ? 2 : 101;
    },
  },
});

export const { setState, setTeams, setScore, setPenalty } = Game.actions;
export default Game.reducer;
