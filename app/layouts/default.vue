<template>
  <div class="wrapper">
    <LayoutsHeader />

    <main class="content">
      <slot />
    </main>

    <LayoutsFooter />
  </div>
</template>

<style scoped>
.wrapper{
  min-height:100vh;
  display:flex;
  flex-direction:column;
}

.content{
  flex:1;
  background:#f5f5f5;
  padding:20px;
}
</style>
