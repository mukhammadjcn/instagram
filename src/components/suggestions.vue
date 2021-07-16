<template>
    <div class="suggestions__list-item row">
        <div class="suggestions__profile row">
            <img :src="image" class="suggestions__img" alt="">
            <div class="suggestions__info">
                <router-link v-bind:to="link" class="suggestions__name">{{username}} <span><img class="verifiedIcon" :src="verified" alt=""></span></router-link>
                <p class="suggestions__label">{{label}}</p>
            </div>
        </div>
        <button :class="isActivee ? '' : 'followed'" class="suggestions__follow" @click="changeStatus()">{{isActivee ? status : "Followed"}}</button>

        <div @click="closeOption()" :class="modalActive ? 'modalActive' : ''" class="overlay">
            <div :class="modalActive ? 'modalActive' : ''" class="suggestionModal">
                <img :src="image" class="s-image" alt="">
                <p class="s-message">Unfollow @{{username}}</p>
                <button class="s-unfollowBtn" @click="unfollowSuggestion()">Unfollow</button>
                <button class="s-cancelBtn" @click="closeOption()">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Suggestion",
    data(){
        return{
            isActivee: true,
            modalActive : false,
        }
    },
    props :{
        image :{
            type : String,
            default : ''
        },
        username :{
            type : String,
            default : ''
        },
        label :{
            type : String,
            default : ''
        },   
        suggestions:{
            type: Array,
            default: () => {[]}
        },
        link:{
            type: String,
            default : ''
        },
        verified :{
            type: String,
            default : ''
        },
        status : {
            type: String,
            default : ''
        }     
    },
    methods : {
    changeStatus(){
            if (!this.isActivee) {
                this.modalActive = true
                document.body.classList.add("overflowNone")
            } else {
                this.isActivee = false;
            }
    },
    unfollowSuggestion(){
        this.modalActive = false,
        this.isActivee = true
        document.body.classList.remove("overflowNone")
    },
    closeOption(){
        this.modalActive = false
        document.body.classList.remove("overflowNone")
    }
  }

}
</script>

<style lang="scss">
.suggestions{
    margin: 24px 0;
    &__title{
        font-size: 14px;
        line-height: 18px;
        font-weight: 500;
        color: #8e8e8e;
    }
    .suggestionAll{
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: #262626;
        background: none;
        border: none;
    }
    &__list{
        margin: 12px 0;
        &-item{
            margin-bottom: 16px;
        }
    }
    &__img{
        border-radius: 50%;
        width: 32px;
        height: 32px;
        -o-object-fit: cover;
        object-fit: cover;
    }
    &__profile{
    gap: 20px;
    }
    &__name{
        color: #262626;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
    }
    &__title{
        color: #8e8e8e;
        font-size: 14px;
        line-height: 18px;
        font-weight: 500;
    }
    &__label{
        color: #8e8e8e;
        font-size: 12px;
        line-height: 16px;
        font-weight: 400;
    }
    &__follow{
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #0095f6;
        background: none;
        border: none;
        cursor: pointer;
    }
    &__header{
        margin-bottom: 16px;
    }
}
.followed{
    color: black;
}
.modalActive{
    display: flex !important;
}
.suggestionModal{
    width: 400px;
    height: 292px;
    border-radius: 12px;
    background: #fff;
    position: fixed;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    align-items: center;
    flex-direction: column;
    color: #262626;
    .s-image{
        width: 90px;
        height: 90px;
        object-fit: cover;
        border-radius: 50%;
        margin: 32px 16px 16px;
    }
    .s-message{
            margin: 16px 0 30px;
            font-weight: 300;
    }
    .s-unfollowBtn{
        width: 100%;
        background: transparent;
        border: none;
        height: 44px;
        border-top: 1px solid #dbdbdb;
        color: #ed4956;
        font-weight: 700;
    }
    .s-cancelBtn{
        width: 100%;
        background: transparent;
        border: none;
        border-top: 1px solid #dbdbdb;
        height: 44px;
        font-weight: 300;
    }
}
</style>