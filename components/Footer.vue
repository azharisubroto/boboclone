<template>
  <footer>
    <section class="features">
      <v-container class="text-center">
        <v-row>
          <v-col>
            <v-img
              src="https://www.bobochoses.com/media/wysiwyg/icons_shipping.png"
              alt=""
              width="88"
              class="d-inline-block"
              height="88"
            ></v-img>
            <p><strong class="fs-16">Free shipping</strong></p>
            <p class="fs-14">On orders over 150 Euros</p>
          </v-col>
          <v-col>
            <v-img
              src="https://www.bobochoses.com/media/wysiwyg/icons_locally.png"
              alt=""
              width="88"
              class="d-inline-block"
              height="88"
            ></v-img>
            <p><strong class="fs-16">Made locally</strong></p>
            <p class="fs-14">90% is produced in Portugal and Spain</p>
          </v-col>
          <v-col>
            <v-img
              src="https://www.bobochoses.com/media/wysiwyg/icons_customer.png"
              alt=""
              width="88"
              class="d-inline-block"
              height="88"
            ></v-img>
            <p><strong class="fs-16">Easy customer service</strong></p>
            <p class="fs-14">Whatsapp, Telegram, Email & phone</p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="subscribe">
      <v-container>
        <v-row justify="center">
          <v-col lg="8" class="text-center">
            <p class="fs-22 fs-lg-32"><strong>Subscribe to Our Newsletter</strong></p>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col lg="4">
            <div class="mt-2 text-center">
              <v-text-field label="Your email address"></v-text-field>

              <v-btn x-large outlined class="mt-4"> Send </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="footer-widget">
      <v-container fluid class="px-4">
        <v-row>
          <v-col lg="9">
            <v-row>
              <v-col v-for="(item, i) in footers" :key="`footer-${i}`" lg="4">
                <h5 class="fs-12 mb-3">{{ item.title }}</h5>
                <ul>
                  <li v-for="(child, j) in item.items" :key="`footer-${i}-${j}`">
                    <a :href="child.slug">{{ child.title }}</a>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
          <v-col lg="3">
            <h5 class="fs-12 mb-3">Follow us in</h5>

            <div class="flex">
              <v-btn icon>
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-pinterest</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="footer__bottom">
      <v-container>
        <v-row>
          <v-col lg="12" class="text-center">
            <span class="copyright">&copy; 2019 Bobo Choses</span>
            <span class="d-inline-block mx-2"
              ><a href="https://universe.bobochoses.com/legal-information">Legal Information</a></span
            >
            <span class="d-inline-block mx-2"
              ><a href="https://universe.bobochoses.com/privacy-policy">Privacy Policy</a></span
            >
          </v-col>
        </v-row>
      </v-container>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      footers: [
        {
          title: 'Our Collections',
          items: [
            {
              title: 'SS21 Baby & Kid',
              slug: '#'
            },
            {
              title: 'SS21 Adult',
              slug: '#'
            },
            {
              title: 'My account',
              slug: '#'
            },
            {
              title: 'Wholesale',
              slug: '#'
            }
          ]
        },
        {
          title: 'About Bobo Choses',
          items: [
            {
              title: 'About',
              slug: '#'
            },
            {
              title: 'Press Contact',
              slug: '#'
            },
            {
              title: 'Store Locator',
              slug: '#'
            },
            {
              title: 'Bobo Choses Barcelona Born',
              slug: '#'
            },
            {
              title: 'Contact us',
              slug: '#'
            },
            {
              title: 'FAQ',
              slug: '#'
            }
          ]
        },
        {
          title: 'More information',
          items: [
            {
              title: 'Payment',
              slug: '#'
            },
            {
              title: 'Delivery',
              slug: '#'
            },
            {
              title: 'Returns',
              slug: '#'
            },
            {
              title: 'Size guide',
              slug: '#'
            },
            {
              title: 'Product care',
              slug: '#'
            },
            {
              title: 'Sustainability',
              slug: '#'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  background: #fff;

  h5 {
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: block;

      a {
        text-decoration: none;
        font-size: 12px;
      }
    }
  }
}

.features {
  background: #f5f5f5;
  padding: 30px 0;
}

.subscribe {
  background: #fff;
  padding: 30px 0;
}

.footer-widget {
  padding: 30px 0;
  border-top: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
}

.footer__bottom {
  font-size: 12px;
}
</style>
