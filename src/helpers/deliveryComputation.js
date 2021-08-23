const deliveryTable = {
  "250g": [7.20, 9.60, 12.00],
  "500g": [13.00, 17.50, 22.00],
  "1000g": [22.00, 32.00, 42.00],
}

export const getWeeklyPrice = (weight) => {
  if (!weight) {
    return 7.20
  }
  return deliveryTable[weight][0]
}

export const getBiWeeklyPrice = (weight) => {
  if (!weight) {
    return 13.00
  }
  return deliveryTable[weight][1]
}

export const getMonthPrice = (weight) => {
  if (!weight) {
    return 22.00
  }
  return deliveryTable[weight][2]
}


export const getTotalPrice = (weight, frequency) => {
  if (frequency === 'Every week') {
      return getWeeklyPrice(weight) * 4
  }

  if (frequency === 'Every 2 weeks') {
      return getBiWeeklyPrice(weight) * 2
  }

  if (frequency === 'Every month') {
      return getMonthPrice(weight) * 1
  }
}
