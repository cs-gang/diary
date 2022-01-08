<script>
  // @ts-nocheck
  import '../tailwind.css';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,200;0,400;1,200&display=swap"
    rel="stylesheet"
  />
  <meta property="og:title" content="Diary" />
  <meta property="og:description" content="Write about your day" />
</svelte:head>

<div class="h-screen bg-primary-600">
  <slot />
</div>
