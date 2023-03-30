const express=require("express");
const app=express();
const fundraiserRoutes=require("../routes/fundraiserRoutes");
const campaignRoutes=require("../routes/campaignRoutes");
const donationRoutes=require("../routes/donationRoutes");
const userRoutes=require("../routes/userRoutes");
app.use("/fundraisers",fundraiserRoutes);
app.use("/campaigns",campaignRoutes);
app.use("/donations",donationRoutes);
app.use("/users",userRoutes);
module.exports=app;