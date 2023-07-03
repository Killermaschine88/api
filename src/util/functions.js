async function nameToUUID(name, request, ctx) {
    // Cache System
    const cacheUrl = new URL(request.url);
    const cacheKey = new Request(cacheUrl.toString(), request);
    const cache = caches.default;

    // Check if the value is already in the cache
    let response = await cache.match(cacheKey);

    if (response) {
        console.log("from cache");
        console.log(response);
        return response;
    } else {
        console.log("from api");
        const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`);
        const data = await res.json();

        // Cloning the Original Request for Cache
        const cacheExpiration = 2 * 60 * 60; // 2 hours in seconds
        let modifiedResponse = new Response(request.body, request);
        modifiedResponse.headers.append("Cache-Control", `s-maxage=5`);
        //modifiedResponse.headers.append("Cache-Control", `s-maxage=${cacheExpiration}`);
        ctx.waitUntil(cache.put(cacheKey, modifiedResponse.clone()));
        return data?.id;
    }
}

export { nameToUUID };
