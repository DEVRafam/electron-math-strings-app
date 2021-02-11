<template>
    <section id="compute-elements">
        <HomeRedirection></HomeRedirection>
        <button @click="toggleResultPreview">Formularz</button>
        <!--  -->
        <div class="wrap">
            <div class="swap" :class="{ active: showResult }">
                <!--  -->
                <!--  -->
                <!--  -->
                <section id="form">
                    <h1 class="main-header">Oblicz wyrazy ciagu</h1>
                    <!--  -->
                    <StringTypeSelector></StringTypeSelector>
                    <Establishes></Establishes>
                    <Expectations></Expectations>
                    <!--  -->
                    <button class="compute" @click="computeResult">Oblicz</button>
                    <!--  -->
                </section>
                <!--  -->
                <!--  -->
                <!--  -->
                <section id="result">
                    <!--  -->
                    <section id="chart-wrap" v-if="result.dataToChart.labels.length" :key="result.dataToChart.key">
                        <h3 class="section-explanation">Monotoniczność ciągu:</h3>
                        <Chart :values="result.dataToChart"></Chart>
                    </section>
                    <!--  -->
                    <section id="sum-wrap">
                        <h3 class="section-explanation">Wyniki:</h3>
                        <!--  -->
                        <div class="results">
                            <!--  -->
                            <div class="table-wrap">
                                <table>
                                    <thead>
                                        <th>a<span class="small">n</span></th>
                                        <th>Wartość</th>
                                    </thead>
                                    <!--  -->
                                    <template v-for="(val, index) in result.sum.items">
                                        <tr :key="index">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ val }}</td>
                                        </tr>
                                    </template>
                                </table>
                            </div>

                            <!--  -->
                            <div class="info">
                                <p>
                                    <span>Pierwszy element: </span>
                                    <span v-text="result.firstElement" class="color"></span>
                                </p>
                                <p>
                                    <span>a</span>
                                    <span class="small">{{ expectations.certinElementIndex }}</span
                                    >:
                                    <span v-text="result.certinElement" class="color"></span>
                                </p>
                                <p>
                                    <span>Suma {{ expectations.sumItemsAmount }} elementów: </span>
                                    <span v-text="result.sum.total" class="color"></span>
                                </p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
import Chart from "./Chart";
import StringTypeSelector from "./StringTypeSelector";
import Establishes from "./Establishes";
import Expectations from "./Expectations";
//
import { mapState, mapActions, mapMutations } from "vuex";
//
export default {
    computed: {
        ...mapState("compute_elements", ["result", "showResult", "expectations"])
    },
    methods: {
        ...mapActions("compute_elements", ["computeResult"]),
        ...mapMutations("compute_elements", ["toggleResultPreview"])
    },
    components: { Chart, StringTypeSelector, Establishes, Expectations }
};
</script>
