import {
  _ as n,
  o as t,
  c as r,
  d as o,
  a as e,
  b as i,
  t as l,
  e as c,
  r as d,
} from "./app.b352a92c.js";
const y = JSON.parse(
    '{"title":"aws.env","description":"","frontmatter":{"title":"aws.env","folder":"Reference > Deployment Files","sidebarHeader":"Reference \u2192 Airnode v0.7","basePath":"/airnode/v0.7","tags":null},"headers":[],"relativePath":"reference/airnode/latest/deployment-files/aws-env.md"}'
  ),
  p = { name: "reference/airnode/latest/deployment-files/aws-env.md" },
  _ = { id: "frontmatter-title", tabindex: "-1" },
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
  h = c(
    `<p>When it is time to deploy the Airnode to AWS, the Docker <a href="./../../grp-providers/docker/deployer-image.html">deployer image</a> will need the AWS credentials to build the node.</p><ul><li>Variable names cannot contain dashes (-) or start with a number.</li></ul><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">AWS_ACCESS_KEY_ID=XYZ...123</span></span>
<span class="line"><span style="color:#A6ACCD;">AWS_SECRET_ACCESS_KEY=ABC7...89</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,
    3
  );
function f(a, u, b, A, v, S) {
  const s = d("reference-VersionPicklist");
  return (
    t(),
    r("div", null, [
      o(s),
      e("h1", _, [i(l(a.$frontmatter.title) + " ", 1), m]),
      h,
    ])
  );
}
const g = n(p, [["render", f]]);
export { y as __pageData, g as default };
