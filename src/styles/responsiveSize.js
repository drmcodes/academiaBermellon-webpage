/**
 * @description this function applies responsiveness to a CSS property, the value will range from minSize to maxSize
 * @param {number} minSize - The minimum value of the property
 * @param {number} maxSize - The maximum value of the property
 * @param {number} [minScreen=375] - The minimum screen width at which the property will be at minSize
 * @param {number} [maxScreen=1250] - The maximum screen width at which the property will be at maxSize
 * @returns {string} - The calculated responsive size
 */
export const responsiveSize = (minSize, maxSize, minScreen = 375, maxScreen = 1250) =>
    `calc(${minSize}px + (${maxSize} - ${minSize}) * (min(max(100vw, ${minScreen}px), ${maxScreen}px) - ${minScreen}px) / (${
      maxScreen - minScreen
    }))`;
  