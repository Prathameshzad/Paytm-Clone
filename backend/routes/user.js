const express  = require('express');
const zod = require('zod');
const {User, Account} = require('../db');
const jwt = require("jsonwebtoken");
const { JWT_SECRET} = require("../config");
const { authMiddleware } = require('../middlewares/auth.middleware');
const app = express();

const router = express.Router();

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
});

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

const updateUserSchema = zod.object({
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
});


router.post("/signup",async (req, res) => {

 const {success} = signupSchema.safeParse(req.body);
 if(!success){
    return res.json({
        message: "Email already taken / Incorrect inputs success"
    })
    
    }

    const user = await User.findOne({
        username: req.body.username
    })

    if(user){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs this is user"
        });

    }

     const dbUser = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
     });

     const userId = dbUser._id;

     await Account.create({
        userId,
        balance: 1 + Math.random()*10000
     })


    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: " user created Successfully",
        token: token
    })
})


router.post("/signin",async (req, res)=>{

    const {success} = signinSchema.safeParse(req.body);
    if(!success){
        res.status(411).json({
            messsage: "Inputs incorrect"
        })
    }

    
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    
    if (!user) {
        return res.status(404).json({
            message: "Invalid username or password"
        });
    }
    const userId = user._id;

    if(user){
        const token = jwt.sign({
            userId
        }, JWT_SECRET);
    
        res.json({
            message: " you have sign in",
            token: token
        })
    }

})

router.put("/", authMiddleware,async (req,res)=>{
    const {success} = updateUserSchema.safeParse(req.body)
    if(!success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})

router.get("/bulk", async (req,res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName:{
                "$regex": filter
            }
        },{
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map( user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;