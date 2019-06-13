require('dotenv').config();
var express = require('express');

var app = express();

app.use(express.json());

app.use('/sample/animaltbl',require('./Router/animaltblRouter'));
app.use('/sample/colortbl',require('./Router/colortblRouter'));
app.use('/sample/fieldassistant',require('./Router/fieldAssistantRouter'));
app.use('/sample/park',require('./Router/parkNameRouter'));
app.use('/sample/range', require('./Router/rangeNameRouter'));
app.use('/sample/taluk', require('./Router/talukNameRouter'));
app.use('/sample/village', require('./Router/villageNameRouter'));
app.use('/sample/wilduser', require('./Router/wildUserRouter'));    // not working 
app.use('/sample/hwc_details', require('./Router/hwc_detailsUserRouter'));   
app.use('/sample/incident_category', require('./Router/incident_categoryRouter'));
app.use('/sample/db', require('./Router/dbRouter'));
app.use('/sample/daily_count', require('./Router/dailyCountRouter'));  
app.use('/sample/dc_cases', require('./Router/dc_casesRouter'));
app.use('/sample/hwc_case_crop', require('./Router/hwc_case_cropRouter'));
app.use('/sample/hwc_case_hd', require('./Router/hwc_case_hdRouter'));

app.listen( !!process.env.port ? process.env.port : 8080 ,()=> console.log(`server is running on the port: `+ ( !!process.env.port ? process.env.port : 8080)));      
