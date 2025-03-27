import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VerticalGraph from './VerticalGraph';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from "@mui/material";
import axios from 'axios';
import UserData from './UserData';

const Hero = () => {

  const [rows, setRows] = useState([{ name: "", value: 0}]);
  const [file,setFile] = useState(null);
  const [title, setTitle] = useState("");  //this title is coming from saved data card
  const [heading,setHeading] = useState(null)   //this title is coming from textbox
  const [selectedChartData, setSelectedChartData] = useState(null); // Store selected card data

  useEffect(() => {
    toast.success("Welcome To DASHBOARD !!");
  }, []);

  //this is axios api call backend "Dataset/manual" api for store user insert data into mongodb
  const saveData = async () => {
    try {
      const response = await axios.post("http://localhost:9001/Dataset/manual", {title,data: rows },{
        headers:{
          "auth-token" :localStorage.getItem('token')
        }
      });
      toast.success("Data saved successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      toast.error(error.response?.data?.error || "Error saving data");
      console.error("Error:", error);
    }
  };  

  //target file input
  const handleChangeFile = (e)=>{
      setFile(e.target.files[0]);
  }

  const saveExcel = async ()=>{
    if (!file) {
      toast.error("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("excel", file);

    try {
      const response = await axios.post("http://localhost:9001/Dataset/upload",formData,{
        headers: { "Content-Type": "multipart/form-data",
                    "auth-token" :localStorage.getItem('token')
         },
      })
      toast.success("File uploaded successfully!");
      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Upload Error:", error.response?.data || error.message);
      toast.error("File upload failed!");
    }
  }


  // Handle input change
  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = field === "value" ? Number(value) || 0 : value;
    setRows(newRows);
  };

   // Handle Title Change ✅
   const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  // Add a new row
  const addRow = () => {
    setRows([...rows, { name: "", value: 0 }]);
  };

  //reset data
  const reset =()=>{
    setRows([{ name: "", value: 0}])
    setTitle("")
    setSelectedChartData(null)
  }

  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      <div className="container">
        <div className="row">
          {/* Left Section (Chart & Upload Button) */}
          <div className="col-8">
            <VerticalGraph chartData={selectedChartData || rows} title={title || heading}/> {/* ✅ Pass chartData */}
          </div>
          <div className="col-4 mt-5">
          <label htmlFor="formFile" className="form-label">Upload Excel File To Anelize Data</label>
          <input className="form-control mb-5" type="file" id="formFile" onChange={handleChangeFile}/>
              <button className="btn btn-outline-secondary d-block mx-auto" onClick={saveExcel}>
                <i className="fa fa-upload mx-3" aria-hidden="true"></i>Upload File
              </button>
            </div>
            </div>

          {/* Right Section (Manual Data Entry Table) */}
          <div className="row">
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>Title:-
                    <TextField
                      variant="outlined"
                      size="small"
                      value={title} // ✅ Bind value
                      onChange={handleChangeTitle} // ✅ Call function
                      sx={{ marginLeft: 1 }}
                    />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <TextField
                          variant="outlined"
                          size="small"
                          value={row.name}
                          onChange={(e) => handleChange(index, "name", e.target.value)}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          type="number"
                          variant="outlined"
                          size="small"
                          value={row.value}
                          onChange={(e) => handleChange(index, "value", e.target.value)}
                        />
                      </TableCell>
    
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button variant="contained" color="primary" onClick={addRow} sx={{ margin: 2 }}>
                Add Row
              </Button>

              <Button variant="contained" color="primary" onClick={reset} sx={{ margin: 2 }}>
                reset
              </Button>

              <Button variant="contained" color="success" onClick={saveData} sx={{ margin: 2 }}>
                Save Data
              </Button>
            </TableContainer>
          </div>
          <UserData setSelectedChartData={setSelectedChartData} setHeading={setHeading}/>
        </div>
      </div>
  );
};

export default Hero;
