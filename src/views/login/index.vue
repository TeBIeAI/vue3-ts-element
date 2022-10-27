<script lang="ts" setup>
import { useUserStore } from "../../store/modules/user";
const userStore = useUserStore();

setTimeout(() => {
  userStore.changeName();
}, 3000);
</script>
<template>
  <div>{{ userStore.name }}</div>
</template>
