import { FastifyInstance } from 'fastify'
import { handlersLogin } from '../handlers/auth'

const authRouters = async (app: FastifyInstance) => {
    app.post('/login', handlersLogin)
}

export default authRouters;