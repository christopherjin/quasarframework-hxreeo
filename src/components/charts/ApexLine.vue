<template>
  <apexchart
    height="300"
    type="line"
    :options="options"
    :series="series"
  ></apexchart>
  <q-btn
    class="q-mt-xl"
    color="white"
    text-color="blue"
    unelevated
    label="Update"
    @click="UpdateChart"
    no-caps
    padding
  />
</template>

<script>
import { defineComponent } from 'vue';
import { getCssVar } from 'quasar';

export default defineComponent({
  name: 'ApexLine',
  data() {
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
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
  setup() {
    const updateChart = () => {
      const max = 90;
      const min = 20;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      // In the same way, update the series option
      this.series = [
        {
          data: newData,
        },
      ];
    };
  },
});
</script>
