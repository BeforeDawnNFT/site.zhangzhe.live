<template>
  <div>
    <router-view :key="$router.currentRoute.path" />
  </div>
</template>
