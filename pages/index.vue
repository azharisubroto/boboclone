<template>
  <main>
    <section>
      <v-row>
        <template v-for="(item, i) in cats">
          <v-col :key="`category-${i}`" :md="isFull(i) ? '12' : '6'">
            <CategoryItem
              :title="item.category.name"
              :slug="'/category/' + item.category.slug"
              :full="isFull(i)"
              :img="$helpers.cdn_img(item.banner_image.url)"
            />
          </v-col>
        </template>
      </v-row>
    </section>

    <!-- Promotion -->
    <Promotion />

    <!-- Know more -->
    <KnowMore />
  </main>
</template>

<script>
import CategoryItem from '@/components/CategoryItem'
import Promotion from '@/components/Promotion'
import KnowMore from '@/components/KnowMore'

export default {
  name: 'Home',
  components: {
    CategoryItem,
    Promotion,
    KnowMore
  },
  data() {
    return {
      categories: [
        {
          name: 'Online Exclusive',
          slug: 'kid',
          full: true,
          img: '/img/hero-1.jpg'
        },
        {
          name: 'T-Shirts',
          slug: 'kid/online-exclusive',
          full: false,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/685x/https://cdn.dragdropr.com/df8952fa-4673-4c82-b7cc-02928b3df6b9/'
        },
        {
          name: 'Trousers',
          slug: 'truosers',
          full: false,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/685x/https://cdn.dragdropr.com/cfbb8f25-80ea-43c1-b737-25a1d7f3a5c2/'
        },
        {
          name: 'Baby Collections',
          slug: 'baby-collections',
          full: true,
          img: 'https://cdn.dragdropr.com/d79ede23-82da-4137-9f7d-915cd92a3d3f/'
        },
        {
          name: 'Baby sets',
          slug: 'baby-packs',
          full: true,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/1419x/https://cdn.dragdropr.com/e1dcd85c-5f5e-4506-8f6d-ba95c0b45520/'
        },
        {
          name: 'New Arrivals',
          slug: 'new-arrivals/woman',
          full: true,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/1419x/https://cdn.dragdropr.com/0092394c-9045-40ce-bf78-63b7b183961e/'
        },
        {
          name: 'Dresses',
          slug: 'woman/dresses',
          full: false,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/685x/https://cdn.dragdropr.com/7868819d-647d-4615-bf27-acb22c6be27d/'
        },
        {
          name: 'T-shirts',
          slug: 'woman/t-shirts',
          full: false,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/685x/https://cdn.dragdropr.com/51634382-0589-4329-9f50-e058e721c065/'
        },
        {
          name: 'Kids with Sign',
          slug: 'kidswithsign',
          full: true,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/1419x/https://cdn.dragdropr.com/cbe1cec5-d305-41a3-b685-083a2a743c18/'
        }
      ],
      cats: [],
      error: null,
      img_placeholder: '/img/hero-1.jpg'
    }
  },
  head() {
    return {
      title: 'Sustainable Kids, Baby & Womens clothes & accesories'
    }
  },
  mounted() {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories() {
      try {
        const res = await this.$strapi.find('home-page')
        this.cats = res.banners_list
      } catch (error) {
        // console.log(error)
      }
    },
    isFull(i) {
      if (i === 0 || i === 3 || i === 4 || i === 5 || i === 8) return true
      return false
    }
  }
}
</script>
