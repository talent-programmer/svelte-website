<script lang="ts">
  import type { EducationFeature } from "../../types/education.type";

  export let feature: EducationFeature;
</script>

<div>
  <h3>{feature.title}</h3>
  <p>{@html feature.description}</p>
</div>
