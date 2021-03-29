<template>
  <v-container class="py-10 mt-5" style="border-top: 1px solid #d1d1d1">
    <v-row>
      <v-col lg="8">
        <!-- DATA DASAR -->
        <v-row>
          <v-col lg="3" class="text-right">
            <h4 class="my-0">Shipping Address</h4>
          </v-col>

          <v-col lg="9">
            <v-row no-gutters>
              <v-col lg="12">
                <v-text-field v-model="name" outlined label="Name lengkap"></v-text-field>
              </v-col>
              <v-col lg="12">
                <v-text-field v-model="phone" outlined label="Nomor Handphone"></v-text-field>
              </v-col>

              <v-col lg="12">
                <v-textarea v-model="address" outlined label="Alamat" hint="Nama jalan, komplek, dll"></v-textarea>
              </v-col>

              <v-col lg="6" class="pr-5">
                <v-autocomplete
                  v-model="province"
                  :items="province_list"
                  item-text="province"
                  item-value="province"
                  outlined
                  label="Provinsi"
                  return-object
                  @change="getCities($event)"
                ></v-autocomplete>
              </v-col>

              <v-col lg="6" class="pl-5">
                <v-autocomplete
                  v-model="city"
                  name="citesss"
                  autocomplete="off"
                  :items="city_list"
                  outlined
                  label="Kota"
                  item-text="city_name"
                  item-value="city_name"
                  return-object
                  @change="cekOngkir($event)"
                ></v-autocomplete>
              </v-col>

              <v-col lg="6" class="pr-5">
                <v-text-field v-model="kecamatan" outlined label="Kecamatan"></v-text-field>
              </v-col>

              <v-col lg="6" class="pl-5">
                <v-text-field v-model="kelurahan" outlined label="Kelurahan"></v-text-field>
              </v-col>

              <v-col lg="6" class="pr-5">
                <v-text-field v-model="postcode" outlined label="Kode Pos"></v-text-field>
              </v-col>

              <v-col class="pl-5">
                <v-autocomplete
                  v-model="shipping"
                  name="citesss"
                  autocomplete="off"
                  :items="shipping_list"
                  outlined
                  label="Shipping (JNE)"
                  item-text="service"
                  item-value="cost.value"
                  return-object
                  @change="countOngkir($event)"
                ></v-autocomplete>
              </v-col>

              <v-col lg="12">
                <v-btn
                  :disabled="ongkir === 0"
                  x-large
                  :dark="ongkir !== 0"
                  color="#000"
                  class="mb-4"
                  block
                  @click="purchase()"
                >
                  {{ loading ? 'Purchasing...' : 'Place order' }}
                </v-btn>
              </v-col>

              <!-- <v-col lg="12">
                <pre>{{ $data }}</pre>
              </v-col> -->
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col lg="4" style="position: relative">
        <!-- TOTAL -->
        <div class="rincian mt-0">
          <v-card tile outlined class="py-3 px-4">
            <strong>Order Summary</strong>
            <hr class="my-3" />
            <template v-if="carts && carts.length > 0">
              <v-card
                v-for="item in carts"
                :key="item.title"
                style="border-bottom: 1px solid #d1d1d1"
                class="py-3"
                tile
                elevation="0"
              >
                <v-row justify-md="space-between">
                  <v-col lg="2">
                    <v-img :src="$helpers.cdn_img(item.image, 200)" :aspect-ratio="1 / 1"></v-img>
                  </v-col>
                  <v-col lg="10">
                    <v-row no-gutters>
                      <v-col lg="12">
                        <p class="text-capitalize mb-1">
                          {{ item.title.replaceAll('-', ' ') }}
                        </p>
                      </v-col>
                    </v-row>
                    <v-row no-gutters style="font-size: 12px">
                      <v-col lg="6">
                        Size: <strong>{{ item.size }}</strong>
                      </v-col>

                      <v-col lg="6">
                        <div class="text-right">{{ item.amount }} x {{ Number(item.price).toLocaleString() }}</div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>
            </template>

            <div class="d-flex justify-space-between mt-3 fs-14">
              <div>Ongkos Kirim</div>

              <div>Rp {{ ongkir && Number(ongkir.cost[0].value).toLocaleString() }}</div>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      address: '',
      phone: '',
      province: '',
      city: '',
      kecamatan: '',
      kelurahan: '',
      postcode: '',
      amount: '',
      shipping: '',
      payment_method: '',
      province_list: [],
      city_list: [],
      shipping_list: [],
      ongkir: 0,
      loading: false
    }
  },
  head() {
    return {
      title: `Checkout`
    }
  },
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
  mounted() {
    this.getProvince()
  },
  methods: {
    async getProvince() {
      try {
        const data = await this.$axios.$get(`/api/provinces`)
        this.province_list = data.rajaongkir.results
      } catch (error) {}
    },
    async getCities(prov) {
      try {
        const data = await this.$axios.$get(`/api/cities/${prov.province_id}`)
        this.city_list = data.rajaongkir.results
      } catch (error) {}
    },
    async cekOngkir(city) {
      try {
        const data = await this.$axios.$get(`/api/cekongkir/${city.city_id}`)
        this.shipping_list = data.rajaongkir.results[0].costs
      } catch (error) {}
    },
    countOngkir(ongkir) {
      this.ongkir = ongkir
    },
    async purchase() {
      this.loading = true
      const vm = this
      const body = {
        name: vm.name,
        address: vm.address,
        phone: vm.phone,
        province: vm.province,
        city: vm.city,
        kecamatan: vm.kecamatan,
        kelurahan: vm.kelurahan,
        postcode: vm.postcode,
        amount: vm.total + vm.ongkir.cost[0].value,
        cart: vm.carts,
        shipping: vm.shipping
      }

      // eslint-disable-next-line no-console
      console.log(body)

      const res = await this.$strapi.create('orders', body)

      if (res) {
        this.loading = false
        window.location.href = '/'
        this.$store.commit('carts/reset')
      }

      // eslint-disable-next-line no-console
    }
  }
}
</script>

<style lang="scss" scoped>
.rincian {
  position: sticky;
  top: 80px;
}
</style>
