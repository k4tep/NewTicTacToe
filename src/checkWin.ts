export default function checkWin(field:string[][], turn: boolean): string {
    if (
        field[0].every((e) => e === (turn ? 'x' : 'o')) ||
        field[1].every((e) => e === (turn ? 'x' : 'o')) ||
        field[2].every((e) => e === (turn ? 'x' : 'o')) ||
        (field[0][0] === (turn ? 'x' : 'o') && field[1][1] === (turn ? 'x' : 'o') && field[2][2] === (turn ? 'x' : 'o')) ||
        (field[0][2] === (turn ? 'x' : 'o') && field[1][1] === (turn ? 'x' : 'o') && field[2][0] === (turn ? 'x' : 'o'))
    ) {
        return (turn ? 'x' : 'o');
    } else if (field.flat().every((e) => e !== '')) {
        return'none'
    }else {
      return ''
    }
}

export function ChangeColor(field:string[][], win: string): number[][] {
  if (win !== '' && win !== 'none') {
    if (field[0].every((e) => e === win)) {
        return [
            [0, 0],
            [0, 1],
            [0, 2],
        ];
    } else if (field[1].every((e) => e === win)) {
        return [
            [1, 0],
            [1, 1],
            [1, 2],
        ];
    } else if (field[2].every((e) => e === win)) {
        return [
            [2, 0],
            [2, 1],
            [2, 2],
        ];
    } else if (
        field[0][0] === win &&
        field[1][1] === win &&
        field[2][2] === win
    ) {
        return [
            [0, 0],
            [1, 1],
            [2, 2],
        ];
    }
    else if (
        field[0][2] === win &&
        field[1][1] === win &&
        field[2][0] === win
    ) {
        return [
            [0, 2],
            [1, 1],
            [2, 0],
        ];
    }
  }
    return []
}
