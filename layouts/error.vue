<template>
  <main :class="$options.name">
    <article>
      <h1>Oops</h1>
    </article>
  </main>
</template>
<script>
export default {
  name: "Error",
  head() {
    return {
      title: "Oops • TheseKidsRead",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The page you’re looking for is unavailable",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "The page you’re looking for is unavailable",
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: "The page you’re looking for is unavailable",
        },
      ],
    };
  },
};
</script>
