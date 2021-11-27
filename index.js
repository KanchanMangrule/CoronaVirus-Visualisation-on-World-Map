function updateMap()
{
    var i = 0;
    fetch("/latestdata.json")  
    .then(response => response.json())
    .then(rsp => {
        rsp.forEach(element => {
    // fetch("/data.json")  
    // .then(response => response.json())
    // .then(rsp => {
        // rsp.data.forEach(element => {
            // latitude = element.coordinates;
            // longitude = element.longitude;
            // cases = element.infected;
            
            latitude = element.coordinates[1];  
            longitude = element.coordinates[0];
            cases = element.cases;
            
            if(cases>255){
                color = "rgb(255, 0, 0)" 
            }
            else{
                color = `rgb(${cases}, 0, 0)`
            }
            
            //Mark on the map
            if(i<1000){  //Use this condition to limit the no. of data otherwise remove the condition for data.json
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
            }
            //Comment it for data.json
            i = i+1;
        });
    })
}
updateMap();