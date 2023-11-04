import CarouselView from "./carouselView.js"
// import { Carousel } from "react-bootstrap";
const person = [
    {
      name: "Yanapii",
      // cellName: 'Yanapii',
      desc: "Green cozy cat looking to make friends.",
      pic: [
        "https://pbs.twimg.com/media/FYb32DnaAAA3mq5?format=jpg&name=900x900",
        "https://i.ytimg.com/vi/aZCkIDgG8Ek/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLCoe4GwJzzpn3pbQgY1gZsZkRVmmw",
        "https://i.ytimg.com/vi/H1Hphla0MMA/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLAGbp7vrNBvyLvWOBHRmCABVOC4ig"
      ]
    },
    {
      name: "Yuandere",
      desc: "Go fuck yourself",
      pic: ["https://cdna.artstation.com/p/assets/images/images/043/718/548/smaller_square/yuandere-werewolf-jpg.jpg?1638094099"]
    }
  ]


    
function Person() {
  return (
     
     <CarouselView 
          {...person[0]}
      />

  )
}

export default Person;




