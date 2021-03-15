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
          <template v-for="index in 16">
            <v-col :key="`product-${index}`" lg="3">
              <ProductCard
                :link="`/${$route.params.category}/product-item-${index}`"
                :price="250000"
                :name="`Product item #${index}`"
                img1="https://www.bobochoses.com/media/catalog/product/cache/74597d227604c47a8b641ae794922d30/1/2/121ac149_1.jpg"
                img2="https://www.bobochoses.com/media/catalog/product/1/2/121ac149_6.jpg"
              />
            </v-col>
          </template>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard'

export default {
  name: 'CategoryIndex',
  components: {
    ProductCard
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
          text: this.$route.params.category,
          disabled: true,
          href: `/${this.$route.params.category}`
        }
      ],
      sortby: 'Popularity'
    }
  },
  head() {
    return {
      title: `${this.$route.params.category} Collection`
    }
  }
}
</script>

<style lang="scss">
.product-item {
  position: relative;

  a {
    text-decoration: none;
  }

  .peek {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: auto;
    height: auto;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s;
    z-index: 10;
  }

  &:hover {
    .peek {
      opacity: 1;
      visibility: visible;
    }
  }

  .v-card {
    overflow: hidden;
  }

  .variants {
    position: absolute;
    padding: 5px;
    background: rgba(255, 255, 255, 0.7);
    color: #000;
    display: flex;
    text-align: center;
    align-items: center;
    height: 40px;
    justify-content: center;
    gap: 7px;
    font-size: 12px;
    width: 100%;
    bottom: 0;
    z-index: 11;
    transition: all 0.15s ease-in-out;
    transform: translateY(100%);
  }

  &:hover {
    .variants {
      transform: translateY(0);
    }
  }
}
</style>
