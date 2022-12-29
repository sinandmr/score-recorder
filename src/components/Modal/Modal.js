import { setPenalty } from 'store/Game';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

const Modal = ({ index, t }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPenalty({ index }));
    toast.dismiss(t.id);
  }

  return (
    <div className={'flex flex-col'}>
      <b>Ceza eklemeyi onaylıyor musunuz?</b>
      <div className={'flex justify-around mt-3'}>
        <button
          className={'border-2 border-solid border-secondary p-2 rounded-xl'}
          onClick={handleClick}>
          Evet
        </button>
        <button
          className={'border-2 border-solid border-red-700 p-2 rounded-xl'}
          onClick={() => toast.dismiss(t.id)}>
          Hayır
        </button>
      </div>
    </div>
  )
}

export default Modal;
