export default function Footer({
    featureHeader,
    featureTitle,
    featureDesc,
    features
  })
  {
    return(
        <div className="flex mx-auto container py-20 justify-between px-28">
             <ul>
                <li>Link</li>
                <li>Home</li>
                <li>About Us</li>
                <li>Customer Service</li>
                <li>Return</li>
                <li></li>
             </ul>

            <div className="text-center">
                <img className="z-100 h-32 " src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/12/17/aa205f3f-eed0-4679-964d-a6fb96927386.png" alt="" />
                <h2>contact us</h2>
            </div>

             {/* <ul>
             {footers.map((Footer) => (
                <h2 className="footer"></h2>
                    ))}
                <li></li>
             </ul> */}
        </div>
    )

}

