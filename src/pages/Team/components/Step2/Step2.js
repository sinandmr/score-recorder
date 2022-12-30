import { forwardRef, Fragment } from 'react';
import useGame from 'hooks/useGame';
import Input from 'components/Input';
import teams from 'constants/teams';
import { TAVLA, UNO } from 'constants/games';

const Step2 = forwardRef((props, ref) => {
  const { game, numberOfTeams } = useGame();

  return (
    <Fragment>
      <p className={'text-main text-3xl font-bold'}>Takım İsimlerini Belirle</p>
      <div className={'flex md:flex-row sm:flex-col gap-4 flex-wrap justify-center'}>
        {
          teams.slice(0, numberOfTeams).map((team, index) => (
            <div
              key={team.id}
              className={' text-center border-solid border-2 border-secondary rounded-2xl p-3 space-y-4'}>
              <p className={'text-black'}>
                {team.title}
              </p>
              <Input ref={ref.current[index]} placeholder={team.nick}/>
            </div>
          ))
        }
      </div>
      <div className={'space-y-4'}>
        <p className={'text-main text-2xl'}>
          {
            game === TAVLA ? 'Kaç Olan Kazansın?' : game === UNO ? 'Kaç Puanda Bitsin?' : 'Oyun Sayısı'
          }
        </p>
        <Input ref={ref.current[ref.current.length - 1]} placeholder={game === UNO ? 750 : 11} type={'number'}/>
      </div>
    </Fragment>
  )
})
export default Step2;