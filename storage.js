/*!
 * Start Bootstrap - Resume v5.0.8 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */
/*
!function(t){"use strict";t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=t(this.hash);if((e=e.length?e:t("[name="+this.hash.slice(1)+"]")).length)return t("html, body").animate({scrollTop:e.offset().top},1e3,"easeInOutExpo"),!1}}),t(".js-scroll-trigger").click(function(){t(".navbar-collapse").collapse("hide")}),t("body").scrollspy({target:"#sideNav"})}(jQuery);
const mul = (i, j) => { return i*j }

const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
  //const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
  //const ct = origCount + 1

    const i = parseInt(document.querySelector('#firstInput').value)
    const j = parseInt(document.querySelector('#secondInput').value)
    const ans = `Total space required is ${mul(i, j)}. `
    document.querySelector('#result').innerHTML = ans
    localStorage.setItem('countOfClicks', ct)
  }

  document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})





/* global localStorage */
function mult(x,y){
    return x*y
  }
  console.log('SCRIPT START')
  console.log('Declare testable functions......................')
  function mult(x, y) { return x * y }
  console.log('Defined mul=' + mult)
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
    const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
    
    const i = parseInt(document.querySelector('#firstInput').value)
    console.log('i=' + i)
    const j = parseInt(document.querySelector('#secondInput').value)
    console.log('j=' + j)
    const ct = origCount + 1
    const ans = ` Total space required is ${mult(i, j)} and This has been run ${ct} times.`
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
    if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
  })
  
  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
  })
  
  
  
  