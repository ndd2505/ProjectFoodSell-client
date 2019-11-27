const yearChart=(data) => {return {
    labels: ["0-12h", "12h-24h"],
    datasets:[
      {
        label:'Tổng Doanh Thu',
        data:data,
        borderColor:"White",
        fill:"white",
        backgroundColor:[
            'rgba(229, 241, 75, 0.6)',
            'rgba(29, 0, 253, 0.6)'
        ]
      }
    ]
  }
}
export default yearChart