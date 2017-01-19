function findStuff(num, array) {
  return array.find(item => {
    return item === num
  })
}
//returns the first instance it is true

function filterStuff(num, array) {
  return array.filter(item => {
    return item === num
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
  let array = []

  string.split('').forEach(item => {
    return array.unshift(item)
  })

  return array.join('')
}
//split puts string into array
//forEach compares each item in array
//unshift reverses an array
//join puts item in an array into a string


module.exports = {findStuff, sortStuff, filterStuff,
                  indexStuff, reverseString
                  };
