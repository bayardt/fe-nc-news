import React from 'react'

export default function Error({ error }) {
  return (
    <div><p>
        {error ? `${error}` : "no error"}</p></div>
  )
}
