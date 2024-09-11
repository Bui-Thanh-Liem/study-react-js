import { useLoaderData, Link } from "react-router-dom";
import Modal from "../modal/Modal";
import classes from "./DetailsPost.module.css";
import { IPost } from "../../interfaces/post.interface";

export default function PostDetails() {
    const post = useLoaderData() as IPost;

    if (!post) {
        return (
            <Modal>
                <main className={classes.details}>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <Link to=".." className={classes.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }
    return (
        <Modal>
            <main className={classes.details}>
                <p className={classes.author}>{post.postAuthor}</p>
                <p className={classes.text}>{post.postText}</p>
            </main>
        </Modal>
    );
}

export async function loader({params}: any) {
    const response = await fetch(
        `http://localhost:8080/posts/${params.postId}`
    );
    const responseData = await response.json();
    return responseData.post;
}
