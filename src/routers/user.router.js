import MyRouter from "./router.js";

export default class UserRouter extends MyRouter {
    init() {
        this.get('/', (req, res) => {
            // res.json({ message: 'Hola Coders!' })
            res.sendSuccess('Hola Mundo')
        })

        this.post('/', (req, res) => {
            if (req.body.user !== 'alexmarinmendez') {
                return res.sendError('Usuario desconocido')
            }
            return res.sendSuccess('Bienvenido')
        })
    }
}