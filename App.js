//The home page

customElements.define('page-one', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!--This is the main title/header-->
        <ion-content>
        <ion-header>
            <ion-toolbar color="success">
                <ion-title>GreenCity</ion-title>
            </ion-toolbar>
        </ion-header>
    
    <!--The image and the paragraphs underneath it-->
            <ion-card>
                <ion-img src="Pictures/CartoonEarthAI.png"></ion-img>
            </ion-card>


        <!--buttons to the other pages-->
        <ion-grid>
            <ion-row>
                <ion-col size="4" class="ion-text-center">
                    <ion-button href="#/two" color="success">Learn More</ion-button>
                </ion-col>
                <ion-col size="4" class="ion-text-center">
                    <ion-button href="#/" color="success">Home Page</ion-button>
                </ion-col>
                <ion-col size="4" class="ion-text-center">
                    <ion-button href="#/three" color="success">Find your city</ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>

        <!--This is a paragraph of information connected to published articles-->
        <ion-card>
                <h2 class="ion-text-center">General Information</h2>
                <h4 class="padding, ion-text-center">Source Linked Below: 'Carbon emissions are one of the most alarming side-effects of “business as usual” across the world, because they cause climate change. 
                    Due to climate change, our seasons are becoming less predictable,
                    our water is more scarce, and our economy is at greater risk everyday.'</h4>
                <h4 class="ion-text-center">Knowing your cities carbon usage is important so that we can try and reduce carbon emmisions worldwide and prevent global warming.</h4>
        </ion-card>
     
    
    <!--The link for the CO2 emissions page-->        
        <ion-card>
            <ion-card-content>
                <h4 class="padding">Click below to find out more about carbon emmisions: </h4>
                <ion-button href="https://greenly.earth/en-gb/blog/ecology-news/carbon-emissions-what-you-need-to-know" id="linkButton1" expand="block" color="success">Click</ion-button>
            </ion-card-content>
        </ion-card>
        </ion-content>
    
        `;
    }
});

//The learn more page

customElements.define('page-two', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!--This is the main title/header-->
    <ion-content>
        <ion-header>
            <ion-toolbar color="success">
                <ion-title>GreenCity</ion-title>
            </ion-toolbar>
        </ion-header>
    
    <!--The image and the paragraphs underneath it-->
        <ion-card>
            <ion-img src="Pictures/Page2warehouseAI.png"></ion-img>
        </ion-card>


    <!--buttons to the other pages-->


        <ion-grid>
            <ion-row>
                <ion-col size="4" class="ion-text-center, padding">
                    <ion-button href="#/two" color="success">Learn More</ion-button>
                </ion-col>
                <ion-col size="4" class="ion-text-center, padding">
                    <ion-button href="#/" color="success">Home Page</ion-button>
                </ion-col>
                <ion-col size="4" class="ion-text-center, padding">
                    <ion-button href="#/three" color="success">Find your city</ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
        

<!--both of the paragraphs below, putting them in different cards-->


        <ion-card color="medium">
            <ion-card-content>
                <h2 class="ion-text-center">Climate Change: Global Temperature</h2>
                <h4 class="padding, ion-text-center" color="dark">
                Taken from the climate.gov website: Given the tremendous size and heat capacity of the global oceans, it takes a massive amount of added heat energy to raise Earth’s average yearly surface temperature even a small amount.
            The roughly 2-degree Fahrenheit (1 degrees Celsius) increase in global average surface temperature that has occurred since the pre-industrial era (1850-1900 in NOAA's record) might seem small,
             but it means a significant increase in accumulated heat.
                </h4>
            </ion-card-content>
        </ion-card>

            <ion-card color="medium">
                <ion-card-content>
                <h4 class="ion-text-center" color="dark">'That extra heat is driving regional and seasonal temperature extremes, reducing snow cover and sea ice, intensifying heavy rainfall, 
                    and changing habitat ranges for plants and animals—expanding some and shrinking others.  As the map below shows, most land areas have warmed faster than most ocean areas, 
                    and the Arctic is warming faster than most other regions. In addition, it's clear that the rate of warming over the past few decades is much faster than the average rate 
                    since the start of the 20th century.'</h4>
                </ion-card-content>
            </ion-card>
            
       
<!--Link to the image sourced-->
        <ion-card>
            <ion-img src="./Pictures/Global_Warming_sourced.jpg"></ion-img>
        </ion-card>
     
    
    <!--The link for the article-->        
        <ion-card>
            <ion-card-content>
                <h4 class="padding, ion-text-center">Click on the link below to view the rest of this article: </h4>
                <ion-button href="https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature#:~:text=Earth's%20temperature%20has%20risen%20by,0.20%C2%B0%20C)%20per%20decade."
                 id="linkButton2" expand="block" color="success">Click</ion-button>
            </ion-card-content>
        </ion-card>
        </ion-content>
        `;

    }
});

