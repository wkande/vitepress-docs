import {
  _ as o,
  o as a,
  c as t,
  d as r,
  a as e,
  b as p,
  t as i,
  e as l,
  r as c,
} from "./app.b352a92c.js";
const C = JSON.parse(
    '{"title":"Pre/Post Processing","description":"","frontmatter":{"title":"Pre/Post Processing","sidebarHeader":"Reference \u2192 OIS v1.1","basePath":"/reference/ois/v1.1","tags":null},"headers":[{"level":2,"title":"Inputs","slug":"inputs","link":"#inputs","children":[]},{"level":2,"title":"Interpolation","slug":"interpolation","link":"#interpolation","children":[]},{"level":2,"title":"Error Handling and Security","slug":"error-handling-and-security","link":"#error-handling-and-security","children":[]}],"relativePath":"reference/ois/v1.1/processing.md"}'
  ),
  d = { name: "reference/ois/v1.1/processing.md" },
  u = { id: "frontmatter-title", tabindex: "-1" },
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
  y = l(
    '<p>The processing schema is the same for both <a href="./ois.html#_5-9-preprocessingspecifications">pre-processing</a> and <a href="./ois.html#_5-10-postprocessingspecifications">post-processing</a>.</p><p>The processing schema accepts an array of processing snippets which are chained. The first snippet receives parameters submitted as part of a template or on-chain request. The output of this snippet is passed to the second snippet and so on.</p><p>Every processing snippet follows this schema:</p><ul><li><code>environment</code> - Currently one of <code>Node 14</code> or <code>Node 14 async</code>. Both options interpret the code as JavaScript and execute in Node.js version 14. The async version can use asynchronous code. The code snippet is expected to call <code>resolve(output)</code> with the output value as an argument. Airnode will use the resolved value as the input to subsequent snippets (if defined).</li><li><code>value</code> - The processing code written as a string.</li><li><code>timeoutMs</code> - The maximum timeout that this snippet can run. In case the timeout is exceeded an error is thrown.</li></ul><h2 id="inputs" tabindex="-1">Inputs <a class="header-anchor" href="#inputs" aria-hidden="true">#</a></h2><p>The processing snippet receives an <code>input</code> value which is either the initial value or the output value from the previous processing snippet. The snippet must create a variable <code>output</code> which will be used for the next processing snippet. The processing snippet can use most Node.js built-in modules. Refer to the source code of Airnode to understand how processing works and what modules are made available to the snippet code. Modules cannot be imported directly in cloud environments.</p><h2 id="interpolation" tabindex="-1">Interpolation <a class="header-anchor" href="#interpolation" aria-hidden="true">#</a></h2><p>Note, that config.json supports interpolation of secrets via the JavaScript string interpolation pattern (e.g <code>${SECRET_NAME}</code>). This syntax conflicts with the string interpolation inside the processing snippets. In order to use the interpolation in snippets, you need to escape the interpolation.</p><p>For example, the following code:</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">Received input </span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">input</span><span style="color:#89DDFF;">}`</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> output </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> input</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>should be escaped inside the <code>config.json</code> like this:</p><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">environment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Node 14</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">timeoutMs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5000</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">console.log(`Received input </span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">${input}`);</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">const output = input;</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="error-handling-and-security" tabindex="-1">Error Handling and Security <a class="header-anchor" href="#error-handling-and-security" aria-hidden="true">#</a></h2><p>Processing code is expected to be trustworthy as it is specified by the Airnode operator. Processing is an advanced feature that carries great security risks. It is therefore advised that developers using the processing feature familiarise themselves with the Airnode sources prior to developing any processing code snippets.</p><p>Processing code executes in a constrained execution environment resembling Node.js. Some resources may not be available, for example the <code>require</code> statement. Therefore code should be tested thoroughly in the target environment (e.g. Lambda and/or Docker client). For example, authentication implemented in pre-processing should always be executed at the end of the respective processing chain and special care should be taken to avoid leakage of secrets.</p>',
    15
  );
function D(s, m, g, v, F, f) {
  const n = c("reference-VersionPicklist");
  return (
    a(),
    t("div", null, [
      r(n),
      e("h1", u, [p(i(s.$frontmatter.title) + " ", 1), h]),
      y,
    ])
  );
}
const A = o(d, [["render", D]]);
export { C as __pageData, A as default };
