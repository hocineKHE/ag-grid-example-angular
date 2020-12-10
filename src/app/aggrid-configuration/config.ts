export class Config {

  columnDefs = [{
    headerName: 'Athlete',
    field: 'athlete',
    width: 150,
    sortable: true,
    filter: true,
    sortingOrder: ['asc', 'desc']
  },
    {
      headerName: 'age',
      field: 'age',
      sortable: true,
      filter: true,
      width: 90,
      sortingOrder: ['desc', 'asc']
    },
    {
      headerName: 'Country',
      field: 'country',
      sortable: true,
      width: 150,
      filter: true,
      sortingOrder: ['desc', null]
    },
    {
      headerName: 'Year',
      field: 'year',
      sortable: true,
      width: 150,
      filter: true,
      sortingOrder: ['asc']
    },
    {
      headerName: 'Sport',
      field: 'sport',
      sortable: true,
      width: 150,
      filter: true
    },
    {
      headerName: 'Gold',
      field: 'gold',
      width: 100
    },
    {
      headerName: 'Silver',
      field: 'silver',
      width: 100
    },
    {
      headerName: 'Bronze',
      field: 'bronze',
      width: 100
    },
    {
      headerName: 'Total',
      field: 'total',
      width: 100
    }];

}
