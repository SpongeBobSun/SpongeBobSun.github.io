<template>
    <div class="wrapper">
        <p class="name phone-only">
            {{ name }}
        </p>
        <div
            v-if="image != null && image.length !== 0"
            class="img"
            :style="`background-image: url(${image});`"
        />
        <div class="detail">
            <p class="name desktop-only">
                {{ name }}
            </p>
            <p class="description">
                {{ description }}
            </p>
            <div class="links" v-if="sourceLinks.length !== 0">
                <p class="top-line yellow" >{{ $str('Review source code') }}</p>
                <a
                    class="btn btn-primary pull-right mr-20"
                    v-for="(sl, idx) in sourceLinks"
                    :key="idx"
                    :href="sl.link"
                >
                    {{ sl.name }}
                </a>
            </div>
            <div class="links" v-if="downloadLinks.length !== 0">
                <p class="yellow" >{{ $str('Get it in App Store!') }}</p>
                <a
                    class="btn btn-primary pull-right mr-20"
                    v-for="(dl, idx) in downloadLinks"
                    :key="idx"
                    :href="dl.link"
                >
                    {{ dl.name }}
                </a>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false,
            default: ''
        },
        sourceLinks: {
            type: Array,
            required: false,
            default: []
        },
        downloadLinks: {
            type: Array,
            required: false,
            default: []
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../styles/query.less';

.wrapper {
    display: flex;
    margin-top: 30px;
    padding-bottom: 30px;
    border-bottom: 2px solid #FFFFFF;
    .img {
        background-repeat: no-repeat;
        background-position: top;

    }
    .name {
        font-size: 24px;
        font-weight: 600;
        color: #EB65F7;
    }
    .detail {
        display: flex;
        width: 100%;
        flex: 1;
        flex-direction: column;
        padding: 16px;
        .description {
            font-size: 20px;
            white-space: pre-line;
        }
        .mr-20 {
            margin-right: 20px;
        }
    }

    .top-line {
        border-top: 2px dashed #FFFFFF;
        padding-top: 10px;
    }
    .yellow {
        color: #FFFD72;
    }
}

@media @desktop {
    .img {
        width: 200px;
        min-height: 200px;
        background-size: contain;
    }
}

@media @phone {
    .wrapper {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .img {
        width: 300px;
        min-height: 300px;
        background-size: contain;
    }
}

@media @tablet {
    .wrapper {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .img {
        width: 300px;
        min-height: 300px;
        background-size: contain;
    }
}

</style>