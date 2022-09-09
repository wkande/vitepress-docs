import {
  _ as r,
  o as c,
  c as i,
  a as s,
  b as e,
  t as D,
  d as a,
  e as n,
  r as l,
} from "./app.b352a92c.js";
const R = JSON.parse(
    '{"title":"Specification","description":"","frontmatter":{"title":"Specification","docSetName":"OIS v1.0","sidebarHeader":"Reference \u2192 OIS v1.0","basePath":"/ois/v1.0","tags":null,"rightAnchor":{"showDepth":1,"expand":{"trigger":"hover","clickModeDefaultOpen":true},"disableGlobalUI":false}},"headers":[{"level":2,"title":"OIS Object Summary","slug":"ois-object-summary","link":"#ois-object-summary","children":[]},{"level":2,"title":"1. oisFormat","slug":"_1-oisformat","link":"#_1-oisformat","children":[]},{"level":2,"title":"2. title","slug":"_2-title","link":"#_2-title","children":[]},{"level":2,"title":"3. version","slug":"_3-version","link":"#_3-version","children":[]},{"level":2,"title":"4. apiSpecifications","slug":"_4-apispecifications","link":"#_4-apispecifications","children":[{"level":3,"title":"4.1. servers","slug":"_4-1-servers","link":"#_4-1-servers","children":[]},{"level":3,"title":"4.2. paths","slug":"_4-2-paths","link":"#_4-2-paths","children":[]},{"level":3,"title":"4.3. components","slug":"_4-3-components","link":"#_4-3-components","children":[]},{"level":3,"title":"4.4. security","slug":"_4-4-security","link":"#_4-4-security","children":[]}]},{"level":2,"title":"5. endpoints","slug":"_5-endpoints","link":"#_5-endpoints","children":[{"level":3,"title":"5.1. name","slug":"_5-1-name","link":"#_5-1-name","children":[]},{"level":3,"title":"5.2. operation","slug":"_5-2-operation","link":"#_5-2-operation","children":[]},{"level":3,"title":"5.3. fixedOperationParameters","slug":"_5-3-fixedoperationparameters","link":"#_5-3-fixedoperationparameters","children":[]},{"level":3,"title":"5.4. reservedParameters","slug":"_5-4-reservedparameters","link":"#_5-4-reservedparameters","children":[]},{"level":3,"title":"5.5. parameters","slug":"_5-5-parameters","link":"#_5-5-parameters","children":[]},{"level":3,"title":"5.6. summary *","slug":"_5-6-summary","link":"#_5-6-summary","children":[]},{"level":3,"title":"5.7. description *","slug":"_5-7-description","link":"#_5-7-description","children":[]},{"level":3,"title":"5.8. externalDocs *","slug":"_5-8-externaldocs","link":"#_5-8-externaldocs","children":[]},{"level":3,"title":"5.9. preProcessingSpecifications *","slug":"_5-9-preprocessingspecifications","link":"#_5-9-preprocessingspecifications","children":[]},{"level":3,"title":"5.10. postProcessingSpecifications *","slug":"_5-10-postprocessingspecifications","link":"#_5-10-postprocessingspecifications","children":[]}]}],"relativePath":"reference/ois/v1.0/ois.md"}'
  ),
  y = { name: "reference/ois/v1.0/ois.md" },
  F = { id: "frontmatter-title", tabindex: "-1" },
  d = s(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  u = n("", 11),
  h = n("", 21),
  C = {
    href: "/airnode/v0.7/grp-providers/guides/build-an-airnode/api-security.html",
  },
  A = e(" (Required) An object where security schemes can be found under "),
  m = s("code", null, "securitySchemes.{securitySchemeName}", -1),
  b = e(" with the following elements:"),
  f = n("", 37),
  q = {
    href: "/airnode/v0.7/grp-providers/guides/build-an-airnode/api-integration.html#fixedoperationparameters",
  },
  _ = e(
    " (Required) A list of objects specifying the fixed parameters for an API operation. While required, the fixedOperationParameters array can be left empty. Each object has the following elements:"
  ),
  v = n("", 11),
  g = {
    href: "/airnode/v0.7/grp-providers/guides/build-an-airnode/api-integration.html#reservedparameters",
  },
  E = n("", 10),
  x = {
    href: "/airnode/v0.7/grp-providers/guides/build-an-airnode/api-integration.html#parameters",
  },
  S = e(
    " (Optional) A list of objects that specify Airnode endpoint parameters that map to an particular API operation's parameters. Each object has the following elements:"
  ),
  P = n("", 34);
function I(p, w, T, B, O, j) {
  const t = l("ois-OisAirnodeVersions"),
    o = l("InfoBtnBlue");
  return (
    c(),
    i("div", null, [
      s("h1", F, [e(D(p.$frontmatter.title) + " ", 1), d]),
      u,
      a(t),
      h,
      s("p", null, [s("a", C, [a(o)]), A, m, b]),
      f,
      s("p", null, [s("a", q, [a(o)]), _]),
      v,
      s("p", null, [s("a", g, [a(o)])]),
      E,
      s("p", null, [s("a", x, [a(o)]), S]),
      P,
    ])
  );
}
const N = r(y, [["render", I]]);
export { R as __pageData, N as default };
