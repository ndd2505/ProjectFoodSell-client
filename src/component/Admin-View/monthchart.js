const monthChart=(data) => {return {
    labels: ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'],
    datasets:[
      {
        label:'Tổng Doanh Thu',
        data:data,
        borderColor:"white",
        fill:"white",
        backgroundColor:[
            'rgba(247, 52, 52, 0.6)',
            'rgba(113, 220, 95, 0.6)',
            'rgba(56, 89, 236, 0.6)',
            'rgba(247, 52, 52, 0.6)',
            'rgba(113, 220, 95, 0.6)',
            'rgba(56, 89, 236, 0.6)',
            'rgba(247, 52, 52, 0.6)',
            'rgba(113, 220, 95, 0.6)',
            'rgba(56, 89, 236, 0.6)',
            'rgba(247, 52, 52, 0.6)',
            'rgba(113, 220, 95, 0.6)',
            'rgba(56, 89, 236, 0.6)',
            'rgba(199, 10, 100, 0.6)',
        ]
      }
    ]
  }
}
export default monthChart