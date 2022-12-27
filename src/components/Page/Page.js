import classnames from 'classnames';

const Page = ({ children, styles = '' }) => {
  return (
    <div
      className={classnames(
        'p-10 min-w-2/5 w-2/5 mx-auto space-y-10 border-solid border-4 border-secondary overflow-hidden flex flex-col justify-start items-center bg-gray-100 rounded-3xl',
        styles
      )}
    >
      {children}
    </div>
  )
}
export default Page;