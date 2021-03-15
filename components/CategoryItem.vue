<template>
  <v-card :to="`/${slug}`" tile elevation="0">
    <v-img :src="img" :aspect-ratio="full == true ? 2560 / 1280 : 1 / 1" :contain="full == true ? true : false">
      <template #default>
        <v-row class="fill-height ma-0" :align="full == true ? 'end' : 'center'" justify="center">
          <div :class="[full == true ? 'pb-md-10 mb-md-10' : '']">
            <v-btn x-large class="shopbtn mb-10">SHOP {{ title }}</v-btn>
          </div>
        </v-row>
      </template>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
    full: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.shopbtn:not(.v-btn--icon) {
  &:hover {
    &:before {
      background-color: #333 !important;
      opacity: 1;
    }
    border-color: #333;
    color: #fff !important;
  }
}
</style>
