import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as loaderPosts } from "./routers/Posts.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPost, {
    action as actionPostNew,
} from "./components/new-post/NewPost.tsx";
import RootLayout from "./routers/RootLayout.tsx";
import PostDetails, {loader as loaderPostDetails} from "./components/details-post/DetailsPost.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Posts />,
                loader: loaderPosts,
                children: [
                    {
                        path: "/create-post",
                        element: <NewPost />,
                        action: actionPostNew
                    },
                    {
                        path: "/:postId",
                        element: <PostDetails />,
                        loader: loaderPostDetails
                    }
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
