import {
  _ as n,
  o as t,
  c as r,
  d as o,
  a as e,
  b as i,
  t as l,
  e as c,
  r as d,
} from "./app.b352a92c.js";
const y = JSON.parse(
    '{"title":"aws.env","description":"","frontmatter":{"title":"aws.env","folder":"Reference > Deployment Files","sidebarHeader":"Reference \u2192 Airnode v0.7","basePath":"/airnode/v0.7","tags":null},"headers":[],"relativePath":"reference/airnode/latest/deployment-files/aws-env.md"}'
  ),
  p = { name: "reference/airnode/latest/deployment-files/aws-env.md" },
  _ = { id: "frontmatter-title", tabindex: "-1" },
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
  h = c("", 3);
function f(a, u, b, A, v, S) {
  const s = d("reference-VersionPicklist");
  return (
    t(),
    r("div", null, [
      o(s),
      e("h1", _, [i(l(a.$frontmatter.title) + " ", 1), m]),
      h,
    ])
  );
}
const g = n(p, [["render", f]]);
export { y as __pageData, g as default };
