<script>
  import { onMount } from "svelte";
  import Section from "../section.svelte";

  let animatedTexts = {
    desktop: [
      {
        isVisible: false,
        text: "check dependencies, checkout branch, view",
      },
      {
        isVisible: false,
        text: "readme.txt, install tools, run build, run test,",
      },
    ],
    mobile: [
      {
        isVisible: false,
        text: "check dependencies,",
      },
      {
        isVisible: false,
        text: "checkout branch, view",
      },
      {
        isVisible: false,
        text: "readme.txt, install tools,",
      },
      {
        isVisible: false,
        text: "run build, run test,",
      },
    ],
  };

  onMount(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.7],
    };

    const beTouching = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let t = 0;
          Object.entries(animatedTexts).forEach(([, texts]) =>
            texts.forEach((text) => {
              setTimeout(() => {
                text.isVisible = true;
                animatedTexts = animatedTexts; // This triggers Svelte's reactivity
              }, t);
              t = t + 400;
            })
          );
        } else {
          Object.entries(animatedTexts).forEach(([, texts]) =>
            texts.forEach((text) => {
              text.isVisible = false;
            })
          );
          animatedTexts = animatedTexts; // This triggers Svelte's reactivity
        }
      });
    };

    const observer = new IntersectionObserver(beTouching, options);
    const target = document.querySelector("#observer-target");
    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  });
</script>

<style lang="scss">
  .row {
    width: 100%;
  }

  h2 {
    text-align: center;
    max-width: 67.7rem;
    margin: 0 auto;

    @media (max-width: 1140px) {
      max-width: 50rem;
    }

    @media (max-width: 850px) {
      font-size: var(--h3);
    }

    @media (max-width: 682px) {
      max-width: 23.75rem;
    }

    @media (max-width: 365px) {
      font-size: 1.7rem;
    }
  }

  del {
    text-decoration: none;
  }

  .desktop {
    display: none;
  }

  @media (min-width: 683px) {
    .desktop {
      display: initial;
    }

    .mobile {
      display: none;
    }
  }

  span {
    transition: all 0.2s;
    display: inline-block;
    position: relative;
    color: inherit;
  }

  .strikethrough {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    color: var(--light-grey);
  }

  .strikethrough::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 3px;
    margin-top: -0.6em;
    transform-origin: center left;
    animation: strikethrough 1s 0.5s cubic-bezier(0.55, 0, 0.1, 1) 1 forwards;
    transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  @keyframes strikethrough {
    from {
      transform: scaleX(0);
      background: var(--light-grey);
    }
    to {
      transform: scaleX(1);
      background: var(--light-grey);
    }
  }
</style>

<div class="row">
  <Section>
    <h2 class="h1" id="observer-target">
      Choose project,
      <br />
      {#each Object.entries(animatedTexts) as [device, texts]}
        <del class={device}>
          {#each texts as { isVisible, text }}
            <span class:strikethrough={isVisible}>{text}</span>
          {/each}
        </del>
      {/each}
      <br />
      start coding.
    </h2>
  </Section>
</div>
