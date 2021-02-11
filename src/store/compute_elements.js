export default {
    namespaced: true,
    state: {
        showResult: false,
        stringType: "art", // geo | art
        establishes: {
            mode: "a_and_diff", // sum_and_q | an_and_q | sum_and_an
            a: 9,
            nIndex: 3,
            diff: 3,
            sumLength: 2
        },
        expectations: {
            sumItemsAmount: 10,
            certinElementIndex: 1
        },
        result: {
            firstElement: 0,
            certinElement: 0,
            sum: {
                items: [],
                total: 0
            },
            dataToChart: {
                labels: [],
                datasets: [],
                key: 0
            }
        }
    },
    mutations: {
        changeStringType: (state, val) => {
            state.stringType = val;
        },
        changeResultPreview: (state, val) => {
            state.showResult = val;
        },
        toggleResultPreview: state => {
            state.showResult = !state.showResult;
        }
    },
    actions: {
        computeResult: ({ state, commit }) => {
            const { stringType, establishes, result, expectations } = state;
            if (stringType === "art") {
                // const {mode,a,nIndex,diff,sumLength}=establishes;
                const { mode, a, nIndex, diff } = establishes;
                const { sumItemsAmount, certinElementIndex } = expectations;
                if (mode === "a_and_diff") {
                    // first element
                    result.firstElement = a - Math.abs(1 - nIndex) * diff;
                    // certin element
                    result.certinElement = result.firstElement + diff * (certinElementIndex - 1);
                    // sum
                    const { sum, dataToChart } = result;
                    sum.total = 0;
                    sum.items = [];
                    dataToChart.labels = [];
                    for (let n = 1; n <= sumItemsAmount; n++) {
                        let item = result.firstElement + diff * (n - 1);
                        // sum
                        sum.items.push(item);
                        sum.total += item;
                        // data chart
                        dataToChart.labels.push(n);
                    }
                    dataToChart.key = Date.now();
                    dataToChart.datasets = [
                        {
                            label: `Różnica: ${diff}`,
                            data: JSON.parse(JSON.stringify(sum.items)),
                            backgroundColor: ["rgba(0, 206, 201, 0.15)"],
                            borderColor: ["rgba(0, 206, 201, 1.0)"],
                            borderWidth: 2
                        }
                    ];
                }
            }
            //
            commit("changeResultPreview", true);
        }
    }
};
