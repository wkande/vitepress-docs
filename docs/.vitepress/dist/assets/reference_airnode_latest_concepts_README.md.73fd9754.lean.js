import {
  _ as s,
  o as l,
  c as n,
  d as e,
  a as r,
  b as c,
  t as d,
  e as h,
  r as t,
} from "./app.b352a92c.js";
const p = "/assets/RRP-protocol-contracts.7d8237c4.png",
  T = JSON.parse(
    '{"title":"Request-Response Protocol","description":"","frontmatter":{"title":"Request-Response Protocol","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7","sidebarHeader":"Airnode v0.7","tags":null},"headers":[{"level":2,"title":"Contracts","slug":"contracts","link":"#contracts","children":[{"level":3,"title":"AirnodeRrpV0.sol","slug":"airnoderrpv0-sol","link":"#airnoderrpv0-sol","children":[]},{"level":3,"title":"IAirnodeRrpV0.sol","slug":"iairnoderrpv0-sol","link":"#iairnoderrpv0-sol","children":[]},{"level":3,"title":"AuthorizationUtilsV0.sol","slug":"authorizationutilsv0-sol","link":"#authorizationutilsv0-sol","children":[]},{"level":3,"title":"WithdrawalUtilsV0.sol","slug":"withdrawalutilsv0-sol","link":"#withdrawalutilsv0-sol","children":[]},{"level":3,"title":"TemplateUtilsV0.sol","slug":"templateutilsv0-sol","link":"#templateutilsv0-sol","children":[]}]}],"relativePath":"reference/airnode/latest/concepts/README.md"}'
  ),
  u = { name: "reference/airnode/latest/concepts/README.md" },
  f = { id: "frontmatter-title", tabindex: "-1" },
  m = r(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  b = h("", 22);
function v(a, A, g, _, V, k) {
  const o = t("reference-VersionPicklist"),
    i = t("Toc");
  return (
    l(),
    n("div", null, [
      e(o),
      r("h1", f, [c(d(a.$frontmatter.title) + " ", 1), m]),
      e(i),
      b,
    ])
  );
}
const R = s(u, [["render", v]]);
export { T as __pageData, R as default };
