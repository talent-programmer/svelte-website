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

{#if extensionUrl}
  <a href={extensionUrl} target="_blank">Reinstall Extension</a>
{/if}

<h1>How Can We Improve?</h1>
<div>
  <div>
    <p>
      Hi there, Sad to see you leave 😕 To improve and make sure that other
      developers are happier with Gitpod, we’d love to get your opinion on why
      you decided to uninstall your browser extension. We will work hard to
      build a product that (hopefully) convinces you to use Gitpod again at a
      later point ✌️
    </p>
  </div>
  <div>
    <h2>Why did you uninstall the browser extension?</h2>
    <!-- TODO: Implement form and Netlify submission -->
  </div>
</div>
