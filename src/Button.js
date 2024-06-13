import React from 'react'

export function Button({text}) {
  return (
    <button onClick={() => alert("Si haces todo lo que los demás hacen en los negocios, vas a perder. La única manera de estar realmente por delante, es ser diferente")}>
      {text}
    </button>
  )
}
