const express= require("express")
const app = express ()
app.get('/',(req,res)=>{
    res.json({
        mesg:'this is backend'
    })
})
app.listen (3000)
