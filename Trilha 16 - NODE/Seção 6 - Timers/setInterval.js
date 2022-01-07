// O setInterval vai rotdar uma função N vezes de acordo com o tempo definido no timeOut
const timeOut = 1000
const checking = () => console.log('Checking!')

setInterval(checking, timeOut)
