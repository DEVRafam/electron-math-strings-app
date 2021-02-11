<script>
import { Line } from "vue-chartjs";
export default {
    extends: Line,
    mounted() {
        this.renderChart(this.chartdata, this.options);
    },
    props: ["values"],
    data() {
        return {
            chartdata: {
                labels: this.values.labels,
                datasets: this.values.datasets
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        };
    }
    //
};
</script>
