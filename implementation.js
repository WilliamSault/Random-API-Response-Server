var express = require('express');

class Handler{


    root(res){
        res.send('<html><body><h1>This java script server will send back a success or fail (400)</h1></body></html>');
    };
    
    randomTimeRange(req,res){

        function calcTime(req,next)
        {
            const max = parseInt(req.params.maxTime);
            const min = parseInt(req.params.minTime);
            const N = Math.random();
            const time = (N * (max-min) + min) * 1000;
            next(time);
        }
    
        calcTime(req,function(time){
            setTimeout(sendResponse,time,res,req.params.code,time);
        });

    };

    randomTime(req,res){
        var time = Math.random() * 10000;
        setTimeout(sendResponse,time,res,req.params.code,time);
    };

    fixedTime(req,res){

        function calcTime(req,next)
        {
            const time = parseInt(req.params.time) * 1000;
            const code = req.params.code;
            next(time,code);
        }
        
        calcTime(req,function(time,code){
            setTimeout(sendResponse,time,res,code,time);
        });
        
    };
}

function sendResponse(res,code,time){

    var timeStr;
    if (time != null) {
        timeStr = parseFloat(time)/1000 + " seconds delay"
        console.log(parseFloat(time)/1000 + " seconds delay");
    }

    switch (parseInt(code)) {
        case 200:
            res.status(200).send('200 Success!');
            break;
        case 400:
            res.status(400).send('400 Bad Request');
            break
        default:
            res.sendStatus(code);
            break;
    }
};


module.exports = Handler;