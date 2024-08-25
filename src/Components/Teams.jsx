export default function Teams({
    teamsTitle,
    teams
}) {
    return(
        <div className="bg-yellow-50 py-20">
            <div className="container mx-auto px-40">
                
                <h2 className="text-3xl font-bold text-center pb-20">{teamsTitle}</h2>

                <ul className="grid  grid-cols-1 lg:grid-cols-2 gap-6 ">
                    {teams.map((team, index)=>(
                    <li key={index}>
                    <div className="flex justify-center items-center gap-x-6 ">
                        <img 
                        className="rounded-full w-16"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'" 
                        alt="" />
                        <div>
                            <h3 className="text-base font-semibold text-gray-900"> {team.name} </h3>
                            <p className="text-sm font-semibold text-indigo-600"> {team.role} </p>
                        </div>
                    </div>
                </li>     
                    ))}
                    
                </ul>
            </div>
        </div>
    );
};

// const teams= [
//     {
//         name:   'Bejo Kurniawan Sangkuriang',
//         role:   'Customer satisfaction'
//     },
//     {
//         name:   'Bejo Kurniawan Sangkuriang',
//         role:   'Customer satisfaction'
//     },
// ];