import {
  _ as r,
  o as n,
  c as i,
  a as e,
  b as t,
  t as o,
} from "./app.b352a92c.js";
const b = JSON.parse(
    '{"title":"ChangeLog","description":"","frontmatter":{"lang":"en-US","title":"ChangeLog","sidebarHeader":"Reference","sidebarSubHeader":"\u2192 Airnode"},"headers":[{"level":2,"title":"v0.6","slug":"v0-6","link":"#v0-6","children":[]}],"relativePath":"reference/airnode/v0.6/index.md"}'
  ),
  s = { name: "reference/airnode/v0.6/index.md" },
  d = { id: "frontmatter-title", tabindex: "-1" },
  l = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  c = e(
    "p",
    null,
    "Top level README file for all Airnode versions might be the ChangeLog. The README file is always the top page in the sidebar.",
    -1
  ),
  h = e(
    "h2",
    { id: "v0-6", tabindex: "-1" },
    [
      t("v0.6 "),
      e(
        "a",
        { class: "header-anchor", href: "#v0-6", "aria-hidden": "true" },
        "#"
      ),
    ],
    -1
  );
function f(a, _, p, v, g, m) {
  return (
    n(),
    i("div", null, [e("h1", d, [t(o(a.$frontmatter.title) + " ", 1), l]), c, h])
  );
}
const x = r(s, [["render", f]]);
export { b as __pageData, x as default };
