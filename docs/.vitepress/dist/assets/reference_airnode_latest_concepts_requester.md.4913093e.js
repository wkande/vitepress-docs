import {
  _ as s,
  o as a,
  c as o,
  a as e,
  b as n,
  t as i,
  d as c,
  e as d,
  r as h,
} from "./app.b352a92c.js";
const y = JSON.parse(
    '{"title":"Requester","description":"","frontmatter":{"title":"Requester","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7","tags":null},"headers":[],"relativePath":"reference/airnode/latest/concepts/requester.md"}'
  ),
  p = { name: "reference/airnode/latest/concepts/requester.md" },
  l = { id: "frontmatter-title", tabindex: "-1" },
  _ = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  u = d(
    '<p>A requester is a contract that makes Airnode requests. While making a request, the requester refers to a <a href="./sponsor.html">sponsor</a> by its <a href="./sponsor.html#sponsoraddress">sponsorAddress</a>, which means &quot;fulfill my request with the <a href="./sponsor.html#sponsorwallet">sponsor wallet</a> of the sponsor identified by <code>sponsorAddress</code>. Doing so requires the requester to be <a href="./sponsor.html">sponsored</a> by the said sponsor.</p><p>Note that the requester is the contract that makes the request. The requester may specify the request such that the request is fulfilled by the Airnode calling back another contract.</p><p>See the <a href="https://github.com/api3dao/airnode/tree/v0.7/packages/airnode-examples/contracts" target="_blank" rel="noreferrer">Airnode requester examples</a>.</p>',
    3
  );
function f(t, m, q, b, g, A) {
  const r = h("VersionWarning");
  return (
    a(),
    o("div", null, [
      e("h1", l, [n(i(t.$frontmatter.title) + " ", 1), _]),
      c(r),
      u,
    ])
  );
}
const N = s(p, [["render", f]]);
export { y as __pageData, N as default };
