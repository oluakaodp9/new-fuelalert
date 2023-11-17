const tableBody = document.querySelector('#table-container');



function viewAllFillingStations(){
  fetch('http://localhost/oluaka/fuelalert/api/filling_station_apis/get_filling_stations.php',{
    mode: 'no-cors'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    data.records.map((stations)=>{
      tableBody.innerHTML += `      <tr>
      <td>${stations.name}</td>
      <td>${stations.address}</td>
      <td>${stations.area}</td>
      <td>${stations.state}</td>
      <td>${stations.price}</td>

    </tr>
`
    })
  })
  .catch(err => console.log(err))
}
viewAllFillingStations()
