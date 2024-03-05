<template>
  <div class="contact-form">
    <VTextInput v-model="computedName" placeholder="Введите имя" />
    <VTextInput v-model="computedEmail" placeholder="Введите email" />
    <VTextarea v-model="computedMessage" placeholder="Введите сообщение" />
    <VButton @click="sendMessage">Отправить</VButton>
  </div>
</template>

<script>
import VTextInput from "@/components/UI/VTextInput.vue";
import VTextarea from "@/components/UI/VTextarea.vue";
import VButton from "@/components/UI/VButton.vue";

export default {
  name: "ContactForm",
  components: {
    VTextInput,
    VTextarea,
    VButton,
  },
  //   data() {
  //     return {
  //       name: "",
  //       email: "",
  //       message: "",
  //     };
  //   },
  computed: {
    computedName: {
      get() {
        return this.$store.getters.NameContact;
      },
      set(value) {
        this.$store.dispatch("addNameContact", value);
      },
    },
    computedEmail: {
      get() {
        return this.$store.getters.emailContact;
      },
      set(value) {
        this.$store.dispatch("addEmailContact", value);
      },
    },
    computedMessage: {
      get() {
        return this.$store.getters.messageContact;
      },
      set(value) {
        this.$store.dispatch("addMessageContact", value);
      },
    },
  },
  methods: {
    sendMessage() {
      this.$store.dispatch("showContactData");
    },
  },
};
</script>

<style scoped lang="scss">
.contact-form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 300px;
  gap: 10px;
}
</style>
