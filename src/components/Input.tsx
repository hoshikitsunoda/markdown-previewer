import React, { useContext } from 'react'
import { MarkdownContext } from '../App'

const Input: React.FC = () => {
  const { dispatch } = useContext(MarkdownContext)
  const inputChangeHandler = (event: any) => {
    dispatch({ type: 'UPDATE_MARKDOWN', data: event.target.value })
  }

  return (
    <>
      <textarea
        className={`flex-1 bg-gray-200 p-8 resize-none`}
        name="textarea"
        cols={30}
        rows={30}
        onChange={(md) => inputChangeHandler(md)}
      ></textarea>
    </>
  )
}

export default Input
