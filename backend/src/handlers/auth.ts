import { AuthLoginBodyRequest } from '../types/handlers/auth';

export const handlersLogin = async (req: AuthLoginBodyRequest) => {
    const { username, password } = req.body
    return `handlersLogin (${username}, ${password})`
}

export default {
    handlersLogin
}