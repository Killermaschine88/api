class JSONResponse {
    constructor(data, status = 200, headers = {}) {
        this.data = data;
        this.status = status;
        this.headers = headers;
    }

    toJSON() {
        return JSON.stringify(this.data);
    }

    toResponse() {
        return new Response(this.toJSON(), {
            status: this.status,
            headers: {
                "Content-Type": "application/json",
                ...this.headers,
            },
        });
    }
}

export { JSONResponse };
