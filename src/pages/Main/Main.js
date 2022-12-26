import Button from 'components/Button';
import games from 'constants/games';

function Main() {
  return (
    <div
      className={'p-10 gap-5 border-4 border-green-500 flex flex-col justify-start items-center bg-gray-100 min-h-3/5 w-2/5 rounded-3xl'}>
      <p className={'text-black text-2xl'}>Oyununu Seç ve Başla</p>
      <div className={'w-full flex flex-col items-center gap-5'}>
        {
          Array.isArray(games) && games.length > 0 &&
          games.map(game => (
            <Button key={game.id} to={game.to} text={game.title}/>
          ))
        }
      </div>
    </div>
  )
}

export default Main;