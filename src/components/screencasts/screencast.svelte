<script lang="ts">
  import type { Screencast } from "../../types/screencasts.type";
  import LogoWrapper from "../main-nav/logo-wrapper.svelte";

  export let screencast: Screencast;
  export let screencastNumber: number;

  $: screencastNumberPadded = `${screencastNumber}`.padStart(3, "0");
  $: screencastDurationMinutes = Math.floor(screencast.duration / 60);
  $: screencastDurationSeconds = screencast.duration % 60;
</script>

<style lang="scss">
  data,
  time {
    color: var(--light-grey);
  }
  article {
    max-width: 400px;
    min-width: 320px;
  }
  article a > div {
    padding: 16px 40% 16px 32px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08),
      0px 5px 20px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    height: 225px;
    background-position: right center;
    display: flex;
    flex-flow: column;
    margin-bottom: 16px;
    &:hover {
      position: relative;
    }
    &:hover::after,
    &:hover::before {
      content: "";
      position: absolute;
    }
    &:hover::after {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(18, 16, 12, 0.7);
      border-radius: inherit;
    }
    &:hover::before {
      border: transparent solid;
      border-width: 20px 36px;
      border-left-color: white;
      z-index: 5;
      left: 45%;
      top: 45%;
    }
  }
  h2 {
    flex: 1;
    margin: 0;
  }
  data,
  div a div {
    flex: 0;
  }
  time,
  p {
    margin-left: 1rem;
  }
  time {
    font-size: var(--fine-print);
  }
</style>

<article>
  <a href="/screencasts/{screencast.title.toLowerCase().replace(/\s/g, '-')}">
    <!-- TODO: add correct image path -->
    <div style="background-image: url({screencast.tile})">
      <data>Screencast {screencastNumberPadded}</data>
      <h2 class="text-large">{screencast.title}</h2>
      <!-- TODO: move css out of logo so we can change teh size -->
      <LogoWrapper />

      <!-- Preview image. TODO: What do we want to show here? -->
    </div>
  </a>
  <time
    >Duration: {screencastDurationMinutes}m {screencastDurationSeconds}s</time
  >
  <p>{screencast.description}</p>
</article>
