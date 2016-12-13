function findStuff(num, array) {
  return array.find(function(item) {
    return item === num;
  })
}

function filterStuff(num, array) {
  return array.filter(function(item) {
    return item === num;
  })
}

function sortStuff(array) {
  return array.sort(function(a, b) {
    return a - b;
  })
}

function indexStuff(num, array) {
  return array.indexOf(num);
}

function reverseString(string) {
  let array = []
  string.split('').forEach((l) =>
    array.unshift(l)
  )
  return array.join('')
}
// Object.keys(obj).map(e => {
//   obj[e]
// })

// number of fruit in object

// (const a = [1, 3, 5, 7]
// const b = [23, 45, 56, 67]

// const newObj = {}
//
// a.forEach((e, i) => newObj[e] = b[i])
//
// console.log(newObj);)

//
// for(var i = 0; i < array.length - 1; i++){
//   let last = array.length - 1
//   let first = i
//   array[first] = array[last]
//   array[last] = array[first]
// }

module.exports = {findStuff, sortStuff, filterStuff,
                  indexStuff, reverseString
                  };
