
/* global localStorage */
function div(x,y){
    return x/y
  }
  console.log('SCRIPT START')
  console.log('Declare testable functions......................')
  function div(x, y) { return x / y }
  console.log('Defined div=' + div)
  console.log('Declare event listeners .......................')
  window.addEventListener('load', (event) => {
    console.log('  Starting initialization ')
    
    if (localStorage.getItem('firstInput')) {
      document.querySelector('#firstInput').value = parseInt(localStorage.firstInput)
      console.log(`  Stored firstInput = ${localStorage.firstInput}`)
    }
    if (localStorage.getItem('secondInput')) {
      document.querySelector('#secondInput').value = parseInt(localStorage.secondInput)
      console.log(`  Stored secondInput = ${localStorage.secondInput}`)
    }
    console.log('  Finished initialization')
  })
  document.querySelector('#addButton').addEventListener('click', () => {
    console.log('  Starting clicker click handler')
    const origSum = parseInt(localStorage.getItem('countOfClicks')) || 0
    
    const i = parseInt(document.querySelector('#firstInput').value)
    console.log('i=' + i)
    const j = parseInt(document.querySelector('#secondInput').value)
    console.log('j=' + j)
    const ct = origSum + 1
    const ans = ` Total space required is ${div(i, j)} and This has been run ${ct} times.`
    document.querySelector('#result').innerHTML = ans
    localStorage.setItem('countOfClicks', ct)  // define a string key to store + its value
    localStorage.setItem('firstInput', i)
    localStorage.setItem('secondInput', j)
    console.log('  Finished clicker click handler')
  })
  document.querySelector('#wiper').addEventListener('click', () => {
    console.log('  Starting wiper click handler')
    localStorage.removeItem('countOfClicks')
    
    localStorage.removeItem('firstInput')
    localStorage.removeItem('secondInput')
    console.log('  Finished wiper click handler - localStorage entries removed')
  })
  console.log('SCRIPT END')
  
  
  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'addButton') { updateWithCode(event) }
  })
  
  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
  })
  
  
  
  