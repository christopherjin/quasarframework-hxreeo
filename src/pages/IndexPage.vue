<template>
  <q-page class="center">
    <q-video
      :ratio="560 / 315"
      src="https://www.youtube.com/embed/jUQ_tt_zJDo"
    />
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <dotted-bar-chart></dotted-bar-chart>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import DottedBarChart from 'components/DottedBarChart';
</script>
