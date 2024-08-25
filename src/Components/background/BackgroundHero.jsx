export default function BackgroundHero(){
    return(
        <div className=" bg-black bg-opacity-75">
            <div class="absolute inset-0 -z-10 w-full h-full bg-sky-200 bg-opacity-40"></div>
            <img
             src="https://haketda.weebly.com/uploads/3/1/6/1/31610725/7777791_orig.jpg" 
             alt="" 
             className="absolute inset-0 -z-20 object-cover w-full h-full object-cover  bg-black bg-opacity-75"
             />

        </div>
        
    )
}