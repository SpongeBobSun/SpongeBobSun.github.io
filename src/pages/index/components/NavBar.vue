<template>
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="brand" href="./index.html">&lt;Bob Sun/&gt;</a>
          <ul class="nav">
            <li class="">
              <a href="#intro">{{ $str('Intro') }}</a>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle"
                data-toggle="dropdown">
                  {{ $str('Projects') }}
                  <b class="caret" style="margin: 4px 10px;"></b>
              </a>
              <ul class="dropdown-menu">
                  <li><a href="#apps">{{ $str('Apps') }}</a></li>
                  <li><a href="#libraries">{{ $str('Libraries') }}</a></li>
                  <li><a href="#desktop">{{ $str('Desktop Apps') }}</a></li>
                  <li class="divider"></li>
                  <li><a href="#commercial">{{ $str('Commercial Projects') }}</a></li>
                </ul>
            </li>
            <li><a href="#about">{{$str('About')}}</a></li>
            <li><a href="#contact">{{$str('Contact')}}</a></li>
            <li><a @click="changeLang">
              {{ currentLang == 'en' ? '中文' : 'English' }}
            </a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    computed: {
      currentLang: function() {
        return window.lang || 'en'
      }
    },
    methods: {
      changeLang() {
        window.lang = this.currentLang == 'en' ? 'zh' : 'en'
        if (window.lang == 'en') {
          window.location.href = window.location.protocol + '//' + window.location.host + window.location.pathname
        } else {
          window.location.href = window.location.href + '?lang=' + window.lang
        }
      }
    }
}
</script>