<template>
  <div class="home">
    
    <Header :image="userProfileImg"/>

    <div class="container">
        <div class="main-box">
          <div class="article-side">
            <stories :stories="posts"/>
              
            <Article v-for="(item, index) in posts"
                             :key="index"
                             :name="item.author"
                             :image="item.images"
                             :location="item.location"
                             :message="item.message"
                             :userImg="item.userImg"
                             :likes="item.likes"
                             :initialComments="item.initialComments"
                             />
          </div>
          <div class="suggestion-side">
            <user-profile :username="user"
                          :image="userProfileImg"
                          :name="name"
                          :verified="verified"/>

            <div class="suggestions">
                <div class="suggestions__header row">
                    <h4 class="suggestions__title">Suggestions For You</h4>
                    <button class="suggestionAll">See All</button>
                </div>
                <div class="suggestions__list">
                    <suggestions v-for="(item, index) in suggestions"
                                  :key="index" 
                                  :image="item.image"
                                  :username="item.username"
                                  :verified="item.verified"
                                  :label="item.label"
                                  :link="item.link"
                                  :status="item.status"         
                                  />
                </div>
            </div>

            <Footer />
          </div>
        </div>
    </div>

    <Footer />

    <div class="overlay">

    </div>
  </div>
</template>


<script>
import Header from '../components/Header.vue'
import Article from '../components/Article.vue'
import Stories from '../components/stories.vue'
import UserProfile from '../components/User-profile.vue'
import Suggestions from '../components/suggestions.vue'
import Footer from '../components/footer.vue'
 
