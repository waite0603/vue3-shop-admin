<template>
    <ul>
        <li>{{ myref0 }}</li>
        <li>{{ myref1 }}</li>
        <li>{{ myref2 }}</li>
        <li>{{ myref3 }}</li>
        <li>{{ myrea0 }}</li>
        <li>{{ myrea1 }}</li>
        <li>{{ myrea2.age }}</li>
        <li>{{ myrea3.user.name }}</li>
        <li>{{ myrea4.one.three.age.four }}</li>
    </ul>
    <el-button @click="change">change</el-button>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    setup() {
        let myref0 = ref(1);
        let myref1 = ref(2);
        let myref2 = ref(true);
        let myref3 = ref('myref3')
        let myrea0 = reactive(0);
        let myrea1 = reactive('myrea1');
        let myrea2 = reactive({ age: 3 })
        let myrea3 = reactive({
            user: {
                name: "zs",
            }
        })
        let myrea4 = reactive({
            top: 'top', one: {
                two: "two",
                three: {
                    name: "LS",
                    age: {
                        four: "four"
                    }
                },
            }
        })
        function change() {
            myref0 = 2;
            myref1.value++;
            myref2.value = false;
            myref3.value = 'MyRef333'
            myrea0++;
            myrea1 = 'myrea1111';
            myrea2.age++;
            myrea3.user.name = "ww";
            myrea4.one.three.age.four = "five";
            console.log(myref0);
            console.log(myrea0);
            console.log(myrea1);
        }
        return { myref0, myrea0, myref1, myrea1, myref2, myrea2, myref3, myrea3, myrea4, change }
    }
}
/*
1.ref包裹简单类型，可以响应数据变化。
2.reactive包裹简单类型，不可以响应数据变化。
3.在更改ref包裹的值时，需要加 .value 来触发响应。
4.在页面中使用，{{ }}进行文本插值时，即使使用ref包裹也不需要添加 .value 属性，得益于在检测到 __v_isRef:true 时，vue会帮我们添加。
*/
</script>
