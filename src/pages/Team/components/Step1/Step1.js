import { forwardRef, Fragment } from 'react';
import Input from 'components/Input';

const Step1 = forwardRef((props, ref) => {
  return (
    <Fragment>
      <p className={'text-main text-3xl font-bold'}>Kaç Takım Olduğunu Yaz</p>
      <form>
        <Input
          ref={ref}
          type={'number'}
          placeholder={'Takım Sayısı'}
          className={'text-center'}/>
      </form>
    </Fragment>
  )
})
export default Step1;