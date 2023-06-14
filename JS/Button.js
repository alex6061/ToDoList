/**
 * @function Button
 * @type {Object}
 * @param {title} string 
 * @returns {string} HTML or empty                               ////????
 */

const Button = (title) => {
  if(!Button) return '';

  return `
    <button>${Button.text}</button>
  `;
}