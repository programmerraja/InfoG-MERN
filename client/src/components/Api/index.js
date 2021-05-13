async function getScammer(id){
	
	let body=JSON.stringify({id:id});
	let res=await fetch("/user/scammer/id/",{
											method:"post",
											headers:{"Content-Type":"application/json"},
											body:body
										}
							);
		res=await res.json();
		return res;
}

async function getLink(scammername,redirect_link){

		let body=JSON.stringify({"scammername":scammername,redirect_link:redirect_link});
		let res=await fetch("/api/link",{
											method:"post",
											headers:{"Content-Type":"application/json"},
											body:body
										}
							);
		res=await res.json();
		if(res.status==="Sucess")
		{
			let token=window.location.origin+"/token/"+res.token;
			return {status:"Sucess",token:token};
		}
		else if(res.status==="Failed")
		{
			return {status:"Failed",error_msg:res.error_msg};
		}
}

async function getScammers(){
		
		let scammers=[]
		
		let res=await fetch("/api/get");
		res=await res.json();

		if(res.status==="Sucess")
		{
			if(res["scammerdata"].length>0)
			{
				
				res["scammerdata"].forEach((scammer)=>
				{
					let user_id=scammer["_id"];
					let scammername=scammer["name"];
					let ip=scammer["ip"]
					let city=scammer["city"]
					let region=scammer["region"]
					let country=scammer["country"]
					let org=scammer["org"]
					let vendor,model,type;
					if(scammer["device"])
					{						
						vendor=scammer["device"]["vendor"]
						model=scammer["device"]["model"]
						type=scammer["device"]["type"]
					}
					else
					{
						vendor="Not Known";
						model="Not Known";
						type="Not Known";
					}
					let link=window.location.origin+"/token/"+scammer["token"];
					let os=scammer["os"]
					let browser=scammer["browser"]
					let isvisited=scammer["isvisited"];
					scammers.push({user_id,scammername,ip,city,region,os,browser,country,org,vendor,model,type,isvisited,link});
				});	
			}
			return {status:"Sucess",scammers:scammers};
		}
		else{
			return res;
		}
			
}


async function removeScammer(id,popup_container){
	let body=JSON.stringify({"id":id});
	let res=await fetch("/api/remove",{
										method:"post",
										headers:{"Content-Type":"application/json"},
										body:body
									});
	res=await res.json();
	return res;
	
}
async function getProfile(){
	let res=await fetch("/user/profile");
	res=await res.json();
    console.log(res,'sssssss')
		
	return res;
}

async function updateProfile(name,old_password,new_password){
	let body=JSON.stringify({name:name,old_password:old_password,new_password:new_password});
	let res=await fetch("/user/profile",{
											method:"post",
											headers:{"Content-Type":"application/json"},
											body:body
										}
							);
	res=await res.json();
	return res;
}

async function storeDetail(id) {
	let res=await fetch("/token/"+id);
	res=await res.json();
	return res;
}

async function sendResetPassword(new_password){
	
		let body=JSON.stringify({"password":new_password});
		let res=await fetch("/user/forget/password/",{
												method:"post",
												headers:{"Content-Type":"application/json"},
												body:body
											}
								);

		res=await res.json();
		return res;
}


async function sendForgetPassword(email){
	let body=JSON.stringify({email:email});
	let res=await fetch("/user/forget/password",{
											method:"post",
											headers:{"Content-Type":"application/json"},
											body:body
										}
							);

	res=await res.json();
	return res;
}

async function verfiyEmail(id){
	let body=JSON.stringify({id:id});
	let res=await fetch("/user/verifiy/email/",{
											method:"post",
											headers:{"Content-Type":"application/json"},
											body:body
										}
							);
	res=await res.json();
	return res;
}

async function logout(){
	let res=await fetch("/user/logout/",{method:"post"});
	return res;
}

let Api={logout,sendForgetPassword,removeScammer,getLink,getScammers,getScammer,verfiyEmail,storeDetail,updateProfile,getProfile,sendResetPassword}
export default Api;