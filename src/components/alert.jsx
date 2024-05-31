import React from 'react'

export const Alert = ({ alerta }) => {
  const { texto, tipo, estado } = alerta

  return (estado ? <div className={`alert ${tipo} mt-1`}>{texto}</div> : null)
}
