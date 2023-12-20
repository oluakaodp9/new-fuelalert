const tableBody = document.querySelector("#table-container");

viewFillingStations()

function viewFillingStations(){
  fetch('https://FuelAlert.myf2.net/api/filling_station_apis/get_filling_stations.php',{
    mode: 'no-cors'
  })
  .then(res => res.json())
  console.log(res)
  .then(data => {
    console.log(data)

data.records.map((stations)=>{
  tableBody.innerHTML += `      <tr>
  <td>${stations.name}</td>
  <td>${stations.address}</td>
  <td>${stations.area}</td>
  <td>${stations.state}</td>
  <td>${stations.price}</td>
  <td><button id="editBtn">Edit</button><button id="deleteBtn">Delete</button></td>
  

</tr>
`
})
  })
    .catch(err => console.log(err))

}

function editStation(index){
  const editBtn = document.querySelectorAll("#editBtn");
  let btnArray = Array.from(editBtn);
 btnArray.map((btn)=>{
  btn.addEventListener("click",()=>{
    
  })
 })
}
