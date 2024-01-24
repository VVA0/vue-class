<template>
  <div class="home">
    <ColorBlock
      :background-blue="isBackgroundBlue"
      :background-green="isBackgroundGreen"
      :background-red="isBackgroundRed"
      :color-blue="isColorBlue"
      :color-green="isColorGreen"
      :color-red="isColorRed"
    />
  </div>
</template>

<script>
import ColorBlock from "@/components/ColorBlock.vue";

export default {
  name: "HomeView",
  components: {
    ColorBlock,
  },
  data() {
    return {
      backgroundIndex: 0,
      colorIndex: 1,
    };
  },
  computed: {
    isBackgroundBlue() {
      return this.backgroundIndex === 0;
    },
    isBackgroundRed() {
      return this.backgroundIndex === 1;
    },
    isBackgroundGreen() {
      return this.backgroundIndex === 2;
    },
    isColorBlue() {
      return this.colorIndex === 0;
    },
    isColorRed() {
      return this.colorIndex === 1;
    },
    isColorGreen() {
      return this.colorIndex === 2;
    },
  },
  mounted() {
    setInterval(() => {
      if (this.backgroundIndex >= 2) {
        this.backgroundIndex = 0;
      } else {
        this.backgroundIndex += 1;
      }
      if (this.colorIndex >= 2) {
        this.colorIndex = 0;
      } else {
        this.colorIndex += 1;
      }
    }, 2000);
  },
};
</script>
