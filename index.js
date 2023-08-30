const { default: axios } = require("axios")

const busStop = "18141"

const api = `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${busStop}`

const config = {
  headers: {
    'AccountKey': 'xHrBZD3HTbqeGcgRVnd/1A=='
  }
}

async function loadBusData() {
  console.log("start")

  const res = await axios.get(api, config)
  //can only use AWAIT inside async function
  // axios.get() gives me back a Promise<Object>
  // await axios.get(api, config)
  //  .then((res) => console.log(res.data))
  //  .catch((err) => {  //async await chaining .then .catch ...
  //    console.log(err)
  //  })
  
  // await axios.get(api, config).then((res) => console.log(res.status))  
  
  console.log(res.data.Services)
  console.log("end")
}

loadBusData() // Promise<void>
  .catch((err) => console.log(err))

// console.log("start")
// axios.get(api, config).then((res) => console.log(res.data))
// console.log("end")

