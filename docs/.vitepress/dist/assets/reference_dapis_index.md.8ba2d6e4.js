import {
  _ as s,
  o,
  c as t,
  a as e,
  b as r,
  t as n,
  e as i,
} from "./app.b352a92c.js";
const d = "/assets/dapp-beacon.aa8a9f29.png",
  p = "/assets/dapi-beacons.bc3ef911.png",
  _ = JSON.parse(
    '{"title":"What are dAPIs?","description":"","frontmatter":{"title":"What are dAPIs?","sidebarHeader":"Reference","sidebarSubHeader":"\u2192 dAPIs"},"headers":[{"level":2,"title":"DapiServer.sol","slug":"dapiserver-sol","link":"#dapiserver-sol","children":[]},{"level":2,"title":"dAPI Composition","slug":"dapi-composition","link":"#dapi-composition","children":[]}],"relativePath":"reference/dapis/index.md"}'
  ),
  c = { name: "reference/dapis/index.md" },
  l = { id: "frontmatter-title", tabindex: "-1" },
  h = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  m = i(
    '<div class="warning custom-block"><p class="custom-block-title">Relocate</p><p>Move this page to Explore.</p></div><p><em>See the article, <a href="https://medium.com/api3/dapis-apis-for-dapps-53b83f8d2493" target="_blank" rel="noreferrer">dAPIs: APIs for dApps</a> for an overview of dAPIs, and how they relate to <a href="https://medium.com/api3/beacons-building-blocks-for-web3-data-connectivity-df6ad3eb5763" target="_blank" rel="noreferrer">Beacons</a>.</em></p><p><strong>dAPIs</strong> are continuously updated streams of off-chain data, such as the latest cryptocurrency, stock and commodity prices. They can power various decentralized applications such as DeFi lending, synthetic assets, stable coins, derivatives, NFTs and more.</p><p>dAPIs are composed of <strong>Beacons</strong>, which are <em>first-party data feeds</em>. A Beacon is directly powered by the owner of the data, the API provider. Compared to third-party oracle solutions, which involve middlemen node operators, this approach is secure, transparent, cost-efficient and scalable. API3 composes dAPIs out of Beacons, and provides them as turn-key data feed solutions on many chains.</p><h2 id="dapiserver-sol" tabindex="-1"><code>DapiServer.sol</code> <a class="header-anchor" href="#dapiserver-sol" aria-hidden="true">#</a></h2><p>Developers use the <a href="https://github.com/api3dao/airnode-protocol-v1/blob/main/contracts/dapis/DapiServer.sol" target="_blank" rel="noreferrer">DapiServer.sol</a> contract to access dAPIs. <code>DapiServer.sol</code> reads directly from its data store of Beacons, which are powered by API provider-owned and operated <a href="/reference/airnode/latest/">Airnodes</a>.</p><blockquote><img src="' +
      d +
      '" width="550px"></blockquote><p>A dAPI can be configured to read an individual Beacon or an aggregation of multiple Beacons.</p><blockquote><img src="' +
      p +
      `" width="550px"></blockquote><p>Each dAPI has a human-readable name (e.g., <code>ETH/USD</code>) that makes them easily accessible using <code>DapiServer.sol</code>.</p><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#676E95;">// Reading the ETH/USD dAPI using the DapiServer contract</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> timestamp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">IDapiServer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_dapiServerContractAddress</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">readDataFeedWithDapiName</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">&quot;ETH/USD&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>See the <a href="./developers/">dApp Developers</a> section to learn more about accessing dAPIs.</p><h2 id="dapi-composition" tabindex="-1">dAPI Composition <a class="header-anchor" href="#dapi-composition" aria-hidden="true">#</a></h2><p>API3 composes dAPIs out of individual Beacons and Beacon sets, and provides them as turn-key data feed services. Users need not worry about the exact API provider used, the endpoint called, or the parameters used. This process is managed by the API3 core technical team multisigs deployed on the chains that dAPIs are provided on. API3 also provides access to individual Beacons or Beacon sets for the users that require full control over the curation of the data feeds they use.</p>`,
    14
  );
function u(a, f, v, b, A, y) {
  return (
    o(),
    t("div", null, [e("h1", l, [r(n(a.$frontmatter.title) + " ", 1), h]), m])
  );
}
const g = s(c, [["render", u]]);
export { _ as __pageData, g as default };
