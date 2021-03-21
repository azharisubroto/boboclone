<template>
  <v-expansion-panels v-model="panel" multiple>
    <v-expansion-panel v-for="(item, i) in content" :key="i">
      <v-expansion-panel-header>
        {{ item.title }}
        <template #actions>
          <v-icon> mdi-plus </v-icon>
        </template></v-expansion-panel-header
      >
      <v-expansion-panel-content>
        <!--  eslint-disable-next-line vue/no-v-html -->
        <div class="text" v-html="item.content"></div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'ProductExplanation',
  // eslint-disable-next-line vue/require-prop-types
  props: ['content'],
  data() {
    return {
      panel: [0]
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>
