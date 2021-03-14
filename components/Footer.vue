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
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: #fff;
}

.features {
  background: #f5f5f5;
  padding: 30px 0;
}

.subscribe {
  background: #fff;
  padding: 30px 0;
}
</style>
