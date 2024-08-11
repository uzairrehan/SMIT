export type PostType = {
    map(): unknown
    content: string,
    likes: number
}

export type UserType = {
    email: string,
    password: string,
    userName: string,
    hobbies: string[],
    post: PostType[]
}