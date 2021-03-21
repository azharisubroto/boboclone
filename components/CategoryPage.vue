<template>
  <main>
    <section style="position: relative; z-index: 111">
      <v-container fluid class="text-capitalize">
        <v-row no-gutters align-lg="center" justify-lg="space-between">
          <v-col lg="6">
            <v-breadcrumbs class="px-0 py-0" :items="breadcrumbs" divider="|"></v-breadcrumbs>
          </v-col>

          <v-col lg="2">
            <v-select
              v-model="sortby"
              :items="['Popularity', 'Best Sellers', 'Most Viewed', 'Price - Low to High', 'Price - High to Low']"
              placeholder="Sort items"
              hide-details
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="pb-10">
      <v-container fluid>
        <v-row>
          <template v-if="loading">
            <v-col lg="12">
              <Loading />
            </v-col>
          </template>
          <template v-else>
            <!-- If theres more 0 items -->
            <template v-if="products.length > 0">
              <template v-for="(item, i) in products">
                <v-col :key="`product-${i}`" lg="3">
                  <ProductCard
                    :price="item.price"
                    :name="`${item.title}`"
                    :link="`/item/${item.slug}`"
                    :sizes="item.itemsizes ? item.itemsizes : []"
                    :img1="item.image[0] ? $helpers.cdn_img(item.image[0].formats.medium.url, 500) : ''"
                    :img2="item.image[1] ? $helpers.cdn_img(item.image[1].formats.medium.url, 500) : ''"
                  />
                </v-col>
              </template>
            </template>

            <!-- if no items -->
            <template v-else>
              <v-col lg="12">
                <NoItems />
              </v-col>
            </template>
          </template>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import Loading from '@/components/Loading'
import NoItems from '@/components/NoItems'

export default {
  name: 'CategoryIndex',
  components: {
    ProductCard,
    Loading,
    NoItems
  },
  props: {
    breadcrumbs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      loading: true,
      sortby: 'Popularity',
      products: []
    }
  },
  head() {
    return {
      title: `${this.$route.params.category} Collection`,
      products: []
    }
  },
  mounted() {
    const vm = this
    this.fetchItems().then(() => {
      vm.loading = false
    })
  },
  methods: {
    async fetchItems() {
      try {
        const res = await this.$strapi.find('products', {
          _sort: 'created_at:desc',
          'categories.slug': [this.$route.params.category]
        })
        this.products = res
      } catch {
        // console.log(error)
      }
    }
  }
}
</script>
