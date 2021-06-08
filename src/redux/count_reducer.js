export default function count (preState = 0, action) {
  const {type, data} = action
  switch (type) {
    case "add":
      return preState + data
    case "minus":
      return preState - data
    default:
      return preState
  }
}