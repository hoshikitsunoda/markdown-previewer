import React, { useReducer } from 'react'

import Input from './components/Input'
import Preview from './components/Preview'

interface Markdown {
  markdownText: string
}

interface initialContext {
  type: 'UPDATE_MARKDOWN'
  data: any
}

const initialState = {
  markdownText: '',
}

export const MarkdownContext = React.createContext<{
  state: Markdown
  dispatch: React.Dispatch<any>
}>({ state: initialState, dispatch: () => null })

export const reducer = (state: Markdown, action: initialContext) => {
  switch (action.type) {
    case 'UPDATE_MARKDOWN':
      return {
        markdownText: action.data,
      }
    default:
      return initialState
  }
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App flex justify-center">
      <MarkdownContext.Provider value={{ state, dispatch }}>
        <Input />
        <Preview />
      </MarkdownContext.Provider>
    </div>
  )
}

export default App
