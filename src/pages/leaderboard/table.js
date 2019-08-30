import React from 'react';
import MaterialTable from 'material-table';

import Container from '@material-ui/core/Container';

export default function MaterialTableDemo(props) {
    //console.log(props.rows);
  const [state, setState] = React.useState({
    columns: (window.innerWidth> 660) ?[
      { title: 'Rank', field: 'rank' },
      { title: 'Name', field: 'username' },
      { title: 'Email', field: 'email' },
      { title: 'Aggregate Score', field: 'aggregate' }
      
    ]:
    [
      { title: 'Rank', field: 'rank' },
      { title: 'Name', field: 'username' },
       
      { title: 'Aggregate Score', field: 'aggregate' }
      
    ]
   
  });

  return (
     
    <MaterialTable
      style={{width:'90%', margin: '0 auto'}}
      title=" "
      columns={state.columns}
      data={props.rows}
      options={{
        pageSizeOptions:[25,35,45],
        pageSize:25,
        headerStyle: {
          backgroundColor: '#038A86',
          color: '#FFF',
          fontSize: (window.innerWidth>660)?22:12
        },
        
        searchFieldStyle:{
            width: (window.innerWidth>660)?'450px':'250px'
        }
        ,
        rowStyle: {
            backgroundColor: '#EEE',
            fontSize:'20px'  
          },
        Body:{
          fontSize:'20px'
        }
      }}
    />
     
  );
}
