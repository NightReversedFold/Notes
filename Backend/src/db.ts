import {Pool} from 'pg'
import { DB_database, DB_HOST, DB_password, DB_USER } from './config'

const db = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_database,
    password: DB_password,
    ssl:{
        rejectUnauthorized:false
    }
})

export default db