<template>
    <section id="establishing" class="content">
        <h3 class="section-explanation">Znane informacje</h3>
        <!--  -->
        <!--  -->
        <!--  -->
        <div class="form-field">
            <label for="string-known-mode">Podane zmienne:</label>
            <select v-model="establishes.mode" id="string-known-mode">
                <option value="a_and_diff">{{ generateRelatedToModeText("a_and_diff") }}</option>
                <option value="sum_and_diff">{{ generateRelatedToModeText("sum_and_diff") }}</option>
            </select>
        </div>
        <!--  -->
        <!--  -->
        <!--  -->
        <div class="form-field" v-if="renderCertinFromElement('a')">
            <label for="a">Wartość wiadomego elementu:</label>
            <input type="text" id="a" v-model="establishes.a" />
        </div>
        <!--  -->
        <div class="form-field" v-if="renderCertinFromElement('diff')">
            <label for="diff">{{ `${unit}:` }}</label>
            <input type="text" id="diff" v-model="establishes.diff" />
        </div>
        <!--  -->
        <div class="form-field" v-if="renderCertinFromElement('a')">
            <label for="nIndex">Indeks wiadomego elementu:</label>
            <input type="number" id="nIndex" v-model="establishes.nIndex" min="1" />
        </div>
        <!--  -->
        <div class="form-field" v-if="renderCertinFromElement('sumLength')">
            <label for="sumLength">Ilość zsumowanych elementów:</label>
            <input type="number" id="sumLength" v-model="establishes.sumLength" min="2" />
        </div>
    </section>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState("compute_elements", ["establishes", "stringType"]),
        //
        unit() {
            return this.stringType === "geo" ? "iloraz" : "różnica";
        }
    },
    methods: {
        generateRelatedToModeText(textDestination) {
            const { unit } = this;
            //
            if (textDestination === "sum_and_diff") {
                return `Suma oraz ${unit}`;
            } else if (textDestination === "a_and_diff") {
                return `Dowolny wyraz oraz ${unit}`;
            }
        },
        renderCertinFromElement(formElement) {
            return {
                sum_and_diff: {
                    a: false,
                    diff: true,
                    sumLength: 2
                },
                a_and_diff: {
                    a: true,
                    diff: true,
                    sumLength: false
                }
            }[this.establishes.mode][formElement];
            //
        }
    }
};
</script>
