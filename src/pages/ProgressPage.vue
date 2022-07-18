<template>
  <q-page padding>
    <q-card> test </q-card>

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
  </q-page>
</template>
<script>
import { defineComponent, defineAsyncComponent } from 'vue';
const ApexLine = defineAsyncComponent(() =>
  import('components/charts/ApexLine.vue')
);

export default defineComponent({
  name: 'ProgressPage',
  components: {
    ApexLine,
  },
});
</script>
