import {
  _ as l,
  o as c,
  c as p,
  d as a,
  w as d,
  a as n,
  b as s,
  t,
  e as u,
  r as o,
} from "./app.b352a92c.js";
const F = JSON.parse(
    '{"title":"Best Practices","description":"","frontmatter":{"title":"Best Practices","folder":"Introduction"},"headers":[{"level":2,"title":"Ease of Use","slug":"ease-of-use","link":"#ease-of-use","children":[]},{"level":2,"title":"Monitoring","slug":"monitoring","link":"#monitoring","children":[]},{"level":2,"title":"Security","slug":"security","link":"#security","children":[]}],"relativePath":"reference/dapis/introduction/best-practice.md"}'
  ),
  h = { name: "reference/dapis/introduction/best-practice.md" },
  f = { id: "frontmatter-title", tabindex: "-1" },
  m = n(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  A = u("", 15);
function y(e, D, v, g, b, _) {
  const r = o("TitleSpan"),
    i = o("Toc");
  return (
    c(),
    p("div", null, [
      a(r, null, { default: d(() => [s(t(e.$frontmatter.folder), 1)]), _: 1 }),
      n("h1", f, [s(t(e.$frontmatter.title) + " ", 1), m]),
      a(i),
      A,
    ])
  );
}
const C = l(h, [["render", y]]);
export { F as __pageData, C as default };
