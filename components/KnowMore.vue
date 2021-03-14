<template>
  <section class="py-md-10">
    <v-container>
      <v-row>
        <v-col md="12" class="text-center">
          <v-img
            src="https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/200x/https://cdn.dragdropr.com/e842f962-1bc3-4404-9a4b-d56f6336b884/"
            alt="bobo choses"
            width="212"
            height="200"
            class="d-inline-block"
          ></v-img>

          <p class="fs-20 fs-lg-32 mt-10">Know more about Bobo Choses</p>
        </v-col>
      </v-row>

      <v-row>
        <template v-for="(item, i) in pages">
          <v-col :key="`page-${i}`">
            <v-card elevation="0" tile>
              <v-img :src="item.img" :aspect-ratio="3.5 / 4">
                <template #default>
                  <v-row class="fill-height ma-0" align="end" justify="center">
                    <div class="mb-md-5">
                      <v-btn min-height="70" color="#fff" x-large class="mb-10">
                        <!-- eslint-disable-next-line vue/no-v-html -->
                        <span v-html="item.button"></span
                      ></v-btn>
                    </div>
                  </v-row>
                </template>
              </v-img>
            </v-card>
            <div class="mt-5 text-center fs-18">
              {{ item.title }}
            </div>
          </v-col>
        </template>
      </v-row>

      <v-row class="pt-10 mt-10">
        <v-col md="12" class="text-center">
          <v-img
            src="https://7e7cb2191e43d9e6ba19.ucr.io/-/format/auto/-/quality/lighter/-/resize/80x/https://cdn.dragdropr.com/26d5969e-198d-4665-9d68-668d7202e9b4/"
            width="80"
            height="134"
            class="d-inline-block"
          ></v-img>

          <p class="fs-32">Become a Bobo Choses retailer</p>

          <v-btn x-large outlined> More Info </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'KnowMore',
  data() {
    return {
      pages: [
        {
          title: `Let's put a smile on Earth's face!`,
          slug: `/sustainabilitybobochoses/`,
          img: `https://cdn.dragdropr.com/4f6c3d77-6a55-4114-9a82-23ccdadcf889/`,
          button: 'Bobo Choses<br/>Commitment'
        },
        {
          title: `Ribera 1, El Born, Barcelona`,
          slug: `/barcelona/`,
          img: `https://cdn.dragdropr.com/4f89266f-3c9f-4d87-bb7e-53c40d034b1e/`,
          button: 'Bobo Choses<br/>Barcelona Born'
        },
        {
          title: `The Universe of Bobo Choses`,
          slug: `/sustainabilitybobochoses/`,
          img: `https://cdn.dragdropr.com/fe139a2f-e980-461d-aa4e-f6a4c637213b/`,
          button: 'Bobo Choses<br/>Magazine'
        }
      ]
    }
  }
}
</script>
