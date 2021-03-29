<template>
  <div style="padding-bottom: 158px">
    <div class="mt-10">
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
              <v-img :src="$helpers.cdn_img(item.image, 200)" :aspect-ratio="1 / 1"></v-img>
            </v-col>
            <v-col lg="9">
              <v-row no-gutters>
                <v-col lg="10">
                  <p class="text-capitalize">
                    {{ item.title.replaceAll('-', ' ') }}
                  </p>
                  <p class="fs-14 mb-3">
                    Size: <strong>{{ item.size }}</strong>
                  </p>
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
                  <v-row no-gutters align="center" justify="start">
                    <v-col sm="2">
                      <v-btn icon small @click="$store.commit('carts/decrease', item.id)">
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col sm="3" class="text-center">
                      <v-text-field
                        :value="item.amount"
                        hide-details
                        dense
                        background-color="#fff"
                        flat
                        solo
                        class="text-center"
                        @blur="setamount(item.id, $event.target.value)"
                      ></v-text-field>
                    </v-col>

                    <v-col sm="2" class="text-left">
                      <v-btn icon small @click="$store.commit('carts/increase', item.id)">
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col lg="6">
                  <div class="text-right">Rp. {{ Number(item.price * item.amount).toLocaleString() }}</div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </template>
    </div>

    <!-- TOTAL -->
    <div class="rincian">
      <v-card color="#f7f7f7" tile elevation="0" class="pa-3 mb-3">
        <v-row no-gutters justify-lg="space-between">
          <v-col> Total </v-col>
          <v-col>
            <div class="text-right">Rp {{ Number(total).toLocaleString() }},-</div>
          </v-col>
        </v-row>
      </v-card>

      <v-btn to="/checkout" x-large dark color="#000" class="mb-4" block @click="$store.commit('ui/sidebar', false)">
        Checkout
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarCart',
  computed: {
    carts() {
      return this.$store.state.carts.list
    },
    total() {
      const carts = this.carts
      let total
      total = 0
      if (carts && carts.length > 0) {
        for (let i = 0; i < carts.length; i++) {
          const el = carts[i]
          total = total + parseInt(el.amount * el.price)
        }
      }

      return total
    }
  },
  methods: {
    removeCart(cart) {
      this.$store.commit('carts/remove', cart)
    },
    setamount(id, e) {
      this.$store.commit('carts/setamount', {
        id,
        amount: parseInt(e)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.rincian {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: #fff;
}
</style>
