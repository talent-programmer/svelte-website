<script lang="ts">
  import { onMount } from "svelte";

  export let source = "";
  export let alt = "";

  let wrapper: HTMLDivElement;
  let canvas: HTMLCanvasElement;

  function debounce(fn, wait, callFirst) {
    var timeout;
    return function () {
      if (!wait) {
        return fn.apply(this, arguments);
      }
      var context = this;
      var args = arguments;
      var callNow = callFirst && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = null;
        if (!callNow) {
          return fn.apply(context, args);
        }
      }, wait);

      if (callNow) {
        return fn.apply(this, arguments);
      }
    };
  }

  onMount(() => {
    let font_size = 16;
    let line_height = 22;

    let margins = {
      top: 72 + line_height,
      right: 20,
      bottom: 20,
      left: 20,
    };

    let colors = {
      black: "rgba(18, 16, 12, 0.7)",
      orange: "#fc8800",
      green: "#57c700",
    };

    let c = canvas.getContext("2d");

    let width;
    let height;
    let char_width;
    let char_max;

    function resize() {
      width = wrapper.clientWidth;
      height = wrapper.clientHeight;

      let dpr = devicePixelRatio > 1 ? 2 : 1;

      canvas.width = dpr * width;
      canvas.height = dpr * height;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      c.scale(dpr, dpr);

      c.font = `${font_size}px SF Mono, monospace`;
      c.fillStyle = colors.black;

      char_width = c.measureText(" ".repeat(64)).width / 64;
      char_max = Math.floor(
        (width - margins.left - margins.right) / char_width
      );
    }

    resize();

    function parse(source) {
      let color = colors.black;
      let lines = [];
      let line;
      let offset = 0;

      function new_line() {
        offset = 0;
        line = { input: [], output: [] };
        lines.push(line);
      }

      function parse_chunk(type, chunk) {
        chunk.replace(
          /(\u001b\[30m)|(\u001b\[31m)|(\u001b\[32m)|(\u001b\[33m)|(\u001b\[34m)|(\u001b\[39m)|([^\u001b]+)/g,
          (_, c_black, c_red, c_green, c_yellow, c_blue, c_default, str) => {
            if (c_black) color = colors.black;
            if (c_red) color = colors.orange;
            if (c_green) color = colors.green;
            if (c_yellow) color = colors.orange;
            if (c_blue) color = colors.blue;
            if (c_default) color = colors.black;

            if (str) {
              let start = 0;
              let end = Math.min(str.length, char_max - offset);
              let text;
              while ((text = str.slice(start, end))) {
                line[type].push({ type, color, text });
                offset += end - start;
                if (offset >= char_max) {
                  new_line();
                }
                start = end;
                end = Math.min(str.length, end + char_max - offset);
              }
            }
          }
        );
      }

      for (let str of source.split("\n")) {
        new_line();
        if (str.indexOf("$") !== -1 || str.indexOf(">") !== -1) {
          let [, prompt, text] = str.match(/([^$>]+(?:[$>]))(.*)/);
          parse_chunk("output", prompt);
          parse_chunk("input", text);
        } else {
          parse_chunk("output", str);
        }
      }

      function count_characters(runs) {
        return runs.reduce((acc, cur) => acc + cur.text.length, 0);
      }

      for (let line of lines) {
        line.input.characters = count_characters(line.input);
        line.output.characters = count_characters(line.output);
      }

      return lines;
    }

    let state = {
      tick: -1,
      line: -1,
      character: -1,
      lines: parse(source),
      triggers: {
        line: 0,
        character: -1,
      },
    };

    function now(trigger) {
      return state.tick === trigger;
    }

    function random(min, max) {
      return Math.floor(min + (max - min) * Math.random());
    }

    function update() {
      state.tick += 1;

      if (now(state.triggers.line)) {
        if (state.line < state.lines.length - 1) {
          state.line += 1;
          state.character = 0;

          if (state.character < state.lines[state.line].input.characters - 1) {
            state.triggers.character = state.tick + random(2, 3);
          } else {
            state.triggers.line = state.tick + random(1, 2);
          }
        }
      }

      if (now(state.triggers.character)) {
        if (state.character < state.lines[state.line].input.characters - 1) {
          state.character += 1;
          state.triggers.character = state.tick + random(2, 3);
        } else {
          if (state.line < state.lines.length - 1) {
            if (state.lines[state.line + 1].output.characters) {
              state.triggers.line = state.tick + random(20, 30);
            } else {
              state.triggers.line = state.tick + random(2, 3);
            }
          }
        }
      }
    }

    function draw(time) {
      c.clearRect(0, 0, width, height);

      let scroll_y = 0;

      if ((state.line + 2) * line_height >= height - margins.top) {
        scroll_y = (state.line + 2) * line_height - height + margins.top;
      }

      for (let i = 0; i <= state.line; i++) {
        let offset = 0;

        for (let run of state.lines[i].output) {
          c.fillStyle = run.color;
          c.fillText(
            run.text,
            margins.left + offset * char_width,
            margins.top + line_height * i - scroll_y
          );
          offset += run.text.length;
        }

        let prompt_length = offset;

        for (let run of state.lines[i].input) {
          c.fillStyle = run.color;
          if (i === state.line) {
            let run_length = state.character - (offset - prompt_length) + 1;
            c.fillText(
              run.text.slice(0, run_length),
              margins.left + offset * char_width,
              margins.top + line_height * i - scroll_y
            );
            if (time % 1000 < 500) {
              c.fillRect(
                margins.left + (offset + run_length) * char_width + 0.5,
                margins.top + line_height * i - scroll_y - line_height * 0.575,
                char_width,
                line_height * 0.7
              );
            }
          } else {
            c.fillText(
              run.text,
              margins.left + offset * char_width,
              margins.top + line_height * i - scroll_y
            );
          }
          offset += run.text.length;
        }
      }
    }

    let handle_resize = debounce(
      () => {
        resize();
        state = {
          tick: -1,
          line: -1,
          character: -1,
          lines: parse(source),
          triggers: {
            line: 0,
            character: -1,
          },
        };
      },
      1000,
      false
    );

    window.addEventListener("resize", handle_resize);

    let mounted = true;
    let intersecting = false;

    const observer = new IntersectionObserver(([entry]) => {
      intersecting = entry.isIntersecting;
    });

    observer.observe(wrapper);

    function render(time) {
      if (!mounted) {
        return;
      }

      requestAnimationFrame(render);

      if (!intersecting) {
        return;
      }

      update();
      draw(time);
    }

    requestAnimationFrame(render);

    return () => {
      mounted = false;
      window.removeEventListener("resize", handle_resize);
      observer.disconnect();
    };
  });
</script>

<style>
  .aspect {
    position: relative;
  }
  .aspect::before {
    content: "";
    display: block;
    padding-bottom: 125%;
  }
  @media (min-width: 769px) {
    .aspect::before {
      padding-bottom: 80%;
    }
  }
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(256.32deg, #fdfdfd 1.45%, #f8f8f8 89.31%);
    box-shadow: 0px 11px 39px #ffca64, 0px 17px 49px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    transform: translate3d(0px, 0px, 0px);
  }
  .titlebar {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    background: rgba(249, 249, 249, 0.9);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
  .titlebar::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 32px;
    left: 32px;
    border-radius: 8px;
    background: #e7e7e7;
  }
  figcaption {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>

<div class="aspect">
  <figure class="wrapper" bind:this={wrapper}>
    <div class="titlebar" />
    <canvas bind:this={canvas} />
    {#if alt}
      <figcaption>{alt}</figcaption>
    {/if}
  </figure>
</div>
