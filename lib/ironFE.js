function findStuff(num, array) {
  return array.find(num => {
    return num === 8
  })
}
//returns the first instance it is true

function filterStuff(num, array) {
  return array.filter(num => {
    return num === 8
  })
}
//returns a new array with all that are true

function sortStuff(array) {
  return array.sort((a, b) => {
    return a - b
  })
}
//returns a new array in order

function indexStuff(num, array) {
  return array.indexOf(num)
}
//returns index of true

function reverseString(string) {
  return string.split('').reverse().join('')
}


module.exports = {findStuff, sortStuff, filterStuff,
                  indexStuff, reverseString
                  };
