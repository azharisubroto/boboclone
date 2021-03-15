<template>
  <div class="product-item">
    <nuxt-link :to="link">
      <v-card tile elevation="0">
        <v-img cover :src="img1" :aspect-ratio="3.5 / 4"> </v-img>
        <div class="peek">
          <v-img cover :src="img2" :aspect-ratio="3.5 / 4"> </v-img>
        </div>

        <div class="variants">
          <div>2/3Y</div>
          <div>4/5Y</div>
          <div>6/7Y</div>
          <div>8/9Y</div>
          <div>10/11Y</div>
        </div>
      </v-card>
    </nuxt-link>

    <div class="text-center mt-3">
      <h2 class="fs-14">
        <nuxt-link :to="link"> {{ name }} </nuxt-link>
      </h2>
      <p class="price fs-16">Rp {{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    },
    img1: {
      type: String,
      default: ''
    },
    img2: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    }
  }
}
</script>
