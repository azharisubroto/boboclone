<template>
  <div style="height: 100%">
    <div class="mt-10" style="height: 70%">
      <template v-if="carts && carts.length > 0">
        <v-card
          v-for="item in carts"
          :key="item.title"
          style="border-bottom: 1px solid #d1d1d1"
          class="my-3"
          tile
          elevation="0"
        >
          <v-row justify-md="space-between">
            <v-col lg="3">
              <v-img
                src="https://www.bobochoses.com/media/catalog/product/cache/3ce900a4cc519fd233409a28b2b471d6/1/2/121ac149_1.jpg"
                :aspect-ratio="1 / 1"
              ></v-img>
            </v-col>
            <v-col lg="9">
              <v-row no-gutters>
                <v-col lg="10">
                  <p class="text-capitalize">
                    {{ item.title.replaceAll('-', ' ') }}
                  </p>
                  <p class="fs-14 mb-3">Size: 2/3Y</p>
                </v-col>
                <v-col lg="2">
                  <div class="text-right">
                    <v-btn icon @click="removeCart(item)">
                      <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col lg="6">
                  <v-btn icon small>
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <v-btn icon>{{ item.amount }}</v-btn>
                  <v-btn icon small>
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-col>

                <v-col lg="6">
                  <div class="text-right">Rp. {{ Number(item.price).toLocaleString() }}</div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </template>
    </div>

    <div class="rincian">
      <v-card color="#f7f7f7" tile elevation="0" class="pa-3 mb-3">
        <v-row no-gutters justify-lg="space-between">
          <v-col> Total </v-col>
          <v-col>
            <div class="text-right">Rp {{ Number(carts.length * 250000).toLocaleString() }}</div>
          </v-col>
        </v-row>
      </v-card>

      <v-btn x-large dark color="#000" class="mb-4" block> Checkout </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarCart',
  computed: {
    carts() {
      return this.$store.state.carts.list
    }
  },
  methods: {
    removeCart(cart) {
      this.$store.commit('carts/remove', cart)
    }
  }
}
</script>

<style lang="scss">
.rincian {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: #fff;
}
</style>
