import {
  _ as o,
  o as r,
  c,
  d,
  w as i,
  a as n,
  b as a,
  t,
  e as l,
  r as h,
} from "./app.b352a92c.js";
const P = JSON.parse(
    '{"title":"Name and ID Schemes","description":"","frontmatter":{"title":"Name and ID Schemes","folder":"Reference"},"headers":[],"relativePath":"reference/dapis/reference/schemes.md"}'
  ),
  f = { name: "reference/dapis/reference/schemes.md" },
  m = { id: "frontmatter-title", tabindex: "-1" },
  p = n(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  u = l(
    '<p>What is the difference between a dAPI name and a Beacon or Beacon set ID? dAPI names are the principle means used to get API provider data held by Beacons. Any one Beacon, identified by an ID, has a single value. A dAPI may in fact get values from several Beacons and average the values, and/or apply other logic, before returning a single value to the reader.</p><p>dAPIs can be fluid because they use a publicly known set of Beacons to source values from. The list of Beacons could be altered for best-in-time results (e.g. Beacon availability) without a reader needing to change the code of its smart contract. Beacons could come and go but dAPIs are durable. Because of this flexibility it is always best to use the dAPI name rather than Beacon IDs which are fixed.</p><ul><li>dAPI name: A human readable name that represents a Beacon or Beacon set. The name is assigned when the dAPI is created and never changes.</li><li>Beacon ID: The hash of a Beacon&#39;s parameters.</li><li>Beacon set ID: The hash of the Beacon IDs in the Beacon set.</li></ul><p>A dAPI&#39;s name is identical across all chains. When accessing a dAPI value with a function such as <a href="./../developers/read-data-feed-with-dapi-name.html">readDataFeedWithName()</a>, only the dAPI <code>name</code> is needed.</p><p>A Beacon&#39;s ID and its template are identical across chains. When accessing a Beacon&#39;s value with a function such as <a href="./../developers/read-data-feed-with-id.html">readDataFeedWithId()</a>, the <code>beaconId</code> is needed.</p>',
    5
  );
function _(e, I, B, A, b, g) {
  const s = h("TitleSpan");
  return (
    r(),
    c("div", null, [
      d(s, null, { default: i(() => [a(t(e.$frontmatter.folder), 1)]), _: 1 }),
      n("h1", m, [a(t(e.$frontmatter.title) + " ", 1), p]),
      u,
    ])
  );
}
const D = o(f, [["render", _]]);
export { P as __pageData, D as default };
