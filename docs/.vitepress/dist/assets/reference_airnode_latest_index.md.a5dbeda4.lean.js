import {
  _ as r,
  o as n,
  c as s,
  a as e,
  b as t,
  t as i,
} from "./app.b352a92c.js";
const b = JSON.parse(
    '{"title":"ChangeLog","description":"","frontmatter":{"lang":"en-US","title":"ChangeLog","sidebarHeader":"Reference","sidebarSubHeader":"\u2192 Airnode"},"headers":[{"level":2,"title":"v0.7 (latest)","slug":"v0-7-latest","link":"#v0-7-latest","children":[]}],"relativePath":"reference/airnode/latest/index.md"}'
  ),
  o = { name: "reference/airnode/latest/index.md" },
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
  c = e(
    "p",
    null,
    "Top level README file for all Airnode versions might be the ChangeLog. The README file is always the top page in the sidebar.",
    -1
  ),
  h = e(
    "h2",
    { id: "v0-7-latest", tabindex: "-1" },
    [
      t("v0.7 (latest) "),
      e(
        "a",
        { class: "header-anchor", href: "#v0-7-latest", "aria-hidden": "true" },
        "#"
      ),
    ],
    -1
  );
function f(a, _, p, g, m, v) {
  return (
    n(),
    s("div", null, [e("h1", l, [t(i(a.$frontmatter.title) + " ", 1), d]), c, h])
  );
}
const x = r(o, [["render", f]]);
export { b as __pageData, x as default };
