var data = []
var date = new Date()
var datalabel = [date.getFullYear()-2,date.getFullYear()-1,date.getFullYear(),date.getFullYear()+1, date.getFullYear()+2]

fetch("/chartyear")
.then((res) => res.json())
.then((row) => {data = [...datalabel] ; row.map((each) => { let ind = data.indexOf(each.year); if(ind !== -1){
  data[ind] = each.total
}return null
})}) 

const dayChart=() => {return {
  labels: datalabel,
  datasets:[
      {
        label:'Tổng Doanh Thu',
        data:data,
        borderColor:"darkorange",
        fill:"white",
        pointBackgroundColor:[
          'rgba(247, 52, 52, 0.6)',
          'rgba(113, 220, 95, 0.6)',
          'rgba(56, 89, 236, 0.6)',
          'rgba(247, 52, 52, 0.6)',
          'rgba(113, 220, 95, 0.6)'
      ],
        pointRadius: 5
      }
    ]
  }
}
export default dayChart