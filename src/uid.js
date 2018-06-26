export default function uid () {
  return 'crypto' in window
    ? window.crypto.getRandomValues(new Uint8Array(3)).join('')
    : Math.random().toString().slice(2,10)
}
