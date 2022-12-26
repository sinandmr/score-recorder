import { Link } from 'react-router-dom';

const Button = ({ text, to, ...rest }) => {
  return (
    <button
      {...rest}
      className={'h-12 w-3/4 bg-main rounded-2xl hover:text-black hover:bg-green-500 hover:border-solid hover:border-4 hover:border-black'}>
      <Link to={to}>
        {text}
      </Link>
    </button>
  )
}
export default Button;