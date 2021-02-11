<template>
    <!--  -->
    <section id="type-selector" class="content">
        <h3 class="section-explanation">Wybierz rodzaj ciągu</h3>
        <!--  -->
        <div class="btn-wrap">
            <button :class="generateClassName('geo')" @click="changeStringType('geo')">Geometryczny</button>
            <button :class="generateClassName('art')" @click="changeStringType('art')">Arytmetyczny</button>
        </div>
    </section>
    <!--  -->
</template>
<script>
import { mapState, mapMutations } from "vuex";
//
export default {
    computed: {
        ...mapState("compute_elements", ["stringType"])
    },
    methods: {
        ...mapMutations("compute_elements", ["changeStringType"]),
        //
        generateClassName(val) {
            return val === this.stringType ? "type-selected" : "type-unselected";
        }
    }
};
</script>
