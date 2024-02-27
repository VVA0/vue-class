<template>
  <div class="contacts">
    <ContactForm class="contacts__form" />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm/Index.vue";

export default {
  name: "Contacts",
  components: {
    ContactForm,
  },
};
</script>

<style scoped lang="scss">
.contacts {
  display: flex;
  justify-content: center;
  &__form {
    margin-top: 30px;
  }
}
</style>
