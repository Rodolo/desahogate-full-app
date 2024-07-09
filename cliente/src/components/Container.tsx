interface ContainerProps {
    children: JSX.Element
}

export const Container = ( {children}: ContainerProps) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
}
