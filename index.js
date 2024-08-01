const express = require("express")
const app = express();
const users = [{
  name:"jhon",
  kidneys: [{
    healthy:false
  },
{
  healthy:false
}]
 }]

app.use(express.json())

 app.get("/" ,(req,res) =>{
  const numberOfKidneys = users[0].kidneys.length
  let numberOfHealthyKidneys = users[0].kidneys.filter((x) => x.healthy).length
  let numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys
  })
})


app.post("/", (req,res) =>{
const isHealthy = req.body.isHealthy;
users[0].kidneys.push({
  healthy:isHealthy
})
res.send("Submit Done!")
})

app.put("/",(req,res)=>{
  users[0].kidneys.map((x) => x.healthy =true)
  res.json({
    "message":"put done!"
  })
})
 
app.delete("/",(req,res)=>{
  const newKidneys = users[0].kidneys.filter((x) => x.healthy )
  users[0].kidneys = newKidneys
  res.json({
    "message":"delete done!"
  })
})  


 app.listen(3000)