import React from 'react'

export default function Error({ error }) {
  return (
    <div>
      <h3>
        <section>{error ? `${error}` : "This page does not exist."}</section>
      </h3>
    </div>
  );
}
