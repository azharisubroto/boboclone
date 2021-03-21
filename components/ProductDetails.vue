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
          <v-btn dark block depressed x-large color="#000" @click="addToCart()"> Add to Cart </v-btn>
        </v-col>
        <v-col md="2">
          <v-btn block outlined x-large color="#000"> <v-icon>mdi-star-outline</v-icon> </v-btn>
        </v-col>
      </v-row>
    </div>

    <!-- Add to Cart -->
    <v-navigation-drawer v-model="drawer" style="z-index: 1000" class="cart-drawer" fixed right width="506" temporary>
      <div class="px-5 py-4" style="height: 100%">
        <div class="text-right">
          <v-btn icon @click="drawer = !drawer">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <SidebarCart :items="cartitems" />
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import SidebarCart from '@/components/SidebarCart'
import { mapMutations } from 'vuex'

export default {
  name: 'ProductDetails',
  components: {
    SidebarCart
  },
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
      this.drawer = true
      this.$store.commit('carts/add', {
        title: this.$route.params.slug,
        price: 250000
      })
    },
    ...mapMutations({
      toggle: 'carts/toggle'
    })
  }
}
</script>
