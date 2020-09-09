import React from 'react'
import marked from 'marked'

const Preview: React.FC = () => {
  const content: string = marked('# hello', { sanitize: true })
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <textarea
        className={`flex-1 border border-gray-600 p-8 resize-none`}
        name="textarea"
        cols={30}
        rows={30}
      ></textarea>
    </>
  )
}

export default Preview
