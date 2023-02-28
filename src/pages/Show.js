import { Link, useLoaderData, Form } from "react-router-dom";

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
      <h1>{post.movieName}</h1>
      <h2>{post.poster}</h2>
      <h3>{post.genre}</h3>
      <h3>{post.rating}</h3>

      <div>
        <h2>Update Movie</h2>
        <Form action={`/update/${post.id}`} method="post">
        <input type="text" name="movieName" placeholder="Movie Name" defaultValue={post.movieName} /> <br />
        <input type="text" name="poster" placeholder="Where to watch" defaultValue={post.poster}/> <br />
        <input type="text" name="genre" placeholder="Genre" defaultValue={post.genre} /> <br />
        <input type="text" name="rating" placeholder="Release Date" defaultValue={post.rating}/> <br />
  

        <button>Update Movie</button>
      </Form>
      <Form action={`/delete/${post.id}`} method="post">
        <button>Delete Movie</button>
      </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  };
  
  export default Show;