const ScrollContainer = ({children}) => {
  return (
    <container className='h-screen w-screen mx-auto text-center flex flex-col items-center'>
      {children}
    </container>
  )
}
export default ScrollContainer