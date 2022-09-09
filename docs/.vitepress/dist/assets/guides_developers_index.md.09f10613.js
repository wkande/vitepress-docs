import {
  _ as e,
  o as n,
  c as l,
  a as s,
  b as t,
  t as o,
  e as p,
} from "./app.b352a92c.js";
const b = JSON.parse(
    '{"title":"Calling a dAPI","description":null,"frontmatter":{"lang":"en-US","title":"Calling a dAPI","sidebarHeader":"Guides","sidebarSubHeader":"\u2192 dAPP Developers","description":null,"folder":"Guides","head":[["meta",{"name":"foo","content":"bar"}],["link",{"rel":"canonical","href":"foobar"}]]},"headers":[],"relativePath":"guides/developers/index.md"}'
  ),
  r = { name: "guides/developers/index.md" },
  i = { id: "frontmatter-title", tabindex: "-1" },
  c = s(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  d = p(
    `<p>It had to be easy and it is.</p><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&quot;@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#676E95;">// Calling the ETH/USD dAPI using the DapiServer contract</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> timestamp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">IDapiServer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_dapiServerContractAddress</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">readDataFeedWithDapiName</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">&quot;ETH/USD&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,
    2
  );
function D(a, u, _, y, F, m) {
  return (
    n(),
    l("div", null, [s("h1", i, [t(o(a.$frontmatter.title) + " ", 1), c]), d])
  );
}
const C = e(r, [["render", D]]);
export { b as __pageData, C as default };
