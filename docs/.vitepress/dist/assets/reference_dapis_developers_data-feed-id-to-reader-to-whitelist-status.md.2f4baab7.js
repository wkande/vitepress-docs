import {
  _ as r,
  o as c,
  c as i,
  d as a,
  w as d,
  a as t,
  b as e,
  t as n,
  e as D,
  r as l,
} from "./app.b352a92c.js";
const T = JSON.parse(
    '{"title":"dataFeedIdToReaderToWhitelistStatus()","description":"","frontmatter":{"title":"dataFeedIdToReaderToWhitelistStatus()","folder":"dApp Developers"},"headers":[{"level":2,"title":"Example Code","slug":"example-code","link":"#example-code","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]}],"relativePath":"reference/dapis/developers/data-feed-id-to-reader-to-whitelist-status.md"}'
  ),
  y = {
    name: "reference/dapis/developers/data-feed-id-to-reader-to-whitelist-status.md",
  },
  C = { id: "frontmatter-title", tabindex: "-1" },
  h = t(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  u = D(
    `<p>For on-chain smart contracts, the function <a href="https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.0/contracts/dapis/DapiServer.sol#L791-L806" target="_blank" rel="noreferrer">dataFeedIdToReaderToWhitelistStatus()</a> returns <a href="./#coverage-policies">read access</a> information with the <code>expirationTimestamp</code> and <code>indefiniteWhitelistCount</code> of a reader for the specified dAPI data feed.</p><p>The reader will not be able to read the dAPI data feed past the expirationTimestamp (assuming their <code>indefiniteWhitelistCount</code> is 0 ). If the <code>indefiniteWhitelistCount</code> is greater than 0 , the reader will be able to read the data feed indefinitely (regardless of the value of <code>expirationTimestamp</code>).</p><h2 id="example-code" tabindex="-1">Example Code <a class="header-anchor" href="#example-code" aria-hidden="true">#</a></h2><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#676E95;">// SPDX-License-Identifier: MIT</span></span>
<span class="line"><span style="color:#89DDFF;">pragma</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">solidity</span><span style="color:#A6ACCD;"> 0.8.9</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&quot;@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">contract</span><span style="color:#FFCB6B;"> mySmartContract</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">myReadable</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">_dapiServerContractAddress</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">bytes32</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">_datafeedId</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">external</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">uint64</span><span style="color:#A6ACCD;"> expirationTimestamp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">uint192</span><span style="color:#A6ACCD;"> indefiniteWhitelistCount</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// Calling the DapiServer for reader status</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// where &quot;this&quot; is the contract address of this contract (myReadable).</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">expirationTimestamp</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> indefiniteWhitelistCount</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">IDapiServer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_dapiServerContractAddress</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">dataFeedIdToReaderToWhitelistStatus</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_datafeedId</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">address</span><span style="color:#89DDFF;">(this));</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">dAPI name</p><p>If you want to check the status for a dAPI <code>name</code>, you first need to calculate the hash off-chain of <code>name</code> as shown below. Then pass the value of <code>dapiNameHash</code> as <code>_datafeedId</code> in the example above.</p><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#A6ACCD;">dapiNameHash </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ethers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">solidityKeccak256</span><span style="color:#89DDFF;">([</span><span style="color:#C3E88D;">&#39;string&#39;</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">dapiName</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><p><code>readerCanReadDataFeed(bytes32 datafeedId, address reader)</code></p><ul><li><code>bytes32 datafeedId</code> - The ID of a dAPI, Beacon, or Beacon set.</li><li><code>address reader</code> - The address to verify such as the reader&#39;s smart contract address or another address.</li></ul><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h2><ul><li><p><code>expirationTimestamp</code> - Timestamp at which the whitelisting of the reader will expire.</p></li><li><p><code>indefiniteWhitelistCount</code> - Number of times <code>reader</code> was whitelisted indefinitely for <code>dataFeedId</code>.</p></li></ul>`,
    10
  );
function A(s, m, F, b, f, _) {
  const o = l("TitleSpan"),
    p = l("Toc");
  return (
    c(),
    i("div", null, [
      a(o, null, { default: d(() => [e(n(s.$frontmatter.folder), 1)]), _: 1 }),
      t("h1", C, [e(n(s.$frontmatter.title) + " ", 1), h]),
      a(p),
      u,
    ])
  );
}
const I = r(y, [["render", A]]);
export { T as __pageData, I as default };
