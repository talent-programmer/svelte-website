<script context="module">
  export const prerender = true;
</script>

<script>
  import OpenGraph from "../components/open-graph.svelte";
</script>

<style>
  .featureTable + p {
    margin: auto;
    max-width: 60%;
  }
</style>

<OpenGraph
  data={{
    description:
      "Gitpod is the faster, more powerful, open-source platform that integrates with your individual stack.",
    title: "Gitpod vs GitHub Codespaces",
    type: "website",
  }}
/>
<header>
  <h1>Gitpod vs GitHub Codespaces</h1>
  <p>
    Gitpod is the faster, more powerful, open-source platform that integrates
    with your individual stack.
  </p>
</header>

<div class="halfimages">
  <article class="card">
    <div>
      <img
        src="/images/codespace/spaces-1.png"
        alt=""
        role="presentation"
        width="550"
        height="443"
      />
      <p>
        <small
          >Disclaimer: All information, prices, and data were last verified on
          Sept. 25, 2020. To report any incorrect or outdated information,
          please contact us.</small
        >
      </p>
    </div>
    <div>
      <h2>Ready in a flash</h2>
      <p>
        Gitpod removes long init and build times by continuously pre-building
        workspaces for your project. Thereby it allows you to start coding or
        debugging immediately, from any context, at any time.
      </p>
      <a href="/blog/continuous-dev-environment-in-devops"
        >More about Continuous Dev Environments.</a
      >
    </div>
  </article>

  <article class="card">
    <div>
      <img
        src="/images/codespace/spaces-2.png"
        alt=""
        role="presentation"
        width="550"
      />
      <p>
        <small
          >Compared resources for 100 active hours at $9/month. Last verified 25
          Sep 2020. Sources: Gitpod, GitHub Codespaces.</small
        >
      </p>
    </div>
    <div>
      <h2>Work on a mighty Linux rig</h2>
      <p>
        By leveraging cloud technologies like containers and Kubernetes, Gitpod
        achieves best-in-class resource-efficiency with scalable workspaces
        running on shared high-powered cloud servers.
      </p>
    </div>
  </article>
</div>

<div class="featureTable">
  <section class="card toc">
    <ul class="tableOfContents" role="presentation">
      <li>Pricing (Hosted)</li>
      <li>License</li>
      <li class="hasIcon">
        <img src="/svg/github.svg" alt="GitHub" /> GitHub Integration
      </li>

      <li class="hasIcon">
        <img src="/svg/gitlab.svg" alt="GitLab" />GitLab Integration
      </li>

      <li class="hasIcon">
        <img src="/svg/bitbucket.svg" alt="Bitbucket" /> Bitbucket Integration
      </li>

      <li class="hasIcon">
        <img src="/svg/brands/gcp.svg" alt="Google Cloud Platform" /> Self-Host on
        GCP
      </li>

      <li class="hasIcon">
        <img src="/svg/brands/aws.svg" alt="Amazon Web Services" />Self-Host on
        AWS
      </li>
      <li class="hasIcon">
        <img src="/svg/brands/kubernetes.svg" alt="Kubernetes" />Self-Host on
        Kubernetes
      </li>
      <li>Prebuilds <span><button>?</button></span></li>
      <li>Snapshots <span><button>?</button></span></li>
      <li>VS Code Extensions</li>
      <li>iPad Support</li>
      <li>Virtual Desktop (VNC)</li>
      <li>Multi-IDE Support</li>
    </ul>
  </section>
  <section class="card alive">
    <h2>Gitpod</h2>
    <dl id="gitpodPricing" class="tableColumn">
      <dt>Pricing (Hosted)</dt>
      <dd>Free for Open-Source</dd>
      <dt>License</dt>
      <dd>Open Source</dd>
      <dt>GitHub Integration</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>GitLab Integration</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>Bitbucket Integration</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>Self-Host on GCP</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>Self-Host on AWS</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>Self-Host on Kubernetes</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>
        Prebuilds <span>
          <button>?</button>
        </span>
      </dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>
        Snapshots <span>
          <button>?</button>
        </span>
      </dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>VS Code Extensions</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>iPad Support</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>Virtual Desktop (VNC)</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>Multi-IDE Support</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
    </dl>
  </section>
  <section class="card">
    <h2 class="h4">GitHub Codespaces</h2>
    <dl>
      <dt>Pricing (Hosted)</dt>
      <dd>
        <span aria-label="unknown" class="icon">$$$</span>
      </dd>
      <dt>License</dt>
      <dd>Proprietary</dd>
      <dt>GitHub Integration</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>GitLab Integration</dt>
      <dd>
        <span aria-label="No" class="icon">𐄂</span>
      </dd>
      <dt>Bitbucket Integration</dt>
      <dd>
        <span aria-label="No" class="icon">𐄂</span>
      </dd>
      <dt>Self-Host on GCP</dt>
      <dd>
        <span aria-label="No" class="icon">𐄂</span>
      </dd>
      <dt>Self-Host on AWS</dt>
      <dd>
        <span aria-label="No" class="icon">𐄂</span>
      </dd>
      <dt>Self-Host on Kubernetes</dt>
      <dd>
        <span aria-label="No" class="icon">𐄂</span>
      </dd>
      <dt>
        Prebuilds <span>
          <button>?</button>
        </span>
      </dt>
      <dd>
        <span aria-label="No" class="icon">𐄂</span>
      </dd>
      <dt>Snapshots <span><button>?</button></span></dt>
      <dd>
        <span aria-label="No" class="icon">𐄂</span>
      </dd>
      <dt>VS Code Extensions</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>iPad Support</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>Virtual Desktop (VNC)</dt>
      <dd>
        <span aria-label="Yes" class="icon">✓</span>
      </dd>
      <dt>Multi-IDE Support</dt>
      <dd>
        <span aria-label="No" class="icon">𐄂</span>
      </dd>
    </dl>
  </section>
