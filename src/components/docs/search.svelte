<script lang="ts">
  const docSearchJSVersion = "2.6.3";

  const docSearchAction = (node: HTMLElement) => {
    (window as any).docsearch({
      apiKey: "1a880f3060e9ff81ff84087fc90878fc",
      indexName: "gitpod",
      inputSelector: `#${node.getAttribute("id")}`,
      // Set debug to true to inspect the dropdown
      debug: false,
    });
  };
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.css"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.js"></script>
</svelte:head>

<input
  use:docSearchAction
  type="search"
  placeholder="Search"
  id="search-doc-input"
/>
