import {
  _ as o,
  o as s,
  c as n,
  d as c,
  a as e,
  b as t,
  t as i,
  r as l,
} from "./app.b352a92c.js";
const S = JSON.parse(
    '{"title":"Example OIS Object","description":"","frontmatter":{"title":"Example OIS Object","sidebarHeader":"Reference \u2192 OIS v1.1","basePath":"/reference/ois/v1.1","tags":null},"headers":[],"relativePath":"reference/ois/v1.1/example.md"}'
  ),
  d = { name: "reference/ois/v1.1/example.md" },
  p = { id: "frontmatter-title", tabindex: "-1" },
  m = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  _ = e(
    "p",
    null,
    [t("@"), e("a", { href: "./example.json" }, "code json")],
    -1
  );
function f(a, h, x, u, v, b) {
  const r = l("reference-VersionPicklist");
  return (
    s(),
    n("div", null, [
      c(r),
      e("h1", p, [t(i(a.$frontmatter.title) + " ", 1), m]),
      _,
    ])
  );
}
const V = o(d, [["render", f]]);
export { S as __pageData, V as default };
