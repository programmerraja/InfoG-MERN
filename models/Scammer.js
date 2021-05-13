const mongoose=require("mongoose");


let schema=new mongoose.Schema(
								{
									user_id:{
										type:String
									},
									token:
									{
										type:String
									},
									name:
									{
										type:String
									},
									isvisited:
									{
										type:Boolean,
										default:false
									},
									ip:
									{
										type:String,
										default:"Not Known"

									},
									city:
									{
										type:String,
										default:"Not Known"
									},
									region:
									{
										type:String,
										default:"Not Known"
									},
									country:
									{
										type:String,
										default:"Not Known"
									},
									org:
									{
										type:String,
										default:"Not Known"
									},	
								    device:
								    {
										type:JSON,
										default:"Not Known"
									},														
								 	os:
								 	{
										type:String,
										default:"Not Known"
									},									
									browser:
									{
										type:String,
										default:"Not Known"									
									},									
									redirect_link:
									{
										type:String,
										default:"Not Given"									
									},
									visited_date:{
										type:Date
									}
								}
								);


let scammermodel=new mongoose.model("scammer",schema);

module.exports=scammermodel;