/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { homeRouterHandler } from "./routes/home";
import { dungeonRouterHandler } from "./routes/dungeons";

export default {
    async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const route = url.pathname;
		const queryParams = url.searchParams;
		const username = queryParams.get("name");

		switch(route) {
			case "/":
				return homeRouterHandler();
			
			case "/dungeons":
				return dungeonRouterHandler(username, request, ctx);
			
			case "/kuudra":
				return new Response("Kuudra API");

			default:
				return homeRouterHandler();
		}
	},
};
