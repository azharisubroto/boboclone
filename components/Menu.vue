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
    <div class="hidden-sm-and-down">
      <ul v-if="menus.length > 0" class="menu-nav">
        <template v-for="(menu, i) in menus">
          <li :key="`menu-${i}`">
            <v-btn :to="`/category/${menu.slug}`" color="transparent" tile depressed max-height="40">
              {{ menu.title }}
            </v-btn>

            <!-- Mega menu -->
            <template v-if="menu.categories || menu.campaigns || menu.more">
              <div class="mega-menu">
                <v-row>
                  <v-col lg="10">
                    <v-row>
                      <!-- CATEGORIES -->
                      <v-col lg="4">
                        <template v-if="menu.categories && menu.categories.length > 0">
                          <h5 class="fs-16 mb-3"><strong>Categories</strong></h5>

                          <ul>
                            <li
                              v-for="(category, j) in menu.categories"
                              :key="`cat-${j}-${category.title}`"
                              class="mb-2"
                            >
                              <nuxt-link
                                :to="`/category/${menu.slug}/${
                                  category.slug != '#'
                                    ? category.slug
                                    : category.title
                                        .replaceAll(' ', '-')
                                        .replaceAll('&', '')
                                        .replaceAll('--', '-')
                                        .toLowerCase()
                                }`"
                                >{{ category.title }}</nuxt-link
                              >
                            </li>
                          </ul>
                        </template>
                      </v-col>

                      <!-- CAMPAIGNS -->
                      <v-col lg="4">
                        <template v-if="menu.campaigns && menu.campaigns.length > 0">
                          <h5 class="fs-16 mb-3"><strong>Campaign</strong></h5>

                          <ul>
                            <li
                              v-for="(campaign, j) in menu.campaigns"
                              :key="`camp-${j}-${campaign.title}`"
                              class="mb-2"
                            >
                              <nuxt-link
                                :to="`/category/${menu.slug}/${
                                  campaign.slug != '#'
                                    ? campaign.slug
                                    : campaign.title
                                        .replaceAll(' ', '-')
                                        .replaceAll('&', '')
                                        .replaceAll('--', '-')
                                        .toLowerCase()
                                }`"
                                >{{ campaign.title }}</nuxt-link
                              >
                            </li>
                          </ul>
                        </template>
                      </v-col>

                      <!-- MORE -->
                      <v-col lg="4">
                        <template v-if="menu.more && menu.more.length > 0">
                          <h5 class="fs-16 mb-3"><strong>More</strong></h5>

                          <ul>
                            <li v-for="(more, j) in menu.more" :key="`more-${j}-${more.title}`" class="mb-2">
                              <nuxt-link
                                :to="`/category/${menu.slug}/${
                                  more.slug != '#'
                                    ? more.slug
                                    : more.title.replaceAll(' ', '-').replaceAll('&', 'and').toLowerCase()
                                }`"
                                >{{ more.title }}</nuxt-link
                              >
                            </li>
                          </ul>
                        </template>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col lg="2">
                    <div v-if="menu.thumbnail" class="text-center">
                      <v-card tile elevation="0">
                        <v-img :src="menu.thumbnail" :aspect-ratio="1"> </v-img>
                      </v-card>
                      <div class="mt-3">
                        {{ menu.title }}
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </template>
          </li>
        </template>
      </ul>
    </div>

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
        <v-btn icon @click="$store.commit('ui/sidebar', true)">
          <v-badge
            :content="$store.state.carts.list.length"
            :value="$store.state.carts.list.length"
            color="error"
            overlap
          >
            <v-icon>mdi-shopping-outline</v-icon>
          </v-badge>
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
          thumbnail: 'https://www.bobochoses.com/media/wysiwyg/Miniatura-categoria-drop2.jpg',
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
          slug: 'kid',
          thumbnail: 'https://www.bobochoses.com/media/wysiwyg/Miniatura-ss21-kid.jpg',
          categories: [
            {
              title: 'T-shirts',
              slug: 't-shirts'
            },
            {
              title: 'Sweatshirts',
              slug: 'sweatshirts'
            },
            {
              title: 'Trousers',
              slug: 'trousers'
            },
            {
              title: 'Skirts',
              slug: 'skirts'
            },
            {
              title: 'Dresses',
              slug: 'dresses'
            },
            {
              title: 'Jumpers & Cardigans',
              slug: 'jumpers-cardigans'
            },
            {
              title: 'Overall',
              slug: 'overall'
            },
            {
              title: 'Outerwear',
              slug: 'outerwear'
            },
            {
              title: 'Footwear',
              slug: 'footwear'
            },
            {
              title: 'Playsuit',
              slug: 'playsuit'
            },
            {
              title: 'Swimwear & Summer',
              slug: 'swimwear'
            },
            {
              title: 'Online Exclusive',
              slug: 'online-exclusive'
            }
          ],
          campaigns: [
            {
              title: 'SS21',
              slug: 'ss21'
            }
          ],
          more: [
            {
              title: 'Ten Years Young Exclusive',
              slug: '#'
            },
            {
              title: 'Bobo in the hood',
              slug: '#'
            },
            {
              title: 'Bobo x Smallable',
              slug: '#'
            },
            {
              title: 'Online Exclusive',
              slug: '#'
            }
          ]
        },
        {
          title: 'Baby',
          slug: 'baby',
          thumbnail: 'https://www.bobochoses.com/media/wysiwyg/Miniatura-ss21-baby.jpg',
          categories: [
            {
              title: 'T-shirts',
              slug: '#'
            },
            {
              title: 'Sweatshirts',
              slug: '#'
            },
            {
              title: 'Bodies',
              slug: '#'
            },
            {
              title: 'Dresses',
              slug: '#'
            },
            {
              title: 'Trousers',
              slug: '#'
            },
            {
              title: 'Swimwear & Summer',
              slug: '#'
            },
            {
              title: 'Jumpers & Cardigans',
              slug: '#'
            },
            {
              title: 'Overall',
              slug: '#'
            },
            {
              title: 'Baby gift sets',
              slug: '#'
            },
            {
              title: 'Playsuit',
              slug: '#'
            },
            {
              title: 'Online Exclusive',
              slug: '#'
            },
            {
              title: 'Swimwear',
              slug: '#'
            }
          ],
          campaigns: [
            {
              title: 'SS21',
              slug: '#'
            }
          ],
          more: [
            {
              title: 'Bobo in the Hood',
              slug: '#'
            },
            {
              title: 'Online Exclusive',
              slug: '#'
            }
          ]
        },
        {
          title: 'Woman',
          slug: 'woman',
          thumbnail: 'https://www.bobochoses.com/media/wysiwyg/Miniatura-ss21-woman.jpg',
          categories: [
            {
              title: 'T-shirts',
              slug: '#'
            },
            {
              title: 'Sweatshirts',
              slug: '#'
            },
            {
              title: 'Dresses',
              slug: '#'
            },
            {
              title: 'Jumpers & Cardigans',
              slug: '#'
            },
            {
              title: 'Overall',
              slug: '#'
            },
            {
              title: 'Skirts',
              slug: '#'
            },
            {
              title: 'Trousers',
              slug: '#'
            },
            {
              title: 'Outwear',
              slug: '#'
            },
            {
              title: 'Swimwear',
              slug: '#'
            },
            {
              title: 'Shoes',
              slug: '#'
            },
            {
              title: 'Accesories',
              slug: '#'
            },
            {
              title: 'Face masks',
              slug: '#'
            }
          ],
          campaigns: [
            {
              title: 'SS21',
              slug: '#'
            }
          ],
          more: [
            {
              title: 'Ten Years Young Exclusive',
              slug: '#'
            },
            {
              title: 'Bobo Choses & Novesta',
              slug: '#'
            },
            {
              title: 'Bobo in the Hood',
              slug: '#'
            }
          ]
        },
        {
          title: 'Man',
          slug: 'man',
          thumbnail: 'https://www.bobochoses.com/media/wysiwyg/Miniatura-ss21-man.jpg',
          categories: [
            {
              title: 'T-shirts',
              slug: '#'
            },
            {
              title: 'Sweatshirts',
              slug: '#'
            },
            {
              title: 'Dresses',
              slug: '#'
            },
            {
              title: 'Jumpers & Cardigans',
              slug: '#'
            },
            {
              title: 'Overall',
              slug: '#'
            },
            {
              title: 'Skirts',
              slug: '#'
            },
            {
              title: 'Trousers',
              slug: '#'
            },
            {
              title: 'Outwear',
              slug: '#'
            },
            {
              title: 'Swimwear',
              slug: '#'
            },
            {
              title: 'Shoes',
              slug: '#'
            },
            {
              title: 'Accesories',
              slug: '#'
            },
            {
              title: 'Face masks',
              slug: '#'
            }
          ],
          campaigns: [
            {
              title: 'SS21',
              slug: '#'
            }
          ],
          more: [
            {
              title: 'Ten Years Young Exclusive',
              slug: '#'
            },
            {
              title: 'Bobo Choses & Novesta',
              slug: '#'
            },
            {
              title: 'Bobo in the Hood',
              slug: '#'
            }
          ]
        },
        {
          title: 'Accessories',
          slug: 'accessories',
          thumbnail: 'https://www.bobochoses.com/media/wysiwyg/Miniatura-ss21-acc.jpg',
          categories: [
            {
              title: 'T-shirts',
              slug: '#'
            },
            {
              title: 'Sweatshirts',
              slug: '#'
            },
            {
              title: 'Dresses',
              slug: '#'
            },
            {
              title: 'Jumpers & Cardigans',
              slug: '#'
            },
            {
              title: 'Overall',
              slug: '#'
            },
            {
              title: 'Skirts',
              slug: '#'
            },
            {
              title: 'Trousers',
              slug: '#'
            },
            {
              title: 'Outwear',
              slug: '#'
            },
            {
              title: 'Swimwear',
              slug: '#'
            },
            {
              title: 'Shoes',
              slug: '#'
            },
            {
              title: 'Accesories',
              slug: '#'
            },
            {
              title: 'Face masks',
              slug: '#'
            }
          ],
          campaigns: [
            {
              title: 'SS21',
              slug: '#'
            }
          ],
          more: [
            {
              title: 'Ten Years Young Exclusive',
              slug: '#'
            },
            {
              title: 'Bobo Choses & Novesta',
              slug: '#'
            }
          ]
        },
        {
          title: 'Fun Collection',
          slug: 'collection',
          isNew: true,
          thumbnail: 'https://www.bobochoses.com/media/wysiwyg/Miniatura-categoria-web_fun-collection-sales.jpg',
          categories: [
            {
              title: 'Kid',
              slug: '#'
            },
            {
              title: 'Baby',
              slug: '#'
            },
            {
              title: 'Woman',
              slug: '#'
            },
            {
              title: 'Accesories Kid',
              slug: '#'
            },
            {
              title: 'Accesories Adult',
              slug: '#'
            }
          ]
        },
        {
          title: 'Sale',
          slug: 'sale',
          isNew: true,
          thumbnail: 'https://www.bobochoses.com/media/wysiwyg/Miniatura-sales.jpg'
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
  z-index: 1;

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
        color: #999 !important;
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
  z-index: 100;
  transition: all 0.2s ease;

  ul {
    padding-left: 0;
    margin: 0;
    li {
      font-size: 14px;
    }
  }

  a {
    text-decoration: none;
  }
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
