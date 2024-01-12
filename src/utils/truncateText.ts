export const truncateText = (text: string, length = 165) => {
  if (text.length <= length) {
    return text
  }

  let trimmed = text.substring(0, length)
  trimmed = trimmed.substring(
    0,
    Math.min(trimmed.length, trimmed.lastIndexOf(' ')),
  )

  return trimmed + '...'
}
