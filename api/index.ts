export default async function handler(req: any, res: any) {
  try {
    const serverModule = await import("../dist/server/server.js");
    const server = (serverModule as any).default ?? serverModule;

    const method = req.method || "GET";
    const host = req.headers?.host || "example.com";
    const url = `https://${host}${req.url}`;

    let body: BodyInit | undefined = undefined;
    if (method !== "GET" && method !== "HEAD") {
      const chunks: Uint8Array[] = [];
      for await (const chunk of req) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      }
      if (chunks.length) {
        const merged = Buffer.concat(chunks.map((chunk) => Buffer.from(chunk)));
        body = merged as unknown as BodyInit;
      }
    }

    const request = new Request(url, {
      method,
      headers: req.headers as HeadersInit,
      body,
    });

    const response = await server.fetch(request, undefined, undefined);

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      // Avoid Node sending duplicate content-length when piping a Buffer
      if (key.toLowerCase() === "content-length") return;
      res.setHeader(key, value as string);
    });

    const buffer = Buffer.from(await response.arrayBuffer());
    res.setHeader("Content-Length", String(buffer.length));
    res.end(buffer);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
