/**
 * The main script file of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

// First step. The environment
console.info('I found it and changed it!')

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
  users = users.map(user => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      image: user.picture.medium
    }
  })
  console.table(users)
})
