import Page from 'components/Page';
import Input from 'components/Input';
import Button from 'components/Button';

const Score = () => {
  return (
    <Page styles={'p-0 pb-5 md:w-2/5 md:h-2/3 sm:h-4/5 overflow-scroll space-y-4'}>
      <div className={'p-5 flex-wrap flex md:flex-row sm:flex-col gap-5 justify-center'}>
        {/* Score #1 */}
        <div
          className={'gap-3 border-2 border-secondary flex justify-center items-center flex-col rounded-2xl overflow-hidden p-5'}>
          <p className={'text-xl border-dashed border-b-2 border-gray-500 p-1 mb-2'}>Birinci Takım</p>
          <div>
            <p>1. El : 123</p>
            <p>2. El : 123</p>
            <p>3. El : 123</p>
            <p className={'text-red-500 font-bold mt-2'}>2 Cezanız Var</p>
          </div>
          <Input type={'number'} styles={'w-2/4'}/>
          <Button styles={'md:w-2/4 sm:w-full bg-secondary text-main'}>Ekle</Button>
          <Button styles={'md:w-2/4 sm:w-full overflow-hidden bg-red-600 hover:bg-red-600 text-red-900'}>Ceza (101
            Puan)</Button>
        </div>
        {/* Score #1 */}
        <div
          className={'gap-3 border-2 border-secondary flex justify-center items-center flex-col rounded-2xl overflow-hidden p-5'}>
          <p className={'text-xl border-dashed border-b-2 border-gray-500 p-1 mb-2'}>Birinci Takım</p>
          <div>
            <p>1. El : 123</p>
            <p>2. El : 123</p>
            <p>3. El : 123</p>
            <p className={'text-red-500 font-bold mt-2'}>2 Cezanız Var</p>
          </div>
          <Input type={'number'} styles={'w-2/4'}/>
          <Button styles={'md:w-2/4 sm:w-full bg-secondary text-main'}>Ekle</Button>
          <Button styles={'md:w-2/4 sm:w-full overflow-hidden bg-red-600 hover:bg-red-600 text-red-900'}>Ceza (101
            Puan)</Button>
        </div>

      </div>
      <p className={'font-bold text-2xl text-red-500'}>4 El Kaldı</p>
      <Button styles={'md:w-2/5 sm:w-4/5 min-h-[3rem] bg-secondary text-main'}>Kazananı Gör</Button>
      <Button styles={'md:w-2/5 sm:w-4/5 min-h-[3rem] bg-secondary text-main'}>Önde Olanı Gör</Button>
      <Button styles={'md:w-2/5 sm:w-4/5 min-h-[3rem] bg-secondary text-main'}>Yeni Oyuna Başla</Button>
    </Page>
  )
}
export default Score;