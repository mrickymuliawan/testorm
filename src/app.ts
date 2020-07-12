
import express from 'express'
import { createConnection, getConnection, getRepository } from 'typeorm'
import { User } from './entity/User'
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  // connection manager 
  const user = new User()
  user.firstName = 'ricky'
  user.lastName = 'haha'
  user.address = 'indo'
  user.age = 123
  getConnection().manager.save(user)

  res.send('test')
})

app.get('/user', async (req, res) => {
  // use repo
  const userRepo = getRepository(User)
  const user = await userRepo.find({
    select: ['firstName', 'lastName'],
    relations: ['wallet', 'trx'],
  })
  console.log(user);

  res.json({ data: user })
})
app.get('/create-user', async (req, res) => {
  // use repo
  const userRepo = getRepository(User)
  let user = userRepo.create({
    firstName: 'angel',
    lastName: 'haha',
    age: 123,
    address: 'indo'
  })

  user = await userRepo.save(user)

  res.json({ data: user })
})
createConnection().then((connection) => {
  app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
}).catch(error => console.log('TypeORM connection error: ', error));