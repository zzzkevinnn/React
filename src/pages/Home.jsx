
import Feature from "../Components/Feature";
import Hero from "../Components/Hero";
import Logo from "../Components/Logo";
import Stats from "../Components/Stats";
import shiba from "../assets/shiba.jpg"
import Reason from "../Components/Reason";
import BackgroundReason from "../Components/background/BackgroundReason";
import Brands from "../Components/Brands";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import Back from "../Components/background/BackgroundHero";


export default function Home(){
  return(
    <div>
        

   
        <div className="relative isolate ">
  
        <Back/>
       

        <Hero
        
         heroTitle={"teguh Jaya"}
         heroDesc={"lorem anmkjdfioajmdfioasnsdfjksdnsjko  dnfiosfnsdio n"}
         heroButton={"Get Started"} 
         heroButton2={"lanjutkan ->"}
       />
        </div>
       
        <div class="m-4 space-y-4">
  <h2 class="font-bold">Transparent image:</h2>
  <div class="relative w-96 h-96">
    <div class="absolute inset-0 w-full h-full bg-sky-300 bg-opacity-10 "></div>
    <img src="https://down-id.img.susercontent.com/file/id-11134207-7r98w-lpgc5wu5lm6rfd" className=" bg-opacity-95" alt="kitty" />
  </div>
</div>

       <Logo
         logoTitle={"Logo teguh jaya"}
         logos={logos}
       />
       <div className="relative isolate">
        <BackgroundReason
        />
        <Reason
        reasonTitle={"Kenapa Harus Beli"}/>

       </div>
       
       <Feature
        featureHeader={"teguh "}
        featureTitle={"teghuh jaya company"}
        featureDesc={"ini adalah produk "}
        features={features}
       />
        <Brands
        brandTitle={"Logo teguh jaya"}
        brands={brands}
        />

      <Newsletter
      newsletterMainTitle={"Newspaper Signup"}
      newsletterMainDesc={"Dapatnkan info menarik dari teguh jaya"}
     
      />

      
       
       <div className="relative isolate">
       <BackgroundReason/>
       <Footer /> 
       </div>
       

    </div>
  )
}

const images = [
  'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/12/17/aa205f3f-eed0-4679-964d-a6fb96927386.png',
  'https://down-id.img.susercontent.com/file/id-11134207-7r98w-lpgc5wu5lm6rfd',
];

const logos = [
 {

    img: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/12/17/aa205f3f-eed0-4679-964d-a6fb96927386.png',
    title: '1 inch',
    desc: 'produk terbaik dari kami ',
 },

{
    img:'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/12/17/431c7d26-f938-48e5-897f-154ae5e6f636.png',
  
    title: 'fdsfd',
    desc: 'sdasd',
},

{
    img:'https://down-id.img.susercontent.com/file/id-11134207-7r990-lpgcm2030osz06',
  
    title: 'fdsfd',
    desc: 'sdasd',
},

{
    img:'https://down-id.img.susercontent.com/file/id-11134207-7r98w-lpgc5wu5lm6rfd',
    title: 'fdsfd',
    desc: 'sdasd',
  shiba
 }
] 

const carosels = [
  {
 
     img: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/12/17/aa205f3f-eed0-4679-964d-a6fb96927386.png',
     title: '1 inch',
     desc: 'produk terbaik dari kami ',
  },
 
 {
     img:'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/12/17/431c7d26-f938-48e5-897f-154ae5e6f636.png',
   
     title: 'fdsfd',
     desc: 'sdasd',
 },
 
 {
     img:'https://down-id.img.susercontent.com/file/id-11134207-7r990-lpgcm2030osz06',
   
     title: 'fdsfd',
     desc: 'sdasd',
 },
 
 {
     img:'https://down-id.img.susercontent.com/file/id-11134207-7r98w-lpgc5wu5lm6rfd',
     title: 'fdsfd',
     desc: 'sdasd',
   shiba
  }
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

const stats = [
  { name: 'Transactions every 24 hours', value: '44 million' },
  { name: 'Assets under holding', value: '$119 trillion' },
  { name: 'New users annually', value: '46,000' },
  { name: 'Transactions every 24 hours', value: '44 million' },
  { name: 'Assets under holding', value: '$119 trillion' },
  { name: 'New users annually', value: '46,000' },
]

const brands = [
   'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/12/17/aa205f3f-eed0-4679-964d-a6fb96927386.png',
   "https://images.tokopedia.net/img/cache/850/BgtCLw/2022/2/19/db5997d4-1163-4d6e-8cc0-14cfa037210e.jpg?ect=4g",
   "https://down-id.img.susercontent.com/file/083a6e741e21ccf4cf96cd4445a9a3c2_tn",
   'https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/7/9/601168ed-3883-405b-9fed-4689057bfdb0.jpg' ,
   "https://down-id.img.susercontent.com/file/083a6e741e21ccf4cf96cd4445a9a3c2_tn",
   'https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/7/9/601168ed-3883-405b-9fed-4689057bfdb0.jpg' ,

]

const shiba1  = [
  shiba
]