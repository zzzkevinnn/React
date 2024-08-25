import BackgroundImage1 from "../Components/background/BackgrounddImage1";
import Header from "../Components/Header";
import Newsletter from "../Components/Newsletter";
import Pricing from "../Components/Pricing";
import Testimonial from "../Components/Testimonial";
import Card from "../Components/Card";
import CTA from "../Components/CTA";

export default function Testing(){
    return(
        <div>
            <div className="relative isolate">
            <BackgroundImage1/>
            <Header
            headerTitle={"Work With Us"}
            headerDesc={("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, soluta`")}
            /> 
            </div>
            
            <Newsletter
            newsletterMainTitle={"KEsempatan diskon besar besaran"}
            newsletterMainDesc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde."}
            newsletterButton={""}
            newsletterTitle1={"Weekly articles"}
            newsletterDesc1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quod?"}
            newsletterTitle2={"No spam"}
            newsletterDesc2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quod?"}
            />
            <Pricing
            pricingTitle={"Simple no-tricks pricing"}
            pricingDesc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. "}
            PricingButton={"Buy Now"}
            />
            <Testimonial
            TestimonialTitle={"Testimonials"}/>


       
       <CTA
       ctaTitle={"judul Title"}
       ctaDesc={"Deskrsi Hubungi kami dan beli sekarang untuk dapatkan barang keinginan anda"}
       ctaButton1={"Button CTA"}
       ctaButton2={"Learn More →"}
       ctaImgSrc={"https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" }
       ctaImgAlt={"gambar"}
       />
       <Card
       cardHead={"judul kecil"}
       cardJudul={"Teguh jaya "}
       cardDesc={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui eum dolor provident tempore itaque. Labore, ullam doloremque. Necessitatibus, quo. "} 
       cardImgSrc={"https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" }
       cardImgAlt={"gambar"}
       /> 
        </div>
    )
}

const stats = [
    { name: 'Transactions every 24 hours', value: '44 million' },
    { name: 'Assets under holding', value: '$119 trillion' },
    { name: 'New users annually', value: '46,000' },
    { name: 'Transactions every 24 hours', value: '44 million' },
    { name: 'Assets under holding', value: '$119 trillion' },
    { name: 'New users annually', value: '46,000' },
  ]