import React, { useContext } from 'react'
import { MarkdownContext } from '../App'

const Input: React.FC = () => {
  const { dispatch } = useContext(MarkdownContext)
  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch({ type: 'UPDATE_MARKDOWN', payload: event.target.value })
  }

  return (
    <>
      <textarea
        className={`flex-1 border border-gray-400 bg-gray-100 p-8 resize-none outline-none`}
        name="textarea"
        cols={30}
        rows={30}
        onChange={(md) => inputChangeHandler(md)}
      ></textarea>
    </>
  )
}

export default Input
