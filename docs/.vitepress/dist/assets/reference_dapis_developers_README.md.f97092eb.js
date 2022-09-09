import {
  _ as o,
  o as n,
  c as i,
  d,
  w as l,
  a as r,
  b as a,
  t,
  e as c,
  r as p,
} from "./app.b352a92c.js";
const _ = JSON.parse(
    '{"title":"Getting Started","description":"","frontmatter":{"title":"Getting Started","folder":"dApp Developers"},"headers":[{"level":2,"title":"Starter Project","slug":"starter-project","link":"#starter-project","children":[]},{"level":2,"title":"Coverage Policies","slug":"coverage-policies","link":"#coverage-policies","children":[]},{"level":2,"title":"dAPI Names","slug":"dapi-names","link":"#dapi-names","children":[]},{"level":2,"title":"DapiServer Functions","slug":"dapiserver-functions","link":"#dapiserver-functions","children":[]},{"level":2,"title":"Resources","slug":"resources","link":"#resources","children":[]}],"relativePath":"reference/dapis/developers/README.md"}'
  ),
  h = { name: "reference/dapis/developers/README.md" },
  m = { id: "frontmatter-title", tabindex: "-1" },
  u = r(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  f = c(
    `<p>The <a href="https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.1/contracts/dapis/DapiServer.sol" target="_blank" rel="noreferrer">DapiServer.sol</a> contract serves data feeds to contracts with read access. All the related contracts can be imported from the <a href="https://www.npmjs.com/package/@api3/airnode-protocol-v1" target="_blank" rel="noreferrer">@api3/airnode-protocol-v1</a> npm package.</p><h2 id="starter-project" tabindex="-1">Starter Project <a class="header-anchor" href="#starter-project" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/api3dao/data-feed-reader-example" target="_blank" rel="noreferrer">data-feed-reader-example</a> starter is an example project for reading from dAPI a on the Polygon Mumbai testnet. Be sure to read through the <a href="https://github.com/api3dao/data-feed-reader-example/blob/main/README.md" target="_blank" rel="noreferrer">README.md</a> and some of the example code such as the <a href="https://github.com/api3dao/data-feed-reader-example/blob/main/contracts/DataFeedReaderExample.sol" target="_blank" rel="noreferrer">DataFeedReaderExample.sol</a> contract. Read through this entire page before running the starter project to better understand some of the terms and concepts mentioned. Finally follow the instruction in the README to get acquainted with reading data feeds.</p><h2 id="coverage-policies" tabindex="-1">Coverage Policies <a class="header-anchor" href="#coverage-policies" aria-hidden="true">#</a></h2><p><code>DapiServer.sol</code> will check that the requester has a coverage policy for each dAPI it may attempt to read. See available dAPIs on the <a href="https://market.api3.org" target="_blank" rel="noreferrer">API3 Market</a>. During the <em>preview period</em>, all dAPIs on production networks have free access (limited time offer). Please go to the <a href="https://forms.monday.com/forms/embed/f44d0ed9dfd0154885f48fdb3b87a489?r=use1" target="_blank" rel="noreferrer">Request Data</a> page to request dAPI access on production networks. See <a href="./../reference/chains.html">Chains and Contracts</a>, which includes supported networks.</p><p>On the Polygon Mumbai testnet, developers can <em>self-enable</em> the use of any dAPI. During the deployment flow of your smart contract that reads a data feed, add code that self-enables the desired dAPI. The following scripts from the <a href="./#starter-project">Starter Project</a> detail how this is done. Please be sure to explore the starter project in its entirety.</p><ul><li><a href="https://github.com/api3dao/data-feed-reader-example/blob/main/scripts/allow-to-read-with-name.js" target="_blank" rel="noreferrer">allow-to-read-with-name.js</a></li><li><a href="https://github.com/api3dao/data-feed-reader-example/blob/main/scripts/allow-to-read-with-id.js" target="_blank" rel="noreferrer">allow-to-read-with-id.js</a></li></ul><h2 id="dapi-names" tabindex="-1">dAPI Names <a class="header-anchor" href="#dapi-names" aria-hidden="true">#</a></h2><p>A dAPI is a live data point associated with human readable <code>name</code>. dAPI definitions simplify access and can return aggregated Beacon values or a single Beacon value. This is suitable where the more recent data point (meaning its set of Beacons could change as needed) is always more favorable, e.g., in the context of an asset price data feed.</p><p>Pass a dAPI <code>name</code> to the appropriate <code>DapiServer.sol</code> reader function.</p><ul><li><a href="./read-data-feed-with-dapi-name.html">readDataFeedWithDapiName(_dapiName)</a> - returns a value and timestamp</li><li><a href="./read-data-feed-value-with-dapi-name.html">readDataFeedValueWithDapiName(_dapiName)</a> - returns a value</li></ul><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#676E95;">// Calling the ETH/USD dAPI using the DapiServer contract</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> timestamp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">IDapiServer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_dapiServerContractAddress</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">readDataFeedWithDapiName</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">&quot;ETH/USD&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">Optionally, use Beacon and Beacon set IDs</p><p>It is possible to use a Beacon or Beacon set ID by calling <a href="./read-data-feed-with-id.html">readDataFeedId()</a> and <a href="./read-data-feed-value-with-id.html">readDataFeedValueById()</a>. Doing so is considered an advanced user flow. In practice reading with a name and reading with an ID are very different things. When you read with a name, you benefit from what the name maps to and how its value is aggregated from sourced Beacons. API3 manages dAPI name mappings to provide the best possible responses. When you read with an ID, you will always read a value directly from a Beacon or Beacon set. Also see <a href="./../#dapi-composition">dAPI Composition</a>.</p></div><h2 id="dapiserver-functions" tabindex="-1">DapiServer Functions <a class="header-anchor" href="#dapiserver-functions" aria-hidden="true">#</a></h2><ul><li><a href="./read-data-feed-with-dapi-name.html">readDataFeedWithDapiName()</a> - Returns a value and timestamp using the dAPI name.</li><li><a href="./read-data-feed-value-with-dapi-name.html">readDataFeedValueWithDapiName()</a> - Returns a value using the dAPI name.</li><li><a href="./reader-can-read-datafeed.html">readerCanReadDataFeed()</a> - Whether a reader can read a dAPI, Beacon, or Beacon set.</li><li><a href="./data-feed-id-to-reader-to-whitelist-status.html">dataFeedIdToReaderToWhitelistStatus()</a> - Details about the coverage policy status of a reader address for a dAPI, Beacon, or Beacon set.</li><li><a href="./read-data-feed-with-id.html">readDataFeedWithId()</a> - Returns a value and timestamp using a Beacon or Beacon set ID.</li><li><a href="./read-data-feed-value-with-id.html">readDataFeedValueWithId()</a> - Returns a value using a Beacon or Beacon set ID.</li></ul><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-hidden="true">#</a></h2><ul><li><a href="./../reference/chains.html">Chains and Contracts</a>: A list of chains, and supporting contracts that dAPIs are available on.</li><li><a href="./../reference/dapi-browser.html">dAPI Browser</a>: A list of dAPIs that have been deployed.</li></ul>`,
    17
  );
function g(e, D, v, b, A, w) {
  const s = p("TitleSpan");
  return (
    n(),
    i("div", null, [
      d(s, null, { default: l(() => [a(t(e.$frontmatter.folder), 1)]), _: 1 }),
      r("h1", m, [a(t(e.$frontmatter.title) + " ", 1), u]),
      f,
    ])
  );
}
const I = o(h, [["render", g]]);
export { _ as __pageData, I as default };
