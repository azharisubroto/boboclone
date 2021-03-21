<template>
  <header>
    <v-container fluid class="topline">
      <v-row no-gutters>
        <v-col md="12">
          <div class="text-center fs-12">FREE SHIPPING OVER 150 EUR</div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="mainheader">
      <v-row justify-md="space-between" align-md="center">
        <v-col lg="4">
          <v-select :items="items" label="Bahasa" dense :hide-details="true" style="max-width: 140px"></v-select>
        </v-col>
        <v-col lg="4">
          <div class="text-center">
            <Logo />
          </div>
        </v-col>
        <v-col lg="4">
          <v-row justify-lg="end" align-md="center">
            <v-col md="8">
              <v-text-field
                prepend-icon="mdi-magnify"
                label="Search"
                placeholder="Search"
                background-color="#f5f5f5"
                hide-details
                flat
                solo
              ></v-text-field>
            </v-col>
            <v-col md="3">
              <div class="d-flex justify-content-end text-center fs-12">
                <div>
                  <v-btn icon>
                    <v-icon>mdi-account-outline</v-icon>
                  </v-btn>
                  <div class="mt-0">Login</div>
                </div>
                <div>
                  <v-btn icon @click="$store.commit('ui/sidebar', true)">
                    <v-icon>mdi-shopping-outline</v-icon>
                  </v-btn>
                  <div class="mt-0">Bag</div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12">
          <Menu />
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script>
import Menu from '@/components/Menu'
import Logo from '@/components/Logo'

export default {
  name: 'Header',
  components: {
    Menu,
    Logo
  },
  data() {
    return {
      items: ['Bahasa Indonesia', 'English']
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 300;
}
.topline {
  border-bottom: 1px solid #000;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
}
.mainheader {
  padding-bottom: 0;
}
</style>
