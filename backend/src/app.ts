import fastify, { FastifyServerOptions } from 'fastify'
import authRouters from './routers/auth'

const buildApp = (options: FastifyServerOptions) => {
    const app = fastify(options)

    app.get('/', async () => "ok")
    app.register(authRouters, { prefix: "/auth" })

    app.setErrorHandler((error, request, reply) => {
        reply.status(400).send({
            error: {
                error: error.statusCode,
                message: error.message,
                code: error.code
            }
        })
    })

    return app;
}

export default buildApp;