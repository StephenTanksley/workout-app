const bcrypt = require('bcryptjs')
const db = require('../../../config/dbConfig')

const get = () => {
    return db('users')
        .select('id', 'username')
}

const getBy = (filter) => {
    return db('users')
        .where(filter)
        .select(['id', 'username', 'password'])
        .first()
}

const getById = async (id) => {
    const user = await db('users')
    .where({ id })
    .first('id', 'username', 'password')

    return user //for now
}

const add = async (user) => {
    user.password = bcrypt.hashSync(user.password, 10)
    const [id] = await db('users').insert(user, process.env.NODE_ENV === 'production' ? 'id' : null).returning('*')

    return getById(process.env.NODE_ENV === 'production' ? id.id : id )
}

const update = async(id, changes) => {
    await db('users')
        .where({ id })
        .update(changes)
        .returning('*')
}

const remove = (id) => {
    return db('users')
        .where({ id })
        .del()
}