//the code below saves specific inputs from the user. In this case it's where the user lives.

function SavedLive() {
    const UserLocation = document.getElementById("UserLive");
    localStorage.setItem("UserLocation", UserLocation.value);
    console.log(UserLocation.value);
}

    const User = localStorage.getItem("UserLocation");


//The Find Your City page

customElements.define('page-three', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `   
        
        <!--This is the main title/header-->
        <ion-content>
            <ion-header>
                <ion-toolbar color="success">
                    <ion-title>GreenCity</ion-title>
                </ion-toolbar>
            </ion-header>

            <!--This card inludes the data that the user provided for the local storage-->

            <ion-card>
                <h5 class="ion-text-center">You live in ${User}</h5>
            </ion-card>
    
        <!--The image of the map(for aesthetic)-->
            <ion-card>
                <ion-img src="Pictures/Aesthetic_map.png"></ion-img>
            </ion-card>
    
        <!--buttons to the other pages-->
            <ion-grid>
                <ion-row>
                    <ion-col size="4" class="ion-text-center">
                        <ion-button href="#/two" color="success">Learn More</ion-button>
                    </ion-col>
                    <ion-col size="4" class="ion-text-center">
                        <ion-button href="#/" color="success">Home Page</ion-button>
                    </ion-col>
                    <ion-col size="4" class="ion-text-center">
                        <ion-button href="#/three" color="success">Find your city</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <!--This is where the user inputs the data that is stored for 'ion-card' further back in the code-->

            <ion-card>
                <ion-input id="UserLive" placeholder="Where do you live?"></ion-input>
                <ion-button onclick="SavedLive()" color="success" expand="full">Enter</ion-button> <!--Every time the button is pressed, the data is stored in the library-->
            </ion-card>
            
    <!--search bar for city-->
            <ion-card>
                <ion-card-content>
                    <ion-input id="cityInput" label="Search for city: "></ion-input>
                </ion-card-content>
            </ion-card>

        <!--This button activates the 'addEventListener' below that will retrieve the data from the API using the input above-->

            <ion-button id="searchButton" color="success" expand="block">Search</ion-button>
    
        <!--This card outputs the retrieved data from the API-->

            <ion-card>
                <ion-list id="list-output"></ion-list>
            </ion-card>
        `;

        //These are the needed variables for the input by the user. they are used in the functions for calling to the API
        const searchButton = this.querySelector('#searchButton');
        const cityInput = this.querySelector('#cityInput');
        const resultContainer = this.querySelector('#list-output');

        //this EventListener activates the function when the button is pressed
        searchButton.addEventListener('click', () => {
            const cityName = cityInput.value.trim();
            if (cityName !== '') {
                fetch(`https://api.waqi.info/v2/search/?token=dc707c2075e1850cb6bab9525f0e3e7c68edc19c&keyword=${encodeURIComponent(cityName)}`) //this is the API link with my tolken already included
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'ok' && data.data.length > 0) {  //checks if the data from the API is valid. 
                            // Take the first result
                            const firstResult = data.data[0];
                            // Render the data into the result container
                            resultContainer.innerHTML = `
                                <ion-card>
                                    <ion-card-header>
                                        <ion-card-title>City: ${firstResult.station.name}</ion-card-title> <!--This displays the available station linked to the city given by the user-->
                                    </ion-card-header>
                                    <ion-card-content>
                                        <p>Air Quality(lower = better): ${firstResult.aqi}</p>  <!--This displays the Air quality of the city-->
                                        <p>Time: ${firstResult.time.stime}</p>  <!--This displays the local time for the city-->
                                        <p>Station Geo Location: ${firstResult.station.geo}</p> <!--This displays the Geo location of the station--> 
                                    </ion-card-content>
                                </ion-card>
                            `;
                        } else {
                            resultContainer.innerHTML = '<p>No results found</p>';      //this displays an error if the city cannot be found
                        }
                    })

                    //this catches and displays errors with the api
                    .catch(error => {
                        console.error('Error fetching city information:', error);
                        resultContainer.innerHTML = '<p>Error fetching city information</p>';
                    });
            } else {
                resultContainer.innerHTML = '<p>Please enter a city</p>';       //this allowes the user to try searching for the user again
            }
        });
    }
});

