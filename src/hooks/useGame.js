import { useSelector } from 'react-redux';

const useGame = () => useSelector(state => state.game);

export default useGame;