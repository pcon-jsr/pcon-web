import firebase  from "./data";
import React, { Component } from 'react';
import Table from "./table";
class Leader extends Component {
  
     state={
      disp:[]
    } 
   
   componentDidMount(){

    window.scrollTo(0,0);
     const refer=firebase.database().ref("/");
     refer.on("value",(snapshot)=>{
            let words=snapshot.val();
            let dumm=[];
           
           for(let prop in words){
                
                   dumm.push(words[prop]);
                  
           }
          
            this.setState({
               disp:dumm
             });
     })
   }
render(){
    let list=[...this.state.disp];
    let list2=[];
    
    if(this.state.disp.lenght!=0){
      list.sort(function(a,b) {
        return b.aggregate - a.aggregate;
    });
    let count=1;
    
    for(let prop in list){
       let x=(Number(list[prop].aggregate)).toFixed(2);
         list[prop].aggregate=Number(x);
      //console.log(list[prop].aggregate.toFixed(2));
      let obj= {...list[prop],rank:count}       
      list2.push(obj);
      count++;
     
}  
    

}

return <div style={{marginTop:'100px', marginBottom:'70px', width:'100%'}}>
          <div style={{width:'100%', height:'4rem', textAlign:'center'}}>
              <h1>Leaderboard</h1>
          </div>
          <Table   rows={list2} /> 

        </div>
}

}
export default Leader;