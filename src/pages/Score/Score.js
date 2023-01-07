import { createRef, useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { v4 } from 'uuid';
import useGame from 'hooks/useGame';
import { TAVLA, UNO } from 'constants/games';
import Page from 'components/Page';
import Button from 'components/Button';
import { ScoreBox } from './components';
import Modal from 'components/Modal';
import { useNavigate } from 'react-router-dom';

const Score = () => {
  let scoreInputs = useRef([]);
  const { teams, rounds, game } = useGame();
  const navigate = useNavigate();
  const gameIsTavla = game === TAVLA;
  const gameIsUno = game === UNO;
  const maxScore = Math.max(...teams.map(team => team.total));
  const isOver = gameIsUno ? rounds <= maxScore : gameIsTavla ? rounds <= maxScore : rounds === teams.reduce((acc, cur) => cur.scores.length < acc ? cur.scores.length : acc, 999);
  const sortedTeams = [...teams].sort((a, b) => a.total - b.total).map((team, i) => `${i + 1}-) ${team.name} takımı - ${team.total} puan`)

  useEffect(() => {
      if (!game) navigate('/');
    }
  )

  scoreInputs.current = Array(teams.length).fill().map(
    (ref, index) => scoreInputs.current[index] = createRef()
  );

  const handleClick = type => {
    if (type === 'restart') {
      return toast(t => <Modal t={t} type={'restart'}/>)
    }
    const { name: leaderTeam } = teams[0].total - teams[1].total > 0 ? teams[gameIsTavla ? 0 : 1] : teams[gameIsTavla ? 1 : 0];
    const diff = Math.abs(teams[1].total - teams[0].total);
    const text = type === 'winner' ? ' kazandı' : 'önde';
    if (diff === 0) return toast('Skorlar Eşit', { icon: '📢' });
    if (!gameIsUno) return toast.success(`${leaderTeam} takımı ${diff} puan fark ile ${text}`
    );
    toast(sortedTeams.join('\n'));
  }

  return (
    <Page styles={'p-0 pb-5 md:w-2/5 md:h-2/3 sm:h-4/5 overflow-scroll space-y-4'}>
      <div className={'p-5 flex-wrap flex md:flex-row sm:flex-col gap-5 justify-center items-center'}>
        {
          Array.isArray(teams) && teams.length > 0 && teams.map((team, index) =>
            <ScoreBox key={v4()} isOver={isOver} team={team} index={index} scoreInputs={scoreInputs}/>
          )
        }
      </div>
      {
        isOver ? (
          <Button onClick={() => handleClick('winner')}
                  styles={'md:w-2/5 sm:w-4/5 min-h-[3rem] bg-secondary text-main'}>
            Kazananı Gör
          </Button>
        ) : (
          <Button onClick={() => handleClick('leader')}
                  styles={'md:w-2/5 sm:w-4/5 min-h-[3rem] bg-secondary text-main'}>
            {gameIsUno ? 'Sıralamayı Gör' : 'Önde Olanı Gör'}
          </Button>
        )
      }
      <Button onClick={() => handleClick('restart')} styles={'md:w-2/5 sm:w-4/5 min-h-[3rem] bg-secondary text-main'}>
        Yeni Oyuna Başla
      </Button>
    </Page>
  )
}
export default Score;