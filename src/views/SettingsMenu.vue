<template>
  <div class="settings-menu">
    <MenuSettings />
  </div>
</template>

<script>
import MenuSettings from "@/components/MenuOrder/MenuSettings/Index.vue";

export default {
  name: "SettingsMenu",
  components: {
    MenuSettings,
  },
};
</script>

<style scoped lang="scss">
.settings-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
</style>
