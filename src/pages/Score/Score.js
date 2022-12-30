import { createRef, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Page from 'components/Page';
import useGame from 'hooks/useGame';
import { ScoreBox } from './components';
import Button from 'components/Button';

const Score = () => {
  const { teams } = useGame();
  const navigate = useNavigate();
  let scoreInputs = useRef([]);

  useEffect(() => {
    if (!teams || teams.length === 0) {
      navigate('/');
    }
    console.log('teams', teams)
  })

  scoreInputs.current = Array(teams.length).fill().map(
    (ref, index) => scoreInputs.current[index] = createRef()
  );


  const handleClick = type => {
    switch (type) {
      case 'winner':
        break;
      case 'leader':
        break;
      default:
        break;
    }
  }

  return (
    <Page styles={'p-0 pb-5 md:w-2/5 md:h-2/3 sm:h-4/5 overflow-scroll space-y-4'}>
      <div className={'p-5 flex-wrap flex md:flex-row sm:flex-col gap-5 justify-center'}>
        {
          Array.isArray(teams) && teams.length > 0 && teams.map((team, index) =>
            <ScoreBox team={team} index={index} scoreInputs={scoreInputs}/>
          )
        }
      </div>
      <Button onClick={() => handleClick('winner')} styles={'md:w-2/5 sm:w-4/5 min-h-[3rem] bg-secondary text-main'}>
        Kazananı Gör
      </Button>
      <Button onClick={() => handleClick('leader')} styles={'md:w-2/5 sm:w-4/5 min-h-[3rem] bg-secondary text-main'}>
        Önde Olanı Gör
      </Button>
      <Button onClick={() => handleClick('new')} styles={'md:w-2/5 sm:w-4/5 min-h-[3rem] bg-secondary text-main'}>
        Yeni Oyuna Başla
      </Button>
    </Page>
  )
}
export default Score;