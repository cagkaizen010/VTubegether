import {CarouselView} from "./carouselView.js"

const person = [
    {
        name: "Yanapii",
        cellName: 'Yanapii',
        desc: "Green cozy cat looking to make friends.",
        pic: [
            "https://pbs.twimg.com/media/FYb32DnaAAA3mq5?format=jpg&name=900x900",
            "https://i.stack.imgur.com/VJBJq.png",
            "https://as1.ftcdn.net/v2/jpg/01/41/11/64/1000_F_141116428_V5guspEHFFY0a9VvpEiC0QUHDbYyoDD9.jpg"
        ]
    },
];

const Person = () => {

    {person.map((
      {
        name,
        cellName,
        desc,
        pic
      }, i
    ) => (
        <CarouselView 
          key={cellName}
          name={name}
          id = {i}
          desc={desc}
          pic={pic}
        />
      )
    )}
    
    
}

export default Person;