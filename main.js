var app = new Vue({
    // mount する要素
    el: '#app',
    // アプリケーションで使用するデータ
    data: {
        list: [
            { id: 1, name: 'スライム', hp: 100},
            { id: 2, name: 'ゴブリン', hp: 200},
            { id: 3, name: 'ドラゴン', hp: 500}
        ],
        radius: 50,
        message: "vue.js",
        show: true,
        count: 0,
        classObject: {
            child: true,
            'is-active': false
        },
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray'
        },
        item: {
            id: 1,
            src: 'item1.jpg',
            alt: '商品1サムネイル',
            width: 200,
            height: 200
        }
    },
    // 算出プロパティ
    computed: {
        computedMessage: function () {
            return this.message + '!'
        }
    },
    // ライフサイクルハック（使用できるメソッドは決まっている。ex. created, mounted, etc..）
    created: function() {
        // TODO:
    },
    // アプリケーションで使用するメソッド
    methods: {
        increment: function () {
            // instance を指す this
            this.count += 1
        },
        decrement: function () {
            this.count -= 1
        }
    }
})