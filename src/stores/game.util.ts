export const calculateColor = (value: number) => {
  // Ensure the value is within the range of 0 to 20
  const clampedValue = Math.min(Math.max(value, 0), 20)

  // Calculate the percentage of the value in the range
  const percentage = clampedValue / 20

  // Define RGB values for green and red
  const green = [0, 255, 0] // Green is (0, 255, 0)
  const red = [255, 0, 0] // Red is (255, 0, 0)

  // Interpolate the RGB values based on the percentage
  const interpolatedColor = green.map((g, index) => {
    return Math.round(g + percentage * (red[index] - g))
  })

  // Convert the RGB values to a hexadecimal color code
  const hexColor = '#' + interpolatedColor.map((c) => c.toString(16).padStart(2, '0')).join('')

  return hexColor
}

export const useInterval = (callback: CallableFunction, duration: number) => {
  let intervalId: number | null = null

  const start = function () {
    stop()
    if (!intervalId) {
      intervalId = window.setInterval(callback, duration)
    }
  }

  const stop = function () {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  return { start, stop }
}
