<script>
  import ColorSwatch from "../components/base/color-swatch.svelte";
  import H1 from "../components/base/h1.svelte";
  import Spacer from "../components/base/spacer.svelte";
</script>

<H1>Ready When You Are</H1>

<p>Read <a href="/blog/test">THE blog post</a></p>

<div class="space-y-2">
  <div class="flex space-x-2">
    <ColorSwatch clazz="bg-black"/>
    <ColorSwatch clazz="bg-dark-grey"/>
    <ColorSwatch clazz="bg-light-grey"/>
  </div>
  
  <div class="flex space-x-2">
    <ColorSwatch clazz="bg-gitpod-kumquat-gradient"/>
    <ColorSwatch clazz="bg-orange-900"/>
    <ColorSwatch clazz="bg-orange-800"/>
    <ColorSwatch clazz="bg-orange-700"/>
  </div>
  
  <div class="flex space-x-2">
    <ColorSwatch clazz="bg-pink-900"/>
  </div>
  
  <div class="flex space-x-2">
    <ColorSwatch clazz="bg-gray-400"/>
    <ColorSwatch clazz="bg-gray-300"/>
    <ColorSwatch clazz="bg-gray-200"/>
    <ColorSwatch clazz="bg-gray-100"/>
  </div>
</div>

<div class="flex flex-col items-center space-y-2">
  <Spacer h="h-xx-large" w="w-xx-large"/>
  <Spacer h="h-x-large" w="w-x-large"/>
  <Spacer h="h-large" w="w-large"/>
  <Spacer h="h-medium" w="w-medium"/>
  <Spacer h="h-small" w="w-small"/>
  <Spacer h="h-x-small" w="w-x-small"/>
  <Spacer h="h-xx-small" w="w-xx-small"/>
  <Spacer h="h-micro" w="w-micro"/>
  <Spacer h="h-macro" w="w-macro"/>
</div>