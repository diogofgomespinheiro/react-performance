import * as React from 'react'

const DogStateContext = React.createContext()
DogStateContext.displayName = 'DogStateContext'

function DogProvider({children}) {
  const value = React.useState('')
  return (
    <DogStateContext.Provider value={value}>
      {children}
    </DogStateContext.Provider>
  )
}

function useDogState() {
  const context = React.useContext(DogStateContext)
  if (!context) {
    throw new Error('useDogState must be used within the DogProvider')
  }
  return context
}

export {DogProvider, useDogState}
