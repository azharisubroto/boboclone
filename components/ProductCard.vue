<template>
  <div class="product-item">
    <nuxt-link :to="link">
      <v-card tile elevation="0">
        <v-img cover :src="img1" :aspect-ratio="3.5 / 4"> </v-img>
        <div class="peek">
          <v-img cover :src="img2" :aspect-ratio="3.5 / 4"> </v-img>
        </div>

        <template v-if="sizes.length > 0">
          <div class="variants">
            <div v-for="item in sizes" :key="`size-${item.id}`">
              {{ item.size_short_name }}
            </div>
          </div>
        </template>
      </v-card>
    </nuxt-link>

    <div class="text-center mt-3">
      <h2 class="fs-14">
        <nuxt-link :to="link"> {{ name }} </nuxt-link>
      </h2>
      <p class="price fs-16">Rp {{ Number(price).toLocaleString() }}</p>
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
    },
    sizes: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
    z-index: 1;
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
