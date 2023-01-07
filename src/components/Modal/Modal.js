import { setInitialState, setPenalty, setState } from 'store/Game';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import useGame from 'hooks/useGame';
import { TAVLA } from 'constants/games';
import { useEffect, useState } from 'react';

const Modal = ({ index, t, type = 'penalty' }) => {
  const dispatch = useDispatch();
  const { game, teams } = useGame();
  const [restart, setRestart] = useState(false);
  const currentState = JSON.parse(window.localStorage.getItem('state'));

  useEffect(() => {
    if (!teams || teams.length === 0 || restart) {
      dispatch(setState({ name: 'game', data: null }));
      window.localStorage.removeItem('state');
      setInitialState();
    }
  })

  const handleClick = () => {
    if (type === 'restart') {
      setRestart(true)
      return toast.dismiss(t.id);
    }
    dispatch(setPenalty({ index }));
    toast.dismiss(t.id);
    currentState.teams[index].penalty += 1;
    currentState.teams[index].total += game === TAVLA ? 2 : 101;
    window.localStorage.setItem('state', JSON.stringify(currentState));
  }

  return (
    <div className={'flex flex-col'}>
      <b>
        {
          type === 'penalty' ? `${game === TAVLA ? 'MARS (2 Puan)' : 'Ceza'} eklemeyi onaylıyor musunuz?` : (
            'Oyunu bitirmek istediğinize emin misiniz?'
          )
        }
      </b>
      <div className={'flex justify-around mt-3'}>
        <button
          className={'border-2 border-solid border-secondary p-2 rounded-xl'}
          onClick={handleClick}>
          Evet
        </button>
        <button
          className={'border-2 border-solid border-red-700 p-2 rounded-xl'}
          onClick={() => toast.dismiss(t.id)}>
          Hayır
        </button>
      </div>
    </div>
  )
}

export default Modal;
