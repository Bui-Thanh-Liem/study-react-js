import classes from "./NewPost.module.css";
import Modal from "../modal/Modal";
import { Link, Form, redirect } from "react-router-dom";

export default function NewPost() {
    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} name="postText" />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required name="postAuthor" />
                </p>
                <p className={classes.actions}>
                    <Link to={".."} type="button">
                        Cancel
                    </Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

//
export async function action({ request }: any) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    console.log("postData", postData);
    fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return redirect("/");
}
