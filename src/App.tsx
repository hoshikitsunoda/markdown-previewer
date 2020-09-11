import React, { useReducer } from 'react'

import Header from './components/Header'
import Input from './components/Input'
import Preview from './components/Preview'

import { Markdown, Action } from './types/types'

type ReducerFunc = (state: Markdown, action: Action) => Markdown

const initialState = {
  markdownText: '',
}

export const MarkdownContext = React.createContext<{
  state: Markdown
  dispatch: React.Dispatch<any>
}>({ state: initialState, dispatch: () => null })

export const reducer: ReducerFunc = (
  state: Markdown = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'UPDATE_MARKDOWN':
      return {
        markdownText: action.payload,
      }
    default:
      return initialState
  }
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <Header />
      <div className="flex justify-center">
        <MarkdownContext.Provider value={{ state, dispatch }}>
          <Input />
          <Preview />
        </MarkdownContext.Provider>
      </div>
    </div>
  )
}

export default App
