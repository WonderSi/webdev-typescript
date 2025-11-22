type RGBColor = [number, number, number]

enum ColorName {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
  White = 'White',
  Black = 'Black'
}

function rgbToHex([r, g, b]: RGBColor): string {
  const toHex = (c: number) => {
    return c.toString(16).padStart(2, '0')
  }
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function getColor(color: ColorName): [RGBColor, string] {
  let rgb: RGBColor

  switch (color) {
    case ColorName.Red:
      rgb = [255, 0, 0]
      break

    case ColorName.Green:
      rgb = [0, 255, 0]
      break

    case ColorName.Blue:
      rgb = [0, 0, 255]
      break

    case ColorName.White:
      rgb = [255, 255, 255]
      break

    default:
      rgb = [0, 0, 0]
  }

  const hex = rgbToHex(rgb)
  return [rgb, hex]
}

console.log(getColor(ColorName.Red))
console.log(getColor(ColorName.Green))
console.log(getColor(ColorName.Blue))
console.log(getColor(ColorName.White))
console.log(getColor(ColorName.Black))
