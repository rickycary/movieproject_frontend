import { Link } from "react-router-dom";

const Post = (props) => {

  const post = props.post

  // Style
  const div = {
    textAlign: "center",
    border: "2px solid",
    margin: "10px auto",
    width: "40%",
    backgroundColor: "#cfe0e8"
  }

    return <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.movieName}</h1>
      </Link>

    </div>
  };
  
  export default Post;