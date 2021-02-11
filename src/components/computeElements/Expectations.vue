<template>
    <section id="expectations" class="content">
        <h3 class="section-explanation">Rzeczy do obliczenia:</h3>
        <!--  -->
        <!--  -->
        <!--  -->
        <div class="form-field">
            <label for="nIndex">Ilość elementów do zsumowania</label>
            <input type="number" id="nIndex" v-model="expectations.sumItemsAmount" min="2" />
        </div>
        <div class="form-field">
            <label for="nIndex">Indeks szczególnego elementu:</label>
            <input type="number" id="nIndex" v-model="expectations.certinElementIndex" min="1" />
        </div>
    </section>
</template>

<script>
import { mapState } from "vuex";
//
export default {
    computed: {
        ...mapState("compute_elements", ["expectations"])
    }
};
</script>
