import {
  _ as i,
  o as n,
  c as a,
  d as r,
  a as e,
  b as s,
  t as c,
  r as l,
} from "./app.b352a92c.js";
const $ = JSON.parse(
    `{"title":"config.json","description":null,"frontmatter":{"lang":"en-US","title":"config.json","description":null,"sidebarHeader":"Reference \u2192 Airnode v0.7","home":false,"head":[["meta",{"name":"foo","content":"bar"}],["link",{"rel":"canonical","href":"foobar"}],["script",{},"console.log('$site');"]]},"headers":[],"relativePath":"reference/airnode/latest/deployment-files/config.md"}`
  ),
  d = { name: "reference/airnode/latest/deployment-files/config.md" },
  u = { id: "frontmatter-title", tabindex: "-1" },
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
  f = e(
    "p",
    null,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    -1
  );
function p(t, _, h, g, b, v) {
  const o = l("reference-VersionPicklist");
  return (
    n(),
    a("div", null, [
      r(o),
      e("h1", u, [s(c(t.$frontmatter.title) + " ", 1), m]),
      f,
    ])
  );
}
const k = i(d, [["render", p]]);
export { $ as __pageData, k as default };
