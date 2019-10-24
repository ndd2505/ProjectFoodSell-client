const yearChart=(data) => {return {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
    datasets:[
      {
        label:'Tổng Doanh Thu',
        data:data,
        borderColor:"White",
        fill:"white",
        backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(229, 241, 75, 0.6)',
            'rgba(56, 89, 236, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(247, 52, 52, 0.6)',
            'rgba(113, 220, 95, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(150, 100, 53, 0.6)',
            'rgba(209, 45, 123, 0.6)',
            'rgba(184, 200, 100, 0.6)',
            'rgba(168, 178, 219, 0.6)',
            'rgba(198, 25, 90, 0.6)',
            'rgba(250, 0, 0, 0.6)'
        ]
      }
    ]
  }
}
export default yearChart