<script>
  import menuState from "./state";
</script>

<button on:click={() => ($menuState = !$menuState)}>
  <svg
    width="50"
    height="26"
    viewBox="0 0 50 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <rect x="1" width="48" height="24" rx="12" fill="#12100C" />
      <rect x="17" y="8" width="16" height="2" rx="1" fill="#F4F2F1" />
      <rect x="17" y="14" width="16" height="2" rx="1" fill="#F3F1F0" />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="50"
        height="26"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="0.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</button>
