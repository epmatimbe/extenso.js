import writeInt from '../write-int'

/**
 * Obter o valor escrito por extenso.
 *
 * @method write
 * @param {string} val O valor a ser escrito.
 * @param {string} locale Código do país para escrever o número.
 * @param {object} opts As opções de escrita do valor.
 * @returns {string} O valor escrito por extenso.
 */
export default (val, locale, opts, scale) => {
  const number = parseInt(val)
  const text = writeInt(val, locale, 'm', scale)

  if (number === 1) return `${text} ${opts.singular}`
  if (number >= 1e+6 && !(/[1-9].*[1-9]/.test(number))) return `${text} de ${opts.plural}` //!(/[1-9].*[1-9]/.test(number) is used to test if number has more than 1 digit above zero

  return `${text} ${opts.plural}`
}
