import Page from 'components/Page';
import Button from 'components/Button';
import Input from 'components/Input';

const Team = () => {
  return (
    <Page styles={'overflow-scroll md:w-2/5'}>
      <p className={'text-main text-3xl font-bold'}>Takımlarını Seç</p>
      <p className={'text-main text-3xl font-bold'}>Kaç Takım Olduğunu Yaz</p>
      <Input type={'number'} placeholder={'Takım Sayısı'} styles={'text-center'}/>
      <div className={'flex md:flex-row sm:flex-col gap-4 flex-wrap justify-center'}>
        <div
          className={' text-center border-solid border-2 border-secondary rounded-2xl p-3 space-y-4'}>
          <p className={'text-black'}>
            Birinci Takım
          </p>
          <Input placeholder={'Develer'}/>
        </div>
        <div
          className={' text-center border-solid border-2 border-secondary rounded-2xl p-3 overflow-hidden space-y-4'}>
          <p className={'text-black'}>
            İkinci Takım
          </p>
          <Input placeholder={'Cüceler'}/>
        </div>
      </div>
      <div className={'space-y-4'}>
        <p className={'text-main text-2xl'}>Oyun Sayısı</p>
        <Input placeholder={'11 El'} type={'number'}/>
      </div>
      <Button to={'/score'}>İlerle</Button>
    </Page>
  )
}
export default Team;