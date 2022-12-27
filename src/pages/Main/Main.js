import Button from 'components/Button';
import Page from 'components/Page/Page';
import games from 'constants/games';

const Main = () => {
  return (
    <Page styles={'overflow-scroll'}>
      <p className={'text-black text-3xl'}>Oyununu Seç</p>
      <div className={'w-full flex flex-col items-center gap-5'}>
        {
          Array.isArray(games) && games.length > 0 &&
          games.map(game => (
            <Button key={game.id} to={'team'}>
              {game.title}
            </Button>
          ))
        }
      </div>
    </Page>
)
}

export default Main;