const { createApp } = Vue;

createApp({
  data() {
    return {
      albums: [],
    };
  },
  methods: {
    requestAlbum() {
      axios
        .get("http://localhost:8888/php-dischi-json/server.php")
        .then((Response) => (this.albums = Response.data));
    },
  },
  created() {
    this.requestAlbum();
  },
}).mount("#app");
