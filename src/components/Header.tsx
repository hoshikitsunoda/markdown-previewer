import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="flex justify-between bg-gray-300">
      {['input', 'preview'].map((item: string) => {
        return (
          <div className="p-4" key={item}>
            <p>{item.toUpperCase()}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Header
