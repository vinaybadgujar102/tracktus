interface ApiErrorProps {
    statusCode: number;
    message? : string;
    errors?: any [];
    stack? : string;
}

class ApiError extends Error{

    public statusCode: number;
    public data : null | any;
    public message: string;
    public errors: any[];
    public success: boolean;

    constructor({ statusCode, message = 'something went wrong', errors = [], stack }: ApiErrorProps){
        super(message)
        this.statusCode = statusCode,
        this.data = null,
        this.message = message,
        this.errors = errors,
        this.success = false

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError };