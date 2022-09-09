import {
  _ as i,
  o as l,
  c as p,
  a as s,
  b as c,
  t as d,
  d as e,
  e as h,
  r as n,
} from "./app.b352a92c.js";
const v = JSON.parse(
    '{"title":"Endpoint","description":"","frontmatter":{"title":"Endpoint","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"endpointId","slug":"endpointid","link":"#endpointid","children":[]},{"level":2,"title":"Authorizers","slug":"authorizers","link":"#authorizers","children":[]}],"relativePath":"reference/airnode/latest/concepts/endpoint.md"}'
  ),
  u = { name: "reference/airnode/latest/concepts/endpoint.md" },
  A = { id: "frontmatter-title", tabindex: "-1" },
  f = s(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  m = h(
    `<p>Airnode serves an API to a blockchain according to <a href="/ois/v1.0/">Oracle Integration Specifications (OIS)</a>. An API is composed of <a href="/ois/v1.0/ois.html#_5-2-operation">operations</a>, which represent individual functionalities that an API offers. OIS maps each API operation to an <a href="/ois/v1.0/ois.html#_5-endpoints">endpoint</a>, which can be thought of as an Airnode operation. The endpoints that an Airnode will serve over the request\u2013response protocol are listed under <a href="./../reference/deployment-files/config-json.html#triggers">triggers</a> of <a href="./../reference/deployment-files/config-json.html">config.json</a>.</p><h2 id="endpointid" tabindex="-1"><code>endpointId</code> <a class="header-anchor" href="#endpointid" aria-hidden="true">#</a></h2><p><code>endpointId</code> identifies specific endpoints that an Airnode serves, and is computed in JS (using ethers.js) as follows:</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">ethers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keccak256</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  ethers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">defaultAbiCoder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">encode</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    [oisTitle</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> endpointName]</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>An alternative method to create an <code>endpointId</code> is to use the <a href="./../reference/packages/admin-cli.html">Admin CLI</a> to derive the endpoint ID.</p><p>Note that this means that an <code>endpointId</code> is not unique, and two Airnodes can serve equivalent endpoints using the same ID (in fact, this is the desired outcome).This is not an issue, as requests are made with a <code>airnode</code> (Airnode&#39;s <code>address</code>) and <code>endpointId</code> pair.</p><p>This convention of determining an <code>endpointId</code> is not enforced at the protocol-level. For example, one could choose to generate an <code>endpointId</code> randomly, and as long as requesters use the correct <code>endpointId</code>, this will not be an issue.</p><h2 id="authorizers" tabindex="-1">Authorizers <a class="header-anchor" href="#authorizers" aria-hidden="true">#</a></h2><p>Airnodes can assign a list of authorizers to their endpoints. See the section <a href="./authorization.html">Authorizer</a> for more information.</p>`,
    9
  );
function D(a, C, y, _, F, g) {
  const o = n("VersionWarning"),
    t = n("TocHeader"),
    r = n("TOC");
  return (
    l(),
    p("div", null, [
      s("h1", A, [c(d(a.$frontmatter.title) + " ", 1), f]),
      e(o),
      e(t),
      e(r, { class: "table-of-contents", "include-level": [2, 3] }),
      m,
    ])
  );
}
const I = i(u, [["render", D]]);
export { v as __pageData, I as default };
