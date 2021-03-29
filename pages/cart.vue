<template>
  <v-container fluid>
    <v-row>
      <v-col lg="8">
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
                  <v-col lg="1">
                    <v-img :src="$helpers.cdn_img(item.image, 200)" :aspect-ratio="1 / 1"></v-img>
                  </v-col>
                  <v-col lg="11">
                    <v-row no-gutters align="center">
                      <!-- Product detail -->
                      <v-col lg="4">
                        <p class="text-capitalize">
                          {{ item.title.replaceAll('-', ' ') }}
                        </p>
                        <p class="fs-14 mb-3">
                          Size: <strong>{{ item.size }}</strong>
                        </p>
                      </v-col>

                      <!-- Harga per item -->
                      <v-col lg="2">
                        <div class="text-right">
                          {{ Number(item.price).toLocaleString() }}
                          <br />
                          <small>harga per item</small>
                        </div>
                      </v-col>

                      <!-- TambaH KURANG ITEM -->
                      <v-col lg="3">
                        <v-row no-gutters align="center" justify="end">
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

                      <!-- Harga dikali jumlah -->
                      <v-col lg="2">
                        <div class="text-right">Rp. {{ Number(item.price * item.amount).toLocaleString() }}</div>
                      </v-col>

                      <!-- Delete -->
                      <v-col lg="1">
                        <div class="text-right">
                          <v-btn icon @click="removeCart(item)">
                            <v-icon>mdi-delete-outline</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>
            </template>
          </div>
        </div>
      </v-col>

      <!-- DETAILS -->
      <v-col lg="4">
        <!-- TOTAL -->
        <div class="rincian mt-0">
          <v-card color="#f7f7f7" tile elevation="0" class="pa-3 mb-3">
            <v-row no-gutters justify-lg="space-between">
              <v-col> Total </v-col>
              <v-col>
                <div class="text-right">Rp {{ Number(total).toLocaleString() }},-</div>
              </v-col>
            </v-row>
          </v-card>

          <v-btn to="/checkout" x-large dark color="#000" class="mb-4" block> Checkout </v-btn>
          <v-btn to="/" x-large light outlined class="mb-4" block> Continue Shopping </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
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

<style lang="scss">
.rincian {
  background: #fff;
  position: sticky;
  top: 0;
}
</style>
