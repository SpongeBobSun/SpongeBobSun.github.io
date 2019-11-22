<template>
    <div class="shifty"><pre>{{ text }}</pre></div>
</template>

<script>
const characters = '!@#$%^*()-=+_~`{}<?>'

export default {
    props: {
        words: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            text: '',
            index: 0
        }
    },
    mounted() {
        this.start()
    },
    methods: {
        start() {
            const word = this.words[this.index]
            this.nextRound(word, 0)
        },
        nextRound(word, i) {
            const len = word.length
            if (i == word.length) {
                this.index += 1
                if (this.index >= this.words.length) {
                    this.index = 0
                }
                setTimeout(function () {
                    const word = this.words[this.index]
                    this.nextRound(word, 0)
                }.bind(this), 2000)
                return
            }
            if (i == 0) {
                this.text = this.getSpace(word.length)
            } else if (i === word.length - 1) {
                this.text = word
            } else {
                this.text = word.substr(0, i + 1) + this.getRandoms(len - i - 1)
            }
            setTimeout(function () {
                this.nextRound(word, i + 1)
            }.bind(this), 150)
        },
        getRandoms(len) {
            let ret = ''
            for (let i = 0; i < len; i++) {
                const which = Math.floor(Math.random() * 100) % characters.length
                ret += characters[which]
            }
            return ret
        },
        getSpace(len) {
            let ret = ''
            while (len >= 0) {
                ret += ' '
                len -= 1
            }
            return ret
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../styles/query.less';
.shifty {
    display: inline-block;
    span, pre {
        color: #822CCB;
        font-size: 50px;
        line-height: 50px;
        background-color: transparent !important;
        font-family: DOS, ZPIX, Monaco, Menlo, Consolas, "Courier New", monospace;
    }
}

@media @phone {
    .shifty {
        display: block;
        span, pre {
            font-size: 40px;
            margin-top: 10px;
        }
    }
}
</style>
