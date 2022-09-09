import {
  _ as n,
  o as t,
  c as o,
  d as l,
  a as e,
  b as r,
  t as c,
  e as p,
  r as d,
} from "./app.b352a92c.js";
const E = JSON.parse(
    '{"title":"secrets.env","description":"","frontmatter":{"title":"secrets.env","docSetName":"Airnode v0.8","folder":"Reference > Deployment Files","basePath":"/airnode/v0.7","sidebarHeader":"Reference \u2192 Airnode v0.7","tags":null},"headers":[],"relativePath":"reference/airnode/latest/deployment-files/secrets-env.md"}'
  ),
  i = { name: "reference/airnode/latest/deployment-files/secrets-env.md" },
  h = { id: "frontmatter-title", tabindex: "-1" },
  b = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  D = p(
    `<p>The <code>secrets.env</code> file is bundled with a <a href="./config-json.html">config.json</a> file and contains the secrets that the respective Airnode deployments will need. All variables defined in a <code>secrets.env</code> file will be available in the <code>config.json</code> file via variable interpolation (e.g. <code>\${VARIABLE_NAME}</code>).</p><p>There are few pieces of data that are <strong>highly recommend</strong> to be provided via variables. The variable names shown can be adjusted to anything desired. Just be sure to change the correlating interpolation value in <code>config.json</code>.</p><table><thead><tr><th>Variable name</th><th><code>config.json</code> field name</th><th>Description</th></tr></thead><tbody><tr><td>AIRNODE_WALLET_MNEMONIC</td><td><code>nodeSettings.airnodeWalletMnemonic</code></td><td>The wallet mnemonic that will be used by the Airnode</td></tr><tr><td>CHAIN_PROVIDER_URL</td><td><code>chains[].providers.&lt;name&gt;.url</code></td><td>The blockchain provider url</td></tr><tr><td>SS_MY_API_KEY</td><td><code>apiCredentials[].securitySchemeValue</code></td><td>A security scheme value</td></tr><tr><td>HEARTBEAT_URL</td><td><code>nodeSettings.heartbeat.url</code></td><td>The URL to make the heartbeat request to</td></tr><tr><td>HEARTBEAT_API_KEY</td><td><code>nodeSettings.heartbeat.apiKey</code></td><td>The API key to authenticate against the heartbeat URL</td></tr><tr><td>HEARTBEAT_ID</td><td><code>nodeSettings.heartbeat.id</code></td><td>The Airnode heartbeat ID for accounting purposes</td></tr><tr><td>HTTP_GATEWAY_API_KEY</td><td><code>nodeSettings.httpGateway.apiKey</code></td><td>The API key to authenticate against the HTTP gateway</td></tr><tr><td>HTTP_SIGNED_DATA_GATEWAY_API_KEY</td><td><code>nodeSettings.httpSignedDataGateway.apiKey</code></td><td>The API key to authenticate against the signed data HTTP gateway</td></tr><tr><td>GCP_PROJECT_ID</td><td><code>nodeSettings.cloudProvider.projectId</code></td><td>(GCP only) The GCP project ID for deployment</td></tr></tbody></table><p>Below is an example of <code>secrets.env</code>.</p><ul><li>Variable names cannot contain dashes (-) or start with a number.</li></ul><div class="language-sh line-numbers-mode"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">AIRNODE_WALLET_MNEMONIC=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">achieve climb couple wait accident symbol spy blouse reduce foil echo label</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">CHAIN_PROVIDER_URL=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://mainnet.infura.io/v3/5122f3ff104f30f21412aa38fd143d53</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">SS_MY_API_KEY=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">FRACZKMH4F32BZ8X5uTd</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">HEARTBEAT_API_KEY=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">d714a900-3b9e-4e4d-8eae-756ef06a8836</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">HEARTBEAT_ID=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">916d3ec80fda</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">HEARTBEAT_URL=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://your.heartbeat.service.io/airnode</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">HTTP_GATEWAY_API_KEY=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">441ffc41-3c8b-44b9-a689-63b500fd17da</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">HTTP_SIGNED_DATA_GATEWAY_API_KEY=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">58b0c6d6-b250-4f2e-b9ed-700655d1c8ae</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># GCP only</span></span>
<span class="line"><span style="color:#A6ACCD;">GCP_PROJECT_ID=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my-gcp-airnode-project-01</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,
    6
  );
function _(s, u, A, y, m, T) {
  const a = d("reference-VersionPicklist");
  return (
    t(),
    o("div", null, [
      l(a),
      e("h1", h, [r(c(s.$frontmatter.title) + " ", 1), b]),
      D,
    ])
  );
}
const C = n(i, [["render", _]]);
export { E as __pageData, C as default };
