import Accordian from "../Components/Accordian";
import Contacts from "../Components/Contacts";
import Feature from "../Components/Feature";
import Hero from "../Components/Hero";
import Stats from "../Components/Stats";
import Teams from "../Components/Teams";

export default function About(){
    return(
        <div>
            <h1>About</h1>
            <Accordian
            accTitle={"ini judul accordian "}
            accItems={accItems}/>
            
            <Hero
            heroTitle={"teguh Jaya"}
            heroDesc={"lorem anmkjdfioajmdfioasnsdfjksdnsjko  dnfiosfnsdio n"}
            heroButton={"Get Started"} 
            heroButton2={"lanjutkan ->"}
            />
            <Stats
            statsTitle={"Ini logo stats"}
            stats={stats}
            />
            <Feature
            featureHeader={"teguh "}
            featureTitle={"teghuh jaya company"}
            featureDesc={"ini adalah produk "}
            features={features}
            />

            <Teams
            teamsTitle={"Team terdiri dari"}
            teams={teams}
            />

            <Contacts
                contactTitle={"Judul Contact"}
                contactDesc={"Lorem ipsum dolor sit amet consletur elit"}
                contactAddress={"hatimu mau dikemanakan"}
                contactPhone={"081209876123"}
                contactEmail={"teguhjaya@gmail.com"}
            />
        </div> 

    )
}

const teams= [
    {
        name:   'Bejo Kurniawan Sangkuriang',
        role:   'Customer satisfaction'
    },
    {
        name:   'Bejo Kurniawan Sangkuriang',
        role:   'Customer satisfaction'
    },
];


const stats = [
    { name: 'Transactions every 24 hours', value: '44 million' },
    { name: 'Assets under holding', value: '$119 trillion' },
    { name: 'New users annually', value: '46,000' },
    { name: 'Transactions every 24 hours', value: '44 million' },
    { name: 'Assets under holding', value: '$119 trillion' },
    { name: 'New users annually', value: '46,000' },
  ]


  const features = [
    {
      name: 'Push to deploy',
      desc:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    },
    {
      name: 'SSL certificates',
      desc:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    },
    {
      name: 'Simple queues',
      desc:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    },
    {
      name: 'Advanced security',
      desc:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    },
  ]
  
  const accItems = [
    { title: 'Question 1', content: 'Answer 1' },
    { title: 'Question 2', content: 'Answer 2' },
    
  ];