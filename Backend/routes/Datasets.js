const express = require("express");
const fetchuser = require("../middleware/fetchuser")
const xlsx = require("xlsx");
const fileUpload = require("express-fileupload");
const Dataset = require("../models/Dataset"); // MongoDB Model
const router = express.Router();


const uploadOpts = {
  useTempFiles:true,
  tempFileDir:'/tmp/'
}




// 📌 POST: Upload Excel File
router.post("/upload",fetchuser,fileUpload(uploadOpts),async (req, res) => {
  try {
    const {excel} =  req.files
    if(excel.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
      return res.status(400).json({msg:'File is invalid'})
     
    }

    const workbook = xlsx.readFile(excel.tempFilePath)
    const sheetName = workbook.SheetNames[0]
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName])
    console.log(data);
    const title = excel.name 
    const savedData = await Dataset.insertMany({user: req.user.id,title,data});
    res.status(201).json({ msg: "Data successfully uploaded", savedData });

  } catch (error) {
    res.status(500).json({ error:  error.message || "Error processing file"  });
  }
});

// 📌 POST: Add Manual Data Entry
router.post("/manual",fetchuser,async (req, res) => {
  try {
    const { title,data } = req.body; // Extract data array

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ error: "Data must be an array" });
    }

    // Check if all objects have name & value
    for (const item of data) {
      if (!item.name || item.value === undefined) {
        return res.status(400).json({ error: "Name and value are required" });
      }
    }

    // Insert into MongoDB
    const savedData = await Dataset.create({user: req.user.id,title,data});

    res.status(201).json({ msg: "Data successfully uploaded", savedData });
  } catch (error) {
    res.status(500).json({ error: error.message || "Error processing request" });
  }
});

// 📌 GET: Fetch All Dataset
router.get("/view", async (req, res) => {
  try {
    const dataset = await Dataset.find();
    if (!dataset) return res.status(404).json({ error: "Dataset not found" });

    res.json(dataset);
  } catch (error) {
    res.status(500).json({ error: "Error fetching dataset" });
  }
});

// 📌 GET: Fetch Specific user Dataset
router.get('/viewuser',fetchuser,async(req,res)=>{
  try {
      const appoinment = await Dataset.find({ user: req.user.id });
      res.json(appoinment);
  } catch (error) {
      console.error(Error.message);
      res.status(500).send("Some Error occured")
  }
})

module.exports = router;
