import React, { createContext, PropsWithChildren, useContext } from 'react'

interface ForContextProps {
  collection?: Array<any> | null | undefined
}

export const ForContext = createContext<ForContextProps>({
  collection: null
})

export interface ForEachProps {
  collection?: Array<any> | null | undefined
}

export function ForEach({
  collection,
  children
} : PropsWithChildren<ForEachProps>) {
  return (
    <ForContext.Provider value={{ collection }}>
      {children}
    </ForContext.Provider>
  )
}

export function Do({
  children
} : PropsWithChildren) {
  const { collection } = useContext(ForContext)
  // @ts-ignore
  if (collection?.length > 0) {
    // @ts-ignore
    return collection.map(node => children(node))
  }
  return null
}

export function Empty({
  children
} : PropsWithChildren) {
  const { collection } = useContext(ForContext)
  // @ts-ignore
  if (collection?.length > 0) {
    return null
  }
  return children
}
