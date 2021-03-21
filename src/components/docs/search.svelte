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

<style>
  input {
    background: url("/mag-glass.svg") 10px center / 20px 20px no-repeat
      rgb(255, 255, 255);
  }

  :global(.algolia-autocomplete) {
    display: block !important; /* DocSearch adds inline styles, !important helps us take control */
  }

  :global(div
      .algolia-autocomplete.algolia-autocomplete-right
      .ds-dropdown-menu) {
    left: 0 !important; /* DocSearch adds inline styles, !important helps us take control */
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.css"
  />
  <script
    on:load={initDocSearch}
    src="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.js"></script>
</svelte:head>

<div class="w-full">
  <label for={docSearchInputSelector} class="sr-only">Search</label>
  <div class="relative">
    <input
      bind:this={docSearchInput}
      type="search"
      placeholder="Search"
      id={docSearchInputSelector}
      class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white text-gray-600 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
    />
  </div>
</div>
