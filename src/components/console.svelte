<script lang="ts" context="module">
  const font_size = 16;
  const line_height_relative = 1.8;
  const line_height = Math.round(line_height_relative * font_size);

  const c_black = "rgba(18, 16, 12, 0.7)";
  const c_orange = "#fc8800";
  const c_green = "#57c700";

  const re_prompt = /(\s*)(\S+)(\s+)(\S+)(\s+)(\$)(\s+)(.*)/;
  const re_subshell = /(\s*)(\S+)(\s*)(>)(.*)/;
  const re_verb = /(\s*)(installing|blocking|updating|downloading|downloaded|compiling|finished|installed)(\s+)(.*)/i;
</script>

<script lang="ts">
  import { onMount } from "svelte";

  export let source = "";

  let wrapper: HTMLDivElement;
  let width: number;
  let height: number;
  let dpr: number;
  let canvas: HTMLCanvasElement;
  let c: CanvasRenderingContext2D;

  let lines: string[];
  let current_line: number = 0;
  let current_char: number = 0;

  $: {
    lines = source.split("\n");
    current_line = 0;
  }

  onMount(() => {
    dpr = devicePixelRatio > 1 ? 2 : 1;
    c = canvas.getContext("2d");
    width = wrapper.clientWidth;
    height = wrapper.clientHeight;
    canvas.width = dpr * width;
    canvas.height = dpr * height;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    c.scale(dpr, dpr);

    c.font = `${font_size}px SF Mono, monospace`;
    c.fillStyle = c_black;

    let column_width = c.measureText(" ".repeat(64)).width / 64;

    function draw(now) {
      requestAnimationFrame(draw);
      c.clearRect(0, 0, width, height);

      let offset_y = 72 + line_height;

      if (current_line * line_height > height - offset_y) {
        offset_y = -(current_line * line_height - height);
      }

      for (let i = 0; i <= current_line; i++) {
        let x = 20;
        let y = i * line_height + offset_y;

        let offset_c = 0;

        function draw_run(text: string, color?: string) {
          if (color) c.save(), (c.fillStyle = color);
          c.fillText(text, x + column_width * offset_c, y);
          if (color) c.restore();
          offset_c += text.length;
        }

        if (y < 0 || y > height) {
          continue;
        }

        const line = lines[i];

        const m_prompt = line.match(re_prompt);
        const m_subshell = line.match(re_subshell);
        const m_verb = line.match(re_verb);

        if (m_prompt) {
          const [, s1, user, s2, dir, s3, prompt, s4, command] = m_prompt;
          draw_run(s1);
          draw_run(user, c_green);
          draw_run(s2);
          draw_run(dir, c_green);
          draw_run(s3);
          draw_run(prompt);
          draw_run(s4);

          if (i === current_line) {
            if (current_char < command.length - 1) {
              current_char++;

              draw_run(command.slice(0, current_char + 1));

              if (current_char === command.length - 1) {
                if (current_line < lines.length - 1) {
                  current_line++;
                  current_char = 0;
                }
              }
            } else {
              draw_run(command);
            }
          } else {
            draw_run(command);
          }
        } else if (m_subshell) {
          const [, s1, subshell, s2, prompt, rest] = m_subshell;
          draw_run(s1);
          draw_run(subshell, c_green);
          draw_run(s2);
          draw_run(prompt);
          draw_run(rest);

          if (i === current_line) {
            if (current_line < lines.length - 1) {
              current_line++;
            } else {
              if (now % 1000 < 500) {
                c.save();
                c.fillStyle = "#12100c";
                c.fillRect(
                  x + column_width * offset_c + 4,
                  y - line_height + font_size,
                  column_width,
                  font_size
                );
                c.restore();
              }
            }
          }
        } else if (m_verb) {
          const [, s1, verb, s2, rest] = m_verb;
          draw_run(s1);
          draw_run(verb, c_orange);
          draw_run(s2);
          draw_run(rest);

          if (i === current_line) {
            if (current_line < lines.length - 1) {
              current_line++;
            }
          }
        } else {
          draw_run(line);

          if (i === current_line) {
            if (current_line < lines.length - 1) {
              current_line++;
            }
          }
        }
      }
    }

    requestAnimationFrame(draw);
  });
</script>

<style>
  .aspect {
    position: relative;
  }
  .aspect::before {
    content: "";
    display: block;
    padding-bottom: 165%;
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
  }
  .titlebar {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    background: rgba(249, 249, 249, 0.9);
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
</style>

<div class="aspect">
  <div class="wrapper" bind:this={wrapper}>
    <div class="titlebar" />
    <canvas bind:this={canvas} />
  </div>
</div>
