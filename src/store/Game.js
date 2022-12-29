import { createSlice } from '@reduxjs/toolkit';
import { TAVLA } from 'constants/games';

export const Game = createSlice({
  name: 'game',
  initialState: {
    game: '',
    wins: '', // for "Tavla (Backgammon)" game
    rounds: '2',
    numberOfTeams: '',
    teams: [],
    /*
      [{
        name: 'Kediler',
        scores: [200,300,500],
        penalty: 3,
      }]
     */
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
    },
    setPenalty: (state, action) => {
      const { index } = action.payload;
      state.teams[index].penalty += 1;
      state.teams[index].total += state.game === TAVLA ? 1 : 101;
    }
  },
});

export const { setState, setTeams, setScore, setPenalty } = Game.actions;

export default Game.reducer;
