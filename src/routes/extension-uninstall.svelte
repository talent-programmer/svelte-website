<script lang="ts">
  const extensionUrls = {
    chrome:
      "https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki",
    firefox: "https://addons.mozilla.org/en-GB/firefox/addon/gitpod/",
  };

  const currentBrowser =
    ["Chrome", "Firefox"].find(
      (browser) =>
        typeof window !== "undefined" &&
        window.navigator.userAgent.includes(browser)
    ) || "";

  const extensionUrl = extensionUrls[currentBrowser.toLowerCase()];
</script>

<style>
  .letter {
    display: flex;
    place-content: center center;
    padding: 3em;
    order: -1;
  }
  .letter p {
    padding: 2rem;
    background-color: var(--white);
    border: 1px solid var(--divider);
    max-width: 20rem;
  }
</style>

<header>
  {#if extensionUrl}
    <a href={extensionUrl} target="_blank">Reinstall Extension</a>
  {/if}
  <h1>How Can We Improve?</h1>
</header>
<section class=" halfimages">
  <article class="card">
    <div class="letter">
      <p>
        Hi there, Sad to see you leave 😕 To improve and make sure that other
        developers are happier with Gitpod, we’d love to get your opinion on why
        you decided to uninstall your browser extension. We will work hard to
        build a product that (hopefully) convinces you to use Gitpod again at a
        later point ✌️
      </p>
    </div>
    <!-- TODO: Implement form and Netlify submission -->
    <form method="POST" name="Extension Deletion">
      <input type="hidden" name="form-name" value="extension-deletion" />
      <p class="h5">Why did you uninstall the browser extension?</p>
      <ul>
        <li>
          <fieldset>
            <legend>Check all that apply:</legend>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="reason"
                  value="usage"
                  id="usage"
                  data-text="I never used it"
                />
                <label for="usage">I never used it</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="reason"
                  value="configuring"
                  id="configuring"
                  data-text="I have problems configuring my projects"
                />
                <label for="configuring"
                  >I have problems configuring my projects</label
                >
              </li>
              <li>
                <input
                  type="checkbox"
                  name="reason"
                  value="local"
                  id="local"
                  data-text="I prefer my local development"
                />
                <label for="local">I prefer my local development</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="reason"
                  value="expected"
                  id="expected"
                  data-text="Gitpod isn’t what I expected"
                />
                <label for="expected">Gitpod isn’t what I expected</label>
              </li>
            </ul>
          </fieldset>
        </li>
        <li>
          <label for="otherFeedback">Do you have any other feedback?</label>
          <textarea
            aria-label="Do you have any other feedback?"
            id="otherFeedback"
            name="otherFeedback"
          />
        </li>
        <li>
          <button class="btn-conversion" disabled type="submit">Send</button>
        </li>
      </ul>
    </form>
  </article>
</section>
