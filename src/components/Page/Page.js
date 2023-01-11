import classnames from 'classnames';

const Page = ({ children, className }) => {
  return (
    <div
      className={classnames(`text-center p-10 md:min-w-3/5 md:w-2/5 sm:w-auto
       max-h-full mx-auto space-y-10 border-solid border-4 border-secondary 
       overflow-hidden flex flex-col justify-start items-center bg-gray-100 rounded-3xl`,
        className
      )}
    >
      {children}
    </div>
  )
}
export default Page;