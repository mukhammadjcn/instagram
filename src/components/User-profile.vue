<template>
    <div class="user row">
        <div class="user__profile row">
            <img :src="image" class="user__img" alt="">
            <div class="user__info">
                <h1 class="user__name">{{username}} <img class="verifiedIcon" src="https://img.icons8.com/color/16/000000/instagram-verification-badge.png"/></h1>
                <p class="user__title">{{name}}</p>
            </div>
        </div>
        <button class="user__switch">Switch</button>
    </div>
</template>

<script>
export default {
    name : "user-profile",
    props : {
        username : {
            type : String,
            default : ''
        },
        name : {
            type : String,
            default : ''
        },
        image : {
            type : String,
            default :''
        }
    }

}
</script>

<style lang="scss">
.verifiedIcon{
    vertical-align: text-bottom;
    margin-left: 2px;
}
.user{
    margin-bottom: 12px;
    &__profile{
    gap: 20px;
    }
    &__name{
        color: #262626;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
    }
    &__title{
        color: #8e8e8e;
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
    }
    &__img{
        border-radius: 50%;
        width: 56px;
        height: 56px;
        object-fit: cover;
    }
    &__switch{
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        color: #0095f6;
        background: none;
        border: none;
    }
}
</style>