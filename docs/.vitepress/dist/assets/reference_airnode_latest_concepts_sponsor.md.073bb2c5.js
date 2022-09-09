import {
  _ as d,
  o as p,
  c,
  a as o,
  b as h,
  t as u,
  d as e,
  e as t,
  r as s,
} from "./app.b352a92c.js";
const f = "/assets/concepts-sponsor-relationships.51586e55.png",
  k = JSON.parse(
    '{"title":"Sponsor","description":"","frontmatter":{"title":"Sponsor","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"sponsorAddress","slug":"sponsoraddress","link":"#sponsoraddress","children":[]},{"level":2,"title":"sponsorWallet","slug":"sponsorwallet","link":"#sponsorwallet","children":[{"level":3,"title":"Derivation Path","slug":"derivation-path","link":"#derivation-path","children":[]},{"level":3,"title":"Gas Costs","slug":"gas-costs","link":"#gas-costs","children":[]},{"level":3,"title":"Trusting the sponsorWallet","slug":"trusting-the-sponsorwallet","link":"#trusting-the-sponsorwallet","children":[]},{"level":3,"title":"Withdrawals","slug":"withdrawals","link":"#withdrawals","children":[]}]},{"level":2,"title":"Sponsoring a Requester","slug":"sponsoring-a-requester","link":"#sponsoring-a-requester","children":[]},{"level":2,"title":"Derive a Sponsor Wallet","slug":"derive-a-sponsor-wallet","link":"#derive-a-sponsor-wallet","children":[]}],"relativePath":"reference/airnode/latest/concepts/sponsor.md"}'
  ),
  m = { name: "reference/airnode/latest/concepts/sponsor.md" },
  g = { id: "frontmatter-title", tabindex: "-1" },
  w = o(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  b = t(
    '<p>A sponsor is an entity (individual, business, etc.). Sponsors create relationships between <a href="./requester.html">requesters</a> and <a href="./sponsor.html#sponsorwallet">sponsorWallets</a>. They do so by sponsoring requesters and deriving sponsorWallets for Airnodes they want their requesters to call.</p><blockquote><img src="' +
      f +
      `" width="350px"></blockquote><p>Making the relationship:</p><ul><li>A sponsor &quot;sponsors&quot; a requester.</li><li>A sponsor &quot;derives&quot; a <a href="./sponsor.html#sponsorwallet">sponsorWallet</a> for a desired Airnode.</li></ul><p>Making a request.</p><ol><li>The now &quot;sponsored&quot; requester makes a <a href="./request.html">request</a> of an Airnode. Parameters passed to the Airnode include the <code>sponsorAddress</code> and the <code>sponsorWalletAddress</code>.</li><li>The Airnode verifies that the sponsor of the requester is the sponsor that derived the <code>sponsorWallet</code> associated with the Airnode.</li><li>The Airnode uses the respective sponsor&#39;s <code>sponsorWallet</code> to fulfill the request, meaning that the sponsor covers the gas cost.</li></ol><p>How a requester refers to the sponsor.</p><ol><li><p>A requester can have multiple sponsors that have sponsored it. While making a request, the requester provides the <code>sponsorAddress</code> that it wants to have the request fulfilled by. The AirnodeRrpV0.sol protocol contract checks if the requester is sponsored, and if so, emits the request event.</p></li><li><p>Next Airnode derives the <code>sponsorWallet</code> address using the provided <code>sponsorAddress</code>, then checks if this matches <code>sponsorWallet</code>. Airnode will ignore the request if the two do not match. This is done this way because deriving the <code>sponsorWallet</code> address from the <code>sponsorAddress</code> on-chain is not feasible.</p></li></ol><h2 id="sponsoraddress" tabindex="-1">sponsorAddress <a class="header-anchor" href="#sponsoraddress" aria-hidden="true">#</a></h2><p>A sponsor is identified by a <code>sponsorAddress</code> which is usually the default account <code>m/44&#39;/60&#39;/0&#39;/0/0</code> of a BIP 44 wallet owned by the sponsor. The sponsor can use a different address from the wallet if desired such as <code>m/44&#39;/60&#39;/0&#39;/0/2</code>.</p><p>Note that a sponsor could use multiple addresses from multiple wallets. Below are some example reasons why one would want to have multiple <code>sponsorAddress</code> identities on-chain:</p><ul><li>To keep separate <code>sponsorWallets</code> for two separate use-cases for easier accounting.</li><li>To duplicate transaction queues for a single use-case and increase response throughput.</li></ul><h2 id="sponsorwallet" tabindex="-1">sponsorWallet <a class="header-anchor" href="#sponsorwallet" aria-hidden="true">#</a></h2><p>Each <a href="./airnode.html">Airnode</a> can keep a unique<code>sponsorWallet</code> for a sponsor. The wallet is identified by a <code>sponsorAddress/airnodeAddress</code> pair. A sponsor must take action to <a href="#derive-a-sponsor-wallet">derive</a> a <code>sponsorWallet</code> for a particular Airnode. <a href="./requester.html">Requesters</a>, that have been sponsored by a sponsor, can specify their requests be fulfilled by the <code>sponsorWallet</code> designated to the sponsor. This allows the sponsor to cover the gas cost of request fulfillments by the Airnode since the sponsor must send funds to this wallet before making the request.</p><p>Requests from the same <code>sponsorWallet</code> are performed sequentially to respect the transaction nonce. A single Airnode run will only attempt to serve five oldest requests to prevent timeout issues. For high volatility use cases it is recommended to use multiple sponsors (and thus sponsor wallets) as the requests from different sponsor wallets are performed in parallel.</p><div class="tip custom-block"><p class="custom-block-title">Wallet and Protocols</p><p>A sponsorWallet derived for a particular sponsor depends on the Airnode protocol (RRP, the forthcoming PSP protocol, etc.). This means that a sponsorWallet address derived for a particular sponsor will be different for each protocol. This is intentional and allows a particular sponsor to only fund a particular protocol (e.g. only RRP).</p></div><h3 id="derivation-path" tabindex="-1">Derivation Path <a class="header-anchor" href="#derivation-path" aria-hidden="true">#</a></h3><p>Each sponsor is identified by a <code>sponsorAddress</code>, and their sponsor wallets are designated implicitly by a derivation path. For the RRP protocol the derivation path for a <code>sponsorWallet</code> starts with <code>m/44&#39;/60&#39;/0&#39;/1/...</code>. Other branches will be used to derive the sponsor wallets for other protocols.</p><div class="warning custom-block"><p class="custom-block-title">Understanding Derivation Paths</p><p>It is not important to understand derivation paths, you can simply use the addresses the admin CLI derives for you.</p></div><p>The general path for connecting to the base Ethereum set of addresses looks like this: <code>m/44\u2019/60\u2019/0\u2019/0</code>. This sequence is broken down into different sections and changes based on what is being worked with. The sequence goes: <code>m\u2019 / purpose\u2019 / coin_type\u2019 / account\u2019 / change / address_index</code>. The <code>change</code> part of the BIP44 derivation path is used to determine which protocol a sponsor wallet path will be for. Here (<code>m/44&#39;/60&#39;/0&#39;/1/...</code>) has been reserved for the RRP protocol where the value of <code>change</code> is 1.</p><p>An Ethereum address is 20 bytes-long, which makes it 160 bits. Each index in the HD wallet non-hardened derivation path goes up to 2^31. This requires the division of these 160 bits into six 31 bit-long chunks, therefore derivation path for a sponsor wallet of a requester using the RRP protocol would be:</p><div class="language-sh line-numbers-mode"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">m/44</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/60</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">/0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/1/...</span></span>
<span class="line"><span style="color:#C3E88D;">  /1st least significant 31-bits of the sponsor address (sponsor &amp;&amp; 0x7FFFFFFF)\u2026</span></span>
<span class="line"><span style="color:#C3E88D;">  /2nd least significant 31-bits of the sponsor address (sponsor &gt;&gt; 31 &amp;&amp; 0x7FFFFFFF)\u2026</span></span>
<span class="line"><span style="color:#C3E88D;">  /3rd least significant 31-bits of the sponsor address (sponsor &gt;&gt; 62 &amp;&amp; 0x7FFFFFFF)\u2026</span></span>
<span class="line"><span style="color:#C3E88D;">  /4th least significant 31-bits of the sponsor address (sponsor &gt;&gt; 93 &amp;&amp; 0x7FFFFFFF)\u2026</span></span>
<span class="line"><span style="color:#C3E88D;">  /5th least significant 31-bits of the sponsor address (sponsor &gt;&gt; 124 &amp;&amp; 0x7FFFFFFF)\u2026</span></span>
<span class="line"><span style="color:#C3E88D;">  /6th least significant 31-bits of the sponsor address (sponsor &gt;&gt; 155 &amp;&amp; 0x7FFFFFFF)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Anyone can use the xpub that the Airnode has announced (through off-chain channels) and the sponsor&#39;s <code>sponsorAddress</code> to derive a <code>sponsorWalletAddress</code> for a specific Airnode\u2013sponsor pair. In other words, a sponsor can calculate the address of their respective sponsor wallet for an Airnode and have requesters use it to make requests right away.</p><h3 id="gas-costs" tabindex="-1">Gas Costs <a class="header-anchor" href="#gas-costs" aria-hidden="true">#</a></h3><p>Although the <code>sponsorWallet</code> scheme allows the sponsor to cover the fulfillment gas costs, it is just as easy to have the Airnode cover the gas costs. In this case the Airnode funds the <code>sponsorWallet</code>, instead of the sponsor. Furthermore, this scheme allows hybrid use-cases where the Airnode covers the fulfillment gas costs for one sponsor (e.g., because they have made a special service agreement with them), while requiring others to cover their own fulfillment gas costs.</p><h3 id="trusting-the-sponsorwallet" tabindex="-1">Trusting the <code>sponsorWallet</code> <a class="header-anchor" href="#trusting-the-sponsorwallet" aria-hidden="true">#</a></h3>`,
    26
  ),
  v = t(
    '<p>The risk mentioned above becomes negligible when:</p><ol><li>The Airnode is a first-party oracle, because first-party oracles are trustworthy</li><li>The Airnode is being used for a high value use-case, which already implies a high level of trust</li></ol><p>If the sponsor does not trust the Airnode at all, they can fund the sponsor wallet just enough to cover a single fulfillment for each request to the Airnode. Therefore, this scheme both supports the traditional per-call payments, but also allows the protocol to leverage the trustworthiness of Airnodes to reduce unnecessary gas costs caused by microtransactions.</p><h3 id="withdrawals" tabindex="-1">Withdrawals <a class="header-anchor" href="#withdrawals" aria-hidden="true">#</a></h3><p>If the sponsor decides not to use a particular <code>sponsorWallet</code> going forward, they can make a request to withdraw funds from it, see the <a href="./../reference/packages/admin-cli.html#request-withdrawal">request-withdrawal</a> command. The Airnode listens for withdrawal requests and fulfills them automatically. Therefore, the sponsor should be able to receive their funds from their <code>sponsorWallet</code> in a few minutes notice. The <code>sponsorWallet</code> does not get deleted, and can be used in the future simply by funding it again.</p><div class="warning custom-block"><p class="custom-block-title">Withdrawal Priority</p><p>Airnode will drop any pending API calls associated with a <code>sponsorWallet</code> once a withdrawal is requested.</p></div><h2 id="sponsoring-a-requester" tabindex="-1">Sponsoring a Requester <a class="header-anchor" href="#sponsoring-a-requester" aria-hidden="true">#</a></h2><p>A sponsor specifies the public address (<code>sponsorAddress</code>) of an account from a mnemonic it owns and the on-chain <code>requesterAddress</code> of a requester to &quot;sponsor a requester&quot;. This sponsorship is know to have, and be defined by, a <code>sponsorAddress/requesterAddress</code> pair.</p><p>This sponsorship allows the requester to use the sponsor&#39;s <code>sponsorWallet</code> for a particular Airnode to cover gas costs incurred by the Airnode in response to a request. Learn more about <a href="./../grp-developers/requesters-sponsors.html">sponsorships</a>.</p><p>Use the <a href="./../reference/packages/admin-cli.html#sponsor-requester">Admin CLI tool</a> to sponsor a requester. An example can be seem in the <a href="./../grp-developers/requesters-sponsors.html#how-to-sponsor-a-requester">Requesters and Sponsors</a> doc.</p><h2 id="derive-a-sponsor-wallet" tabindex="-1">Derive a Sponsor Wallet <a class="header-anchor" href="#derive-a-sponsor-wallet" aria-hidden="true">#</a></h2><p>When a sponsor wishes to access an Airnode (via a requester) it must create a <code>sponsorWallet</code> for the Airnode. Requesters that have been sponsored by the same sponsor, can specify their requests be fulfilled by the <code>sponsorWallet</code> belonging to the sponsor. A sponsor uses a <a href="./sponsor.html#sponsoraddress">sponsorAddress</a> and the <a href="./airnode.html#xpub">xpub</a> of a particular Airnode to derive a <a href="#sponsorwallet">sponsorWallet</a> for the Airnode. The sponsor must also provide the <a href="./airnode.html#airnodeaddress">airnodeAddress</a> because it will be used to verify that the provided <code>xpub</code> belongs to the Airnode wallet before deriving a child sponsor wallet address.</p><p>Use the <a href="./../reference/packages/admin-cli.html#derive-sponsor-wallet-address">Admin CLI tool</a> to derive a <code>sponsorWallet</code>. An example can be seem in the <a href="./../grp-developers/requesters-sponsors.html#how-to-derive-a-sponsor-wallet">Requesters and Sponsors</a> doc.</p>',
    13
  );
function A(r, q, y, _, F, T) {
  const a = s("VersionWarning"),
    n = s("TocHeader"),
    i = s("TOC"),
    l = s("airnode-SponsorWalletWarning");
  return (
    p(),
    c("div", null, [
      o("h1", g, [h(u(r.$frontmatter.title) + " ", 1), w]),
      e(a),
      e(n),
      e(i, { class: "table-of-contents", "include-level": [2, 3] }),
      b,
      e(l),
      v,
    ])
  );
}
const x = d(m, [["render", A]]);
export { k as __pageData, x as default };
