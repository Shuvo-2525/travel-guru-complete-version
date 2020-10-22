import React from 'react';
import './MainBody.css'
import cox from '../../image-source/Card/Cox-bazar.png'
import sree from '../../image-source/Card/Sreemongol.png'
import sundar from '../../image-source/Card/sundorbon.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';


const MainBody = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext)



    function handleClick1() {
         
                const information = {
                    placeTo : 'Cox Bazar',
                    shortDescription : "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world.",
                    
                    longDescription : "Cox's Bazar (Bengali: কক্সবাজার, pronounced [kɔksbadʒaɾ]) is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong. Cox's Bazar is also known by the name Panowa, which translates literally as yellow flower. Another old name was palankee . The modern Coxs Bazar derives its name from Captain Hiram Cox, an officer of the British East India Company, a Superintendent of Palongkee outpost. To commemorate his role in refugee rehabilitation work, a market was established and named after him.The municipality covers an area of 6.85 km2 (2.64 sq mi) with 27 mahallas and 9 wards and as of 2012 had a population of 51,918.[2] Cox's Bazar is connected by road and air with Chittagong.",
                    id: 1
                };
                var background = document.getElementById('defaultBg')
                background.style.display = "none";
                var background = document.getElementById('sundarBg')
                background.style.display = "none";
                var background = document.getElementById('sreeBg')
                background.style.display = "none";
                var newBg = document.getElementById('coxBg')
                newBg.style.display = 'block';
                
                var lineChange = document.getElementById('defaultLine')
                lineChange.style.display = "none"
                var changedLine = document.getElementById('name');
                changedLine.innerHTML = `<h1 id="defaultLine">${information.placeTo}</h1>
                <br/> <p>${information.shortDescription}</p>`
                const placeInfo = {...loggedInUser};
                placeInfo.placeTo = information.placeTo
                placeInfo.longDescription = information.longDescription
                placeInfo.id = information.id
                setLoggedInUser(placeInfo)

        
    }
  
    function handleClick2() {
       
                const information = {
                    placeTo : 'Sreemangal',
                    shortDescription : "Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here.",
                    longDescription : "It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town later became a pourashava in 1935. In 1963, two peasants were killed by police officers which kicked off the Balishira peasant riots. During the Bangladesh Liberation War of 1971, the Pakistani army reached Srimangal on 30 April setting houses on fire and committing atrocities against women. The East Pakistan Rifles camp and Wapda office premises were among the two mass killing sites. Two mass graves remain in Bharaura with a memorial in North Bharaura.",
                    id : 2
            
                }
                var background = document.getElementById('defaultBg')
                background.style.display = "none";
                var background = document.getElementById('coxBg')
                background.style.display = "none";
                var background = document.getElementById('sundarBg')
                background.style.display = "none";
                var newBg = document.getElementById('sreeBg')
                newBg.style.display = 'block';

                //----

                var lineChange = document.getElementById('defaultLine')
                lineChange.style.display = "none"
                var changedLine = document.getElementById('name');
                changedLine.innerHTML = `<h1 id="defaultLine">${information.placeTo}</h1>
                <br/> <p>${information.shortDescription}</p>`
                const placeInfo = {...loggedInUser};
                placeInfo.placeTo = information.placeTo
                placeInfo.longDescription = information.longDescription
                placeInfo.id = information.id
                setLoggedInUser(placeInfo)
                
                
    }
    
    function handleClick3() {
        
                const information = {
                    placeTo : 'Sundarban',
                    shortDescription : "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. ",
                    longDescription : "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans National Park, Sundarbans West, Sundarbans South and Sundarbans East Wildlife Sanctuaries.[3] Despite these protections, the Indian Sundarbans were considered endangered in a 2020 assessment under the IUCN Red List of Ecosystems framework.[4]The Sundarbans mangrove forest covers an area of about 10,000 km2 (3,900 sq mi), of which forests in Bangladesh's Khulna Division extend over 6,017 km2 (2,323 sq mi) and in West Bengal, they extend over 4,260 km2 (1,640 sq mi) across the South 24 Parganas and North 24 Parganas districts.[5] The most abundant tree species are sundri (Heritiera fomes) and gewa (Excoecaria agallocha). The forests provide habitat to 453 faunal wildlife, including 290 bird, 120 fish, 42 mammal, 35 reptile and eight amphibian species.[6]",
                    id : 3
            
                }

                var background = document.getElementById('defaultBg')
                background.style.display = "none";
                var background = document.getElementById('coxBg')
                background.style.display = "none";
                var background = document.getElementById('sreeBg')
                background.style.display = "none";
                var newBg = document.getElementById('sundarBg')
                newBg.style.display = 'block';

                var lineChange = document.getElementById('defaultLine')
                lineChange.style.display = "none"
                var changedLine = document.getElementById('name');
                changedLine.innerHTML = `<h1 id="defaultLine">${information.placeTo}</h1>
                <br/> <p>${information.shortDescription}</p>`
                const placeInfo = {...loggedInUser};
                placeInfo.placeTo = information.placeTo
                placeInfo.longDescription = information.longDescription
                placeInfo.id = information.id
                setLoggedInUser(placeInfo)
                
    }


    return (


    <div>
        <div id="bg">
            <div id="defaultBg"></div>
            <div id="coxBg"></div>
            <div id="sreeBg"></div>
            <div id="sundarBg"></div>

            <div id="card" >
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 align-items-center">
                <div className="col">
                    <div id="name">
                        <h1 id="defaultLine">Welcome to 
                            <br/>
                            Travel Tour
                            <br/>
                            Try Selecting Our Packages
                        </h1>

                    </div>
                    <div className="srtDescription">

                    </div>
                    <div className="booking-btn">
                    <Link to="/booking">
                    {
                        loggedInUser.id &&
                        <button type="button" className="btn btn-warning"><b>Start Booking</b></button>}
                    </Link>
                    </div>
                </div>

                <div className="col" id='all-cards'>
                    <div className="row row-cols-3 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                        <div className="col" >
                            <div className="card bg-dark text-white" onClick={handleClick1}>
                            <img src={cox} className="card-img" alt="..." id='c1' />
                                <div className="card-img-overlay d-flex align-items-end">
                                    <h6 className="text-center card-title ">COX'S BAZAR</h6>                                    
                                </div>
                            </div>
                        </div>

                        <div className="col" >
                        <div className="card bg-dark text-white" onClick={handleClick2}>
                            <img src={sree} className="card-img" alt="..." id='c2' />
                                <div className="card-img-overlay  
                                d-flex align-items-end">
                                    <h6 className="card-title">SREE MANGAL</h6>                                    
                                </div>
                            </div>    
                        </div>

                        <div className="col" >
                        <div className="card bg-dark text-white" onClick={handleClick3}>
                            <img src={sundar} className="card-img" alt="..." id='c3' />
                                <div className="card-img-overlay d-flex align-items-end">
                                    <h6 className="text-center">SUNDAR BAN</h6>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            

        </div>

        </div>

       



    </div>


    );
};

export default MainBody;