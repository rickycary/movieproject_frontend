import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post"

const Index = (props) => {

  const indexH2 = {
    color: "#635985"
  }

  const movies = useLoaderData()

    return <>
    <div style={{textAlign: "center"}}>
      <h2 style={indexH2}>Add a movie</h2>
      <Form action="/create" method="post">
        <input type="text" name="movieName" placeholder="Movie Name" />
        <input type="text" name="genre" placeholder="Genre" />
        <input type="text" name="rating" placeholder="Where to Watch" />
        <input type="text" name="poster" placeholder="Release Date" /> <br />
        <button>Add to Watchlist</button>
      </Form>
    </div>
    {movies.map((post) => <Post key={post.id} post={post}/>)}
    </>;
  };
  
  export default Index;