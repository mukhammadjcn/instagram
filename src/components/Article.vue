<template>
    <article class="article">
        <div class="article__header row">
            <div class="article__user-info row">
                <img :src="userImg" alt="">
                <div class="article__user-label">
                    <h2 class="user-name">{{name}}</h2>
                    <p class="image-location">{{ location }}</p>
                </div>
            </div>
            <span class="article__option" @click="openOption()">
                    <svg aria-label="More options" class="_8-yf5 " fill="#262626" height="16" role="img" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
            </span>
        </div>
        <div class="article__img">
            <VueSlickCarousel v-bind="settings" >
                <img v-for="(img, index) in image" :key="index"   :src="img" alt="" @dblclick="postLike()">        
            </VueSlickCarousel>
        </div>
        <div class="article__main">
            <div class="article__buttons row">
                <div class="article__fealings row">
                    <button class="likePost">
                        <svg aria-label="Like" :class="isActive ? ' _8-yf5 likeAnimation' : 'isActive _8-yf5 likeAnimation' " @click="postLike()" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                        <svg aria-label="Unlike" :class="isActive ? 'isActive _8-yf5 likeAnimation' : '_8-yf5 likeAnimation' " @click="postLike()" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    </button>
                    <button class="commentPost">
                        <svg aria-label="Comment" class="_8-yf5 " fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                    </button>
                    <button class="sharePost">
                        <svg aria-label="Share Post" class="_8-yf5 " fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                    </button>
                </div>
                <button class="savePost">
                    <svg aria-label="Save" class="_8-yf5 " fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>                
                </button>
            </div>
            <div class="article__likes">
                <span>{{likes}} {{this.likes == 1 ? "like" : "likes"}}</span>
            </div>
            <div class="article__info">
                <p class="article__message"> <b>{{name}}</b> <span :class="isComment ? '' : 'activeComment' ">{{newMssg}}... <span @click="showComment()" :class="isCommentBtn ? 'messBtn' : 'isCommentBtn messBtn' ">more</span> </span>
                                                             <span :class="isComment ? 'activeComment' : '' ">{{message}} <span @click="showComment()" class="messBtn">less</span> </span>
                
                </p>
                <p class="article__comments">View all {{commentNumber}} comments</p>
                <div class="article__comment-list"> 
                        <article-comment v-for="(item, index) in initialComments"
                             :key="index"
                             :name="item.username"
                             :content="item.message"
                             />
                        <article-comment v-for="(item, index) in comments"
                             :key="index"
                             :name="item.author"
                             :content="item.comment"
                             />                 
                </div>
            </div>
            <div class="article__footer row">
                <button class="comment-emoji">
                    <svg aria-label="Emoji" class="_8-yf5 " fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
                </button>
                <input type="text" class="comment-input" v-model="commentInput" placeholder="Add comment here ...">
                <button class="post-comment" @click="postIt" >Post</button>
            </div>
        </div>

        <div @click="closeOption()" :class="isArticleOption ? 'showArticleOption' : '' " class="overlay" >
            <div :class="isArticleOption ? 'showArticleOption' : '' " class="articleModal" >
                <button class="a-spam">Report</button>
                <button class="a-unfollow">Unfollow</button>
                <button class="a-smessage">Go to post</button>
                <button @click="closeOption()" class="a-cancel">Cancel</button>
            </div>
        </div>
    </article>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ArticleComment from './Article-comment.vue'


