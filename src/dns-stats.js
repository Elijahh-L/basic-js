const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!Array.isArray(domains)) {
    throw new Error('Invalid input. Input must be an array of domains.')
  }

  const dnsStats = {}

  for (const domain of domains) {
    const domainParts = domain.split('.').reverse()
    let dns = ''
    for (const part of domainParts) {
      dns += `.${part}`
      dnsStats[dns] = (dnsStats[dns] || 0) + 1
    }
  }

  return dnsStats
}

module.exports = {
  getDNSStats,
}
