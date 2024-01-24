<template>
  <div :class="classBlock" class="color-block">1</div>
</template>

<script>
export default {
  name: "ColorBlock",
  props: [
    "backgroundBlue",
    "backgroundRed",
    "backgroundGreen",
    "colorBlue",
    "colorRed",
    "colorGreen",
  ],
  computed: {
    classBlock() {
      return {
        "background-blue": this.backgroundBlue,
        "background-red": this.backgroundRed,
        "background-green": this.backgroundGreen,
        "color-blue": this.colorBlue,
        "color-red": this.colorRed,
        "color-green": this.colorGreen,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.color-block {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid black;
  transition: all 0.5s ease;
  background-color: white;
  &.background-blue {
    //Так я добавляю дополнительный класс
    background-color: blue;
  }
  &.background-red {
    background-color: red;
  }
  &.background-green {
    background-color: green;
  }
  &.color-blue {
    color: blue;
  }
  &.color-red {
    color: red;
  }
  &.color-green {
    color: green;
  }
}
</style>
