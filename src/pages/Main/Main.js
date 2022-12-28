import Button from 'components/Button';
import Page from 'components/Page/Page';
import games, { OKEY_101, TAVLA } from 'constants/games';
import { useDispatch } from 'react-redux';
import { setState } from 'store/Game';

const Main = () => {
  const dispatch = useDispatch();

  const handleClick = async (e, id) => {
    dispatch(setState({ name: 'game', data: id }))
    if ([TAVLA, OKEY_101].includes(id)) {
      dispatch(setState({ name: 'numberOfTeams', data: 2 }))
    }
  }

  return (
    <Page styles={'overflow-scroll md:w-1/5'}>
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