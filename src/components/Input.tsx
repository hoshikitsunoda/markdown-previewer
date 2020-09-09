import React, { useState } from 'react'

const Input: React.FC = () => {
  const [markdown, setMarkdown] = useState()

  const inputChangeHandler = (event: any) => {
    setMarkdown(event.target.value)
  }

  console.log(markdown)

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
