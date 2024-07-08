import React, { createContext, PropsWithChildren, useContext } from 'react';

export interface IfContextProps {
  value: any
}

export const IfContext = createContext<IfContextProps>({
  value: null
})

export interface IfProps {
  value: boolean
}

export function If({
  value,
  children
}: PropsWithChildren<IfProps>) {
  return (
    <IfContext.Provider value={{ value }}>
      {children}
    </IfContext.Provider>
  )
}

export function Then({
  children
}: PropsWithChildren) {
  const { value } = useContext(IfContext)
  if (value) {
    return children
  }
}

export function Else({
  children
}: PropsWithChildren) {
  const { value } = useContext(IfContext)
  if (!value) {
    return children
  }
}

