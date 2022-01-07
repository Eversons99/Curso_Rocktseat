const sayMyName = () => console.log('Everson')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('Discover'))

console.log(runFunction(Math.ramdom))