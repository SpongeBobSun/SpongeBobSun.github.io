const values = {
    zh: {
        'Intro': '简介',
        'Projects': '项目',
        'Libraries': '库&组件',
        'Desktop Apps': '桌面应用',
        'Commercial Projects': '商业项目',
        'About': '关于',
        'my name is': '我是',
        'I create': '我创建',
        'Apps': '移动应用',
        'Websites': '网站前后端',
        'Softwares': '桌面应用',
        'Things': '奇怪的东西',
        'Mobile Apps': '移动应用',
        'Skills': '技能',
        'Platform specified features like KVO / KVC / Runtime': 'KVO / KVC / Runtime 等平台特性',
        'Multithread with GCD / NSOperation / NSThread': '使用 GCD / NSOperation / NSThread 进行异步 / 多线程编程',
        'Hybrid development': '混合开发',
        'Common used open-source libraries': '常用开源库',
        'components': '组件',
        'Customize Widgets': '自定义组件',
        'Layouts': '布局',
        'Animations': '动画',
        'for webpages': '等前端框架',
        'React-Native for dynamic Apps': '使用React-Native进行动态化开发',
        'Framework specified echosystems': '前端框架生态系统',
        'Desktop Apps with Electron': '使用Electron进行桌面应用开发',
        'server': '服务器',
        'tools': '工具',
        'Responsive Design': '响应式设计',
        'Others': '其他',
        'Common used design patterns': '常用设计模式',
        'Data structure': '数据结构',
        'Algorithms': '算法',
        'servers': '后台服务',
        'Service deployment': '服务部署',
        'Server maintain': '服务运维',
        'CLI tools like git / zsh / tmux / vim': 'Git / zsh / tmux / vim 等命令行工具',
        'Visit my Github': 'Github主页',
        'Music Player': '音乐播放器',
        "Password Manager": '密码管理器',
        'Review source code': '查看源代码',
        'Get it in App Store!': '获取应用',
        'Contact': '联系方式',
        'Male': '男',
        'developer': '开发者',
        'present': '现在',
        'Indie developer & Open source enthusiast': '独立开发者 & 开源爱好者',
        desc_prodigal: `向经典的iPod播放器的一次致敬.

                    给你的智能手机带来了 \"滚轮交互\" 和 \"Coverflow\".
                    
                    提供 iOS & Android 双平台一致的界面和交互.

                    提供自定义主题功能.
                    `,
        desc_puff: `离线密码管理器.

                    使用 BCrypt 加密.

                    Material Design.

                    自带登陆信息快捷访问工具:

                    * Android 平台提供自定义安全键盘 & 通知栏
                    * iOS 平台提供 '今天' 小组件 & Safari 拓展
                    `,
        desc_calendar: `Android平台高度自定义化的日历组件.

                    自定义外观 & 日期标记样式.

                    可伸缩日历.

                    自带多种标记样式.
                    `,
        desc_poor_edit: `Android平台富文本编辑器.

                    使用纯 Java 编写.

                    提供所见即所得的编辑体验.
                    
                    提供JSON格式导入导出.
                    `,
        desc_holophonor: `iOS平台上音乐媒体库查询工具.
                    
                    支持 iTunes 数据库和本地音频文件.

                    提供多种纬度的查询.
                    `,
        desc_edu: '电子科技大学 - 学士学位'
    },
    en: {
        desc_prodigal: `A tribute to the classic player iPod.

                    Bring UX like \"Clicking Wheel\" / \"Coverflow\" to your modern smart phone.

                    Provide consistent UI / UX on both iOS & Android.

                    Allow customize App theme.
                    `,
        desc_puff: `Offline password manager.

                    Use BCrypt for credentials encrypting.

                    Material Design.

                    Provide quick access tools:

                    * Secure keyboard & pin to notification on Android.
                    * Today Widget & Safari extension on iOS
                    `,
        desc_calendar: `Customizable Calendar View for Android.

                    Customize appearance & markups.

                    Shrinkable calendar.

                    Built-in markup styles.
                    `,
        desc_poor_edit: `Rich Text Editor on Android.

                    Written in pure Java.

                    Provide WYSIWYG editing.
                    
                    JSON format export & import.
                    `,
        desc_holophonor: `Convenience library for managing & querying music on iOS devices
                    
                    Support iTunes library & local files.

                    Querying by several dimensions.
                    `,
        desc_edu: 'University of Electronic Science and Technology of China - Bachelor Degree'
    }
}

export const i18n = {
    install (Vue, options) {
        Vue.prototype.$str = getString
    }
}

function getString(key) {
    const locale = getLangQuery() || 'en'
    if (values[locale] == null) {
        return key
    }
    return values[locale][key] || key
}

export function getLangQuery() {
    const idx = window.location.href.indexOf('?')
    let locale = null
    if (idx > 0) {
        const queries = window.location.href.substr(idx + 1).split('&')
        for (let i = 0; i < queries.length; i++) {
            const each = queries[i]
            const kv = each.split('=')
            if (kv.length === 2 && kv[0] === 'lang') {
                locale = kv[1]
                break
            }
        }
    }
    return locale
}