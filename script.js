const { createApp } = Vue;

createApp({
  data() {
    return {
      albums: [
        {
          img: "img/NewJersey.jpg",
          title: "New Jersey",
          author: "Bon jovi",
          year: "1988",
        },

        {
          img: "img/LiveatWembley.jpg",
          title: "Live at Wembley 86",
          author: "Queen",
          year: "1992",
        },

        {
          img: "img/Summoner.jpg",
          title: "Ten's Summoner's Tales",
          author: "Sting",
          year: "1993",
        },

        {
          img: "img/Stevegaddband.jpg",
          title: "Steve Gadd band",
          author: "Steve Gadd Band",
          year: "2018",
        },

        {
          img: "img/bravenewworld.jpg",
          title: "Brave new world",
          author: "Iron Maiden",
          year: "2000",
        },

        {
          img: "img/Onemorecar.jpg",
          title: "One more car, one more rider",
          author: "Eric Clapton",
          year: "2002",
        },
      ],
    };
  },
}).mount("#app");
