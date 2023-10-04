import React from 'react'

interface TitleProps {
    titleText: string
}

const Title: React.FC<TitleProps> = ({titleText}) => {
   return <h1>{titleText}</h1>
}

export default Title
