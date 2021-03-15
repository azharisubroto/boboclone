<template>
  <main>
    <section>
      <v-row>
        <template v-for="(item, i) in categories">
          <v-col :key="`category-${i}`" :md="item.full == true ? '12' : '6'">
            <CategoryItem :title="item.title" :sluc="item.slug" :full="item.full" :img="item.img" />
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
          title: 'Online Exclusive',
          slug: 'kid/online-exclusive',
          full: true,
          img: '/img/hero-1.jpg'
        },
        {
          title: 'T-Shirts',
          slug: 'kid/online-exclusive',
          full: false,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/685x/https://cdn.dragdropr.com/df8952fa-4673-4c82-b7cc-02928b3df6b9/'
        },
        {
          title: 'Trousers',
          slug: 'truosers',
          full: false,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/685x/https://cdn.dragdropr.com/cfbb8f25-80ea-43c1-b737-25a1d7f3a5c2/'
        },
        {
          title: 'Baby Collections',
          slug: 'baby-collections',
          full: true,
          img: 'https://cdn.dragdropr.com/d79ede23-82da-4137-9f7d-915cd92a3d3f/'
        },
        {
          title: 'Baby sets',
          slug: 'baby-packs',
          full: true,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/1419x/https://cdn.dragdropr.com/e1dcd85c-5f5e-4506-8f6d-ba95c0b45520/'
        },
        {
          title: 'New Arrivals',
          slug: 'new-arrivals/woman',
          full: true,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/1419x/https://cdn.dragdropr.com/0092394c-9045-40ce-bf78-63b7b183961e/'
        },
        {
          title: 'Dresses',
          slug: 'woman/dresses',
          full: false,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/685x/https://cdn.dragdropr.com/7868819d-647d-4615-bf27-acb22c6be27d/'
        },
        {
          title: 'T-shirts',
          slug: 'woman/t-shirts',
          full: false,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/685x/https://cdn.dragdropr.com/51634382-0589-4329-9f50-e058e721c065/'
        },
        {
          title: 'Kids with Sign',
          slug: 'kidswithsign',
          full: true,
          img:
            'https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/1419x/https://cdn.dragdropr.com/cbe1cec5-d305-41a3-b685-083a2a743c18/'
        }
      ]
    }
  },
  mounted() {}
}
</script>
