import { createRef, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import useGame from 'hooks/useGame';
import { setState, setTeams } from 'store/Game';
import Page from 'components/Page';
import Button from 'components/Button';
import { OKEY_101, TAVLA } from 'constants/games';
import teams from 'constants/teams';
import teamDefault from 'constants/teamDefault';
import { Step1, Step2 } from './components';

const Team = () => {
  const { game, numberOfTeams, rounds } = useGame();
  const navigate = useNavigate();
  const [next, setNext] = useState(game === TAVLA || game === OKEY_101 || false);
  const dispatch = useDispatch();
  const countRef = useRef();
  let teamRefs = useRef([]);
  const currentState = JSON.parse(window.localStorage.getItem('state'));

  useEffect(() => {
      if (!game) {
        navigate('/');
      } else if (teams && teams.length > 0 && rounds > 0) {
        navigate('/score')
      }
    }
  )

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
      // Set number of teams
      dispatch(setState({ name: 'numberOfTeams', data: value }))
      const newState = { ...currentState, numberOfTeams: value }
      window.localStorage.setItem('state', JSON.stringify(newState));
    } else {
      if (teamRefs.current?.some(ref => !ref?.current?.value)) return toast.error('Tüm Alanları Doldurun')
      teamRefs.current.forEach((ref, i, arr) => {
        const { value } = ref.current;
        if (arr.length - 1 === i) {
          dispatch(setState({ name: 'rounds', data: parseInt(value) }))
          window.localStorage.setItem('state', JSON.stringify({ ...currentState, rounds: parseInt(value) }));
          return;
        }
        dispatch(setTeams({
          ...teamDefault,
          name: ref.current.value
        }))
        currentState.teams.push({ ...teamDefault, name: ref.current.value });
        window.localStorage.setItem('state', JSON.stringify(currentState));
      })
      navigate('/score')
    }
  }

  return (
    <Page styles={'overflow-scroll md:w-2/5'}>
      {
        !next ? <Step1 ref={countRef}/> : <Step2 ref={teamRefs}/>
      }
      <Button onClick={handleClick}>İlerle</Button>
    </Page>
  )
}
export default Team;

