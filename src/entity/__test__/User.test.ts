import { User } from '../User'
import { getManager, createConnection, Connection } from 'typeorm'

describe('(entity) User', () => {
  it('should return all users', async done => {
    const connection = await createConnection()
    let user

    try {
      user = await connection.manager.find(User)
    } catch (error) {
      console.log(error)
    }

    expect(user).toBeDefined()

    console.log(user)

    await connection.close()

    done()
  })
})
