import { _ as i, o, c as r, a as e, b as t, t as n } from "./app.b352a92c.js";
const A = JSON.parse(
    `{"title":"Deploy Airnode to AWS","description":null,"frontmatter":{"lang":"en-US","title":"Deploy Airnode to AWS","description":null,"sidebarHeader":"Guides","sidebarSubHeader":"\u2192 API Providers","home":false,"head":[["meta",{"name":"foo","content":"bar"}],["link",{"rel":"canonical","href":"foobar"}],["script",{},"console.log('hello from frontmatter');"]]},"headers":[{"level":2,"title":"Getting started","slug":"getting-started","link":"#getting-started","children":[]}],"relativePath":"guides/providers/deploy-aws.md"}`
  ),
  s = { name: "guides/providers/deploy-aws.md" },
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    -1
  ),
  u = e(
    "h2",
    { id: "getting-started", tabindex: "-1" },
    [
      t("Getting started "),
      e(
        "a",
        {
          class: "header-anchor",
          href: "#getting-started",
          "aria-hidden": "true",
        },
        "#"
      ),
    ],
    -1
  ),
  m = e(
    "p",
    null,
    "There are two methods used to create the configuration file for an Airnode.",
    -1
  ),
  p = e("ul", null, [e("li", null, "ChainAPI"), e("li", null, "Manually")], -1);
function h(a, f, _, g, b, v) {
  return (
    o(),
    r("div", null, [
      e("h1", l, [t(n(a.$frontmatter.title) + " ", 1), d]),
      c,
      u,
      m,
      p,
    ])
  );
}
const y = i(s, [["render", h]]);
export { A as __pageData, y as default };
