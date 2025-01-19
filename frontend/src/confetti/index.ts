import confetti from 'canvas-confetti'
TypeScript
const timeout = (ms: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    })
}