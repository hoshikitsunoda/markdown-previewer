import React, { useContext } from 'react'
import marked from 'marked'

import { MarkdownContext } from '../App'

const Preview: React.FC = () => {
  const { state } = useContext(MarkdownContext)
  const content: string = marked(state.markdownText)

  return (
    <>
      <div
        className={`flex-1 p-8 markdown prose border-t border-b border-gray-400`}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </>
  )
}

export default Preview