export default {
  name : 'Instagram',
  components: { Header,  Article, Stories, UserProfile, Suggestions, Footer},
  data(){
    return{
      user : "mukhammadjcn",
      name : "Mukhammad Ali",
      userProfileImg: require("@/assets/user.png"),
      posts : [
        {
          author: 'ulugbekhon',
          location: 'United Arab Emirates',
          username: '@ulugbekhon',
          message : `Я, конечно, понимаю, что вам интереснее было бы читать конкретные истории из моей жизни, но специфика моего бизнеса не позволяет мне говорить о нем открыто. Конфиденциальность - основа!  И как бы ни пытаться завуалировать имена, места и ситуации, все равно все можно соотнести и найти параллели, и тогда моя репутация уже ничего не будет стоить. Сами понимаете, этого допустить я не могу. Поэтому, просто периодически делюсь с вами своими мыслями и эмоциями. Сегодня хочу сказать следующее - вторые шансы давать надо не всем и не всегда! Очень аккуратно надо подходить к данному вопросу, потому что либо человек вернётся к вам благодарным за этот второй шанс и воспользуется им правильным образом, либо во второй раз этот человек не промахнется!`,
          userImg : require("@/assets/user1/user1-img.jpg"),
          likes : Math.floor(Math.random()*1000),
          images : [
             require("@/assets/user1/user1-img1.jpg"),                                                  
          ],
          initialComments : [
            {
              username : "alisher.sadullayev",
              message : "Sizning ishlaringiz tahsinga sazovar"
            },
            {
              username : "natali",
              message : " было бы читать конкретные истории из моей жизни, но специфика моего "
            },
            
          ]
        },
        {
          author: 'uzdexx',
          location: 'Emirate of Dubai',
          username: '@uzdexx',
          message : 'Corvette C7 🚀 🚀 🚀 125000$ (Rastamojka bilan)',
          likes : Math.floor(Math.random()*1000),
          userImg : require("@/assets/user2/user2-img.jpg"),
          images : [
            require("@/assets/user2/user2-img1.jpg"),
             require("@/assets/user2/user2-img2.jpg"),
             require("@/assets/user2/user2-img3.jpg"),
             require("@/assets/user2/user2-img4.jpg"),                                                  
          ],
          initialComments : [
            {
              username : "elzodxon",
              message : " salom bolakay"
            },            
          ]
        },
        {
          author: 'jakhongir_pulatov',
          location: 'Tashkent, Uzbekistan',
          username: '@jakhongir_pulatov',
          message : "Nikoh yarim iymonni but qiladi, oilaga va kasbga baraka olib keladi va uylangan inson Rosululloh (s.a.v) ning sunnatlariga ergashgan bo'ladi.",
          userImg : require("@/assets/user3/user3-img.jpg"),
          likes : Math.floor(Math.random()*1000),
          images : [
             require("@/assets/user3/user3-img1.jpg"),                                                  
          ],
          initialComments : [
            {
              username : "temurbek_adhamov",
              message : "IQ education bilan hamkorlik qilish kerak"
            },
            {
              username : "abdusattor",
              message : "@mukhammadjcn bilan shartnoma imzoladik, siz kabi )"
            },
            
          ]
        },
        {
          author: 'raisbuva.uz',
          location: '',
          username: '@raisbuva.uz',
          message : "'Франц 3' намойиш этади! - Амакижон амакижон, бизга битта қисса айтиб беринг...?! - Иккита бўлса, яна яхши...",
          userImg : require("@/assets/user4/user4-img.jpg"),
          likes : Math.floor(Math.random()*1000),
          images : [
             require("@/assets/user4/user4-img1.jpg"),                                                  
          ],
          initialComments : [
            {
              username : "mehriddin.official",
              message : "Bu aka zamondan ancha orqada qolib ketganmi deyman"
            },
            {
              username : "izzatillox_usmonov",
              message : "Erteku bu"
            },
            
          ]
        },
        {
          author: 'kendalljenner',
          location: 'Fucking beach',
          username: '@kendalljenner',
          message : "this sweater gets me",
          userImg : require("@/assets/user7/user7-img.jpg"),
          likes : Math.floor(Math.random()*1000),
          images : [
             require("@/assets/user7/user7-img1.jpg"),  
             require("@/assets/user7/user7-img2.jpg"),  
             require("@/assets/user7/user7-img3.jpg"),  
             require("@/assets/user7/user7-img4.jpg"),  
             require("@/assets/user7/user7-img5.jpg"),                                                    
          ],
          initialComments : [
            {
              username : "jenatkinhair",
              message : "Ur cute. Like really cute."
            }            
          ]
        },
        {
          author: 'mfaktoruz',
          location: 'Mfaktor',
          username: '@mfaktoruz',
          message : "🎉 11-iyul bugun O‘zbekiston Yoshlar Ishlari Agentligi direktori, yoshlarni qo'llab quvvatlashda yetakchi bo'lgan Alisher Sa'dullayevning tavallud kunlari.",
          userImg : require("@/assets/user5/user5-img.jpg"),
          likes : Math.floor(Math.random()*1000),
          images : [
             require("@/assets/user5/user5-img1.jpg"),                                                  
          ],
          initialComments : [
            {
              username : "shaxzod.ochilov.370",
              message : "Tug'ilgan kuningiz muborak bo'lsin sizni juda hurmat qilmiz"
            },
            {
              username : "k.igamberdieva",
              message : "Тугилган куниз билан табриклайман.сог саломат булинг умриз узок булсин"
            },
            
          ]
        },
        {
          author: 'foundr',
          location: 'New York',
          username: '@foundr',
          message : "Tag a friend who needs to see this! 💰",
          userImg : require("@/assets/user6/user6-img.jpg"),
          images : [
             require("@/assets/user6/user6-img1.jpg"),                                                  
          ],
          likes : Math.floor(Math.random()*1000),
          initialComments : [
            {
              username : "fadil.dakir",
              message : "@mhand_sabri wayih akhoya 🙏"
            },
            {
              username : "elevatehomeloans",
              message : "Sometimes the simplest advice is the best advice 🙌"
            },
            {
              username : "alisher.kayyobi",
              message : "Ibi ka bu boganku axir ??"
            },
            
          ]
        },
        {
          author: 'kendalljenner',
          location: 'Home',
          username: '@kendalljenner',
          likes : Math.floor(Math.random()*1000),
          message : "🎾 @alo",
          userImg : require("@/assets/user7/user7-img.jpg"),
          images : [
             require("@/assets/user7/user7-img2-1.jpg"),                                                  
          ],
          initialComments : [
            {
              username : "jenatkinhair",
              message : "Ur cute. Like really cute."
            }            
          ]
        },        
      ],
      suggestions:[
        {
          id:1,
          image : require("@/assets/suggestion_images/suggestion1.jpg"),
          username : 'zuck',
          label : 'Wonts to be freind with you',
          link : '/zuck',
          verified : "https://img.icons8.com/color/16/000000/instagram-verification-badge.png",
          status : "Follow"
        },
        {
          id:2,
          image : require("@/assets/suggestion_images/suggestion2.jpg"),
          username : 'leo_17s',
          label : 'new to instagram',
          link : '/leo_17s',
          verified : '',
          status : "Follow"
        },
        {
          id:3,
          image : require("@/assets/suggestion_images/suggestion3.jpg"),
          username : 'sherzod',
          label : 'new to instagram',
          link : '/sherzod',
          verified : "https://img.icons8.com/color/16/000000/instagram-verification-badge.png",
          status : "Follow"
        },
        {
          id:4,
          image : require("@/assets/suggestion_images/suggestion4.jpg"),
          username : 'karina_nigay',
          label : 'new to instagram',
          link : '/karina_nigay',
          verified : "https://img.icons8.com/color/16/000000/instagram-verification-badge.png",
          status : "Follow"
        },
        
      ]
    }
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100;300;500;700;900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration-line: none;
  font-family: 'Encode Sans', sans-serif;
}
.home{
  position: relative;
}
.main-box{
  display: flex;
  align-items: flex-start;
  padding: 90px 0 160px;
  .article-side{
    width: 65%;
  }
  .suggestion-side{
    width: 35%;
    margin: 24px 0 0 24px;
    .footer{
      position: initial;
      &__nav{
        flex-wrap: wrap;
        gap: 12px;
        font-size: 12px;
        justify-content: flex-start;
      }
      &__label{
          justify-content: flex-start;
          margin-top: 24px;
          select{
            display: none;
          }
      }
    }
  }
}
.overlay{
  height: 100vh;
  width: 100%;
  position: fixed;
  background: rgba(0,0,0,0.3);
  display: none;
}

@media(max-width: 400px){
    .suggestion-side{
        display: none;
    }
    .main-box{
      justify-content: center;
      .article-side{width: 100%;}
    }
    .container{
      width: 96%;
    }
}
</style>

