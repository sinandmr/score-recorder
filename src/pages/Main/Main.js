import Button from 'components/Button';
import Page from 'components/Page/Page';
import games, { OKEY_101, TAVLA } from 'constants/games';
import { useDispatch } from 'react-redux';
import { setState } from 'store/Game';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentState = JSON.parse(window.localStorage.getItem('state'));

  useEffect(() => {
    if (currentState.game) {
      navigate('/team');
    }
  })

  const handleClick = async (e, id) => {
    dispatch(setState({ name: 'game', data: id }))
    const newState = {...currentState, game: id}
    window.localStorage.setItem('state', JSON.stringify(newState));
    if ([TAVLA, OKEY_101].includes(id)) {
      dispatch(setState({ name: 'numberOfTeams', data: 2 }))
      window.localStorage.setItem('state', JSON.stringify({...newState, numberOfTeams: 2}));
    }
  }

  return (
    <Page className={'overflow-scroll md:w-1/5'}>
      <p className={'text-black text-3xl'}>Oyununu Seç</p>
      <div className={'w-full flex flex-col items-center gap-5'}>
        {
          Array.isArray(games) && games.length > 0 &&
          games.map(game => (
            <Button key={game.id} to={'team'} onClick={(e) => handleClick(e, game.id)}>
              {game.title}
            </Button>
          ))
        }
      </div>
    </Page>
  )
}

export default Main;