import {
  _ as d,
  o as c,
  c as p,
  d as t,
  w as l,
  a as s,
  b as r,
  t as a,
  r as o,
} from "./app.b352a92c.js";
const D = JSON.parse(
    '{"title":"dAPI Browser","description":"","frontmatter":{"title":"dAPI Browser","folder":"Reference"},"headers":[],"relativePath":"reference/dapis/reference/dapi-browser.md"}'
  ),
  f = { name: "reference/dapis/reference/dapi-browser.md" },
  _ = { id: "frontmatter-title", tabindex: "-1" },
  m = s(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  );
function h(e, w, u, b, B, $) {
  const n = o("TitleSpan"),
    i = o("dapis-browsers-DapiList");
  return (
    c(),
    p("div", null, [
      t(n, null, { default: l(() => [r(a(e.$frontmatter.folder), 1)]), _: 1 }),
      s("h1", _, [r(a(e.$frontmatter.title) + " ", 1), m]),
      t(i),
    ])
  );
}
const N = d(f, [["render", h]]);
export { D as __pageData, N as default };
