<script setup lang="ts"></script>

<template>
  <div class="container border">
    <header class="centered header">
      <slot name="header"></slot>
    </header>
    <main class="centered body">
      <slot name="body"></slot>
    </main>
    <footer class="centered footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  min-width: 40rem;
  min-height: 30rem;
  background-color: #3333;
}

.border {
  border-style: solid;
  border-color: aliceblue;
  border-width: 1px;
  border-radius: 5px;
}

.header,
.footer {
  min-height: 5rem;
  display: flex;
  align-items: center;
}

.body {
  flex: 1;
}

::v-deep .centered {
  display: flex;
  justify-content: center;
}
</style>
