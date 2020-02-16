<template>
<div id="projects" class="content">
    <div id="apps" class="page-header">
        <h3 class="large">{{ $str('Mobile Apps') }}</h3>
    </div>
    <div>
        <Project
            v-for="(project, idx) in projects"
            :key="idx"
            :name="project.name"
            :description="project.description"
            :sourceLinks="project.sourceLinks"
            :downloadLinks="project.downloadLinks"
            :image="project.image"
        />
    </div>
    <div id="libraries" class="page-header">
        <h3 class="large">{{ $str('Libraries') }}</h3>
    </div>
    <div>
        <Project
            v-for="(project, idx) in libraries"
            :key="idx"
            :name="project.name"
            :description="project.description"
            :sourceLinks="project.sourceLinks"
            :downloadLinks="project.downloadLinks"
            :image="project.image"
        />
    </div>
    <div id="desktop" class="page-header">
        <h3 class="large">{{ $str('Desktop Apps') }}</h3>
    </div>
    <div>
        <Project
            v-for="(project, idx) in desktops"
            :key="idx"
            :name="project.name"
            :description="project.description"
            :sourceLinks="project.sourceLinks"
            :downloadLinks="project.downloadLinks"
            :image="project.image"
        />
    </div>
</div>
</template>

<script>
import Project from './Project'

export default {
    components: {
        Project
    },
    data() {
        return {
            projects: [
                {
                    name: `Prodigal ${this.$str('Music Player')}`,
                    description: this.$str('desc_prodigal'),
                    image: "https://i.loli.net/2019/11/22/ACfbLT59Uuavwos.png",
                    sourceLinks: [
                        {
                            name: 'iOS', link: 'https://github.com/SpongeBobSun/Prodigal-iOS'
                        },
                        {
                            name: 'Android', link: 'https://github.com/SpongeBobSun/Prodigal'
                        }
                    ],
                    downloadLinks: [
                        {
                            name: 'iOS', link: 'https://apps.apple.com/cn/app/prodigal-music-player/id1231296263'
                        },
                        {
                            name: 'Android', link: 'https://play.google.com/store/apps/details?id=bob.sun.prodigal'
                        }
                    ]
                },
                {
                    name: `Puff ${this.$str('Password Manager')}`,
                    description: this.$str('desc_puff'),
                    image: "https://i.loli.net/2019/11/22/magNJ1HY6XtZAvW.png",
                    sourceLinks: [
                        {
                            name: 'iOS', link: 'https://github.com/PuffOpenSource/Puff-iOS/'
                        },
                        {
                            name: 'Android', link: 'https://github.com/PuffOpenSource/Puff-Android'
                        }
                    ],
                    downloadLinks: [
                        { name: 'iOS', link: 'https://apps.apple.com/cn/app/puff-password-manager-open-source-free/id1183663532' },
                        { name: 'Android', link: 'https://play.google.com/store/apps/details?id=sun.bob.leela' }
                    ]
                }
            ],
            libraries: [
                {
                    name: 'mCalendarView 📅',
                    description: this.$str('desc_calendar'),
                    sourceLinks: [
                        { name: 'Android', link: 'https://github.com/SpongeBobSun/mCalendarView/' }
                    ],
                    downloadLinks: []
                },
                {
                    name: 'PoorEdit 📝',
                    description: this.$str('desc_poor_edit'),
                    sourceLinks: [
                        { name: 'Android', link: 'https://github.com/SpongeBobSun/PoorEdit/' }
                    ],
                    downloadLinks: []
                },
                {
                    name: 'Holophonor 🎷',
                    description: this.$str('desc_holophonor'),
                    sourceLinks: [
                        { name: 'iOS', link: 'https://github.com/SpongeBobSun/Holophonor/' }
                    ],
                    downloadLinks: []
                }
            ],
            desktops: [
                {
                    name: 'Clashy',
                    description: `A GUI proxy client for Windows / Mac / Ubuntu Desktop.

                    Based on Clash.

                    Build with Electron & React.js

                    Manage subscriptions.

                    Proxy server speed test.

                    Set as system proxy.

                    Material Design.

                    Cross platform.
                    `,
                    image: "https://i.loli.net/2019/11/22/Ch18b6wN7jURYpr.png",
                    sourceLinks: [
                        { name: 'All Platform', link: 'https://github.com/SpongeNobody/Clashy/' }
                    ],
                    downloadLinks: [
                        { name: 'All Platform', link: 'https://github.com/SpongeNobody/Clashy/releases' }
                    ]
                },
                {
                    name: 'LiveDeveloperExcuses',
                    description: this.$str('desc_livedevex'),
                    image: "https://i.loli.net/2020/02/13/Y17INtKL2W3uoZP.png",
                    sourceLinks: [
                        { name: 'macOS', link: 'https://github.com/SpongeBobSun/LiveDeveloperExcuses/' }
                    ],
                    downloadLinks: [
                        { name: 'macOS', link: 'https://github.com/SpongeBobSun/LiveDeveloperExcuses/releases' }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../styles/query.less';
.content {
    min-width: 80%;
    max-width: 80%;
    box-sizing: border-box;
    display: flex;
    margin: 50px 0px;
    flex-direction: column;
    justify-content: flex-start;
    .large {
        font-size: 28px;
    }
}
@media @tablet {
    .content {
        max-width: 100%;
        min-width: 100%;
        h3 {
            text-align: center;
        }
    }
}
@media @phone {
    .content {
        max-width: 100%;
        min-width: 100%;
        h3 {
            text-align: center;
        }
        .large {
            font-size: 24px;
        }   
        h3:before {
                content: ">> "
            }
        h3:after {
                content: " <<"
            }
    }
}
</style>