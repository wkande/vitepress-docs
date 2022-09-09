import {
  _ as d,
  o as h,
  c as p,
  d as e,
  w as m,
  a as n,
  b as r,
  t as a,
  e as u,
  r as t,
} from "./app.b352a92c.js";
const f = "/assets/airnode.122793d6.png",
  S = JSON.parse(
    '{"title":"Design Philosophy","description":"","frontmatter":{"title":"Design Philosophy","docSetName":"Airnode v0.7","folder":"API Providers","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"Scope","slug":"scope","link":"#scope","children":[]},{"level":2,"title":"Requirements","slug":"requirements","link":"#requirements","children":[]}],"relativePath":"reference/airnode/latest/intro/design-philosophy.md"}'
  ),
  _ = { name: "reference/airnode/latest/intro/design-philosophy.md" },
  y = { id: "frontmatter-title", tabindex: "-1" },
  g = n(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  b = u(
    '<p><em>See our article, <a href="https://medium.com/api3/airnode-the-api-gateway-for-blockchains-8b07ff136840" target="_blank" rel="noreferrer">Airnode: The API gateway for blockchains</a> for a high level overview of Airnode.</em></p><p>The API3 solution to the API connectivity problem requires an ecosystem of a large number of first-party oracles. Airnode&#39;s role in this is to make first-party oracles a reality.</p><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-hidden="true">#</a></h2><p>Any non-essential feature added to an application will return as an increase in development time, maintenance cost and bugs. On the other hand, essential features should be included out-of-the-box, and should not be left to the user to implement. For example, depending on third party external adapters for fundamental functionality is a failure in design. Then, it is important to know what exactly the application will be used for to specify its scope.</p><p>Airnode is designed to interface APIs to smart contract platforms. This means that it can only do this, but do it well. Note that this scope is not as restrictive as it seems, as APIs come in many shapes and forms (HTTP/WebSocket, request\u2013response/publish\u2013subscribe/webhooks, etc.). The long term plan is to support all API schemes that there are demand for.</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-hidden="true">#</a></h2><p><em>See our article, <a href="https://medium.com/api3/where-are-the-first-party-oracles-5078cebaf17" target="_blank" rel="noreferrer">Where are the first-party oracles?</a> that lists the obstacles in the way of first-party oracles.</em></p><p>Airnode is designed to be operated as a first-party oracle, i.e., by the API provider themselves. This results in very restrictive requirements:</p><p align="center"><img src="' +
      f +
      '"></p><ul><li>The API provider does not know how to operate an oracle node. Then, the oracle node should not require any know-how from the API provider.</li><li>API\u2013oracle node integration should be standardized so that tools can be developed to streamline the process.</li><li>The API provider does not want to invest man-hours to operate the node. Then, the oracle node should be <em>set-and-forget</em>.</li><li>The API provider does not want to pay for hosting when their oracle is not being used. Then, the hosting services should be priced on-demand.</li><li>The API provider cannot accept cryptocurrency as payment due to compliance, legal and accounting reasons. They cannot exchange cryptocurrencies or fund their node wallets for the same reasons. Then, the protocol should not require the API provider to handle cryptocurrency as a means of payment, or fund their node wallet periodically.</li><li>The API provider cannot stake funds that would expose them to financial risk due to compliance, legal and accounting reasons. Therefore, the security mechanics of the protocol should not depend on oracles to stake.</li></ul>',
    10
  );
function T(o, v, A, P, w, I) {
  const s = t("TitleSpan"),
    i = t("VersionWarning"),
    l = t("TocHeader"),
    c = t("TOC");
  return (
    h(),
    p("div", null, [
      e(s, null, { default: m(() => [r(a(o.$frontmatter.folder), 1)]), _: 1 }),
      n("h1", y, [r(a(o.$frontmatter.title) + " ", 1), g]),
      e(i),
      e(l),
      e(c, { class: "table-of-contents", "include-level": [2, 3] }),
      b,
    ])
  );
}
const x = d(_, [["render", T]]);
export { S as __pageData, x as default };
