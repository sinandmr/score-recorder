import { Link } from 'react-router-dom';
import classnames from 'classnames';

const Button = ({ children, styles, ...rest }) => {
  return (
    <Link
      {...rest}
      className={classnames('flex justify-center items-center text-white h-12 w-3/4 bg-main rounded-2xl hover:text-main hover:bg-secondary hover:border-solid hover:border-2 hover:border-main', styles)}
    >
      {children}
    </Link>
  )
}
export default Button;