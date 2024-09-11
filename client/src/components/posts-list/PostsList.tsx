import { IPost } from "../../interfaces/post.interface";
import Post from "../post/Post";
import classes from "./PostsList.module.css";
import {useId} from "react";
import { useLoaderData } from "react-router-dom";

export default function PostsList() {
    const posts = useLoaderData() as Array<IPost>;

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post
                            key={useId()}
                            id={post.id}
                            author={post.postAuthor}
                            text={post.postText}
                        />
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div className={classes.boxEmpty}>
                    <h1>Empty posts</h1>
                    <p>You not posts</p>
                </div>
            )}
        </>
    );
}
