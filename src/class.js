
/**
 *User
 * @typedef {Object} User2
 * @property {number} id User Id
 * @property {String} nombres User's name
 * @property {number} age User's age (Optinoal)
 * @property {boolean} isActive User's State 
 */


/**
 * Class to create a Programmer
 * @example
 * const newProgrammer = new Programmer{{fullname:'Erick Ayala', 'Javascript'}}
 * newProgrammer.getInfo
 * 
 * @see https://docs.github.com/en/rest/reference/repos
 * 
 * @todo Implemente the rest of methods 
 * @tutorial firsttutorial
 * 
 */
class programmer {
    /**
     * @param  {User2} user User's information 
     * @param {string} language A programming lenguage
     */
    constructor(user, language){
        this.fullname = user.fullname;
        this.language = language
    }

    /**
     * Get programmer Information
     * @returns {void}
     */
    getInfo(){
        console.log(`I'm ${this.fullname} and my favorite programming language is ${this.language}`)
    }
}

/**
 * Know more in {@link programmer}
 */

const programmerOne = new programmer({fullname: 'Kenlly Ovaco'}, 'javascript')
const proogrammerTwo = new programmer({fullname: 'Erick Ayala'}, 'go')

programmerOne.getInfo();
proogrammerTwo.getInfo();