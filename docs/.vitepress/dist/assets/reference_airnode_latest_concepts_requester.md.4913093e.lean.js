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
  u = d("", 3);
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
