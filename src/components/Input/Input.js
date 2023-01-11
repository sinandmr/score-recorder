import classnames from 'classnames';
import { forwardRef } from 'react';

const Input = forwardRef(({ className, type = 'text', ...rest }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      {...rest}
      className={classnames(`min-h-[2rem] text-center placeholder:text-opacity-70
       flex-1 border-solid border-2 border-secondary rounded-xl text-secondary pl-3`,
        className
      )}
    />
  )
});
export default Input;