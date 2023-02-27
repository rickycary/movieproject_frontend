import { useLoaderData } from "react-router-dom";
import Post from "../components/Post"

const Index = (props) => {

  const movies = useLoaderData()

    return movies.map((post) => <Post key={post.id} post={post}/>
    )
  };
  
  export default Index;