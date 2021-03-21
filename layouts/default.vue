<template>
  <v-app dark>
    <!-- Header -->
    <Header />

    <!-- Content -->
    <v-main>
      <nuxt />
    </v-main>

    <!-- Footer -->
    <Footer />

    <!-- Add to Cart -->
    <v-navigation-drawer
      v-model="$store.state.ui.cartsidebar"
      style="z-index: 1000"
      class="cart-drawer"
      fixed
      right
      width="506"
      :stateless="true"
    >
      <div class="px-5 py-4" style="height: 100%">
        <div class="text-right">
          <v-btn icon @click="$store.commit('ui/sidebar', false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <SidebarCart />
      </div>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  },
  data() {
    return {
      clipped: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
