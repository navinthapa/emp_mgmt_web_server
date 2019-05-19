const Express=require('express')
const express =Express();
function login(req,resp)
{
    resp.json(
        {
            sataus: 'ok'
        })
    }
        express.get('/api/login',login)

        express.listen(8000, 'localhost',()=>
        {
            console.log('server is running at', 8000)
          })
        


