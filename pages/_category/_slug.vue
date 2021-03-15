<template>
  <main>
    <section style="position: relative; z-index: 111">
      <v-container fluid class="text-capitalize">
        <v-row no-gutters align-lg="center" justify-lg="space-between">
          <v-col lg="6">
            <v-breadcrumbs class="px-0 py-0" :items="breadcrumbs" divider="|"></v-breadcrumbs>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- MAIN HERO -->
    <v-container fluid>
      <v-row>
        <!-- Product Slideshow -->
        <v-col lg="9">
          <SlideGroup :items="slides" />
        </v-col>

        <!-- Detail -->
        <v-col lg="3">
          <div class="py-4">
            <!-- Title -->
            <h1 class="fs-16 mb-5">For President Short Sleeve T-Shirt</h1>

            <!-- Price -->
            <p class="fs-18 mb-5">Rp 250,000.00</p>

            <!-- Size -->
            <div class="mb-5">
              <div><span class="fs-14">Size:</span></div>

              <div class="d-flex mt-2 size-variants">
                <div>
                  <v-btn
                    rounded
                    depressed
                    dark
                    color="#9bcfbd"
                    min-width="42"
                    max-width="42"
                    min-height="42"
                    max-height="42"
                  >
                    <span class="fs-12">2/3Y</span>
                  </v-btn>

                  <v-btn
                    class="disabled"
                    rounded
                    outlined
                    light
                    min-width="42"
                    max-width="42"
                    min-height="42"
                    max-height="42"
                  >
                    <span class="fs-12">4/5Y</span>
                  </v-btn>

                  <v-btn
                    class="disabled"
                    rounded
                    outlined
                    light
                    min-width="42"
                    max-width="42"
                    min-height="42"
                    max-height="42"
                  >
                    <span class="fs-12">6/7Y</span>
                  </v-btn>

                  <v-btn
                    class="disabled"
                    rounded
                    outlined
                    light
                    min-width="42"
                    max-width="42"
                    min-height="42"
                    max-height="42"
                  >
                    <span class="fs-12">8/9Y</span>
                  </v-btn>
                  <v-btn
                    class="disabled"
                    rounded
                    outlined
                    light
                    min-width="42"
                    max-width="42"
                    min-height="42"
                    max-height="42"
                  >
                    <span class="fs-12">10/11Y</span>
                  </v-btn>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="mb-5">
              <v-row no-gutters>
                <v-col md="9" class="pr-1">
                  <v-btn dark block depressed x-large color="#000" @click="addToCart()"> Add to Cart </v-btn>
                </v-col>
                <v-col md="2">
                  <v-btn block outlined x-large color="#000"> <v-icon>mdi-star-outline</v-icon> </v-btn>
                </v-col>
              </v-row>
            </div>

            <!-- Description -->
            <div class="mb-5">
              <ProductExplanation :content="content" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Similar Pieces -->
    <v-container class="py-10 my-10" fluid>
      <v-row>
        <v-col lg="12">
          <div class="text-center">
            <h3 class="fs-30">Similar pieces</h3>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <template v-for="index in 4">
          <v-col :key="`product-${index}`" lg="3">
            <ProductCard
              :link="`/${$route.params.category}/product-item-${index}`"
              :price="250000 + index * 1000"
              :name="`Product item #${index}`"
              img1="https://www.bobochoses.com/media/catalog/product/cache/74597d227604c47a8b641ae794922d30/1/2/121ac149_1.jpg"
              img2="https://www.bobochoses.com/media/catalog/product/1/2/121ac149_6.jpg"
            />
          </v-col>
        </template>
      </v-row>
    </v-container>

    <!-- You might -->
    <v-container class="py-10 my-10" fluid>
      <v-row>
        <v-col lg="12">
          <div class="text-center">
            <h3 class="fs-30">You might also like...</h3>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <template v-for="index in 4">
          <v-col :key="`product-${index}`" lg="3">
            <ProductCard
              :link="`/${$route.params.category}/product-item-${index}`"
              :price="250000 + index * 1000"
              :name="`Product item #${index}`"
              img1="https://www.bobochoses.com/media/catalog/product/cache/74597d227604c47a8b641ae794922d30/1/2/121ac149_1.jpg"
              img2="https://www.bobochoses.com/media/catalog/product/1/2/121ac149_6.jpg"
            />
          </v-col>
        </template>
      </v-row>
    </v-container>

    <!-- Add to Cart -->
    <v-navigation-drawer v-model="drawer" style="z-index: 1000" class="cart-drawer" fixed right width="506" temporary>
      <div class="px-5 py-4" style="height: 100%">
        <div class="text-right">
          <v-btn icon @click="drawer = !drawer">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <SidebarCart :items="cartitems" />
      </div>
    </v-navigation-drawer>
  </main>
</template>

<script>
import SlideGroup from '@/components/SlideGroup'
import ProductExplanation from '@/components/ProductExplanation'
import ProductCard from '@/components/ProductCard'
import { mapMutations } from 'vuex'

