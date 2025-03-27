import React,{useEffect,useState} from 'react'
import axios from 'axios'


const UserData = ({setSelectedChartData,setHeading}) => {

    const [chart,setChart] = useState([])

    // Handle Click Event
    const handleClick = (item) => {
        if (!item || !item.data) {
            console.error("Invalid Data Object");
            alert("Invalid Data Object")
            return;
        }
        setSelectedChartData(item.data);
        setHeading(item.title)
    };






    useEffect(()=>{
        const Userdata=async()=>{
            try {
                const responce = await axios.get("http://localhost:9001/Dataset/viewuser",{
                    headers:{
                        'Content-Type':'application/json',
                        'auth-token':localStorage.getItem('token')
                    }
                });
                setChart(responce.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        Userdata();
    },[])

  return (
    <div className='container' style={{ marginTop: '2rem' }}>
                    <div className='row'>
                        <h2 style={{ color: '#457b9d'}}>Your Data:-</h2>
                        {chart.map((item,index)=>(
                            <div key={index} className="col-md-4 mb-3">
                            <div className="card" style={{  width: '100%', backgroundColor: '#f1faee' }}>
                                <div className="card-body" style={{ textAlign: 'left' }}>
                                    <p className="card-text">Name:-{item.title}</p>
                                    <p className="card-text text-muted">User ID:-{item.user}</p>
                                    <p className="card-text text-muted">Data length:-{item.data.length}</p>
                                    <p className="card-text text-muted">createdAt:-{item.createdAt}</p>
                                    <p className="card-text text-muted">updatedAt:-{item.updatedAt}</p>
                                    <button className='btn btn-primary' onClick={() => handleClick(item)}>View</button>
                                </div>
                            </div>
                        </div>
                        )) }
                    </div>
                </div>
  )
}

export default UserData
