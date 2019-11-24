<template>
    <div class="wrapper" id="about">
        <div class="page-header">
            <h3>{{ $str('About') }}</h3>
        </div>
        <pre class="prettyprint lang-javascript">
export class BobSun {
    constructor() {
        this.name = 'Bob Sun'
        this.dayOfBirthTimeStamp = 704995200
        this.gender = '{{ $str('Male') }}'
    }

    education() {
        return [
            { '2010-2014': '{{ $str('desc_edu') }}' }
        ]
    }

    workingExperience() {
        return [
            { 'May 2018 - {{ $str('present') }}': 'iOS {{ $str('developer') }} @ meituan.com' },
            { 'Dec 2015 - May 2018': 'iOS {{ $str('developer') }} @ glowing.com' },
            { 'May 2015 - Dec 2015': 'Android {{ $str('developer') }} @ Wonders Group' },
            { 'Jul 2014 - May 2015': 'COBOL {{ $str('developer') }} @ sungard.com' },
            { '2011 - {{ $str('present') }}': '{{ $str('Indie developer & Open source enthusiast') }}'}
        ]
    }
}
        </pre>
    <div class="page-header" id="contact">
        <h3>{{ $str('Contact') }}</h3>
    </div>
    <p>
        <a>Email: <img src="../../../assets/email.png"/></a>
        <p>⬆️ Above email address is an image in order to prevent spams.</p>
    </p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
@import '../../../styles/query.less';

.wrapper {
    box-sizing: border-box;
    display: flex;
    min-width: 80%;
    max-width: 80%;
    flex-direction: column;
    margin-bottom: 50px;
    pre {
        box-sizing: border-box;
        display: inline-block;
        width: 100%;
        border: unset !important;
        padding: 10px 10px;
    }
}

@media @phone {
    .wrapper {
        min-width: 100%;
    }
}

@media @tablet {
    .wrapper {
        min-width: 100%;
    }
}

</style>