export default {
  name: 'ProductDetailPage',
  components: {
    SlideGroup,
    ProductExplanation,
    ProductCard
  },
  data() {
    return {
      slideshow: 0,
      drawer: false,
      breadcrumbs: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: this.$route.params.category,
          disabled: false,
          href: `/${this.$route.params.category}`
        },
        {
          text: this.$route.params.slug,
          disabled: true,
          href: `/${this.$route.params.slug}`
        }
      ],
      slides: [
        'https://www.bobochoses.com/media/catalog/product/cache/74597d227604c47a8b641ae794922d30/1/2/121ac149_1.jpg',
        'https://www.bobochoses.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/1/2/121ac149_6.jpg',
        'https://www.bobochoses.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/1/2/121ac149_7.jpg',
        'https://www.bobochoses.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/1/2/121ac149_8.jpg',
        'https://www.bobochoses.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/1/2/121ac149_9.jpg',
        'https://www.bobochoses.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/1/2/121ac149_16.jpg',
        'https://www.bobochoses.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/1/2/121ac149_19.jpg'
      ],
      content: [
        {
          title: 'Description',
          content: `Short sleeve t-shirt for kid.<br/>Composition: 100% organic cotton<br/>Made in Spain.<br/>Ref: 121AC149`
        },
        {
          title: 'Care',
          content: `Machine wash up to 30º.<br/>
          Iron up to 110º.<br/>
          No dry clean.<br/>
          Do not bleach.<br/>

          This piece has been garment-dyed for a unique look, and the colors may change after washing.`
        },
        {
          title: 'Shipping',
          content: `We ship worldwide offering Free Shipping to all countries when you spend over 150€. You can view our shipping fees by country here.<br/>
          Of course, we accept returns. At the date of receiving your package, you have 14 days to return it.<br/>
          <strong>Please note that swimwear, underwear and face masks cannot be returned.</strong>`
        }
      ],
      cartitems: []
    }
  },
  methods: {
    addToCart() {
      this.drawer = true
      this.$store.commit('carts/add', {
        title: this.$route.params.slug,
        price: 250000
      })
    },
    ...mapMutations({
      toggle: 'carts/toggle'
    })
  }
}
</script>

<style lang="scss">
.size-variants {
  & * {
    letter-spacing: 0 !important;
  }
  .v-btn {
    letter-spacing: 0 !important;
    overflow: hidden;
    &.disabled {
      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: -moz-linear-gradient(
          to left top,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 42%,
          white 43%,
          white 46%,
          #ff5216 47%,
          #ff5216 53%,
          white 54%,
          white 57%,
          rgba(255, 255, 255, 0) 58%,
          rgba(255, 255, 255, 0) 100%
        );
        background: -webkit-gradient(
          linear,
          left top,
          right bottom,
          color-stop(0%, rgba(255, 255, 255, 0)),
          color-stop(42%, rgba(255, 255, 255, 0)),
          color-stop(43%, white),
          color-stop(46%, white),
          color-stop(47%, #ff5216),
          color-stop(53%, rgba(153, 153, 153, 0.6)),
          color-stop(54%, white),
          color-stop(57%, white),
          color-stop(58%, rgba(255, 255, 255, 0)),
          color-stop(100%, rgba(255, 255, 255, 0))
        );
        background: -webkit-linear-gradient(
          to left top,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 42%,
          white 43%,
          white 46%,
          rgba(153, 153, 153, 0.6) 47%,
          rgba(153, 153, 153, 0.6) 53%,
          white 54%,
          white 57%,
          rgba(255, 255, 255, 0) 58%,
          rgba(255, 255, 255, 0) 100%
        );
        background: -o-linear-gradient(
          to left top,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 42%,
          white 43%,
          white 46%,
          rgba(153, 153, 153, 0.6) 47%,
          rgba(153, 153, 153, 0.6) 53%,
          white 54%,
          white 57%,
          rgba(255, 255, 255, 0) 58%,
          rgba(255, 255, 255, 0) 100%
        );
        background: -ms-linear-gradient(
          to left top,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 42%,
          white 43%,
          white 46%,
          rgba(153, 153, 153, 0.6) 47%,
          rgba(153, 153, 153, 0.6) 53%,
          white 54%,
          white 57%,
          rgba(255, 255, 255, 0) 58%,
          rgba(255, 255, 255, 0) 100%
        );
        background: linear-gradient(
          to left top,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 42%,
          white 43%,
          white 46%,
          rgba(153, 153, 153, 0.6) 47%,
          rgba(153, 153, 153, 0.6) 53%,
          white 54%,
          white 57%,
          rgba(255, 255, 255, 0) 58%,
          rgba(255, 255, 255, 0) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#00ffffff", endColorstr="#00ffffff",GradientType=1 );
      }
    }
    .v-btn__content {
      letter-spacing: 0 !important;
    }
  }
}
</style>
