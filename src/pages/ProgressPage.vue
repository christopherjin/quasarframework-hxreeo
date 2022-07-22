<template>
  <q-page padding>
    <chartExample> </chartExample>

    <q-btn
      class="q-mt-xl"
      color="white"
      text-color="blue"
      unelevated
      to="/"
      label="Go Home"
      no-caps
    />
  </q-page>
</template>
<script>
import { defineComponent, defineAsyncComponent } from 'vue';
const chartExample = defineAsyncComponent(() =>
  import('components/charts/ApexLine.vue')
);

export default defineComponent({
  name: 'ProgressPage',
  components: {
    chartExample,
  },
});
</script>
