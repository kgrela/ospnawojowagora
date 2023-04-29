<script setup lang="ts">
import { useAttrs } from 'vue';

const props = defineProps<{
  tag?: string;
}>();

const attrs = useAttrs();

console.log(attrs);
const tag = props.tag ?? 'button';
</script>

<template>
  <component v-bind="attrs" :is="tag" class="px-3">
    <slot />
  </component>
</template>
