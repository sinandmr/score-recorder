import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { v4 } from 'uuid';
import useGame from 'hooks/useGame';
import { setScore } from 'store/Game';
import Input from 'components/Input';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { TAVLA, UNO } from 'constants/games';

const ScoreBox = ({ team, index, scoreInputs, isOver }) => {
  const { game, rounds } = useGame();
  const dispatch = useDispatch();
  const gameIsTavla = game === TAVLA;
  const gameIsUno = game === UNO;

  const handleAddScore = index => {
    const score = gameIsTavla ? 1 : scoreInputs.current[index].current?.value;
    if (!score) return toast.error('Tüm Alanları Doldurun');
    return dispatch(setScore({ index, score }))
  }

  const handlePenalty = index => {
    toast(t => <Modal index={index} t={t}/>)
  }

  return (
    <div
      key={v4()}
      className={'gap-3 border-2 border-secondary flex justify-center items-center flex-col rounded-2xl overflow-hidden p-5'}>
      <p
        className={'text-xl border-dashed border-b-2 border-gray-500 p-1 mb-2'}>{team.name} {gameIsTavla ? '' : 'Takımı'}</p>
      <div>
        {
          gameIsTavla ? (
            <p className={'text-2xl text-secondary'}>{team.total}</p>
          ) : (
            team.scores?.map((score, index) => (
              <p key={v4()}>{index + 1}. Tur : {score}</p>
            ))
          )
        }
        {
          gameIsUno || (
            <p className={'text-red-500 font-bold mt-2'}>
              {`${gameIsTavla ? 'Mars' : 'Ceza'} Sayısı : ${team.penalty}`}
            </p>
          )
        }
      </div>
      {
        team.scores.length === rounds || isOver || (
          <>
            {
              gameIsTavla || (
                <Input ref={scoreInputs.current[index]} type={'number'} styles={'max-h-[2rem] w-2/4'}/>
              )
            }
            <Button
              styles={'md:w-2/4 md:min-w-[8rem] sm:w-full bg-secondary text-main'}
              onClick={() => handleAddScore(index)}>
              {gameIsTavla ? 'Galibiyet Ekle' : 'Ekle'}
            </Button>
          </>
        )
      }
      {
        isOver || gameIsUno || (
          <Button
            styles={'md:w-2/4 md:min-w-[8rem] sm:w-full overflow-hidden bg-red-600 hover:bg-red-600 text-red-900'}
            onClick={() => handlePenalty(index)}>
            {gameIsTavla ? 'Mars (2 Puan)' : 'Ceza (101 Puan)'}
          </Button>
        )
      }
    </div>
  )
}
export default ScoreBox;