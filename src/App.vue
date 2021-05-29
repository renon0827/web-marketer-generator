<template>
  <img id="header" alt="web marketer" src="./assets/back.jpg" />
  <div id="contents">
    <div id="icon-and-button">
      <div id="icon-frame">
        <img id="icon" alt="web marketer" src="./assets/marketer.png" />
      </div>
      <button id="update-button" class="uk-button uk-button-default">
        プロフィールを更新する
      </button>
    </div>
    <div id="profile">
      <div>
        <div id="name">〇〇@〇〇</div>
        <div id="userid">@zukki_marketer</div>
      </div>
      <div id="sentence">
        {{ sentence }}
      </div>
      <div id="place">
        <div>
          <span uk-icon="icon: location;ratio: 0.7"></span
          >公式ライン限定で『プログラミング完全攻略ロードマップ』を配布中下向き矢印
        </div>
        <div><span uk-icon="icon: link;ratio: 0.7"></span>lin.ee/PDSvSzT</div>
      </div>
      <div id="follow">
        <span class="follow-count">{{ followCount }}</span
        >フォロー中
        <span class="follow-count uk-margin-small-left">{{
          followerCount
        }}</span
        >フォロワー
      </div>
    </div>
    <div id="menu">
      <ul class="uk-child-width-expand" uk-tab>
        <li class="uk-active"><a href="#">ツイート</a></li>
        <li><a href="#">ツイートと返信</a></li>
        <li><a href="#">メディア</a></li>
        <li><a href="#">いいね</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  data: function () {
    return {
      sentence: this.getSentence(),
      followCount: this.getFollowCount(),
      followerCount: this.getFollowCount(),
    };
  },
  methods: {
    getFollowCount: (): number => {
      return Math.floor(Math.random() * 100000);
    },
    getSentence: (): string => {
      return "";
    },
  },
});
</script>

<style>
html {
  height: 100%;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#app {
  display: inline-block;
  border-left: 1px solid rgb(230, 230, 230);
  border-right: 1px solid rgb(230, 230, 230);
  height: 100%;
  position: relative;
}

#header {
  max-width: 100%;
  max-height: 240px;
  z-index: -10;
}

#contents {
  margin-top: -64px;
  text-align: left;
  width: 100%;
  position: absolute;
}

#icon-and-button {
  position: relative;
  padding: 6px;
}

button.uk-button-default {
  border-radius: 30px;
  color: rgba(29, 161, 242, 1);
  font-weight: bold;
  border: 1px solid;
  padding: 0px 15px;
}

#update-button {
  position: absolute;
  bottom: 15px;
  right: 15px;
}

#icon {
  border-radius: 50%;
}

#icon-frame {
  border-radius: 50%;
  background-color: white;
  padding: 3px;
  display: inline-block;
  max-width: 128px;
}

#profile {
  padding: 8px;
  overflow-wrap: break-word;
}

#userid {
  margin-top: 2px;
  font-size: 14px;
  color: rgb(91, 112, 131);
}

#name {
  font-weight: bold;
  font-size: 18px;
}

#sentence {
  margin-top: 10px;
  font-size: 16px;
}

#place {
  color: rgb(91, 112, 131);
  margin-top: 8px;
  font-size: 14px;
  line-height: 16px;
}

#follow {
  margin-top: 10px;
  font-size: 16px;
}

.follow-count {
  font-weight: bold;
  margin-right: 3px;
}

span[uk-icon] {
  margin-right: 4px;
}

ul[uk-tab] li a {
  padding-bottom: 10px;
}

#menu {
  margin-top: 20px;
  font-weight: bold;
}
</style>
