import * as bootstrapApi from "./handlers/api/bootstrap.js";
import * as portfolio from "./handlers/api/portfolio.js";
import * as projectsIndex from "./handlers/api/projects/index.js";
import * as projectsId from "./handlers/api/projects/[id].js";
import * as login from "./handlers/api/auth/login.js";
import * as setup from "./handlers/api/setup.js";
import * as rotate from "./handlers/api/rotate.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const p = url.pathname;
    const m = request.method;
    try {
      if (p === "/api/bootstrap" && m === "GET") return await bootstrapApi.onRequestGet({ request, env });
      if (p === "/api/portfolio") {
        if (m === "GET") return await portfolio.onRequestGet({ request, env });
        if (m === "PUT") return await portfolio.onRequestPut({ request, env });
      }
      if (p === "/api/projects") {
        if (m === "GET") return await projectsIndex.onRequestGet({ request, env });
        if (m === "POST") return await projectsIndex.onRequestPost({ request, env });
      }
      const pm = p.match(/^\/api\/projects\/([^/]+)$/);
      if (pm) {
        const params = { id: decodeURIComponent(pm[1]) };
        if (m === "PUT") return await projectsId.onRequestPut({ request, env, params });
        if (m === "DELETE") return await projectsId.onRequestDelete({ request, env, params });
      }
      if (p === "/api/auth/login" && m === "POST") return await login.onRequestPost({ request, env });
      if (p === "/api/setup" && m === "POST") return await setup.onRequestPost({ request, env });
      if (p === "/api/rotate" && m === "POST") return await rotate.onRequestPost({ request, env });
      if (p.startsWith("/api/")) return Response.json({ success: false, error: "Not found" }, { status: 404 });
      return env.ASSETS.fetch(request);
    } catch (e) {
      return Response.json({ success: false, error: "Internal error" }, { status: 500 });
    }
  }
};
