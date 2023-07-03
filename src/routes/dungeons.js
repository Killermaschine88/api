import { nameToUUID } from "../util/functions"
import { JSONResponse } from "../util/JSONReponse";

async function dungeonRouterHandler(username) {
    const uuid = await nameToUUID(username);

    return new JSONResponse(uuid).toResponse()
}

export { dungeonRouterHandler }