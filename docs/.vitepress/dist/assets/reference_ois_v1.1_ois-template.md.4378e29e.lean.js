import {
  _ as l,
  o as p,
  c as o,
  d as e,
  a as s,
  b as t,
  t as r,
  e as c,
  r as D,
} from "./app.b352a92c.js";
const L = JSON.parse(
    '{"title":"OIS Template","description":"","frontmatter":{"title":"OIS Template","sidebarHeader":"Reference \u2192 OIS v1.1","basePath":"/reference/ois/v1.1","tags":null},"headers":[],"relativePath":"reference/ois/v1.1/ois-template.md"}'
  ),
  F = { name: "reference/ois/v1.1/ois-template.md" },
  y = { id: "frontmatter-title", tabindex: "-1" },
  C = s(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  A = c("", 4);
function i(n, u, b, m, q, _) {
  const a = D("reference-VersionPicklist");
  return (
    p(),
    o("div", null, [
      e(a),
      s("h1", y, [t(r(n.$frontmatter.title) + " ", 1), C]),
      A,
    ])
  );
}
const I = l(F, [["render", i]]);
export { L as __pageData, I as default };
