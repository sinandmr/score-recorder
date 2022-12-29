import { createRef, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Page from 'components/Page';
import Button from 'components/Button';
import useGame from 'hooks/useGame';
import { OKEY_101, TAVLA } from 'constants/games';
import { setState, setTeams } from 'store/Game';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import { useNavigate } from 'react-router-dom';
import teams from 'constants/teams';
import { toast, Toaster } from 'react-hot-toast';
import teamDefault from 'constants/teamDefault';

const Team = () => {
  const { game, numberOfTeams } = useGame();
  const navigate = useNavigate();
  const [next, setNext] = useState(game === TAVLA || game === OKEY_101 || false);
  const dispatch = useDispatch();
  const countRef = useRef();
  let teamRefs = useRef([]);

  const arrayLength = teams.length < +numberOfTeams + 1 ? teams.length : +numberOfTeams + 1;
  teamRefs.current = Array(arrayLength).fill().map(
    (ref, index) => teamRefs.current[index] = createRef()
  );

  const handleClick = e => {
    e.preventDefault();
    if (!next) {
      if (!countRef.current?.value) return toast.error('Tüm Alanları Doldurun')
      const { value } = countRef.current
      setNext(true);
      dispatch(setState({ name: 'numberOfTeams', data: value }))
    } else {
      if (teamRefs.current?.some(ref => !ref?.current?.value)) return toast.error('Tüm Alanları Doldurun')
      teamRefs.current.forEach((ref, i, arr) => {
        const { value } = ref.current;
        if (arr.length - 1 === i) {
          dispatch(setState({ name: 'rounds', data: parseInt(value) }))
          return;
        }
        dispatch(setTeams({
          ...teamDefault,
          name: ref.current.value
        }))
      })
      navigate('/score')
    }
  }

  return (
    <Page styles={'overflow-scroll md:w-2/5'}>
      <Toaster/>
      {
        !next ? <Step1 ref={countRef}/> : <Step2 ref={teamRefs}/>
      }
      <Button onClick={handleClick}>İlerle</Button>
    </Page>
  )
}
export default Team;

