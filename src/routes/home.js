const homeText = ["AWESOME API DOCS"];

async function homeRouterHandler() {
    return new Response(homeText.join("\n"));
}

export { homeRouterHandler };
