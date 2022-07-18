<template>
  <chartExample></chartExample>
  <q-input filled v-model="text" label="BMD" />
  <q-input filled v-model="text" label="Date" />
  <q-btn
    class="q-mt-xl"
    color="white"
    text-color="blue"
    unelevated
    label="Add Data Point"
    no-caps
    padding
  />
  <q-btn
    class="q-mt-xl"
    color="white"
    text-color="blue"
    unelevated
    to="/"
    label="Go Home"
    no-caps
  />
</template>
<script>
import { defineComponent, defineAsyncComponent } from 'vue';

const chartExample = defineAsyncComponent(
  import('components/charts/linechart.vue')
);

export default defineComponent({
  name: 'ProgressPage',
  components: {
    linechart,
  },
});
</script>
