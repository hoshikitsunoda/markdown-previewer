import React from 'react'

import Input from './components/Input'
import Preview from './components/Preview'

const App: React.FC = () => {
  return (
    <div className="App flex justify-center">
      <Input />
      <Preview />
    </div>
  )
}

export default App
