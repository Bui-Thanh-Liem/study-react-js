import classes from "./post.module.css";
import { Link } from "react-router-dom";

//
interface IPropsPost {
    id: string;
    author: string;
    text: string;
}

export default function Post(props: IPropsPost) {
    const { id, author, text } = props;

    return (
        <li className={classes.post}>
            <Link to={id}>
                <p className={classes.author}>{author}</p>
                <p className={classes.text}>{text}</p>
            </Link>
        </li>
    );
}
