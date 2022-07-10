<template>
  <q-page class="center">
    <q-video
      :ratio="560 / 315"
      src="https://www.youtube.com/embed/jUQ_tt_zJDo"
    />

    <q-card>
      <q-card-section class="text-h6"> Dotted Bar Chart </q-card-section>
      <q-card-section>
        <div
          ref="dottedbarchart"
          id="dottedbarChart"
          style="height: 250px"
        ></div>
      </q-card-section>
      <q-resize-observer @resize="onResize" />
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';
</script>
