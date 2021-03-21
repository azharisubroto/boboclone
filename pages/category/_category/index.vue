<template>
  <main>
    <CategoryPage :breadcrumbs="breadcrumbs" :slug="$route.params.category" />
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
          disabled: true,
          href: `/${this.$route.params.category}`
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
