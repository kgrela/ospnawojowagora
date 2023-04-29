<script setup lang="ts">
const props = defineProps<{
  href?: string;
  external?: boolean;
}>();

const attrs = useAttrs();

const className = 'p-2 rounded-md lg:hover:bg-neutral-100';
</script>

<template>
  <button v-if="!props.href" v-bind="attrs" :class="className">
    <slot />
  </button>
  <NuxtLink v-else-if="!props.external" v-bind="attrs" :href="props.href" :class="className">
    <slot />
  </NuxtLink>
  <a v-else v-bind="attrs" :href="props.href" :class="className" target="_blank">
    <slot />
  </a>
</template>
