function formatInput(input: number): string
function formatInput(input: string): string
function formatInput(input: Date): string

function formatInput(input: number | string | Date): string {
  if (typeof input === 'number') {
    return `Number: ${input.toFixed(2)}`
  } else if (typeof input === 'string') {
    return `String: ${input.toUpperCase()}`
  } else if (input instanceof Date) {
    return `Date: ${input.toISOString()}`
  } else {
    return 'Unknown'
  }
}

console.log(formatInput(123.456))
console.log(formatInput('World'))
console.log(formatInput(new Date()))
