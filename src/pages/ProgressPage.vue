<template>
  <q-card>
    <q-card-section>
      <div ref="dottedbarchart" id="dottedbarChart" style="height: 250px"></div>
    </q-card-section>
    <q-resize-observer @resize="onResize" />
  </q-card>
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
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProgressPage',
});
</script>
