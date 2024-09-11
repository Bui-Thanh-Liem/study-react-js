import { Outlet } from "react-router-dom";
import PostsList from "../components/posts-list/PostsList";

export default function Posts() {
    return (
        <main>
            <Outlet />
            <PostsList />
        </main>
    );
}

export async function loader() {
    const response = await fetch("http://localhost:8080/posts");
    const postsData = await response.json();
    return postsData.posts;
}