</div>
<p>
  <small
    >Disclaimer: All information, prices, and data were last verified on Sept.
    25, 2020. To report any incorrect or outdated information, please <a
      href="/contact/">contact us.</a
    ></small
  >
</p>

<div class="brief">
  <h2>Ready to feel the difference?</h2>
  <p>Spin up an example workspace now, just link your git provider</p>
  <p>
    <a href="TODO:" class="btn-conversion">Try Now</a>
  </p>
  <!-- TODO: Try now button locaton. Should be the same behaviour as on the homepage -->
</div>

<div class="halfimages">
  <article class="card">
    <div>
      <img
        src="/images/codespace/spaces-3.png"
        alt=""
        role="presentation"
        width="550"
      />
    </div>
    <div>
      <h2>Open-Source</h2>
      <p>
        Gitpod puts developers' interest first and thereby guarantees full
        transparency and flexibility. Integrate, don't dictate.
      </p>
      <ul>
        <li>
          Host Gitpod yourself on GCP, AWS, Azure or self-managed Kubernetes
        </li>
        <li>Contribute to Gitpod and build customizations yourself</li>
        <li>Works just as smoothly with GitHub, GitLab and Bitbucket</li>
      </ul>
      <!-- TODO: Insert tech icons -->
    </div>
  </article>
</div>

<div class="cards double">
  <div class="card">
    <h3>thefuture.yml</h3>
    <p>
      Simply add your build command into a .gitpod.yml file and let Gitpod do
      the heavy-lifting. Once you’ve experienced the freedom of ephemeral
      workspaces, you’ll never want to go back to long-lived,
      manually-maintained environments.
    </p>
    <p>
      <a href="/#get-started" class="btn-primary">Try Now</a>
    </p>
  </div>
  <div class="card">
    <h3>Code in a carbon-neutral workspace</h3>
    <p>
      Not only is Gitpod more resource-efficient but it also runs on 100%
      carbon-neutral cloud servers (GCP). All the power, with a lower cost to
      our planet.
    </p>
    <p>
      <a
        href="https://cloud.google.com/sustainability"
        class="btn-green"
        target="_blank">More on GCP carbon neutral</a
      >
    </p>
  </div>
</div>
