import { FastifyServerOptions } from 'fastify'
import buildApp from './src/app'

const options: FastifyServerOptions = {
    logger: true
}

const app = buildApp(options);

app.listen(3000)