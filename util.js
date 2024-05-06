import { createCipheriv } from 'node:crypto'

//provides a randomly generated string of hexadecimal characters 
function generateHexString (len) {
  var arr = new Uint8Array((len || 40) / 2)
  crypto.getRandomValues(arr)
  return Array.from(arr, (dec) => dec.toString(16).padStart(2, "0")).join('')
}

function encrypt(algorithm, text, key) { //utf8 or ascii text

  const iv = generateHexString(16)

  const cipher = createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(text, 'utff8', 'base64')
  encrypted += cipher.final('base64')

  return {encrypted: encrypted, iv: iv}
}

export { encrypt }