import {
  _ as l,
  o as p,
  c,
  a as s,
  b as d,
  t,
  d as e,
  e as m,
  r as n,
} from "./app.b352a92c.js";
const _ = JSON.parse(
    '{"title":"Airnode","description":"","frontmatter":{"title":"Airnode","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"airnodeAddress","slug":"airnodeaddress","link":"#airnodeaddress","children":[]},{"level":2,"title":"xpub","slug":"xpub","link":"#xpub","children":[]},{"level":2,"title":"Admin CLI: generate-mnemonic","slug":"admin-cli-generate-mnemonic","link":"#admin-cli-generate-mnemonic","children":[]},{"level":2,"title":"Verification","slug":"verification","link":"#verification","children":[]}],"relativePath":"reference/airnode/latest/concepts/airnode.md"}'
  ),
  h = { name: "reference/airnode/latest/concepts/airnode.md" },
  u = { id: "frontmatter-title", tabindex: "-1" },
  b = s(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  f = m(
    `<p>Airnode is a serverless oracle node implemented with a <em>&quot;set and forget&quot;</em><a href="./../grp-providers/airnode/design-philosophy.html">philosophy</a>.</p><p>An Airnode is capable of serving one or more APIs to <a href="./requester.html">requesters</a> (which are on-chain smart contracts) that request data served by a particular Airnode. Each and every Airnode has a <a href="./../grp-providers/guides/build-an-airnode/configuring-airnode.html#airnodewalletmnemonic">unique mnemonic</a> identifying its wallet. This mnemonic is kept secret and Airnode is publicly identified using the default <a href="./airnode.html#airnodeaddress">address</a> derived from the mnemonic.</p><h2 id="airnodeaddress" tabindex="-1"><code>airnodeAddress</code> <a class="header-anchor" href="#airnodeaddress" aria-hidden="true">#</a></h2><p>An Airnode is identified by the default address of a BIP 44 wallet (with the path <code>m/44&#39;/60&#39;/0&#39;/0/0</code>) which is referred to as the <code>airnodeAddress</code>. This address is same for all chains on which Airnode operates. The wallet mnemonic is specified in the <a href="./../reference/deployment-files/secrets-env.html">secrets.env</a> file when deploying the Airnode.</p><p>Use the admin CLI command <a href="./../reference/packages/admin-cli.html#derive-airnode-address">derive-airnode-address</a> to derive the <code>airnodeAddress</code> from the mnemonic for informational purposes.</p><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npx @api3/airnode-admin derive-airnode-address \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--airnode-mnemonic </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cricket elephant ...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># outputs</span></span>
<span class="line"><span style="color:#A6ACCD;">Airnode address: 0xaBd9...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="xpub" tabindex="-1"><code>xpub</code> <a class="header-anchor" href="#xpub" aria-hidden="true">#</a></h2><p>The Airnode owner announces the <em>extended public key</em> (<code>xpub</code> of the hardened derivation path <code>m/44&#39;/60&#39;/0&#39;</code>) off-chain. Then a sponsor derives a <a href="./sponsor.html#sponsorwallet">sponsor wallet</a> for the Airnode using the <code>xpub</code> and <code>airnodeAddress</code>. The sponsor wallet will then be used by the Airnode to fulfill requests made by the sponsor&#39;s contracts.</p><p>Use the admin CLI command <a href="./../reference/packages/admin-cli.html#derive-airnode-xpub">derive-airnode-xpub</a> to get the <code>xpub</code> of an Airnode by passing the same mnemonic used to create the <code>airnodeAddress</code>.</p><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npx @api3/airnode-admin derive-airnode-xpub \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--airnode-mnemonic </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cricket elephant ...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># outputs</span></span>
<span class="line"><span style="color:#A6ACCD;">Airnode xpub: xpub6CUGRUo...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="admin-cli-generate-mnemonic" tabindex="-1">Admin CLI: <code>generate-mnemonic</code> <a class="header-anchor" href="#admin-cli-generate-mnemonic" aria-hidden="true">#</a></h2><p>The <a href="./../reference/packages/admin-cli.html#generate-mnemonic">generate-mnemonic</a> command is useful because it will generate a mnemonic as well as return the <code>airnodeAddress</code> and <code>xpub</code>.</p><div class="language-sh line-numbers-mode"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">npx @api3/airnode-admin generate-mnemonic</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># output</span></span>
<span class="line"><span style="color:#A6ACCD;">This mnemonic is created locally on your machine using </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ethers.Wallet.createRandom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> under the hood.</span></span>
<span class="line"><span style="color:#A6ACCD;">Make sure to back it up securely, e.g., by writing it down on a piece of paper:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cricket elephant ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">The Airnode address </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> this mnemonic is: 0xaBd9...</span></span>
<span class="line"><span style="color:#A6ACCD;">The Airnode xpub </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> this mnemonic is: xpub6CUGRUo...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="verification" tabindex="-1">Verification <a class="header-anchor" href="#verification" aria-hidden="true">#</a></h2><p>The <code>xpub</code> that the Airnode owner has announced is not verified on-chain. A sponsor can verify the <code>xpub</code> off-chain. Use the admin CLI command <a href="./../reference/packages/admin-cli.html#verify-airnode-xpub">verify-xpub</a> command from the admin CLI.</p><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npx @api3/airnode-admin verify-airnode-xpub \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--airnode-xpub xpub6CUGRUo... \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--airnode-address 0xaBd9...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># output</span></span>
<span class="line"><span style="color:#A6ACCD;">Airnode xpub is: VALID</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,
    16
  );
function A(a, y, C, v, g, D) {
  const r = n("VersionWarning"),
    o = n("TocHeader"),
    i = n("TOC");
  return (
    p(),
    c("div", null, [
      s("h1", u, [d(t(a.$frontmatter.title) + " ", 1), b]),
      e(r),
      e(o),
      e(i, { class: "table-of-contents", "include-level": [2, 3] }),
      f,
    ])
  );
}
const w = l(h, [["render", A]]);
export { _ as __pageData, w as default };
