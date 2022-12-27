import { configureStore } from '@reduxjs/toolkit';
import gameReducer from 'store/Game';

const store = configureStore({
  reducer: {
    game: gameReducer
  },
});

export default store;
