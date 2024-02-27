<template>
  <div class="block">
    <Left @addNewItem="addItemTolist" />
    <Right :food="food" :drinks="drinks" :snacks="snacks" />
  </div>
</template>

<script>
import Button from "@/components/VikaUI/Button.vue";
import Input from "@/components/VikaUI/Input.vue";
import List from "@/components/VikaUI/List.vue";
import Select from "@/components/VikaUI/Select.vue";
import Textarea from "@/components/VikaUI/Textarea.vue";
import Left from "@/components/VikaLeftRight/Left/Index.vue";
import Right from "@/components/VikaLeftRight/Right/Index.vue";

export default {
  name: "Vika",
  components: {
    Button,
    Input,
    List,
    Select,
    Textarea,
    Left,
    Right,
  },
  computed: {
    food() {
      return this.$store.getters.food;
    },
    drinks() {
      return this.$store.getters.drinks;
    },
    snacks() {
      return this.$store.getters.snacks;
    },
  },
  methods: {
    addItemTolist({ type, name, price }) {
      this.$store.dispatch("addItemToList", { type, name, price });
    },
  },
};
</script>

<style>
.block {
  display: flex;
}
</style>
