<template>
  <apexchart
    height="300"
    type="line"
    :options="options"
    :series="series"
  ></apexchart>

  <q-form>
    <q-input filled v-model="inputBMD" label="BMD" autogrow />
    <q-input filled v-model="inputDays" label="Date following fall?" autogrow />
  </q-form>

  <q-btn
    class="q-mt-xl"
    color="white"
    text-color="blue"
    unelevated
    label="Update"
    @click="updateChart"
    no-caps
    padding
  />
</template>

<script>
import { defineComponent } from 'vue';
import { getCssVar } from 'quasar';
import { ref } from 'vue';

const inputBMD = ref('BMD');
const inputDays = ref('Days');

export default defineComponent({
  name: 'ApexLine',
  data: function () {
    return {
      options: {
        title: {
          text: 'Some Score Progress',
          align: 'left',
        },
        chart: {
          id: 'apex-line',
        },
        colors: [
          getCssVar('primary'),
          getCssVar('secondary'),
          getCssVar('negative'),
        ],
        markers: {
          size: 4,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [],
        },
      ],
    };
  },
  methods: {
    updateChart() {
      const score = 'input_BMD';
      const min = 'Date';
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      // In the same way, update the series option
      this.series = [
        {
          data: newData,
        },
      ];
    },
  },
});
</script>
