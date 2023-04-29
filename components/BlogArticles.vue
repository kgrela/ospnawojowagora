<script setup lang="ts">
const props = defineProps<{ amount?: number; showAllButton?: boolean }>();

const allArticles = await queryContent('/blog').find();

const validArticles = allArticles
  .filter((article) => article._dir === 'blog')
  .sort((first, second) => {
    const firstTime = new Date(first.createdAt ?? new Date()).getTime();
    const secondTime = new Date(second.createdAt ?? new Date()).getTime();

    return secondTime - firstTime;
  });

const articles = validArticles.slice(0, props.amount ?? validArticles.length);
</script>

<template>
  <div class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
    <NuxtLink v-for="article in articles" :href="article._path" class="p-6 prose prose-red bg-neutral-100 rounded-md">
      <h3 v-if="article.title">{{ article.title }}</h3>
      <p v-if="article.description">{{ article.description }}</p>

      <span v-if="article.createdAt">{{
        new Date(article.createdAt).toLocaleString('pl', { day: 'numeric', month: 'long', year: 'numeric' })
      }}</span>
    </NuxtLink>
  </div>

  <div v-if="props.showAllButton" class="container prose prose-red md:text-center">
    <NuxtLink href="/blog">Zobacz wszystkie aktualności</NuxtLink>
  </div>
</template>
