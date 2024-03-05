<template>
  <div class="settings-stock">
    <div class="settings-stock__form">
      <VTextInput v-model="name" placeholder="Введите название акции" />
      <VTextarea v-model="stockText" placeholder="Введите описание акции" />
      <VTextInput v-model="urlImg" placeholder="Укажите ссылку на картинку" />
      <VButton @click="createStock" :disabled="isButtonDisabled"
        >Создать</VButton
      >
    </div>
  </div>
</template>

<script>
import VButton from "@/components/UI/VButton.vue";
import VTextInput from "@/components/UI/VTextInput.vue";
import VTextarea from "@/components/UI/VTextarea.vue";

export default {
  name: "SettingsStock",
  components: {
    VTextInput,
    VTextarea,
    VButton,
  },
  data() {
    return {
      name: "",
      stockText: "",
      urlImg: "",
    };
  },
  methods: {
    createStock() {
      this.$store.dispatch("addNewStock", this.newStock);
      this.clearData();
    },
    clearData() {
      this.name = "";
      this.stockText = "";
      this.urlImg = "";
    },
  },
  computed: {
    newStock() {
      return {
        name: this.name,
        text: this.stockText,
        img: this.urlImg,
      };
    },
    isButtonDisabled() {
      return !(this.name && this.stockText && this.urlImg);
    },
  },
};
</script>

<style scoped lang="scss">
.settings-stock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  &__form {
    display: flex;
    flex-direction: column;
    max-width: 350px;
    gap: 8px;
  }
}
</style>
