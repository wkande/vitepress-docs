import {
  _ as d,
  o as c,
  c as l,
  d as n,
  w as h,
  a as e,
  b as t,
  t as s,
  r,
} from "./app.b352a92c.js";
const g = JSON.parse(
    '{"title":"Chains and Contracts","description":"","frontmatter":{"title":"Chains and Contracts","folder":"Reference"},"headers":[],"relativePath":"reference/dapis/reference/chains.md"}'
  ),
  p = { name: "reference/dapis/reference/chains.md" },
  f = { id: "frontmatter-title", tabindex: "-1" },
  _ = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  m = e(
    "p",
    null,
    [
      t("dAPIs can be read on the following chains using the "),
      e("a", { href: "./../#dapiserver-sol" }, "DapiServer"),
      t(" contract addresses listed below. Use the "),
      e("a", { href: "./dapi-browser.html" }, "dAPI Browser"),
      t(
        " to find the desired dAPI names and the networks they are available on."
      ),
    ],
    -1
  );
function u(a, C, w, b, v, $) {
  const o = r("TitleSpan"),
    i = r("dapis-chains-ChainsList");
  return (
    c(),
    l("div", null, [
      n(o, null, { default: h(() => [t(s(a.$frontmatter.folder), 1)]), _: 1 }),
      e("h1", f, [t(s(a.$frontmatter.title) + " ", 1), _]),
      m,
      n(i),
    ])
  );
}
const x = d(p, [["render", u]]);
export { g as __pageData, x as default };
