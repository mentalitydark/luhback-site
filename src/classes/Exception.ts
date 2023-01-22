export default class Exception extends Error {

    public code: number

    constructor(message: string, code: number = 400, options: ErrorOptions | undefined = undefined) {
        super(message, options)

        this.code = code
    }

    public toJSON() {
        return {
            message: this.message,
            code: this.code
        }
    }
}