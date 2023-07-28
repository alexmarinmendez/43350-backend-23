import { Router } from 'express'

export default class MyRouter {
    constructor() {
        this.router = Router()
        this.init()
    }

    init() {}

    getRouter() {
        return this.router
    }

    get(path, ...callbacks) {
        this.router.get(path, this.generateCustomResponses, this.applyCallbacks(callbacks))
    }

    post(path, ...callbacks) {
        this.router.post(path, this.generateCustomResponses, this.applyCallbacks(callbacks))
    }

    applyCallbacks(callbacks) {
        return callbacks.map(callback => async(...params) => {
            try {
                await callback.apply(this, params)
            } catch(err) {
                console.log(err)
                params[1].status(500).json({ error: err })
            }
        })
    }

    generateCustomResponses = (req, res, next) => {
        res.sendSuccess = payload => res.send({ status: 'success', payload })
        res.sendError = error => res.status(403).send({ status: 'error', error })
        next()
    }
}