import {
  _ as d,
  o as h,
  c as p,
  d as e,
  w as u,
  a as s,
  b as o,
  t as i,
  e as m,
  r as t,
} from "./app.b352a92c.js";
const x = JSON.parse(
    '{"title":"Airnode implementation","description":"","frontmatter":{"title":"Airnode implementation","docSetName":"Airnode v0.7","folder":"API Providers","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"Statelessness","slug":"statelessness","link":"#statelessness","children":[{"level":3,"title":"Non-idempotent operations","slug":"non-idempotent-operations","link":"#non-idempotent-operations","children":[]}]},{"level":2,"title":"Fully-serverless stack","slug":"fully-serverless-stack","link":"#fully-serverless-stack","children":[]},{"level":2,"title":"Approach to security","slug":"approach-to-security","link":"#approach-to-security","children":[]}],"relativePath":"reference/airnode/latest/intro/implementation.md"}'
  ),
  f = { name: "reference/airnode/latest/intro/implementation.md" },
  y = { id: "frontmatter-title", tabindex: "-1" },
  g = s(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  v = m(
    '<p><em>See our article, <a href="https://medium.com/api3/getting-to-know-airnode-162e50ea243e" target="_blank" rel="noreferrer">Getting to know Airnode</a> for a technical overview of the software.</em></p><h2 id="statelessness" tabindex="-1">Statelessness <a class="header-anchor" href="#statelessness" aria-hidden="true">#</a></h2><p>Oracle nodes typically keep persistent track of the blockchain and the state of the requests they receive (i.e., at what stage of fulfillment they are at), either in-memory or in a database. In systems terminology, they are not memoryless. Doing so comes with many disadvantages:</p><ol><li>The database becomes a single point of failure. Orchestrating redundancy is costly and not trivial.</li><li>Any anomaly that happens on the blockchain (block reorgs, ommer blocks, etc.) results in the oracle node state to fall out of sync with the chain, which is not trivial to correct.</li><li>A highly stateful application has many edge cases. These are difficult to cover with tests completely and are likely to result in bugs that incapacitate the node.</li></ol><p>These disadvantages result in an unstable oracle node, which is the essential reason why traditional oracle nodes require <em>professional node operators</em> that need to be ready to respond to incidents 24/7. Since this is not a realistic requirement for first-party oracles, an oracle node that is designed for first-party oracles has to be stateless.</p><p>Another way to look at keeping oracle node state is this: The blockchain (e.g., Ethereum) node that the oracle node uses already keeps the state on behalf of the oracle node. The duplication of this responsibility also duplicates the points of failure (where failure in either of them results in total failure). Then, the oracle node should depend on the blockchain node to keep its state, which requires the protocol to be designed to fit this scheme.</p><h3 id="non-idempotent-operations" tabindex="-1">Non-idempotent operations <a class="header-anchor" href="#non-idempotent-operations" aria-hidden="true">#</a></h3><p>An API operation is idempotent if calling it multiple times has the same effect as calling it once. For example, using a GET operation of an exchange API to get the ETH/USD price data is typically an idempotent operation. Calling it once or more will not make any difference at the API server-side. In contrast, using a POST operation of a remittance service provider API to send $100 to another party would be a non-idempotent operation. Each call would send an additional $100, and thus using the operation multiple times would have a different effect than using it once.</p><p>The oracle node being stateless means that it would not be able to &quot;remember&quot; if it has made an API call associated with a request, and may repeat it under certain conditions. This is not an issue at the moment, because presently, oracles are only used for idempotent operations. The aim is for Airnode to support non-idempotent operations as well. There is research into alternative methods to achieve this while protecting the resiliency that statelessness provides.</p><h2 id="fully-serverless-stack" tabindex="-1">Fully-serverless stack <a class="header-anchor" href="#fully-serverless-stack" aria-hidden="true">#</a></h2><p>Although serverless functions are better known for scaling automatically even with extreme concurrent usage (which may also come in handy in a bright future), Airnode uses it for different reasons:</p><ul><li>Serverless functions are stateless. This means that whatever problem occurs in an invocation, the next invocation will start with a clean slate. This provides great resiliency against internal (from Airnode itself) or external (from the API, Ethereum node) bugs. In other words, the oracle node <em>turns itself off and on again</em> very frequently, which automatically fixes the majority of the potential problems.</li><li>Serverless functions are fully managed. They provide the closest experience to <em>set-and-forget</em> possible.</li><li>Serverless functions are priced on-demand. Especially considering that Airnode will not require major concurrent usage, this will result in great cost-efficiency (and even let the user stay below free tier (<a href="https://aws.amazon.com/free" target="_blank" rel="noreferrer">AWS</a>, <a href="https://cloud.google.com/free" target="_blank" rel="noreferrer">GCP</a>) limits).</li><li>Bare serverless functions are easy to port across cloud providers (e.g., using <a href="https://www.terraform.io/" target="_blank" rel="noreferrer">Terraform Framework</a>), especially when their cloud provider-specific dependencies are limited.</li></ul><h2 id="approach-to-security" tabindex="-1">Approach to security <a class="header-anchor" href="#approach-to-security" aria-hidden="true">#</a></h2><p>For an optimally hands-off user experience, Airnode should utilize fully-managed services whenever possible. To allow this to be done securely, the node is designed in a defensive way.</p><p>There are two external parties that Airnode interacts with:</p><ul><li><strong>APIs:</strong> Although Airnode is designed for first-party oracles, it considers serving data from third-party APIs as a valid usage scenario. In this case, calls made to all APIs are contained in separate serverless function invocations so that they cannot induce node-level failure.</li><li><strong>Blockchain nodes:</strong> Similarly, using blockchain (e.g., Ethereum) nodes run by third party service providers is considered as a valid usage scenario. Airnode uses all providers simultaneously (i.e., not through a Quorum-based consensus or behind a load balancer) for maximum availability, which is made possible by its unique stateless design. The interactions made with each provider is contained in a separate serverless function invocation so that a malicious provider cannot induce node-level failure.</li></ul><p>In addition, the protocol is implemented in a way that a blockchain service provider cannot tamper with the parameters of a request, but only deny service. Note that this is not the case with alternative solutions, as they treat the blockchain service provider as a trusted party.</p><p>Cloud hosting is recommended over hosting on-premises due to the superior availability of serverless functions, and also for their set-and-forget qualities. As a precaution, redundancy on multiple cloud providers can be provisioned easily and virtually at no cost thanks to the fully-serverless design of Airnode.</p>',
    18
  );
function b(a, w, _, k, A, T) {
  const n = t("TitleSpan"),
    r = t("VersionWarning"),
    l = t("TocHeader"),
    c = t("TOC");
  return (
    h(),
    p("div", null, [
      e(n, null, { default: u(() => [o(i(a.$frontmatter.folder), 1)]), _: 1 }),
      s("h1", y, [o(i(a.$frontmatter.title) + " ", 1), g]),
      e(r),
      e(l),
      e(c, { class: "table-of-contents", "include-level": [2, 3] }),
      v,
    ])
  );
}
const I = d(f, [["render", b]]);
export { x as __pageData, I as default };
