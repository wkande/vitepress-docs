import {
  _ as r,
  o as c,
  c as i,
  d as a,
  w as d,
  a as l,
  b as s,
  t as n,
  e as m,
  r as t,
} from "./app.b352a92c.js";
const g = JSON.parse(
    '{"title":"readDataFeedValueWithDapiName()","description":"","frontmatter":{"title":"readDataFeedValueWithDapiName()","folder":"dApp Developers"},"headers":[{"level":2,"title":"Example Code","slug":"example-code","link":"#example-code","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]}],"relativePath":"reference/dapis/developers/read-data-feed-value-with-dapi-name.md"}'
  ),
  u = {
    name: "reference/dapis/developers/read-data-feed-value-with-dapi-name.md",
  },
  h = { id: "frontmatter-title", tabindex: "-1" },
  D = l(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  y = m(
    `<p>This function reads a value from a dAPI using its name. In the code example below, <code>\\_dapiName</code>is a dAPI name. For on-chain smart contracts the <code>msg.sender</code> argument received by the function <a href="https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.0/contracts/dapis/DapiServer.sol#L749-L765" target="_blank" rel="noreferrer">readDataFeedValueWithDapiName()</a> must have <a href="./#coverage-policies">read access</a> for the dAPI requested.</p><p>Calling from off-chain code (<em>using a library such as <code>ether.js</code></em>) is not subject to coverage policies. Off-chain code is beyond the scope of this doc.</p><h2 id="example-code" tabindex="-1">Example Code <a class="header-anchor" href="#example-code" aria-hidden="true">#</a></h2><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#676E95;">// SPDX-License-Identifier: MIT</span></span>
<span class="line"><span style="color:#89DDFF;">pragma</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">solidity</span><span style="color:#A6ACCD;"> 0.8.9</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&quot;@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">contract</span><span style="color:#FFCB6B;"> mySmartContract</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">myGetDataFeedValue</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">_dapiServerContractAddress</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">bytes32</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">_dapiName</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">external</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">int224</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// Calling the DapiServer for a data feed value.</span></span>
<span class="line"><span style="color:#A6ACCD;">        value </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">IDapiServer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_dapiServerContractAddress</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">readDataFeedValueWithDapiName</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_dapiName</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>See another code example of <code>readDataFeedValueWithDapiName()</code> in the <a href="https://github.com/api3dao/data-feed-reader-example/blob/main/contracts/DataFeedReaderExample.sol#L37" target="_blank" rel="noreferrer">data-feed-reader-example repo</a>.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><p><code>readDataFeedValueWithDapiName(bytes32 _dapiName)</code></p><ul><li><code>bytes32 dapiName</code> - The name of the dAPI to retrieve a value for.</li></ul><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h2><ul><li><code>int224 value</code> - The value of the dAPI.</li></ul><div class="tip custom-block"><p class="custom-block-title">Please note:</p><p>The <code>DapiServer.sol</code> contract casts the reported data point to <code>int224</code>. If this is a problem (because the reported data may not fit into 224 bits or it is of a completely different type such as <code>bytes32</code>), do not use this contract and implement a customized version instead. The contract casts the timestamps to <code>uint32</code>, which means it will not work work past-2106 in the current form. If this is an issue, consider casting the timestamps to a larger type.</p></div><p>If the timestamp is <code>0</code> then the function will revert with &quot;<em>Data feed does not exist</em>&quot;.</p>`,
    12
  );
function A(e, C, b, F, f, v) {
  const o = t("TitleSpan"),
    p = t("Toc");
  return (
    c(),
    i("div", null, [
      a(o, null, { default: d(() => [s(n(e.$frontmatter.folder), 1)]), _: 1 }),
      l("h1", h, [s(n(e.$frontmatter.title) + " ", 1), D]),
      a(p),
      y,
    ])
  );
}
const x = r(u, [["render", A]]);
export { g as __pageData, x as default };
