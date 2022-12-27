import classnames from 'classnames';

const Input = ({ type = 'text', styles, ...rest }) => {
  return (
    <input
      type={type}
      {...rest}
      className={classnames('placeholder:text-opacity-70 flex-1 border-solid border-2 border-secondary rounded-xl text-secondary pl-3', styles)}
    />
  )
}
export default Input;