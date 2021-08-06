import request from './request'

export  async function login (params) {
    return await request.post(
        '/passport/login',
        params
    )
}