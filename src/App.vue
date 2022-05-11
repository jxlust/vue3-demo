<template>
  <div class="wrapper">
    <!-- <transition name="van-fade">
      <router-view />
    </transition> -->
    <router-view v-slot="{ Component }">
      <transition name="van-fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <Tabbar route placeholder v-show="showFooter">
      <TabbarItem replace to="/" icon="home-o">HomeTest</TabbarItem>
      <TabbarItem replace to="/about" icon="search">About</TabbarItem>
      <TabbarItem replace to="/todoList" icon="friends-o">ToDo</TabbarItem>
      <TabbarItem replace to="/luckdraw" icon="setting-o">LuckDraw</TabbarItem>
    </Tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Tabbar, TabbarItem } from "vant";

export default defineComponent({
  name: "App",
  components: {
    Tabbar,
    TabbarItem,
  },
  setup(props) {
    const route = useRoute();
    const showFooter = computed(() => route.path.split("/").length < 3);
    return {
      showFooter,
    };
  },
});
</script>
