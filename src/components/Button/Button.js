import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { toast } from 'react-hot-toast';
import Modal from 'components/Modal';

const Button = ({ children, className, type, ...rest }) => {

  const handleClick = () => {
    if (type === 'restart') {
      return toast(t => <Modal t={t} type={'restart'}/>)
    }
  }

  return (
    <Link
      onClick={handleClick}
      className={classnames(`flex justify-center items-center
       text-white h-12 w-3/4 bg-main rounded-2xl hover:text-main 
       hover:bg-secondary hover:border-solid hover:border-2 hover:border-main`,
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
export default Button;