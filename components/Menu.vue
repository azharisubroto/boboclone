<template>
  <v-toolbar height="40" elevation="0" class="mainmenu" :class="[isSticky ? stickyClass : '']">
    <!-- Logo if sticky -->
    <template v-if="isSticky">
      <div>
        <Logo />
      </div>
    </template>
    <v-spacer></v-spacer>

    <!-- Menu items -->
    <v-toolbar-items class="hidden-sm-and-down">
      <ul v-if="menus.length > 0" class="menu-nav">
        <template v-for="(menu, i) in menus">
          <li :key="`menu-${i}`">
            <v-btn color="transparent" tile depressed max-height="40"> {{ menu.title }} </v-btn>

            <!-- Mega menu -->
            <div class="mega-menu"></div>
          </li>
        </template>
      </ul>
    </v-toolbar-items>

    <!-- Spacer -->
    <v-spacer></v-spacer>

    <template v-if="isSticky">
      <div>
        <v-text-field
          v-if="sticky_search_visible"
          label="Search"
          placeholder="Search"
          background-color="#f5f5f5"
          hide-details
          flat
          solo
          dense
          autofocus
          class="field-search"
        ></v-text-field>
        <v-btn icon @click="sticky_search_visible = !sticky_search_visible">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-shopping-outline</v-icon>
        </v-btn>
      </div>
    </template>
  </v-toolbar>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'Menu',
  components: {
    Logo
  },
  data() {
    return {
      isSticky: false,
      stickyClass: 'is_sticky',
      sticky_search_visible: false,
      menus: [
        {
          title: 'New Arrivals',
          slug: 'new-arrivals',
          categories: [
            {
              title: 'Kid',
              slug: 'kid'
            },
            {
              title: 'Baby',
              slug: 'baby'
            },
            {
              title: 'Woman',
              slug: 'woman'
            },
            {
              title: 'Home',
              slug: 'home'
            }
          ]
        },
        {
          title: 'Kid',
          slug: 'kid'
        },
        {
          title: 'Baby',
          slug: 'baby'
        },
        {
          title: 'Woman',
          slug: 'woman'
        },
        {
          title: 'Man',
          slug: 'man'
        },
        {
          title: 'Accessories',
          slug: 'accessories'
        },
        {
          title: 'Fun',
          slug: 'fun'
        },
        {
          title: 'Collection',
          slug: 'collection',
          isNew: true
        },
        {
          title: 'Sale',
          slug: 'sale',
          isNew: true
        },
        {
          title: 'Magazine',
          slug: 'magazine'
        }
      ]
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      this.scrollPosition = window.scrollY
      if (this.scrollPosition >= 150) {
        this.isSticky = true
      } else {
        this.isSticky = false
        this.sticky_search_visible = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mainmenu {
  position: relative;
  z-index: 10;

  &.is_sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}

.menu-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  & > li {
    position: initial;

    .v-btn {
      text-transform: uppercase;
      &:before {
        content: none !important;
      }
      &:hover {
        color: #999;
        background: transparent;
        box-shadow: inset 0 -2px 0 0 #000;
      }
    }

    &:hover {
      .mega-menu {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}

.mega-menu {
  background: #fff;
  padding: 20px;
  border: 1px solid #d1d1d1;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  opacity: 0;
  visibility: hidden;
  z-index: -1;
  transition: all 0.2s ease;
}

.field-search {
  position: absolute;
  right: 0;
  transform: translateX(-80%);
  top: 0;
  bottom: 0;
  margin: auto 0;
}
</style>
