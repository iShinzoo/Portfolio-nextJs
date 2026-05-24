import server from '../dist/server/server.js';

const res = await server.fetch(new Request('http://localhost/'));
console.log('status', res.status);
const text = await res.text();
const linkMatch = text.match(/<link[^>]+rel="stylesheet"[^>]+>/);
console.log('link', linkMatch ? linkMatch[0] : 'none');
const hrefMatch = linkMatch?.[0].match(/href="([^"]+)"/);
console.log('href', hrefMatch ? hrefMatch[1] : 'none');
