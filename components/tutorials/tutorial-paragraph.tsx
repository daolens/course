import React from 'react'

type Props = {
  children: React.ReactNode
}

const TutorialParagraph = ({children}: Props) => {
  return (
    <p className='text-gray-600'>{children}</p>
  )
}

export default TutorialParagraph