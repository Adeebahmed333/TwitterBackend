import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment=async (req,res)=>{
    try {
        const response=await commentService.createComment(req.query.modelId,req.query.modelType,req.body.userId,req.body.content);
        return res.status(201).json({
            success:true,
            massage:'Successfully Added A Comment',
            data:response,
            err:{}
        }); 
    } catch (error) {
        return res.status(500).json({
            success:false,
            massage:'Something Went Wrong',
            data:{},
            err:error.message 
        });
    }
}