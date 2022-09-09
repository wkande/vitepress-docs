import {
  _ as c,
  o as l,
  c as p,
  d as r,
  w as s,
  a as e,
  b as t,
  t as o,
  e as h,
  r as i,
} from "./app.b352a92c.js";
const k = JSON.parse(
    '{"title":"Developers\u2014Why use dAPIs?","description":"","frontmatter":{"title":"Developers\u2014Why use dAPIs?","sidebarHeader":"dAPIs","folder":"Introduction"},"headers":[],"relativePath":"reference/dapis/introduction/why-use-dapis.md"}'
  ),
  f = { name: "reference/dapis/introduction/why-use-dapis.md" },
  u = { id: "frontmatter-title", tabindex: "-1" },
  m = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  y = e(
    "p",
    null,
    "Due to being composed out of first-party data feeds, dAPIs offer security, transparency, cost-efficiency and scalability in a turn-key package.",
    -1
  ),
  _ = e(
    "p",
    null,
    [
      e("strong", null, "Security"),
      t(
        ": Data used to update a first-party data feed is cryptographically signed by the owner of the data. This means that the data that will update a feed cannot be tampered with once it leaves the source. Furthermore, the API providers host a first-party oracle node,"
      ),
    ],
    -1
  ),
  g = t("Airnode"),
  b = h(
    ', to<p>push the data to the chain themselves. This renders denial of service attacks by third parties ineffective.</p><p><strong>Transparency</strong>: The cryptographic signatures prove that the data that updates a feed comes directly from a specific API provider. Furthermore, Beacons that underlie dAPIs allow the user to inspect what exact API endpoints are being called, and with which parameters. This provides complete transparency to the dApp developer, which is a big step from depending on a pseudonymous selection of third parties that intentionally obscure their data sources.</p><div class="tip custom-block"><p class="custom-block-title">dAPI Browser</p><p>dAPIs source data from Beacons, whose parameters you can examine in detail. See the <a href="./../reference/dapi-browser.html">dAPI Browser</a>.</p></div><p><strong>Cost-efficiency</strong>: dAPIs are cost efficient compared to third-party data feeds, as the user does not need to pay middlemen node operators for their services. Furthermore, first-party data feeds do not require redundancy against middlemen layer attacks. This makes single-Beacon dAPIs feasible, and allows API3 to provide a wide variety of data feeds in a cost-efficient way.</p><p><strong>Scalability</strong>: An inherently secure and cost-efficient data feed design allows API3 to build a large number of them, on many chains. This is supplemented by purpose-designed Airnode protocols and relayer schemes to improve efficiency while not degrading the security guarantees of a first-party data feed. The improved scalability of dAPIs also factors into building aggregated data feeds. Since first-party data feeds do not require redundancy at the middlemen layer, the aggregation costs less gas and source-level decentralization becomes more affordable.</p>',
    6
  );
function A(a, v, w, I, P, T) {
  const n = i("TitleSpan"),
    d = i("router-link");
  return (
    l(),
    p("div", null, [
      r(n, null, {
        default: s(() => [t(o(a.$frontmatter.sidebarHeader), 1)]),
        _: 1,
      }),
      e("h1", u, [t(o(a.$frontmatter.title) + " ", 1), m]),
      y,
      _,
      r(
        d,
        { to: "/reference/airnode/latest/" },
        { default: s(() => [g]), _: 1 }
      ),
      b,
    ])
  );
}
const B = c(f, [["render", A]]);
export { k as __pageData, B as default };
