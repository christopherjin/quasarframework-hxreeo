<template>
  <q-page class="center">
    <q-video
      :ratio="560 / 315"
      src="https://www.youtube.com/embed/jUQ_tt_zJDo"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const min = -5;
const max = 5;
</script>
