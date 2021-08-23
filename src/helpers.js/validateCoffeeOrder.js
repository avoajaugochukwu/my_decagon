

export const validateCoffeeOrder = (order) => {
  if ('grind' in order && order.preference === 'Capsule') {        
      delete order.grind
  }

  return isCoffeeOrderValid (order)
}

const isCoffeeOrderValid = (order) => {
  let check = true
  for (let value in order) {
      if (order[value] === '') {
          check = false
          break
      }
  }
  return check
}