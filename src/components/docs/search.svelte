<script>
  import { onMount } from "svelte";

  const docSearchJSVersion = "2.6.3";
  const docSearchInputSelector = "search-doc-input";

  let docSearchInput;

  const initDocSearch = () => {
    if (docSearchInput) {
      window.docsearch({
        apiKey: "1a880f3060e9ff81ff84087fc90878fc",
        indexName: "gitpod",
        inputSelector: `#${docSearchInputSelector}`,
        // Set debug to true to inspect the dropdown
        debug: false,
      });
    }
  };

  onMount(() => {
    initDocSearch();
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.css"
  />
  <script
    on:load={initDocSearch}
    src="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.js"></script>
</svelte:head>

<input
  bind:this={docSearchInput}
  type="search"
  placeholder="Search"
  id={docSearchInputSelector}
/>
