let data = []
fetch("/chartstatus")
        .then((res)=> res.json())
        .then((row) => data = row)
        .then(()=>{console.log(data)})

const yearChart=() => {return {
    labels: data.map((each) => each.orderstatus),
    datasets:[
      {
        label:'Tổng Doanh Thu',
        data:data.map((each) => each.total),
        borderColor:"White",
        fill:"white",
        backgroundColor:[
            'red',
            'rgba(54,255,6,0.6)',
            'rgba(229, 241, 75, 0.6)',
        ]
      }
    ]
  }
}
export default yearChart