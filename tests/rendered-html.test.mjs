import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/", origin = "http://localhost") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`${origin}${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Dunwoody Barber Shop homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Barber Shop in Dunwoody, GA \| Dunwoody Barber Shop<\/title>/i);
  assert.match(html, /Your neighborhood barber in Dunwoody\./i);
  assert.match(html, /Regular Haircut/i);
  assert.match(html, /Boys Haircut/i);
  assert.match(html, /Razor Cut/i);
  assert.match(html, /Facial Shave/i);
  assert.match(html, /Beard Trim/i);
  assert.match(html, /Shampoo/i);
  assert.match(html, /\(770\) 396-8500/);
  assert.match(html, /5064 Nandina Lane/);
});

test("keeps contact details private and includes accessibility landmarks", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /mailto:/i);
  assert.doesNotMatch(html, /kevinlam1805/i);
  assert.match(html, /href="#content"/i);
  assert.match(html, /aria-label="Primary navigation"/i);
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /Accessibility assistance:/i);
});

test("publishes crawlable robots and sitemap metadata", async () => {
  const [robotsResponse, sitemapResponse] = await Promise.all([
    render("/robots.txt"),
    render("/sitemap.xml"),
  ]);

  assert.equal(robotsResponse.status, 200);
  assert.match(robotsResponse.headers.get("content-type") ?? "", /^text\/plain\b/i);
  assert.match(await robotsResponse.text(), /Sitemap: https:\/\/dunwoodybarbershop\.com\/sitemap\.xml/i);

  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapResponse.headers.get("content-type") ?? "", /xml/i);
  assert.match(await sitemapResponse.text(), /<loc>https:\/\/dunwoodybarbershop\.com<\/loc>/i);
});

test("enforces the canonical HTTPS hostname and sends HSTS", async () => {
  const [httpResponse, wwwResponse, httpsResponse] = await Promise.all([
    render("/services?from=http", "http://dunwoodybarbershop.com"),
    render("/visit", "https://www.dunwoodybarbershop.com"),
    render("/", "https://dunwoodybarbershop.com"),
  ]);

  assert.equal(httpResponse.status, 301);
  assert.equal(
    httpResponse.headers.get("location"),
    "https://dunwoodybarbershop.com/services?from=http",
  );
  assert.equal(wwwResponse.status, 301);
  assert.equal(wwwResponse.headers.get("location"), "https://dunwoodybarbershop.com/visit");
  assert.equal(httpsResponse.headers.get("strict-transport-security"), "max-age=31536000");
  assert.equal(httpsResponse.headers.get("x-content-type-options"), "nosniff");
});
