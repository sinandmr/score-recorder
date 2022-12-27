import { Link } from 'react-router-dom';
import classnames from 'classnames';

const Button = ({ children, to, styles, ...rest }) => {
  return (
    <button
      className={classnames( 'text-white h-12 w-3/4 bg-main rounded-2xl hover:text-main hover:bg-secondary hover:border-solid hover:border-2 hover:border-main', styles)}
      {...rest}
    >
      <Link to={to}>
        {children}
      </Link>
    </button>
  )
}
export default Button;