import {
  _ as r,
  o as n,
  c as i,
  a as e,
  b as a,
  t as o,
} from "./app.b352a92c.js";
const x = JSON.parse(
    '{"title":"ChangeLog","description":"","frontmatter":{"lang":"en-US","title":"ChangeLog","sidebarHeader":"Reference","sidebarSubHeader":"\u2192 Airnode"},"headers":[{"level":2,"title":"pre-alpha","slug":"pre-alpha","link":"#pre-alpha","children":[]}],"relativePath":"reference/airnode/pre-alpha/index.md"}'
  ),
  s = { name: "reference/airnode/pre-alpha/index.md" },
  l = { id: "frontmatter-title", tabindex: "-1" },
  d = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  h = e(
    "p",
    null,
    "Top level README file for all Airnode versions might be the ChangeLog. The README file is always the top page in the sidebar.",
    -1
  ),
  p = e(
    "h2",
    { id: "pre-alpha", tabindex: "-1" },
    [
      a("pre-alpha "),
      e(
        "a",
        { class: "header-anchor", href: "#pre-alpha", "aria-hidden": "true" },
        "#"
      ),
    ],
    -1
  );
function c(t, f, _, g, m, u) {
  return (
    n(),
    i("div", null, [e("h1", l, [a(o(t.$frontmatter.title) + " ", 1), d]), h, p])
  );
}
const v = r(s, [["render", c]]);
export { x as __pageData, v as default };
