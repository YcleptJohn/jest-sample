const maths = module.exports = {}

maths.add = (num1, num2) => {
  return num1+num2
}

maths.sub = (num1, num2) => {
  return num1-num2
}

maths.mul = (num1, num2) => {
  return num1*num2
}

maths.sum = function () {
  let total = 0
  const args = Array.from(arguments)
  args.forEach(n => total += n)
  return total
}