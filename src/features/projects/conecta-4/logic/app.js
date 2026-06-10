import { diagonals } from '../constans.js'

const checkWinner = (arr, rowIndex) => {
  let check = []
  for (let i = 0; i <= arr.length - 4; i++) {
    for (let j = i; j < i + 4; j++) {
      rowIndex >= 0 ? check.push(arr[j][rowIndex]) : check.push(arr[j])
    }
    if (check.every(index => index === check[0] && index !== null)) return check
    check = []
  }

  return false
}

const diagWinner = (board, direction) => {
  const check = direction.diagonal.map(element => {
    const c = element[0]
    const f = element[2]
    return (board[c][f])
  })

  if (check.length === 4) {
    if (check.every(index => index === check[0] && index !== null)) return check
  }

  return checkWinner(check)
}

export function isWinner (board, colIndex, rowIndex) {
  const rigth = diagonals.rigth.find(rd => rd.diagonal.includes(`${colIndex}-${rowIndex}`))
  const left = diagonals.left.find(ld => ld.diagonal.includes(`${colIndex}-${rowIndex}`))

  let check = checkWinner(board[colIndex])
  if (check) return check

  check = checkWinner(board, rowIndex)
  if (check) return check

  if (rigth) {
    check = diagWinner(board, rigth)
    if (check) return check
  }

  if (left) {
    check = diagWinner(board, left)
    if (check) return check
  }

  return false
}
