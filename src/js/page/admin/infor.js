import Header from './../../vue/head.vue'
import Bottom from './../../vue/bottom.vue'
import 'bootstrap/dist/css/bootstrap.css';
require("./../../../css/common/common.css");
require("./../../../css/page/beecubic.css");
require("./../../../css/page/index.css")
import vue from 'vue'

new vue({
    el:"#pgHead",
    render: h => h(Header)
})
new vue({
    el:"#pgFoot",
    render: h => h(Bottom)
})