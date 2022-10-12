const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!members || typeof members != 'object' || Object.keys(members)[0] != 0 ) return false
  return members.filter(it => typeof it == 'string')
    .map(it => 
      it.toUpperCase().split('').filter(it => it >= 'A' && it <= 'Z' && it !==' ').join('')[0]
    ).sort().join('')
}

module.exports = {
  createDreamTeam
};
