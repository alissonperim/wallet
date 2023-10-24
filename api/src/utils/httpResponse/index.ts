export class HttpResponse {
    static ok (data: any) {
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    }

    static created (data: any) {
        return {
            statusCode: 201,
            body: JSON.stringify(data)
        }
    }

    static badRequest (data: any) {
        return {
            statusCode: 400,
            body: JSON.stringify(data)
        }
    }

    static notFound (data: any) {
        return {
            statusCode: 404,
            body: JSON.stringify(data)
        }
    }

    static internalServerError (data: any) {
        return {
            statusCode: 500,
            body: JSON.stringify(data)
        }
    }
}
