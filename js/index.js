const tableBody = document.querySelector('#table-container');



function viewAllFillingStations(){
  fetch('http:new-fuelalert.myf2.net/api/filling_station_apis/get_filling_stations.php')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    data.records.map((stations)=>{
      if(stations.price != null){

      tableBody.innerHTML += `      <tr>
      <td>${stations.name}</td>
      <td>${stations.address}</td>
      <td>${stations.area}</td>
      <td>${stations.state}</td>
      <td>${stations.fuel_price}</td>

    </tr>
`
      }
    })
  })
  .catch(err => console.log(err))
}
viewAllFillingStations()

