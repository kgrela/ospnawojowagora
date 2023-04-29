<script setup lang="ts"></script>

<template>
  <header class="relative">
    <div
      class="absolute inset-0 z-0 hidden md:flex justify-center items-center md:px-4 max-w-screen-2xl mx-auto overflow-hidden"
    >
      <div class="absolute z-10 inset-0 md:inset-x-4 bg-black bg-opacity-60 md:rounded-lg"></div>
      <img class="w-full h-full object-cover z-0 md:rounded-lg" src="/images/header.jpg" alt="OSP Nawojowa Góra" />
    </div>
    <div class="container flex justify-center flex-col md:items-center md:py-52 gap-3">
      <h1 class="text-red-600 text-shadow-lg font-extrabold uppercase">OSP Nawojowa Góra</h1>
      <h2 class="text-4xl md:text-5xl text-shadow-lg md:text-white md:text-center font-bold">
        Działamy nieprzerwanie <br />
        już od 129 lat
      </h2>

      <div class="grid grid-cols-1 md:grid-flow-col md:w-max gap-3 md:mx-auto">
        <NuxtLink
          href="/blog"
          class="p-2 md:px-4 uppercase inline-flex justify-center items-center rounded-md font-semibold bg-red-600 text-white md:w-max"
        >
          Najnowsze aktualności
        </NuxtLink>
        <NuxtLink
          href="/czlonkowie"
          class="p-2 md:px-4 uppercase inline-flex justify-center items-center rounded-md font-semibold bg-red-200 md:w-max"
        >
          O jednostce
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
