const {CustomError} = require("../../middlewares/error");
const user = require("../../models/user/users");
const postCountry = require("../../models/countries");




const generatepostwithImg = () => {
    return proccess.env.URL + `/uploads/${filename}`;
}

//createController
const createController = async(req,res,next)=>{
    const {userId} = req.params;
    const {caption} = req.body;
    const files = req.files;

    try {
        const User = await user.findById(userId);
        if(!User) return res.status(404).json({error:"user not found"});

        const imgurl = files && files.length > 0 
         ? files.map((file)=>generatepostwithImg(file.filename))
         : [];

         const newPost = new this.post({
            user:userId,
            caption,
            image:imaageUrl,
         });

         await newPost.save();
         User.posts.push();

         res.status(201).json({message:"post created successfully",post:postCountry});
    } catch (error) {
        next(error);
    }
}

//delete
const deleteCountryController = async(req,res,next) => {
    const {postId} = req.params;
    
        try {
            const postToDelete = await post.findById(postId);
            if(!postToDelete) return next(new CustomError("post not found ", 404));
    
            const User = await user.findById(postToDelete._id);
            if(!User) return next(CustomError("user not found"));
    
            User.posts = User.posts.filter(
                (id) => id.toString() !== postToDelete._id.toString()
            );
    
            await User.save();
            await postToDelete.deleteOne();
    
            res.status(200).json({message:"post successfully deleted"});
    
        } catch (error) {
            next(error);
        }
}

//edit
const editCountryController = async (req,res,next) => {
    const{postId} = req.params;
    const{caption} = req.body;
    const images = req.files || [];

    try {
        const updateToCountry = await post.findById(postId);
        if(!updateToCountry) return res.status(404).json({error:"not found post"});

        const updateFields = {};

        if(images.length>0) {
            const newImages = images.map((file)=>generatepostwithImg(file.filename));
            updateFields.image = newImages;
        }

        const updatePost = await post.findByIdAndUpdate(
            postId,
            {$set:updateFields},
            {new:true},
        )

        res.status(201).json({message:"successfully updated",post:updatePost});
    } catch (error) {
        next(error);
    }
}
//likecountryCard
const likeCountryController = async(req,res,next) => {
    const {postId} = req.params;
    const {userId} = req.body;

    try {
       const Post = await postCountry.findById(postId);
       if(!Post) throw new CustomError("post not found",404);

       const User = await user.findById(userId);
       if(!User) throw new CustomError("user not found",404);


       if(Post.likes.includes(userId)) throw new CustomError("you have already liked post",404);

       Post.likes.push(userId);
       await Post.save();
       res.status(200).json({message:"post successfuly liked"});

    } catch (error) {
        next(error);
    }
}

//unlikecountryCard
const unlikeController = async(req,res,next) => {
     const {postId} = req.params;
        const{userId} = req.body;
        try {
            const Post = await post.findById(postId);
            if(!Post) throw new CustomError("post not found",404);
    
            const User = await user.findById(userId);
            if(!User) throw new CustomError("user not found",404);
    
            Post.likes = this.post.likes.filter((id)=>id.toString !== userId.toString());
            await Post.save();
            res.status(201).json({message:"successfully unliked"});
        } catch (error) {
            next(error);
        }
}

//getallcountryCardController
const getAllCountryController = async(req,res,next) => {
    try {
        const Post = post.find();

        if(!Post || Post.length === 0){
            return res.status(200).json({
                message:"no post found",
                posts:[]
            })
        }

        res.status(201).json({message:"successfully get all post"});
    } catch (error) {
        next(error);
    }
}

//getOneCountryCard
const getOneCardCountry = async(req,res,next) => {
     const {userId} = req.params;
    
        try {
            const Post = await post.findById(userId);
            if(!Post) throw new CustomError("post not found",404);
            
            res.status(201).json({message:"successfully get one country's card"});
        } catch (error) {
            next(error);
        }
}


module.exports = {
    createController,
    deleteCountryController,
    editCountryController,
    likeCountryController,
    unlikeController,
    getAllCountryController,
    getOneCardCountry
}