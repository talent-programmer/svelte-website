<script context="module">
  export const prerender = true;
</script>

<script>
  import OpenGraph from "../components/open-graph.svelte";
</script>

<style>
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
      <li>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNS4wMjYiIGhlaWdodD0iMzQuMTYyIiB2aWV3Qm94PSIwIDAgMzUuMDI2IDM0LjE2MiI+PHBhdGggZmlsbD0iIzFiMWYyMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNTEzLDBhMTcuNTE0LDE3LjUxNCwwLDAsMC01LjUzOSwzNC4xMjljLjg3Ni4xNTMsMS4yLS4zNzIsMS4yLS44MzIsMC0uNDE2LS4wMjItMS44LS4wMjItMy4yNjItNC40LjgxLTUuNTM5LTEuMDczLTUuODg5LTIuMDU4YTYuMzY4LDYuMzY4LDAsMCwwLTEuOC0yLjQ3NGMtLjYxMy0uMzI4LTEuNDg5LTEuMTM4LS4wMjItMS4xNmEzLjUsMy41LDAsMCwxLDIuNjkzLDEuOCwzLjc0MywzLjc0MywwLDAsMCw1LjEsMS40NDUsMy42ODQsMy42ODQsMCwwLDEsMS4xMTYtMi4zNDJjLTMuOS0uNDM4LTcuOTY5LTEuOTQ4LTcuOTY5LTguNjQ3YTYuODE2LDYuODE2LDAsMCwxLDEuOC00LjcwNyw2LjI5Myw2LjI5MywwLDAsMSwuMTc1LTQuNjQxczEuNDY3LS40Niw0LjgxNiwxLjhhMTYuNTExLDE2LjUxMSwwLDAsMSw4Ljc1NywwYzMuMzQ5LTIuMjc3LDQuODE2LTEuOCw0LjgxNi0xLjhhNi4yOTMsNi4yOTMsMCwwLDEsLjE3NSw0LjY0MSw2Ljc3Niw2Ljc3NiwwLDAsMSwxLjgsNC43MDdjMCw2LjcyMS00LjA5NCw4LjIwOS03Ljk5LDguNjQ3YTQuMTQ3LDQuMTQ3LDAsMCwxLDEuMTgyLDMuMjRjMCwyLjM0Mi0uMDIyLDQuMjI1LS4wMjIsNC44MTYsMCwuNDYuMzI4LDEuMDA3LDEuMi44MzJBMTcuNTIzLDE3LjUyMywwLDAsMCwxNy41MTMsMFoiLz48L3N2Zz4="
          alt="GitHub"
        />GitHub Integration
      </li>

      <li>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNC4yNTEiIGhlaWdodD0iMjkuMjk5IiB2aWV3Qm94PSIwIDAgMzQuMjUxIDI5LjI5OSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZjNmQyNjt9LmEsLmIsLmN7ZmlsbC1ydWxlOmV2ZW5vZGQ7fS5ie2ZpbGw6I2UyNDMyOTt9LmN7ZmlsbDojZmNhMzI2O308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48cGF0aCBjbGFzcz0iYSIgZD0iTTM0LjYtNDM3LjMxMmwtMS45MTctNS40NzctMy44LTEwLjg1NmEuNjcuNjcsMCwwLDAtMS4yNDIsMGwtMy44LDEwLjg1NkgxMS4yM2wtMy44LTEwLjg1NmEuNjcuNjcsMCwwLDAtMS4yNDIsMGwtMy44LDEwLjg1NkwuNDc1LTQzNy4zMTJhMS4xNjUsMS4xNjUsMCwwLDAsLjQ3NCwxLjM1NmwxNi41ODcsMTEuMTkxLDE2LjU4Ny0xMS4xOTFhMS4xNjUsMS4xNjUsMCwwLDAsLjQ3NC0xLjM1NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNDExIDQ1NC4wNjUpIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjgxOSAxMS4yNzUpIj48cGF0aCBjbGFzcz0iYiIgZD0iTTcuNjIzLTI2MS4wNzJoMEwxMy45MjktMjc5LjFIMS4zMTZsNi4zMDcsMTguMDI0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMzE2IDI3OS4wOTYpIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuOTgxIDExLjI3NSkiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTYuMDM2LTI2MS4wNyw5LjcyOS0yNzkuMDk1SC44OTFMMTYuMDM2LTI2MS4wN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjg5MSAyNzkuMDk1KSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDExLjI3NSkiPjxwYXRoIGNsYXNzPSJjIiBkPSJNMi44MzUtMjgwaDBMLjkxOS0yNzQuNTIzYTEuMTY1LDEuMTY1LDAsMCwwLC40NzQsMS4zNTZMMTcuOTgtMjYxLjk3NiwyLjgzNS0yODBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC44NTUgMjgwKSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjk4MSkiPjxwYXRoIGNsYXNzPSJiIiBkPSJNMC0xNjMuMzA5SDguODM5bC0zLjgtMTAuODU2YS42Ny42NywwLDAsMC0xLjI0MiwwTDAtMTYzLjMwOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTc0LjU4NCkiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuMTI2IDExLjI3NSkiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMC0yNjEuMDdsNi4zMDctMTguMDI0aDguODM5TDAtMjYxLjA3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyNzkuMDk1KSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNy4xMjYgMTEuMjc1KSI+PHBhdGggY2xhc3M9ImMiIGQ9Ik0xNi4wMzYtMjgwaDBsMS45MTcsNS40NzdhMS4xNjUsMS4xNjUsMCwwLDEtLjQ3NCwxLjM1NkwuODkxLTI2MS45NzYsMTYuMDM2LTI4MFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjg5MSAyODApIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzLjQzMikiPjxwYXRoIGNsYXNzPSJiIiBkPSJNOS43NDctMTYzLjMwOUguOTA4bDMuOC0xMC44NTZhLjY3LjY3LDAsMCwxLDEuMjQyLDBsMy44LDEwLjg1NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjkwOCAxNzQuNTg0KSIvPjwvZz48L2c+PC9nPjwvc3ZnPg=="
          alt="GitLab"
        />GitLab Integration
      </li>

      <li>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMi4yODciIGhlaWdodD0iMjYuOTYxIiB2aWV3Qm94PSIwIDAgMzIuMjg3IDI2Ljk2MSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMS4wODYiIHgyPSIuNDY5IiB5MT0iLjEzOCIgeTI9Ii43ODgiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48c3RvcCBvZmZzZXQ9Ii4xOCIgc3RvcC1jb2xvcj0iIzAwNTJjYyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI2ODRmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9IiMyNjg0ZmYiIGQ9Ik0xLjAyMiw2LjI2YTEuMDcsMS4wNywwLDAsMC0uOC4zMzMuOTEzLjkxMywwLDAsMC0uMjM4Ljc4MUw0LjM3OSwzMi4xM2ExLjM4LDEuMzgsMCwwLDAsMS4zNzYsMS4wOUgyNi44MjJhMS4wMTYsMS4wMTYsMCwwLDAsMS4wMzQtLjgwN0wzMi4yNDgsNy4zNzlBLjkxNC45MTQsMCwwLDAsMzIuMDEsNi42YTEuMDcsMS4wNywwLDAsMC0uOC0uMzMzWk0xOS41MTMsMjQuMTUySDEyLjc4OWwtMS44MjEtOC44MzNIMjEuMTQzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMjYgLTYuMjYpIi8+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTM1LjQsMjUuMTJIMjUuNjkzbC0xLjYyOSw4LjgzM0gxNy4zNEw5LjQsNDIuN2ExLjQ2NiwxLjQ2NiwwLDAsMCwuOTA1LjMxN0gzMS4zNzhhMS4wMTYsMS4wMTYsMCwwLDAsMS4wMzQtLjgwN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00LjUyNSAtMTYuMDYxKSIvPjwvc3ZnPg=="
          alt="Bitbucket"
        />Bitbucket Integration
      </li>

      <li>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjUuNzk0IiBoZWlnaHQ9IjEwMS4yNTIiIHZpZXdCb3g9IjAgMCAxMjUuNzk0IDEwMS4yNTIiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNlYTQzMzU7fS5ie2ZpbGw6IzQyODVmNDt9LmN7ZmlsbDojMzRhODUzO30uZHtmaWxsOiNmYmJjMDU7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMjY1LjU1MiwyNy44ODJoMy44MzZsMTAuOTM0LTEwLjkzNC41MzYtNC42NDRBNDkuMTUxLDQ5LjE1MSwwLDAsMCwyMDAuOSwzNi4yODZhNS45MTgsNS45MTgsMCwwLDEsMy44MzYtLjIyN0wyMjYuNiwzMi40NXMxLjExLTEuODQyLDEuNjkxLTEuNzI5YTI3LjI3NywyNy4yNzcsMCwwLDEsMzcuMzMyLTIuODM5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NS43MjkgLTAuMDA0KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNODQ0LjEyMiwxODcuNDM3QTQ5LjIxOCw0OS4yMTgsMCwwLDAsODI5LjI3NiwxNjMuNWwtMTUuMzQ0LDE1LjM0NGEyNy4yODQsMjcuMjg0LDAsMCwxLDEwLjAxMywyMS42NDF2Mi43MjZhMTMuNjYsMTMuNjYsMCwxLDEsMCwyNy4zMmgtMjcuMzJsLTIuNzI2LDIuNzY0VjI0OS42OGwyLjcyNiwyLjcyNmgyNy4zMmEzNS41MzYsMzUuNTM2LDAsMCwwLDIwLjE3Ni02NC45NjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzMzLjk1MiAtMTUxLjE1NCkiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTIwNS4xNDUsMTA1NS44aDI3LjMxOXYtMjEuODY4SDIwNS4xNDVhMTMuNiwxMy42LDAsMCwxLTUuNjQxLTEuMjMxbC0zLjgzNiwxLjE5My0xMS4wMDksMTAuOTM0LS45NTksMy44MzZBMzUuMjYsMzUuMjYsMCwwLDAsMjA1LjE0NSwxMDU1LjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY5LjgyOCAtOTU0LjcyMSkiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTM1LjMwOSwzOTkuMmEzNS41MjMsMzUuNTIzLDAsMCwwLTIxLjQ0NSw2My42ODVMMjkuNzA2LDQ0Ny4wNGExMy42NTgsMTMuNjU4LDAsMSwxLDE4LjA3LTE4LjA3bDE1Ljg0Mi0xNS44NDJBMzUuNDQ1LDM1LjQ0NSwwLDAsMCwzNS4zMDksMzk5LjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwOCAtMzY5LjA1MykiLz48L2c+PC9zdmc+"
          alt="Google Cloud Platform"
        />Self-Host on GCP
      </li>

      <li>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4PSIwIiB5PSIwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMDQgMTgyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MXtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNmOTB9PC9zdHlsZT48cGF0aCBmaWxsPSIjMjUyZjNlIiBkPSJNODYuNCA2Ni40YzAgMy43LjQgNi43IDEuMSA4LjkuOCAyLjIgMS44IDQuNiAzLjIgNy4yLjUuOC43IDEuNi43IDIuMyAwIDEtLjYgMi0xLjkgM0w4My4yIDkyYy0uOS42LTEuOC45LTIuNi45LTEgMC0yLS41LTMtMS40LTEuNC0xLjUtMi42LTMuMS0zLjYtNC43LTEtMS43LTItMy42LTMuMS01LjktNy44IDkuMi0xNy42IDEzLjgtMjkuNCAxMy44LTguNCAwLTE1LjEtMi40LTIwLTcuMi00LjktNC44LTcuNC0xMS4yLTcuNC0xOS4yIDAtOC41IDMtMTUuNCA5LjEtMjAuNiA2LjEtNS4yIDE0LjItNy44IDI0LjUtNy44IDMuNCAwIDYuOS4zIDEwLjYuOCAzLjcuNSA3LjUgMS4zIDExLjUgMi4ydi03LjNjMC03LjYtMS42LTEyLjktNC43LTE2LTMuMi0zLjEtOC42LTQuNi0xNi4zLTQuNi0zLjUgMC03LjEuNC0xMC44IDEuMy0zLjcuOS03LjMgMi0xMC44IDMuNC0xLjYuNy0yLjggMS4xLTMuNSAxLjMtLjcuMi0xLjIuMy0xLjYuMy0xLjQgMC0yLjEtMS0yLjEtMy4xdi00LjljMC0xLjYuMi0yLjguNy0zLjUuNS0uNyAxLjQtMS40IDIuOC0yLjEgMy41LTEuOCA3LjctMy4zIDEyLjYtNC41QzQxIDEuOSA0Ni4yIDEuMyA1MS43IDEuM2MxMS45IDAgMjAuNiAyLjcgMjYuMiA4LjEgNS41IDUuNCA4LjMgMTMuNiA4LjMgMjQuNnYzMi40ek00NS44IDgxLjZjMy4zIDAgNi43LS42IDEwLjMtMS44IDMuNi0xLjIgNi44LTMuNCA5LjUtNi40IDEuNi0xLjkgMi44LTQgMy40LTYuNC42LTIuNCAxLTUuMyAxLTguN3YtNC4yYy0yLjktLjctNi0xLjMtOS4yLTEuNy0zLjItLjQtNi4zLS42LTkuNC0uNi02LjcgMC0xMS42IDEuMy0xNC45IDQtMy4zIDIuNy00LjkgNi41LTQuOSAxMS41IDAgNC43IDEuMiA4LjIgMy43IDEwLjYgMi40IDIuNSA1LjkgMy43IDEwLjUgMy43em04MC4zIDEwLjhjLTEuOCAwLTMtLjMtMy44LTEtLjgtLjYtMS41LTItMi4xLTMuOUw5Ni43IDEwLjJjLS42LTItLjktMy4zLS45LTQgMC0xLjYuOC0yLjUgMi40LTIuNWg5LjhjMS45IDAgMy4yLjMgMy45IDEgLjguNiAxLjQgMiAyIDMuOWwxNi44IDY2LjIgMTUuNi02Ni4yYy41LTIgMS4xLTMuMyAxLjktMy45LjgtLjYgMi4yLTEgNC0xaDhjMS45IDAgMy4yLjMgNCAxIC44LjYgMS41IDIgMS45IDMuOWwxNS44IDY3IDE3LjMtNjdjLjYtMiAxLjMtMy4zIDItMy45LjgtLjYgMi4xLTEgMy45LTFoOS4zYzEuNiAwIDIuNS44IDIuNSAyLjUgMCAuNS0uMSAxLS4yIDEuNi0uMS42LS4zIDEuNC0uNyAyLjVsLTI0LjEgNzcuM2MtLjYgMi0xLjMgMy4zLTIuMSAzLjktLjguNi0yLjEgMS0zLjggMWgtOC42Yy0xLjkgMC0zLjItLjMtNC0xLS44LS43LTEuNS0yLTEuOS00TDE1NiAyM2wtMTUuNCA2NC40Yy0uNSAyLTEuMSAzLjMtMS45IDQtLjguNy0yLjIgMS00IDFoLTguNnptMTI4LjUgMi43Yy01LjIgMC0xMC40LS42LTE1LjQtMS44LTUtMS4yLTguOS0yLjUtMTEuNS00LTEuNi0uOS0yLjctMS45LTMuMS0yLjgtLjQtLjktLjYtMS45LS42LTIuOHYtNS4xYzAtMi4xLjgtMy4xIDIuMy0zLjEuNiAwIDEuMi4xIDEuOC4zLjYuMiAxLjUuNiAyLjUgMSAzLjQgMS41IDcuMSAyLjcgMTEgMy41IDQgLjggNy45IDEuMiAxMS45IDEuMiA2LjMgMCAxMS4yLTEuMSAxNC42LTMuMyAzLjQtMi4yIDUuMi01LjQgNS4yLTkuNSAwLTIuOC0uOS01LjEtMi43LTctMS44LTEuOS01LjItMy42LTEwLjEtNS4yTDI0NiA1MmMtNy4zLTIuMy0xMi43LTUuNy0xNi0xMC4yLTMuMy00LjQtNS05LjMtNS0xNC41IDAtNC4yLjktNy45IDIuNy0xMS4xIDEuOC0zLjIgNC4yLTYgNy4yLTguMiAzLTIuMyA2LjQtNCAxMC40LTUuMiA0LTEuMiA4LjItMS43IDEyLjYtMS43IDIuMiAwIDQuNS4xIDYuNy40IDIuMy4zIDQuNC43IDYuNSAxLjEgMiAuNSAzLjkgMSA1LjcgMS42IDEuOC42IDMuMiAxLjIgNC4yIDEuOCAxLjQuOCAyLjQgMS42IDMgMi41LjYuOC45IDEuOS45IDMuM3Y0LjdjMCAyLjEtLjggMy4yLTIuMyAzLjItLjggMC0yLjEtLjQtMy44LTEuMi01LjctMi42LTEyLjEtMy45LTE5LjItMy45LTUuNyAwLTEwLjIuOS0xMy4zIDIuOC0zLjEgMS45LTQuNyA0LjgtNC43IDguOSAwIDIuOCAxIDUuMiAzIDcuMSAyIDEuOSA1LjcgMy44IDExIDUuNWwxNC4yIDQuNWM3LjIgMi4zIDEyLjQgNS41IDE1LjUgOS42IDMuMSA0LjEgNC42IDguOCA0LjYgMTQgMCA0LjMtLjkgOC4yLTIuNiAxMS42LTEuOCAzLjQtNC4yIDYuNC03LjMgOC44LTMuMSAyLjUtNi44IDQuMy0xMS4xIDUuNi00LjUgMS40LTkuMiAyLjEtMTQuMyAyLjF6Ii8+PHBhdGggZD0iTTI3My41IDE0My43Yy0zMi45IDI0LjMtODAuNyAzNy4yLTEyMS44IDM3LjItNTcuNiAwLTEwOS41LTIxLjMtMTQ4LjctNTYuNy0zLjEtMi44LS4zLTYuNiAzLjQtNC40IDQyLjQgMjQuNiA5NC43IDM5LjUgMTQ4LjggMzkuNSAzNi41IDAgNzYuNi03LjYgMTEzLjUtMjMuMiA1LjUtMi41IDEwLjIgMy42IDQuOCA3LjZ6IiBjbGFzcz0ic3QxIi8+PHBhdGggZD0iTTI4Ny4yIDEyOC4xYy00LjItNS40LTI3LjgtMi42LTM4LjUtMS4zLTMuMi40LTMuNy0yLjQtLjgtNC41IDE4LjgtMTMuMiA0OS43LTkuNCA1My4zLTUgMy42IDQuNS0xIDM1LjQtMTguNiA1MC4yLTIuNyAyLjMtNS4zIDEuMS00LjEtMS45IDQtOS45IDEyLjktMzIuMiA4LjctMzcuNXoiIGNsYXNzPSJzdDEiLz48L3N2Zz4K"
          alt="Amazon Web Services"
        />Self-Host on AWS
      </li>
      <li>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NC43NzEiIGhlaWdodD0iNzIuMjc3IiB2aWV3Qm94PSIwIDAgNzQuNzcxIDcyLjI3NyI+PHBhdGggZmlsbD0iIzFkNzBkYyIgZD0iTTY4LjIzLDE2LjA3NWE1LjUzNSw1LjUzNSwwLDAsMC0yLjczNi0zLjE2NEwzOS40MTUuNDI4QTQuNzg0LDQuNzg0LDAsMCwwLDM3LjI3OCwwLDkuMDI0LDkuMDI0LDAsMCwwLDM1LjE0LjE3MUw5LjA2MSwxMi43NEE0LjU5NCw0LjU5NCwwLDAsMCw2LjUsMTUuOUwuMDgzLDQ0LjAzNWE1LjM5NCw1LjM5NCwwLDAsMCwuOTQxLDQuMUwxOS4wNjUsNzAuNDU2QTYuMjI1LDYuMjI1LDAsMCwwLDIzLDcyLjI1MUg1MS43MjhhNC4yNjEsNC4yNjEsMCwwLDAsMy45MzMtMS44TDczLjcsNDguMTM5YTUuODM5LDUuODM5LDAsMCwwLDEuMDI2LTQuMWwtNi41LTI3Ljk2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02NS43MjgsNDQuNDcyaDBjLS4wODYsMC0uMTcxLDAtLjE3MS0uMDg2cy0uMTcxLS4wODUtLjM0Mi0uMDg1YTQuMTYzLDQuMTYzLDAsMCwwLTEuMDI2LS4wODYsMS4wODQsMS4wODQsMCwwLDEtLjUxMy0uMDg2aC0uMDg2YTE3LjI4LDE3LjI4LDAsMCwxLTIuOTA3LS41MTMsMS4wMzMsMS4wMzMsMCwwLDEtLjYtLjZoMGwtLjY4NC0uMTcxYTIyLjMsMjIuMywwLDAsMC0uMzQyLTcuNTI0LDIzLjE2NCwyMy4xNjQsMCwwLDAtMi45OTMtNy4wMTFsLjUxMy0uNTEzaDB2LS4wODZhMS4xOTQsMS4xOTQsMCwwLDEsLjI1Ny0uNzcsMTUuMzEzLDE1LjMxMywwLDAsMSwyLjM5NC0xLjcxaDBsLjUxMy0uMjU3Yy4zNDItLjE3MS42LS4zNDIuOTQxLS41MTMuMDg1LS4wODYuMTcxLS4wODYuMjU3LS4xNzFzMC0uMDg2LDAtLjE3MWgwYTEuNjczLDEuNjczLDAsMCwwLC4zNDItMi4zOTQsMS42MzMsMS42MzMsMCwwLDAtMS4yLS42LDIuMDQzLDIuMDQzLDAsMCwwLTEuMi40MjhoMGwtLjA4NS4wODZjLS4wODYuMDg2LS4xNzEuMTcxLS4yNTcuMTcxYTUuNTMzLDUuNTMzLDAsMCwwLS42ODQuNzdjLS4wODUuMTcxLS4yNTcuMjU3LS4zNDIuMzQyaDBhMTEuMjQzLDExLjI0MywwLDAsMS0yLjEzOCwxLjg4MSwxLjIxNSwxLjIxNSwwLDAsMS0uNTEzLjE3MS41MTQuNTE0LDAsMCwxLS4zNDItLjA4NmgtLjA4NmwtLjY4NC40MjhjLS42ODQtLjY4NC0xLjQ1NC0xLjM2OC0yLjEzOC0yLjA1MkEyMS45MDksMjEuOTA5LDAsMCwwLDQwLjUsMTguODJsLS4wODYtLjY4NGgwdi4wODZhMS4xNzUsMS4xNzUsMCwwLDEtLjQyOC0uNjg0LDE3LjA4MiwxNy4wODIsMCwwLDEsLjE3MS0yLjkwN3YtLjA4NmMwLS4xNzEuMDg2LS4zNDIuMDg2LS41MTMuMDg2LS4zNDIuMDg2LS42ODQuMTcxLTEuMDI2di0uNTEzaDBhMS42OTIsMS42OTIsMCwwLDAtMS40NTQtMS44LDEuNzE1LDEuNzE1LDAsMCwwLTEuNDU0LjYsMS42ODgsMS42ODgsMCwwLDAtLjUxMywxLjJoMHYuNDI4YTQuMjkyLDQuMjkyLDAsMCwwLC4xNzEsMS4wMjYsMS4wODQsMS4wODQsMCwwLDEsLjA4Ni41MTN2LjA4NmExNi4xMTMsMTYuMTEzLDAsMCwxLC4xNzEsMi45MDcsMS4xNzUsMS4xNzUsMCwwLDEtLjQyOC42ODR2LjE3MWgwbC0uMDg2LjY4NGMtLjk0MS4wODYtMS44ODEuMjU3LTIuOTA3LjQyOEEyMC4zODMsMjAuMzgzLDAsMCwwLDIzLjQ4OSwyNS40bC0uNTEzLS4zNDJoLS4wODZjLS4wODYsMC0uMTcxLjA4Ni0uMzQyLjA4NmExLjIxNSwxLjIxNSwwLDAsMS0uNTEzLS4xNzFBMTUuNzY2LDE1Ljc2NiwwLDAsMSwxOS45LDIzLjAxaDBjLS4wODYtLjE3MS0uMjU3LS4yNTctLjM0Mi0uMzQyLS4yNTctLjI1Ny0uNDI4LS41MTMtLjY4NC0uNzctLjA4Ni0uMDg2LS4xNzEtLjA4Ni0uMjU3LS4xNzFsLS4wODYtLjA4NmgwYTIuMDQzLDIuMDQzLDAsMCwwLTEuMi0uNDI4LDEuMjk0LDEuMjk0LDAsMCwwLTEuMi42LDEuODM5LDEuODM5LDAsMCwwLC4zNDIsMi4zOTRoMGEuMDg0LjA4NCwwLDAsMSwuMDg2LjA4NnMuMTcxLjE3MS4yNTcuMTcxYTkuMzI3LDkuMzI3LDAsMCwwLC45NDEuNTEzbC41MTMuMjU3aDBhMTIuMTM5LDEyLjEzOSwwLDAsMSwyLjM5NCwxLjcxLjg2Mi44NjIsMCwwLDEsLjI1Ny43N3YtLjA4NmgwbC41MTMuNTEzYy0uMDg2LjE3MS0uMTcxLjI1Ny0uMjU3LjQyOEEyMC4zLDIwLjMsMCwwLDAsMTguMTg4LDQyLjU5bC0uNjg0LjE3MWgwYS4wODQuMDg0LDAsMCwxLS4wODYuMDg2LDEuMzQ3LDEuMzQ3LDAsMCwxLS42LjYsMTUuODgyLDE1Ljg4MiwwLDAsMS0yLjkwNy41MTNoMGExLjA4NCwxLjA4NCwwLDAsMC0uNTEzLjA4NmMtLjM0MiwwLS42ODQuMDg2LTEuMDI2LjA4Ni0uMDg2LDAtLjE3MS4wODYtLjM0Mi4wODYtLjA4NiwwLS4wODYsMC0uMTcxLjA4NmgwYTEuNjY5LDEuNjY5LDAsMCwwLTEuMzY4LDEuOTY3aDBhMS41ODcsMS41ODcsMCwwLDAsMS43MSwxLjIuNzcxLjc3MSwwLDAsMCwuNDI4LS4wODZoMGMuMDg2LDAsLjA4NiwwLC4wODYtLjA4NnMuMjU3LDAsLjM0MiwwYy4zNDItLjA4Ni42ODQtLjI1Ny45NDEtLjM0MmExLjIxNSwxLjIxNSwwLDAsMSwuNTEzLS4xNzFIMTQuNmExNS4yNDIsMTUuMjQyLDAsMCwxLDIuODIyLS43N0gxNy41YS45NzEuOTcxLDAsMCwxLC42ODQuMjU3LjA4NC4wODQsMCwwLDEsLjA4Ni4wODZoMGwuNzctLjA4NmEyMC42MzgsMjAuNjM4LDAsMCwwLDcuMDExLDEwLDEzLjU2MSwxMy41NjEsMCwwLDAsMi4zMDksMS41MzlsLS40MjguNmgwYS4wODQuMDg0LDAsMCwwLC4wODYuMDg1LDEuMDEyLDEuMDEyLDAsMCwxLC4wODYuODU1LDE0LjAzLDE0LjAzLDAsMCwxLTEuMzY4LDIuNDh2LjA4NWExLjUsMS41LDAsMCwxLS4zNDIuNDI4Yy0uMTcxLjE3MS0uMzQyLjUxMy0uNi44NTUtLjA4Ni4wODYtLjA4Ni4xNzEtLjE3MS4yNTdhLjA4NC4wODQsMCwwLDEtLjA4Ni4wODVoMGExLjc2LDEuNzYsMCwwLDAsLjY4NCwyLjMwOSwxLjU4NSwxLjU4NSwwLDAsMCwuNi4xNzEsMS45MTYsMS45MTYsMCwwLDAsMS42MjUtMS4wMjZoMGEuMDg0LjA4NCwwLDAsMSwuMDg2LS4wODZjMC0uMDg2LjA4Ni0uMTcxLjE3MS0uMjU3LjA4Ni0uMzQyLjI1Ny0uNi4zNDItLjk0MWwuMTcxLS41MTNoMGExNC40NzEsMTQuNDcxLDAsMCwxLDEuMTEyLTIuNjUxLDEuMzMsMS4zMywwLDAsMSwuNjg0LS41MTNjLjA4NiwwLC4wODYsMCwuMDg2LS4wODZoMGwuMzQyLS42ODRhMjAuMTI3LDIwLjEyNywwLDAsMCw3LjQzOSwxLjM2OCwxNy4xMjEsMTcuMTIxLDAsMCwwLDQuNjE3LS42LDI1LjU0OCwyNS41NDgsMCwwLDAsMi43MzYtLjc3bC4zNDIuNmgwYy4wODYsMCwuMDg2LDAsLjA4Ni4wODVhMS4zMywxLjMzLDAsMCwxLC42ODQuNTEzLDE0LjQ3MSwxNC40NzEsMCwwLDEsMS4xMTIsMi42NTFWNjMuMmwuMTcxLjUxM2EzLjA2MywzLjA2MywwLDAsMCwuMzQyLjk0MWMuMDg2LjA4Ni4wODYuMTcxLjE3MS4yNTdhLjA4NC4wODQsMCwwLDAsLjA4Ni4wODZoMGExLjkxNiwxLjkxNiwwLDAsMCwxLjYyNSwxLjAyNiwyLjAxMiwyLjAxMiwwLDAsMCwuNjg0LS4xNzEsMS40MzEsMS40MzEsMCwwLDAsLjc3LS45NDEsMi4yLDIuMiwwLDAsMC0uMDg2LTEuMjgzaDBhLjA4NC4wODQsMCwwLDAtLjA4NS0uMDg2YzAtLjA4Ni0uMDg2LS4xNzEtLjE3MS0uMjU3YTMuMDcxLDMuMDcxLDAsMCwwLS42LS44NTVBMS41LDEuNSwwLDAsMCw1MS4wMjIsNjJ2LS4xNzFhMTAuMSwxMC4xLDAsMCwxLTEuMzY4LTIuNDgsMS4wMTIsMS4wMTIsMCwwLDEsLjA4Ni0uODU1LjA4NC4wODQsMCwwLDEsLjA4NS0uMDg2aDBsLS4yNTctLjY4NEEyMS4xMzUsMjEuMTM1LDAsMCwwLDU4LjgsNDYuMWwuNjg0LjA4NmgwYS4wODQuMDg0LDAsMCwwLC4wODYtLjA4Ni45NzEuOTcxLDAsMCwxLC42ODQtLjI1N2guMDg2YTE0LjM3NSwxNC4zNzUsMCwwLDEsMi43MzYuNzdoLjA4NmExLjIxNSwxLjIxNSwwLDAsMCwuNTEzLjE3MSw0LjU4Myw0LjU4MywwLDAsMCwuOTQxLjQyOGMuMDg2LDAsLjE3MS4wODYuMzQyLjA4Ni4wODYsMCwuMDg2LDAsLjE3MS4wODZoMGEuNzcxLjc3MSwwLDAsMCwuNDI4LjA4NiwxLjg2LDEuODYsMCwwLDAsMS43MS0xLjIsMi4wMTYsMi4wMTYsMCwwLDAtMS41MzktMS44Wk00MS4wMTgsNDEuODIxbC0yLjMwOSwxLjExMkwzNi40LDQxLjgyMWwtLjYtMi40OCwxLjYyNS0yLjA1MmgyLjU2NWwxLjYyNSwyLjA1MlptMTMuOTM3LTUuNTU4QTE2LjM3LDE2LjM3LDAsMCwxLDU1LjMsNDEuNjVsLTguMTIzLTIuMzA5aDBhMS40LDEuNCwwLDAsMS0xLjAyNi0xLjcxLDEuMzc4LDEuMzc4LDAsMCwxLC4zNDItLjZMNTIuOSwzMS4yMThhMTcuNCwxNy40LDAsMCwxLDIuMDUyLDUuMDQ1Wm0tNC42MTctOC4yMDgtNy4wMTEsNC45NTlhMS40NTQsMS40NTQsMCwwLDEtMS44ODEtLjM0Mi43NzYuNzc2LDAsMCwxLS4yNTctLjZsLS41MTMtOC42MzZhMTYuMDkxLDE2LjA5MSwwLDAsMSw5LjY2Miw0LjYxN1pNMzQuODYxLDIzLjY5NGwxLjcxLS4zNDItLjQyOCw4LjU1aDBBMS40MjUsMS40MjUsMCwwLDEsMzQuNjksMzMuMjdhMi4wMTIsMi4wMTIsMCwwLDEtLjY4NC0uMTcxbC03LjEtNS4wNDVhMTYuOTc5LDE2Ljk3OSwwLDAsMSw3Ljk1Mi00LjM2MVpNMjQuNDMsMzEuMjE4bDYuMzI3LDUuNjQzaDBhMS4zNzQsMS4zNzQsMCwwLDEsLjE3MSwxLjk2Ny45NjIuOTYyLDAsMCwxLS42ODQuNDI4TDIxLjk1LDQxLjY1YTE4LDE4LDAsMCwxLDIuNDgtMTAuNDMyWm0tMS40NTQsMTQuNDUsOC40NjUtMS40NTRhMS40LDEuNCwwLDAsMSwxLjQ1NCwxLjExMiwxLjAxMiwxLjAxMiwwLDAsMS0uMDg2Ljg1NWgwTDI5LjU2LDU0LjA0OGExNi44MiwxNi44MiwwLDAsMS02LjU4NC04LjM3OVptMTkuNDA5LDEwLjZhMTcuMywxNy4zLDAsMCwxLTMuNjc3LjQyOCwxOS4xNjQsMTkuMTY0LDAsMCwxLTUuMzg3LS44NTVsNC4xOS03LjYxYTEuMzI2LDEuMzI2LDAsMCwxLDEuNzEtLjM0Miw0LjI4Miw0LjI4MiwwLDAsMSwuNjg0LjZoMGw0LjEsNy40MzlBMTMuODkzLDEzLjg5MywwLDAsMCw0Mi4zODYsNTYuMjcxWm0xMC40MzItNy40MzlhMTYuMzI3LDE2LjMyNywwLDAsMS01LjEzLDUuMTNsLTMuMzM1LTguMDM3YTEuMzksMS4zOSwwLDAsMSwuNzctMS42MjUsMi41LDIuNSwwLDAsMSwuNzctLjE3MWw4LjU1LDEuNDU0QTEyLjgzOSwxMi44MzksMCwwLDEsNTIuODE3LDQ4LjgzMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjUxNyAtMS41NDgpIi8+PC9zdmc+"
          alt="Kubernetes"
        />Self-Host on Kubernetes
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
        <span aria-label="unknown" class="icon">?</span>
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
      <a href="TODO:" class="btn-primary">Try Now</a>
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
