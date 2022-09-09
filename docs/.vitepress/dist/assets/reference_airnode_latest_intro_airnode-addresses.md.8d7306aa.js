import {
  _ as h,
  o as _,
  c as p,
  d as t,
  w as u,
  a as e,
  b as n,
  t as a,
  r as s,
} from "./app.b352a92c.js";
const I = JSON.parse(
    '{"title":"Airnode Contract Addresses","description":"","frontmatter":{"title":"Airnode Contract Addresses","docSetName":"Airnode v0.7","folder":"Reference","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"AirnodeRrpV0","slug":"airnoderrpv0","link":"#airnoderrpv0","children":[]},{"level":2,"title":"RequesterAuthorizerWithAirnode","slug":"requesterauthorizerwithairnode","link":"#requesterauthorizerwithairnode","children":[]},{"level":2,"title":"AccessControlRegistry","slug":"accesscontrolregistry","link":"#accesscontrolregistry","children":[]}],"relativePath":"reference/airnode/latest/intro/airnode-addresses.md"}'
  ),
  m = { name: "reference/airnode/latest/intro/airnode-addresses.md" },
  b = { id: "frontmatter-title", tabindex: "-1" },
  f = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  A = e(
    "p",
    null,
    [
      n(
        "Use the contract addresses listed in the tables below to interact with Airnode on EVM-compatible blockchains. Additional addresses will be added as contracts are deployed, but feel free to "
      ),
      e(
        "a",
        {
          href: "https://github.com/api3dao/airnode/issues",
          target: "_blank",
          rel: "noreferrer",
        },
        "submit a GitHub issue"
      ),
      n(" requesting a new deployment."),
    ],
    -1
  ),
  g = e(
    "h2",
    { id: "airnoderrpv0", tabindex: "-1" },
    [
      n("AirnodeRrpV0 "),
      e(
        "a",
        {
          class: "header-anchor",
          href: "#airnoderrpv0",
          "aria-hidden": "true",
        },
        "#"
      ),
    ],
    -1
  ),
  y = e("p", null, ":::: tabs", -1),
  v = e("p", null, "::: tab mainnets", -1),
  R = e("p", null, ":::", -1),
  C = e("p", null, "::: tab testnets", -1),
  N = e("p", null, ":::", -1),
  w = e("p", null, "::::", -1),
  V = e(
    "h2",
    { id: "requesterauthorizerwithairnode", tabindex: "-1" },
    [
      n("RequesterAuthorizerWithAirnode "),
      e(
        "a",
        {
          class: "header-anchor",
          href: "#requesterauthorizerwithairnode",
          "aria-hidden": "true",
        },
        "#"
      ),
    ],
    -1
  ),
  q = e("p", null, ":::: tabs", -1),
  z = e("p", null, "::: tab mainnets", -1),
  k = e("p", null, ":::", -1),
  x = e("p", null, "::: tab testnets", -1),
  T = e("p", null, ":::", -1),
  W = e("p", null, "::::", -1),
  $ = e(
    "h2",
    { id: "accesscontrolregistry", tabindex: "-1" },
    [
      n("AccessControlRegistry "),
      e(
        "a",
        {
          class: "header-anchor",
          href: "#accesscontrolregistry",
          "aria-hidden": "true",
        },
        "#"
      ),
    ],
    -1
  ),
  S = e("p", null, ":::: tabs", -1),
  B = e("p", null, "::: tab mainnets", -1),
  H = e("p", null, ":::", -1),
  O = e("p", null, "::: tab testnets", -1),
  D = e("p", null, ":::", -1),
  E = e("p", null, "::::", -1);
function P(o, G, J, M, U, j) {
  const i = s("TitleSpan"),
    d = s("VersionWarning"),
    c = s("TocHeader"),
    l = s("TOC"),
    r = s("airnode-ContractAddresses");
  return (
    _(),
    p("div", null, [
      t(i, null, { default: u(() => [n(a(o.$frontmatter.folder), 1)]), _: 1 }),
      e("h1", b, [n(a(o.$frontmatter.title) + " ", 1), f]),
      t(d),
      t(c),
      t(l, { class: "table-of-contents", "include-level": [2, 3] }),
      A,
      g,
      y,
      v,
      t(r, { type: "mainnet", contractName: "AirnodeRrpV0" }),
      R,
      C,
      t(r, { type: "testnet", contractName: "AirnodeRrpV0" }),
      N,
      w,
      V,
      q,
      z,
      t(r, { type: "mainnet", contractName: "RequesterAuthorizerWithAirnode" }),
      k,
      x,
      t(r, { type: "testnet", contractName: "RequesterAuthorizerWithAirnode" }),
      T,
      W,
      $,
      S,
      B,
      t(r, { type: "mainnet", contractName: "AccessControlRegistry" }),
      H,
      O,
      t(r, { type: "testnet", contractName: "AccessControlRegistry" }),
      D,
      E,
    ])
  );
}
const K = h(m, [["render", P]]);
export { I as __pageData, K as default };
