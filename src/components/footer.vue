<template>
    <div class="footer">
        <nav class="footer__nav">
            <router-link v-for="(item, index) in footerLinks" :key="index" class="footer__nav-link" :to="item.link"> {{item.name}} </router-link>
        </nav>
        <div class="footer__label">
            <select name="" id="">
                <option v-for="(item, index) in languages" :key="index" :value="item.value"> {{item.name}}</option>
            </select>
            <p class="footer__copyright">© 2021 Instagram from Facebook</p>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Footer',
    data(){
        return{
            footerLinks :[
                {
                    name: 'About',
                    link : '/about'
                },
                {
                    name: 'Blog',
                    link : '/blog'
                },
                {
                    name: 'Jobs',
                    link : '/jobs'
                },
                {
                    name: 'Help',
                    link : '/help'
                },
                {
                    name: 'API',
                    link : '/api'
                },
                {
                    name: 'Privacy',
                    link : '/privacy'
                },
                {
                    name: 'Top Accounts',
                    link : '/directory/profiles'
                },
                {
                    name: 'Hashtags',
                    link : '/hashtags'
                },
                {
                    name: 'Locations',
                    link : '/locations'
                },
                
            ],
            languages : [
                {
                    value: 'English',
                    name : 'English'
                },
                {
                    value: 'Afrikaans',
                    name : 'Afrikaans'
                },
                {
                    value: '中文 & 台灣',
                    name : 'Chinese'
                },
                {
                    value: 'Český',
                    name : 'Czech '
                },
                {
                    value: 'Dansk',
                    name : 'Danish'
                },
                {
                    value: 'Nederlands',
                    name : 'Dutch'
                },
                {
                    value: 'Suomi',
                    name : 'Finnish'
                },
                {
                    value: 'Français',
                    name : 'French'
                },
                {
                    value: 'Deutsch',
                    name : 'German '
                },
                {
                    value: 'Ελληνικά',
                    name : 'Greek'
                },
                {
                    value: 'Bahasa Indonesia',
                    name : 'Indonesian'
                },
                {
                    value: 'Italiano',
                    name : 'Italian'
                },
                {
                    value: '日本語',
                    name : 'Japanese'
                },
                {
                    value: '한국어',
                    name : 'Korean'
                },
                {
                    value: 'Bahasa Melayu',
                    name : 'Malay'
                },
                {
                    value: 'Bahasa Melayu',
                    name : 'Norwegian'
                },
                {
                    value: 'Norsk',
                    name : 'Norwegian'
                },
                {
                    value: 'Polski',
                    name : 'Polish'
                },
                {
                    value: 'Português',
                    name : 'Portuguese'
                },
                {
                    value: 'Русский',
                    name : 'Russian'
                },
                {
                    value: 'Español',
                    name : 'Spanish'
                },
                {
                    value: 'Svenska',
                    name : 'Swedish'
                },
                {
                    value: 'Filipino',
                    name : 'Tagalog'
                },
                {
                    value: 'ภาษาไทย',
                    name : 'Thai'
                },
                {
                    value: 'Türkçe',
                    name : 'Turkish '
                },                
            ]
        }
    }
}
</script>

<style lang="scss">
.footer{
    position: absolute;
    width: 100%;
    bottom: 0;
    padding-bottom: 48px;
    &__nav{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 24px;
        gap: 20px;
        font-size: 12px;
        &-link{
            color: #8e8e8e;
            font-weight: 300;
        }
    }
    &__label{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin: 12px 0;
        font-size: 12px;
        color: #8e8e8e;
        select{
            border: none;
            background: transparent;
            outline: none;
            opacity: 0.4;
            font-size: 12px;
        }
    }
    &__copyright{
        font-weight: 300;
    }
}
@media(max-width: 400px){
    .footer__nav{
        width: 94%;
        flex-wrap: wrap;
        row-gap: 10px;
        margin: auto;
        margin-bottom: 24px;
    }
}
</style>