import { Link, useLoaderData } from "react-router-dom";

const Show = (props) => {
  const post = useLoaderData()

  // Styles
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  }

    return <div style={div}>
      <h1>{post.poster}</h1>
      <h1>{post.movieName}</h1>
      <h2>{post.genre}</h2>
      <h2>{post.rating}</h2>


      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  };
  
  export default Show;