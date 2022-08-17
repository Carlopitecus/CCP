<template>
  <div class="footer-display">
    <div class="footer-centrar">
      <a class="footer_link-color" href="https://www.instagram.com/colegiocapellanpascal/" target="_blank"
        >Instagram</a
      >
      |
      <a class="footer_link-color"
        href="https://schoolnet.colegium.com/webapp/es_CL/login"
        target="_blank"
        >SchoolNet</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-display {
  background-color: #272d3e;
  width: 100%;
  color: aliceblue;
  height: 80px;
}
.footer-centrar {
  text-align: center;
  padding-top: 15px;
}
.footer_link-color {
  text-decoration: none;
  color: white;
}
</style>