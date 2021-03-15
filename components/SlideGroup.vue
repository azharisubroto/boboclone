<template>
  <v-slide-group v-model="model" class="groupslide" show-arrow center-active>
    <v-slide-item v-for="item in items" :key="item">
      <v-card width="570" tile elevation="0">
        <v-img :src="item" :alt="item" :aspect-ratio="3.5 / 4" cover />
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  name: 'SlideGroup',
  // eslint-disable-next-line vue/require-prop-types
  props: ['items'],
  data() {
    return {
      model: null
    }
  }
}
</script>

<style lang="scss">
.groupslide.v-item-group {
  position: relative;

  .v-slide-group__prev,
  .v-slide-group__next {
    position: absolute;
    width: 40px;
    height: 40px;
    z-index: 11;
    font-size: 40px;

    .v-icon {
      font-size: 40px;
    }
  }

  .v-slide-group__prev {
    left: 0px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }

  .v-slide-group__next {
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
}
</style>
