import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Axios from 'axios'

const AddEvent = () => {
  
  const url="https://localhost:44389/api/Event/AddEvent"
  const [Event,setEvent]=React.useState(
    {
      EventName:"",
      EventDescription:"",
      EventImage:""

    }
  )
  function handelChange(e){
    const newdata={...Event}
newdata[e.target.id]=e.target.value
setEvent(newdata)
console.log(Event)
  }
  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      
      EventName:Event.EventName,
      EventDescription:Event.EventDescription,
      EventImage:Event.EventImage
  
    }).then(res=>
      {
    console.log(res.data)
  
      }
    )
    }
  return (
    <div>
     <NavBar/>
     <h1 className='Title'>Add Event</h1>
     <div className='LoginForm'>
      <form onSubmit={(e)=>submit(e)}>
        <p>Event Name</p>
        <input type="text"
       
        onChange={(e)=>handelChange(e)}
        id='EventName'
        value={Event.EventName}
        ></input>
        <br>
        </br>
        <p>Event Description</p>
        <input type="textbox"
       
        onChange={(e)=>handelChange(e)}
        id='EventDescription'
        value={Event.EventDescription}
        ></input>
         <br/>
        <p>Event Image</p>
        <input type="file"
       
        onChange={(e)=>handelChange(e)}
        id='EventImage'
        value={Event.EventImage}
        ></input>

     <button>submit</button>
      </form>
    </div>
   
    </div>
  )
}

export default AddEvent
