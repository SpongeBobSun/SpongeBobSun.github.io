<template>
    <div id="skills" class="wrapper">
        <div class="hero-unit">
            <h1>{{ $str('Skills') }}</h1>
            <div class="row-fluid">
                <div class="span6">
                    <em>iOS</em>
                    <ul>
                        <li>Objective-C / Swift;</li>
                        <li>{{ $str('Platform specified features like KVO / KVC / Runtime') }};</li>
                        <li>{{ $str('Multithread with GCD / NSOperation / NSThread') }};</li>
                        <li>{{ $str('Hybrid development') }};</li>
                        <li>React-Native native modules;</li>
                        <li>{{ $str('Common used open-source libraries') }};</li>
                    </ul>
                    <em>Android</em>
                    <ul>
                        <li>Java &amp; Android {{ $str('components') }};</li>
                        <li>{{ $str('Customize Widgets') }} &amp; {{ $str('Layouts') }} &amp; {{ $str('Animations') }};</li>
                        <li>{{ $str('Hybrid development') }} ;</li>
                        <!-- <li>Database &amp; ORMs</li> -->
                        <li>{{ $str('Common used open-source libraries') }};</li>
                    </ul>
                    
                </div>
                <div class="span6">
                    <em>Web</em>
                    <ul>
                        <li>React.js &amp; Vue.js &amp; jQuery &amp; Zepto {{ $str('for webpages') }};</li>
                        <li>{{ $str('React-Native for dynamic Apps') }};</li>
                        <li>{{ $str('Framework specified echosystems') }};</li>
                        <li>{{ $str('Desktop Apps with Electron') }};</li>
                        <li>Node.js {{ $str('server') }} &amp; CLI {{ $str('tools') }};</li>
                        <li>ES6 / Typescript / Webpack / CSS / {{ $str('Responsive Design') }};</li>
                    </ul>
                    <em>{{ $str('Others') }}</em>
                    <ul>
                        <li>{{ $str('Common used design patterns') }};</li>
                        <li>{{ $str('Data structure') }} &amp; {{ $str('Algorithms') }};</li>
                        <li>Python / Flask {{ $str('servers') }};</li>
                        <li>Golang;</li>
                        <li>{{ $str('Service deployment') }} &amp; {{ $str('Server maintain') }};</li>
                        <li>{{ $str('CLI tools like git / zsh / tmux / vim') }};</li>
                    </ul>
                </div>

            </div>
            <div>
                <a href="https://github.com/SpongeBobSun/" class="btn btn-primary btn-large pull-right">{{ $str('Visit my Github') }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    max-width: 80%;
    padding-bottom: 50px;
    border-bottom: 2px solid #FFFFFF;
    li {
        margin: 10px 0px;
    }
    h1 {
        font-size: 30px;
    }
    em {
        color: #fefe54;
    }
}
@media (max-width: 767px) {
    .wrapper {
        max-width: unset;
    }
}
</style>