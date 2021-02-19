'use strict'

console.log('hello')

const coinFlip = () => {
  const a = Math.random()

  return a
}

if (coinFlip() > 0.5) console.log('you win')
