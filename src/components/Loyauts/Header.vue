<template>
  <div class="header">
    <router-link class="header__link" :to="{ name: 'menu-order' }">
      Заказать
    </router-link>
    <router-link class="header__link" :to="{ name: 'contacts' }">
      Контакты
    </router-link>
    <router-link class="header__link" :to="{ name: 'home-work' }">
      HomeWork
    </router-link>
    <router-link class="header__link" :to="{ name: 'menu' }">Меню</router-link>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "Header",
  components: { RouterLink },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  background-color: rgb(235, 198, 198);
  justify-content: center;
  gap: 20px;
  padding: 20px;
}
</style>
