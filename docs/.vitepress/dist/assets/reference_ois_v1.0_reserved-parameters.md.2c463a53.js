import{_ as a,o as n,c as o,a as e,b as t,t as l,e as r}from"./app.b352a92c.js";const C=JSON.parse('{"title":"Reserved Parameters","description":"","frontmatter":{"title":"Reserved Parameters","docSetName":"OIS v1.0","sidebarHeader":"Reference \u2192 OIS v1.0","basePath":"/ois/v1.0","tags":null},"headers":[{"level":2,"title":"_type","slug":"type","link":"#type","children":[{"level":3,"title":"Conversion and encoding behavior","slug":"conversion-and-encoding-behavior","link":"#conversion-and-encoding-behavior","children":[]}]},{"level":2,"title":"_path","slug":"path","link":"#path","children":[{"level":3,"title":"Escaping Separators","slug":"escaping-separators","link":"#escaping-separators","children":[]}]},{"level":2,"title":"_times","slug":"times","link":"#times","children":[]},{"level":2,"title":"Encoding Multiple Values","slug":"encoding-multiple-values","link":"#encoding-multiple-values","children":[]}],"relativePath":"reference/ois/v1.0/reserved-parameters.md"}'),p={name:"reference/ois/v1.0/reserved-parameters.md"},i={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(`<p>Reserved parameters are part of an OIS object as part of the <code>endpoints</code> field (Airnode endpoints) and warrant a more in-depth explanation. They are part of an Airnode&#39;s defined endpoints in an OIS object but do not map to operation parameters (API parameters). They are used by Airnode for special purposes.</p><p>A requester can pass request parameters either by referencing a <a href="/airnode/v0.7/concepts/template.html">template</a> that contains them, or as an argument of the request-making methods of <a href="/airnode/v0.7/concepts/#airnoderrpv0-sol">AirnodeRrpV0.sol</a>. In either case, these parameters are encoded using the <a href="/airnode/v0.7/reference/specifications/airnode-abi-specifications.html">AirnodeRrpV0 ABI</a>. There are two types of parameters which are part of the OIS object:</p><ol><li><a href="./ois.html#_5-5-parameters">Endpoint parameters</a> - Airnode endpoint parameters are mapped to API operation parameters.</li><li><a href="./ois.html#_5-4-reservedparameters">Reserved parameters</a> - Reserved parameters perform a specific operation on the response before fulfilling the request. Reserved parameter names start with <code>_</code>.</li></ol><h2 id="type" tabindex="-1"><code>_type</code> <a class="header-anchor" href="#type" aria-hidden="true">#</a></h2><p>Signifies what Solidity type the API response will be encoded to before fulfillment.</p><p>Support is provided for most common <a href="https://docs.soliditylang.org/en/latest/abi-spec.html#types" target="_blank" rel="noreferrer">solidity types</a>, but the following are not supported.</p><ul><li>Custom bits integer types - e.g. <code>uint32</code> or <code>uint8</code></li><li>Fixed point decimal numbers - e.g. <code>fixed128x18</code> or <code>ufixed128x18</code></li><li>Custom fixed size bytes - e.g. <code>bytes4</code></li><li>Tuples - e.g. <code>(int256, string)</code></li></ul><p>On top of supported solidity types, there is support for a few &quot;artificial&quot; types created for special purposes that would otherwise be hard or impossible to represent.</p><ul><li><a href="./reserved-parameters.html#string32-encoded-to-bytes32-on-chain"><code>string32</code></a></li><li><a href="./reserved-parameters.html#timestamp-encoded-to-uint256-on-chain"><code>timestamp</code></a></li></ul><p>You can also encode multiple values for one single API call - but this impacts all of the reserved parameters and is explained in the <a href="./reserved-parameters.html#encoding-multiple-values">Encoding Multiple Values</a> section below.</p><h3 id="conversion-and-encoding-behavior" tabindex="-1">Conversion and encoding behavior <a class="header-anchor" href="#conversion-and-encoding-behavior" aria-hidden="true">#</a></h3><p>Before the API response value is encoded for on chain use, it is parsed and converted. The conversion behaviors for any given type is explained in depth in the <a href="/airnode/v0.7/reference/packages/adapter.html#conversion">adapter package docs</a>.</p><p>The converted value is then encoded internally by <a href="https://docs.ethers.io/v5/api/utils/abi/coder/#AbiCoder" target="_blank" rel="noreferrer">ethers ABI Coder</a> using the following</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">ethers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">defaultAbiCoder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">encode</span><span style="color:#A6ACCD;">([solidityType]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [value])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h4 id="supported-primitive-values" tabindex="-1">Supported Primitive Values <a class="header-anchor" href="#supported-primitive-values" aria-hidden="true">#</a></h4><ul><li><code>int256</code></li><li><code>uint256</code></li><li><code>bool</code></li><li><code>bytes32</code></li><li><code>address</code></li><li><code>bytes</code></li><li><code>string</code></li></ul><h4 id="string32-encoded-to-bytes32-on-chain" tabindex="-1">string32 (encoded to <code>bytes32</code> on chain) <a class="header-anchor" href="#string32-encoded-to-bytes32-on-chain" aria-hidden="true">#</a></h4><p>The <code>string32</code> is an artificial type that is not supported by solidity. It is instead encoded to <code>bytes32</code> and provides a cheaper alternative to the regular <code>string</code> type for values with less than 32 characters.</p><div class="warning custom-block"><p class="custom-block-title">Limitations</p><p>While using <code>string32</code> is more efficient, decoding the original string from <code>bytes32</code> on chain is both difficult and expensive.</p><p>Also bear in mind that this type is able to encode only strings shorter than 32 characters. If the value is longer, it will be trimmed and only first 31 characters will be encoded.</p></div><h4 id="timestamp-encoded-to-uint256-on-chain" tabindex="-1">timestamp (encoded to <code>uint256</code> on chain) <a class="header-anchor" href="#timestamp-encoded-to-uint256-on-chain" aria-hidden="true">#</a></h4><p>The <code>timestamp</code> is an artificial type that is not supported by solidity. It is instead encoded to <code>uint256</code> and specifies the UNIX timestamp value at the time when the transaction was encoded. You can use this value on chain to check the &quot;freshness&quot; of the Airnode response. This might be useful in certain scenarios, because Airnode cannot guarantee when a particular transaction will be mined on chain.</p><p>When using the <code>timestamp</code> type, the corresponding <code>_path</code> and <code>_times</code> variables must be empty strings or not provided.</p><h4 id="arrays" tabindex="-1">Arrays <a class="header-anchor" href="#arrays" aria-hidden="true">#</a></h4><p>Apart from the primitives defined above as well as all &quot;artificial&quot; types we created, you are free to use arrays with any of the above. Multidimensional arrays are supported as well. Solidity allows you to define fixed size arrays, which are more gas efficient to encode and you can use those as well.</p><p>For example</p><ul><li><code>int256[]</code> - regular integer array</li><li><code>uint256[8]</code> - unsigned integer array with 8 elements</li><li><code>int256[][]</code> - 2 dimensional integer array</li><li><code>string32[]</code> - is an array of <code>string32</code> values, which will be encoded to <code>bytes32[]</code> on chain</li><li><code>string[2][][3]</code> - 3 dimensional string array, where first dimension contains 3 elements, second unboundedly many and last dimension only 2. Notice, that this <a href="https://ethereum.stackexchange.com/questions/64331/why-is-multidimensional-array-declaration-order-reversed" target="_blank" rel="noreferrer">definition is read backwards</a> compared to C-style languages</li></ul><h2 id="path" tabindex="-1"><code>_path</code> <a class="header-anchor" href="#path" aria-hidden="true">#</a></h2><p>Assuming that the API response will be a JSON object, defines the field to be used to fulfill the request using dot notation. For example, if the API returns</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;field1&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;fieldA&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;valueA1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;valueA2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;fieldB: &quot;valueB&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;field2&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;fieldZ&quot;: &quot;valueZ&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>and <code>_path</code> is <code>field1.fieldA.1</code>, the response will be <code>valueA2</code>.</p><p>If the response is a literal value (i.e., not a JSON object) and <code>_path</code> is not provided or is an empty string (needed for <a href="./reserved-parameters.html#encoding-multiple-values">encoding multiple values</a>), Airnode will use the API response itself to fulfill the request.</p><div class="warning custom-block"><p class="custom-block-title">Beware the separator</p><p>Make sure the keys in the path of the API response do not contain <code>.</code>, because it will be incorrectly considered as a separator.</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;strange.key&quot;: &quot;123&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>The <code>_path</code> defined as <code>&quot;strange.key&quot;</code> will not work. As workaround you can <a href="./reserved-parameters.html#escaping-separators">escape the separator</a>.</p></div><h3 id="escaping-separators" tabindex="-1">Escaping Separators <a class="header-anchor" href="#escaping-separators" aria-hidden="true">#</a></h3><p>In rare cases, when the <code>_path</code> to the API response would contain <code>,</code> or <code>.</code> (comma or a dot) things get a bit complicated. Those symbols have a very specific meaning when parsing the reserved parameters and they need to be escaped if they are to be considered as literals. For example, if the API provider response looks like the following</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;very,strange.key&quot;: &quot;123&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Then you need to escape those symbols, in this case <code>_path=&quot;very//,strange\\\\.key&quot;</code>.</p><h2 id="times" tabindex="-1"><code>_times</code> <a class="header-anchor" href="#times" aria-hidden="true">#</a></h2><p>If <code>_type</code> is <code>int256</code> or <code>uint256</code> and a valid <code>_times</code> parameter is provided Airnode multiplies the value returned by the API with the <code>_times</code> parameter before fulfilling the request. For example, if the API returns:</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: &quot;1.238&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;apiVersion&quot;: &quot;1.0.4&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>and the reserved parameters are</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">_type: int256</span></span>
<span class="line"><span style="color:#A6ACCD;">_path: data</span></span>
<span class="line"><span style="color:#A6ACCD;">_times: &quot;100&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>the request will be fulfilled with the value <code>123</code>. Note that the number gets multiplied by <code>100</code>, and then gets floored. This is because the result of the multiplication is <a href="/airnode/v0.7/reference/packages/adapter.html">cast</a> to <code>int256</code> afterwards.</p><p>Make sure to pass the <code>_times</code> parameter as string. Airnode will convert this string to number internally. You can also pass and empty string <code>&quot;&quot;</code> to <code>_times</code> parameter - this has the same effect as if the <code>_times</code> parameter was not provided. However, this is important when <a href="./reserved-parameters.html#encoding-multiple-values">encoding multiple values</a>.</p><p>The <code>_times</code> parameter also works in conjunction with arrays and multidimensional arrays. All elements of the API response array will be multiplied before they are encoded.</p><h2 id="encoding-multiple-values" tabindex="-1">Encoding Multiple Values <a class="header-anchor" href="#encoding-multiple-values" aria-hidden="true">#</a></h2><p>Solidity has support for decoding and &quot;destructuring&quot; multiple values. For example</p><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">decodeMultipleParameters</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">bytes</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">calldata</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">pure</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">returns</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">memory</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">uint256</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">addr</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> num</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> addr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> abi</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">decode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">uint256</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">address</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>The example above demonstrates the decoding on chain of three values of types <code>string</code>, <code>uint256</code> and <code>address</code> respectively. You can instruct Airnode to encode these values using the reserved parameters by separating the values using <code>,</code> (comma). For example using the following combination of reserved parameters</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">_type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string,uint256,address</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">_path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pathToString,pathToFloat,pathToAddress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">_times</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,10000,</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Airnode will split the reserved parameters by <code>,</code> into &quot;split values&quot; and ensure they all contain the same number of them. It will extract and convert each of the &quot;split values&quot;. Notice, that an <code>&quot;&quot;</code> (empty string) is used to specify that a certain reserved parameter should not be used for a certain &quot;split value&quot;.</p><p>For example, let&#39;s say the API response looks like this</p><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">pathToString</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">some string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">pathToFloat</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1234.567</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">pathToAddress</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0xe021...08a74</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Airnode will extract and convert each of the &quot;split values&quot; separately</p><ol><li>Combination of <code>_type=&quot;string&quot;</code>, <code>_path=&quot;pathToString&quot;</code> and <code>__times=&quot;&quot;</code> results in <code>&quot;some string&quot;</code></li><li>Combination of <code>_type=&quot;uint256&quot;</code>, <code>_path=&quot;pathToFloat&quot;</code> and <code>__times=&quot;10000&quot;</code> results in <code>12345670</code></li><li>Combination of <code>_type=&quot;address&quot;</code>, <code>_path=&quot;pathToAddress&quot;</code> and <code>__times=&quot;&quot;</code> results in <code>&quot;0xe021...8a74&quot;</code></li></ol><p>All of these values are then together encoded to single bytes value that can be sent on chain. You can use <a href="/airnode/v0.7/grp-providers/guides/build-an-airnode/deploying-airnode.html#testing-with-http-gateway">testing gateway</a> to inspect the raw API response, casting results and the final encoded value.</p>`,55);function u(s,h,y,m,b,A){return n(),o("div",null,[e("h1",i,[t(l(s.$frontmatter.title)+" ",1),c]),d])}const v=a(p,[["render",u]]);export{C as __pageData,v as default};
