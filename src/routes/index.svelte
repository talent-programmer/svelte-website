<script>
  import { features } from "../contents/index";

  import Features from "../components/features.svelte";
  import ChooseProject from "../components/index/choose-project.svelte";
  import Hero from "../components/index/hero.svelte";
  import SectionScreenshot from "../components/index/section-screenshot.svelte";
  import Testimonials from "../components/index/testimonials.svelte";
  import GetStarted from "../components/index/get-started/index.svelte";
</script>

<Hero />
<ChooseProject />
<Features {features} />
<SectionScreenshot />
<Testimonials />
<GetStarted />
