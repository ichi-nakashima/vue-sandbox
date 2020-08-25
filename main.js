var app = new Vue({
    // mount する要素
    el: '#app',
    // アプリケーションで使用するデータ
    data: {
        list: [],
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
        },
        text: 'Vue'
    },
    // 算出プロパティ
    computed: {
        computedMessage: function () {
            return this.message + '!'
        }
    },
    // ライフサイクルハック（使用できるメソッドは決まっている。ex. created, mounted, etc..）
    mounted: function() {
        console.log(this.$el)
        console.log(this.$refs.hello)
    },
    created: function () {
        axios.get('list.json').then(function (response) {
            // 取得したらlistリストに代入
            this.list = response.data
        }.bind(this)).catch(function(e) {
            console.error(e)
        })
    },
    // アプリケーションで使用するメソッド
    methods: {
        handleClick: function() {
            alert('クリックしたよ')
        },
        increment: function () {
            // instance を指す this
            this.count += 1
        },
        decrement: function () {
            this.count -= 1
        },
        // 追加ボタンをクリックしたときのハンドラ
        doAdd: function () {
            // リスト内で最大のidを取得
            var max = this.list.reduce(function(a, b) {
                return a > b.id ? a : b.id
            }, 0)
            // 新しいモンスターをリストに追加
            this.list.push({
                id: max + 1, // 現在のリストの最大のidに+1してユニークなIDを作成
                name: this.name, // 現在のフォームの入力値
                hp: this.hp
            })
        },
        // 削除ボタンをクイックしたときのハンドラ
        doRemove: function (index) {
            // 受け取ったindex 位置から一つ要素を削除
            this.list.splice(index, 1)
        },
        doAttack: function (index) {
            this.list[index].hp -= 10
        }
    }
})