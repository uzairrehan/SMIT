"use client"

import { PostType } from "./usertype"

type PostPropType={
    post: PostType
}

export default function Post({post}: PostPropType){
    return (
        <>
        {
            post?.map(
                (pst ,i)=><><p>{pst.content}</p> <br /> <p>Likes : {pst.likes}</p> <br /></>
            )

        }    
    

        </>
    )
}