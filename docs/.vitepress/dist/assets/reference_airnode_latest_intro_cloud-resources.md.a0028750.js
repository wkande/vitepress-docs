import {
  _ as a,
  o as l,
  c as o,
  d,
  a as t,
  b as s,
  t as n,
  e as i,
  r as c,
} from "./app.b352a92c.js";
const A = JSON.parse(
    '{"title":"Cloud Resources","description":"","frontmatter":{"title":"Cloud Resources","docSetName":"Airnode v0.7","folder":"Reference","basePath":"/airnode/v0.7","sidebarHeader":"Airnode v0.7","tags":null},"headers":[],"relativePath":"reference/airnode/latest/intro/cloud-resources.md"}'
  ),
  f = { name: "reference/airnode/latest/intro/cloud-resources.md" },
  h = { id: "frontmatter-title", tabindex: "-1" },
  u = t(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  p = i(
    '<p>When deployed to a cloud provider, such as AWS or GCP, Airnode uses certain resources to fully operate.</p><p>:::: tabs</p><p>::: tab AWS</p><table><thead><tr><th style="text-align:left;">Resource</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">EventBridge</td><td style="text-align:left;">Timer starting the Airnode service.</td></tr><tr><td style="text-align:left;">CloudWatch</td><td style="text-align:left;">Log groups for deployed resources.</td></tr><tr><td style="text-align:left;">Lambda</td><td style="text-align:left;">The heart of the Airnode. Serverless functions providing the Airnode service.</td></tr><tr><td style="text-align:left;">IAM</td><td style="text-align:left;">Roles &amp; policies to allow communication among other resources.</td></tr><tr><td style="text-align:left;">API Gateway</td><td style="text-align:left;">Endpoints for the HTTP Gateway and HTTP Signed Data Gateway.</td></tr><tr><td style="text-align:left;">S3</td><td style="text-align:left;">File describing the state of the deployed infrastructure.</td></tr></tbody></table><p>:::</p><p>::: tab GCP</p><table><thead><tr><th style="text-align:left;">Resource</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">Cloud Scheduler</td><td style="text-align:left;">Timer starting the Airnode service.</td></tr><tr><td style="text-align:left;">Cloud Functions</td><td style="text-align:left;">The heart of the Airnode. Serverless functions providing the Airnode service.</td></tr><tr><td style="text-align:left;">API Gateway</td><td style="text-align:left;">Endpoints for the HTTP Gateway and HTTP Signed Data Gateway.</td></tr><tr><td style="text-align:left;">Cloud Storage</td><td style="text-align:left;">File describing the state of the deployed infrastructure &amp; source code for cloud functions.</td></tr><tr><td style="text-align:left;">IAM</td><td style="text-align:left;">Service accounts &amp; roles to allow communication among other resources.</td></tr></tbody></table><p>:::</p><p>::::</p>',
    9
  );
function g(e, y, _, x, m, T) {
  const r = c("reference-VersionPicklist");
  return (
    l(),
    o("div", null, [
      d(r),
      t("h1", h, [s(n(e.$frontmatter.title) + " ", 1), u]),
      p,
    ])
  );
}
const v = a(f, [["render", g]]);
export { A as __pageData, v as default };
