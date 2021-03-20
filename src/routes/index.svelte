<script>
  import { features } from "../contents/index";

  import Features from "../components/features.svelte";
  import ChooseProject from "../components/index/choose-project.svelte";
  import Hero from "../components/index/hero.svelte";
  import SectionScrennshot from "../components/index/section-screenshot.svelte";
  import Testimonials from "../components/index/testimonials.svelte";
</script>

<Hero />
<ChooseProject />
<Features {features} />
<SectionScrennshot />
<Testimonials />
