<template>
  <div>
    <!-- Title -->
    <h1 class="fs-16 mb-5">{{ data.title }}</h1>

    <!-- Price -->
    <p class="fs-18 mb-5">Rp {{ Number(data.price).toLocaleString() }}</p>

    <!-- Sizes -->
    <div class="mb-5">
      <div><strong class="fs-14">Size:</strong></div>

      <div class="d-flex mt-2 size-variants">
        <div v-if="data.itemsizes.length > 0">
          <v-btn
            v-for="(size, i) in data.itemsizes"
            :key="`size-${i}-${size.size_short_name}`"
            :outlined="chosensize !== size.size_short_name"
            rounded
            depressed
            dark
            color="#9bcfbd"
            min-width="42"
            max-width="42"
            min-height="42"
            max-height="42"
            class="mr-2"
            @click="chosensize = size.size_short_name"
          >
            <span class="fs-12">{{ size.size_short_name }}</span>
          </v-btn>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="mb-5">
      <v-row no-gutters>
        <v-col md="9" class="pr-1">
          <v-btn
            :disabled="chosensize == ''"
            :dark="chosensize != ''"
            :color="chosensize != '' ? '#000' : ''"
            block
            depressed
            x-large
            @click="addToCart()"
          >
            Add to Cart
          </v-btn>
        </v-col>
        <v-col md="2">
          <v-btn block outlined x-large color="#000"> <v-icon>mdi-star-outline</v-icon> </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      drawer: false,
      cartitems: [],
      chosensize: ''
    }
  },
  methods: {
    addToCart() {
      const data = this.data
      const vm = this
      this.$store.commit('ui/sidebar', true)
      this.$store.commit('carts/add', {
        id: data.id,
        title: data.title,
        slug: data.slug,
        price: data.price,
        image: data.image[0].formats.thumbnail.url,
        amount: 1,
        size: vm.chosensize
      })
    }
  }
}
</script>
