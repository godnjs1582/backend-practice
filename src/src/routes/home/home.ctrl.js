"use strict";

const users={
    id:["가나다","라마바","사아자"],
    password:["1234","5678","1212"]
};

const output={
    home:(req,res)=>{
        res.render("home/index")
    },
    login:(req,res)=>{
        res.render("home/login")
    }
}

const process ={ 
    login:(req,res)=>{
        const id =req.body.id;
        const password =req.body.password;
        if(users.id.includes(id)){
            const idx=users.id.indexOf(id);
            if(users.password[idx]===password){
                return res.json({
                    success:true
                })
            }
        }
        return res.json({
            success:false,
            msg:"로그인에 실패하셨습니다",
        })
    }
}


module.exports={
    output,
    process
};
