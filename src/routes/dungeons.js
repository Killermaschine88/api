import { nameToUUID } from "../util/functions"
import { JSONResponse } from "../util/JSONReponse";

async function dungeonRouterHandler(username, request, ctx) {
    const uuid = await nameToUUID(username, request, ctx);

    return new JSONResponse(uuid).toResponse()
}

export { dungeonRouterHandler }