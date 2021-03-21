<template>
  <main>
    <section>
      <v-container fluid>
        <v-breadcrumbs class="px-0 py-0" :items="breadcrumbs" divider="|"></v-breadcrumbs>
      </v-container>
    </section>

    <!-- MAIN HERO -->
    <v-container fluid>
      <!-- if not loading -->
      <template v-if="!loading">
        <v-row v-if="Object.keys(data).length > 0">
          <!-- Product Slideshow -->
          <v-col lg="9">
            <SlideGroup :items="slides" />
          </v-col>

          <!-- Detail -->
          <v-col lg="3">
            <div class="py-4">
              <ProductDetails :data="data" />

              <!-- Description -->
              <div class="mb-5">
                <ProductExplanation :content="content" />
              </div>
            </div>
          </v-col>
        </v-row>

        <template v-else>
          <div class="text-center py-10">
            <h2>Product not available</h2>
          </div>
        </template>
      </template>

      <!-- LOADING -->
      <template v-else>
        <v-row>
          <v-col lg="9">
            <v-card height="637" color="#f7f7f7" elevation="0" tile></v-card>
          </v-col>
          <v-col lg="3">
            <v-skeleton-loader type="article"></v-skeleton-loader>
          </v-col>
        </v-row>
      </template>
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
  </main>
</template>

<script>
import SlideGroup from '@/components/SlideGroup'
import ProductExplanation from '@/components/ProductExplanation'
import ProductCard from '@/components/ProductCard'
import ProductDetails from '@/components/ProductDetails'

export default {
  name: 'ProductDetailPage',
  components: {
    SlideGroup,
    ProductExplanation,
    ProductCard,
    ProductDetails
  },
  data() {
    return {
      loading: true,
      slideshow: 0,
      breadcrumbs: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        }
      ],
      slides: [],
      content: [],
      drawer: false,
      data: {}
    }
  },
  mounted() {
    this.fetchContent().then(() => (this.loading = false))
  },
  methods: {
    async fetchContent() {
      try {
        const res = await this.$strapi.findOne('products', this.$route.params.slug)
        this.data = res

        // Descriptions
        this.setupDescriptions(res)

        // Slides
        this.setupSlides(res.image)

        // Breadcrumbs
        this.setupBreadcrumbs(res.categories)
      } catch {
        // console.log(error)
      }
    },
    setupBreadcrumbs(cats) {
      const vm = this
      if (cats.length > 0) {
        cats.forEach((el, i) => {
          vm.breadcrumbs.push({
            text: el.name,
            disabled: false,
            href: `/category${i === 1 ? `/${cats[parseInt(i - 1)].slug}/${el.slug}` : `/${el.slug}`}`
          })
        })
      }

      vm.breadcrumbs.push({
        text: vm.data.title,
        disabled: true
      })
    },
    setupSlides(images) {
      const vm = this
      images.forEach((el) => {
        vm.slides.push(this.$helpers.cdn_img(el.formats.large.url, 500))
      })
    },
    setupDescriptions(obj) {
      // eslint-disable-next-line camelcase
      const { description, care_description, shipping_description } = obj
      this.content = [
        {
          title: 'Description',
          content: description
        },
        {
          title: 'Care',
          content: care_description
        },
        {
          title: 'Shipping',
          content: shipping_description
        }
      ]
    }
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
