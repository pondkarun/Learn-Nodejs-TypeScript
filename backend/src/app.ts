import fastify, { FastifyServerOptions } from 'fastify'
import authRouters from './routers/auth'

const buildApp = (options: FastifyServerOptions) => {
    const app = fastify(options)

    app.get('/', async () => "ok")
    app.register(authRouters, { prefix: "/auth" })

    return app;
}

export default buildApp;