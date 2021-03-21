<template>
  <main>
    <CategoryPage :breadcrumbs="breadcrumbs" />

    <pre>{{ $route.params }}</pre>
  </main>
</template>

<script>
import CategoryPage from '@/components/CategoryPage'

export default {
  name: 'CategoryIndex',
  components: {
    CategoryPage
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: this.$route.params.category.replaceAll('-', ' '),
          disabled: false,
          href: `/category/${this.$route.params.category}`
        },
        {
          text: this.$route.params.slug.replaceAll('-', ' '),
          disabled: true,
          href: `/category/${this.$route.params.category}/${this.$route.params.slug}`
        }
      ]
    }
  },
  head() {
    return {
      title: `${this.$route.params.category} Collection`
    }
  }
}
</script>
