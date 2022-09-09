import {
  _ as l,
  o as c,
  c as p,
  d as a,
  w as d,
  a as n,
  b as s,
  t,
  e as u,
  r as o,
} from "./app.b352a92c.js";
const F = JSON.parse(
    '{"title":"Best Practices","description":"","frontmatter":{"title":"Best Practices","folder":"Introduction"},"headers":[{"level":2,"title":"Ease of Use","slug":"ease-of-use","link":"#ease-of-use","children":[]},{"level":2,"title":"Monitoring","slug":"monitoring","link":"#monitoring","children":[]},{"level":2,"title":"Security","slug":"security","link":"#security","children":[]}],"relativePath":"reference/dapis/introduction/best-practice.md"}'
  ),
  h = { name: "reference/dapis/introduction/best-practice.md" },
  f = { id: "frontmatter-title", tabindex: "-1" },
  m = n(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  A = u(
    `<p>dAPIs are aggregated from multiple beacons using a decentralized pool of independent Airnodes. All Airnodes are API provider owned and operated. API providers supply data to the <code>DAPIServer</code> contract which lives on many chains.</p><p>dAPP developers should consider a few important aspects of dAPIs in general.</p><ul><li>Ease of Use</li><li>Monitoring</li><li>Security</li></ul><h2 id="ease-of-use" tabindex="-1">Ease of Use <a class="header-anchor" href="#ease-of-use" aria-hidden="true">#</a></h2><p>dAPIs are the quickest way to connect your smart contracts to the real-world data such as asset prices. One use for dAPIs is to retrieve the latest pricing data of an asset in a single call and use that data either on-chain in a smart contract or off-chain in another application of choosing.</p><p>If you already have a project started and would like to integrate dAPIs, add the <code>DapiServer</code> contract to your existing smart contract. It is straight forward to call a dAPI using the <code>DapiServer</code> contract.</p><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&quot;@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> timestamp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">IDapiServer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_dapiServerContractAddress</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">readDataFeedWithDapiName</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_dapiName</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>See the details in the <a href="./../developers/read-data-feed-with-dapi-name.html">dApp Developers section</a> of the dAPI project.</p><div class="tip custom-block"><p class="custom-block-title">Consideration for &quot;Ease of Use&quot;</p><p>Use the <code>DapiServer.sol</code> contract function <a href="./../developers/read-data-feed-with-dapi-name.html">readDataFeedWithDapiName(_dapiName)</a> as the best way to access dAPI values as aggregated beacon values.</p></div><h2 id="monitoring" tabindex="-1">Monitoring <a class="header-anchor" href="#monitoring" aria-hidden="true">#</a></h2><p>Code sample here written in nodejs.</p><div class="tip custom-block"><p class="custom-block-title">Consideration for &quot;Monitoring&quot;</p><p>Build and deploy a monitoring app of your own that checks dAPIs that are important to you.</p></div><h2 id="security" tabindex="-1">Security <a class="header-anchor" href="#security" aria-hidden="true">#</a></h2><p>dAPP developers do not need to trust API3 as all Airnodes are owned and operated by an API provider. Each API provider has deployed their Airnode using a <code>secrets.env</code> file that API3 does not possess. Therefore the Airnode operates under the complete autonomy of the API provider who&#39;s signed data is used to update <a href="https://github.com/api3dao/airnode-protocol-v1/blob/main/contracts/dapis/DapiServer.sol" target="_blank" rel="noreferrer">DapiServer.sol</a> contract. API3 cannot alter values from API providers.</p><div class="tip custom-block"><p class="custom-block-title">Consideration for &quot;Security&quot;</p><p>All <a href="https://github.com/orgs/api3dao/repositories?type=all" target="_blank" rel="noreferrer">API3 source code</a> is open sourced and can be verified by anyone. Consider reading through API3 source code to verify claims of security.</p></div>`,
    15
  );
function y(e, D, v, g, b, _) {
  const r = o("TitleSpan"),
    i = o("Toc");
  return (
    c(),
    p("div", null, [
      a(r, null, { default: d(() => [s(t(e.$frontmatter.folder), 1)]), _: 1 }),
      n("h1", f, [s(t(e.$frontmatter.title) + " ", 1), m]),
      a(i),
      A,
    ])
  );
}
const C = l(h, [["render", y]]);
export { F as __pageData, C as default };
