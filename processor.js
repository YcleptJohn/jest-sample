const nice = (obj) => {
  // console.log('hello there')
  console.log('\n\n\n\n')
  console.log(JSON.stringify(obj, null, 2))
  console.log('\n\n\n\n')
  return obj
}

module.exports = nice