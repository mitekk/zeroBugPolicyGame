<script setup lang="ts">
import PanelLayout from '../layout/Panel.vue'
import GamePanel from '../components/counter/GamePanel.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <PanelLayout>
    <template #header>
      <Header></Header>
    </template>

    <template #body>
      <GamePanel />
    </template>

    <template #footer>
      <Footer></Footer>
    </template>
  </PanelLayout>
</template>

<style scoped></style>
@/stores/jira @/stores/game
