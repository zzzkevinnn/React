import TeleponIcon from "../assets/icons/TeleponIcon"

export default function Reason({
    reasonTitle,
    
}){
    return(
        <div className="container mx-auto px-10 py-10">
            <h2 className="text-center pb-5 text-white text-3xl font-bold">{reasonTitle}</h2>
            <ul className="grid grid-cols-3 text-center">
                {reasons.map((reason, index) => (
                    <li key={index} className="">
                        img
                        <h2 className="frid gap-2"><TeleponIcon/>{reason.logo}  {reason.desc}</h2>
                        
                        
                    </li>
                 )
                )}                      
                
            </ul>
           
        </div>
    )
}

const reasons = [
    {
        logo:'a',
        desc:'adsfa'

    },
    {
        logo:'b',
        desc:'dfsafd'
    },
    {
        logo:'b',
        desc:'dfsafd'
    }
] 
   
