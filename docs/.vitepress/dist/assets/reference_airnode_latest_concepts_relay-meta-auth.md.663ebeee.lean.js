import {
  _ as n,
  o as d,
  c as l,
  a as s,
  b as c,
  t as h,
  d as e,
  e as p,
  r,
} from "./app.b352a92c.js";
const u = "/assets/relay-meta-flow.272d113d.png",
  w = JSON.parse(
    '{"title":"Relayed Meta Data Authentication","description":"","frontmatter":{"title":"Relayed Meta Data Authentication","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7"},"headers":[{"level":2,"title":"Simple Example","slug":"simple-example","link":"#simple-example","children":[{"level":3,"title":"1: Deploy Airnode","slug":"_1-deploy-airnode","link":"#_1-deploy-airnode","children":[]},{"level":3,"title":"2: Register Sponsors","slug":"_2-register-sponsors","link":"#_2-register-sponsors","children":[]},{"level":3,"title":"3: Making Requests","slug":"_3-making-requests","link":"#_3-making-requests","children":[]}]},{"level":2,"title":"Security Schemes","slug":"security-schemes","link":"#security-schemes","children":[]}],"relativePath":"reference/airnode/latest/concepts/relay-meta-auth.md"}'
  ),
  m = { name: "reference/airnode/latest/concepts/relay-meta-auth.md" },
  y = { id: "frontmatter-title", tabindex: "-1" },
  f = s(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  g = p("", 18);
function A(a, _, b, v, q, k) {
  const t = r("VersionWarning"),
    o = r("TocHeader"),
    i = r("TOC");
  return (
    d(),
    l("div", null, [
      s("h1", y, [c(h(a.$frontmatter.title) + " ", 1), f]),
      e(t),
      e(o),
      e(i, { class: "table-of-contents", "include-level": [2, 3] }),
      g,
    ])
  );
}
const S = n(m, [["render", A]]);
export { w as __pageData, S as default };
