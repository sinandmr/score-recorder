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
  const { game, numberOfTeams } = useGame();
  const navigate = useNavigate();
  const [next, setNext] = useState(game === TAVLA || game === OKEY_101 || false);
  const dispatch = useDispatch();
  const countRef = useRef();
  let teamRefs = useRef([]);

  useEffect(() => {
    if (!game) {
      navigate('/');
    }
  })

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
          const name = game === TAVLA ? 'wins' : 'rounds';
          dispatch(setState({ name, data: parseInt(value) }))
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
      {
        !next ? <Step1 ref={countRef}/> : <Step2 ref={teamRefs}/>
      }
      <Button onClick={handleClick}>İlerle</Button>
    </Page>
  )
}
export default Team;