export default {
    name : "Article",
    components: {VueSlickCarousel, ArticleComment},
    data() {
      return {
        isActive : true,
        isComment : true,
        isArticleOption: false,
        isCommentBtn : this.message.split(' ').length>8,
        settings: {
            "accessibility": false,
            "dots": true,
            "infinite": true,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "adaptiveHeight": true
        },
        comments: [],
        commentInput : '',
        commentNumber : this.initialComments.length,
        newMssg : this.message.split(" ").splice(0, 8).join(" ")
      }
    },
    methods:{
        postLike(){
            this.isActive = !this.isActive
            !this.isActive ? this.likes++ : this.likes--
        },
        showComment(){
            this.isComment = !this.isComment
        },
        postIt(){
        if(this.commentInput){
            this.comments.push(
            {
            comment:  this.commentInput,
            author: 'mukhammadjcn',
            }
            )
            this.commentNumber++
            this.commentInput = ''
            }
                
        },
        openOption(){
            this.isArticleOption = true
            document.body.classList.add("overflowNone")
        },
        closeOption(){
            this.isArticleOption = false
            document.body.classList.remove("overflowNone")
        }
    },
    props:{
    name: {
      type: String,
      default: ''
    },
    location : {
        type : String,
        default : ''
    },
    image : {
        type : String,
        default : ''
    },
    message : {
        type : String,
        default : ''
    },
    userImg : {
        type : String,
        default : ''
    },
    initialComments : {
        type : String,
        default : ''
    },
    likes :{
        type : String,
        default : ''
    }
  }
}

</script>

<style lang="scss">
.slick-dots{
    z-index: 0;
    bottom : -24px;
    li{
        margin: 0;
        button:before{
            font-size: 8px;
        }
    }
    li.slick-active button:before {
    opacity: 0.75;
    color: #0095F6;
    }
}
.slick-prev {
    left: 10px;
    z-index: 1;
}
.slick-next {
    right: 10px;
}
.slick-prev:before, .slick-next:before {
    font-size: 24px;
}
.isActive{
    display: none;   
}
.messBtn{
    color: #a8a8a8;
    margin-left: 6px;
}
.isCommentBtn{
    display: none;
}
.activeComment{
    display: none;
}
.likeAnimation{
    animation: scale-down-center 0.8s ease-out both;
}
.article{
    background: #fff;
    border-radius: 4px;
    border: 1px solid #ebebeb;
    margin-top: 36px;

    &__user-info img{
        width: 32px;
        height: 32px;
        object-fit: cover;
        cursor: pointer;
        border-radius: 50%;
    }
    &__user-info{
        gap: 16px;
    }
    &__header{
        padding: 16px;
        align-items: center;
    }
    &__option{
        cursor: pointer;
    }
    &__user-label{
        .user-name{
            font-size: 16px;
            color: #262626;
            font-weight: 500;

        }
        .image-location{
            font-size: 12px;
            opacity: 0.6;
        }
    }
    &__main{
        padding: 4px 16px;
        .savePost{
            background: transparent;
            outline: none;
            border: none;
        }
    }
    &__fealings{
        gap: 12px;
        button{
                background: transparent;
                outline: none;
                border: none;
        }
        .row{
            gap: 10px;
        }
    }
    &__info{
        font-size: 14px;
        line-height: 16px;
        padding-bottom: 16px;
    }
    &__message{
        padding: 12px 0;
    }
    &__comments{
        color: #8e8e8e;
        font-size: 14px;
    }
    &__comment-list-item{
        padding-top: 6px;
        font-size: 13px;
        .comment-like{
            float: right;
        }
    }
    &__footer{
        padding: 16px 0;
        gap: 20px;
        border-top: 1px solid #e6e6e6;
        button, .post-comment{
            border: none;
            background: transparent;
            outline: none;
        }
        .comment-input{
            flex-grow: 1;
            border: none;
            outline: none;
        }
        .post-comment{
            color: #0095f6;
            font-weight: 600;
        }
    }

}
.showArticleOption{
    display: flex !important;
}
.articleModal{
    width: 400px;
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
  .a-unfollow, .a-spam{
      width: 100%;
      background: transparent;
      border: none;
      height: 44px;
      border-top: 1px solid #dbdbdb;
      color: #ed4956;
      font-weight: 700;
  }
  .a-smessage , .a-cancel{
      width: 100%;
      background: transparent;
      border: none;
      border-top: 1px solid #dbdbdb;
      height: 44px;
      font-weight: 500;
      color: #262626;
  }
  .a-spam{
    border: none;
  }
}
.overlay{
    position: fixed;
    height: 100vh;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.74) !important;
    z-index: 2;
    overflow-y: hidden !important;
    animation: scale-down-center 0.1s ease-out both;
}
.overflowNone{
    overflow-y: hidden;
}
@keyframes scale-down-center {
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 400px){
    .articleModal{
        width: 90%;
    }
}
</style>