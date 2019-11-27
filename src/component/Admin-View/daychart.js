
const dayChart=(data) => {return {
  labels: ['ngày 1', 'ngày 2', 'ngày 3', 'ngày 4', 'ngày 5', 'ngày 6', 'ngày 7', 'ngày 8', 'ngày 8', 'ngày 9', 'ngày 10', 'ngày 11', 'ngày 12', 'ngày 13', 'ngày 14', 'ngày 15', 'ngày 16', 'ngày 17', 'ngày 18', 'ngày 19', 'ngày 20', 'ngày 21', 'ngày 22', 'ngày 23', 'ngày 24', 'ngày 25', 'ngày 26', 'ngày 27', 'ngày 28', 'ngày 29', 'ngày 30', 'ngày 31',],
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
          'rgba(247, 52, 52, 0.6)',
          'rgba(113, 220, 95, 0.6)',
          'rgba(56, 89, 236, 0.6)',
      ],
        pointRadius: 5
      }
    ]
  }
}
export default dayChart