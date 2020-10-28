/**
 * The main script file of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 1.0.0
 */

// First step. The environment
console.info('You found it! Well done! Now; go back to your editor and change this message and save the file!')

// Second step. Coding
/**
 * Downloads random users from randomuser.me.
 *
 * @async
 * @param {number} size - number of users to download.
 * @returns {Promise<object[]>} The users from the API.
 */
async function getRandomUsers (size = 10) {
  const result = await fetch(`/api/users?results=${size}`)
  return (await result.json()).results
}

getRandomUsers().then(users => {
  // TODO: Write code here
  console.log('Hello World Again!')
  
})
