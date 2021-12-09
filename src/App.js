import Home from "./Components/Home";
import { useEffect } from "react";
import { allNews } from "./Redux/Action";
import { useDispatch } from "react-redux";
import {Routes, Route} from "react-router-dom";
const App = () => {
  const dispatch = useDispatch();
  const fetchNews = async () => {
    const yourDate = new Date()
    const date = yourDate.toISOString().split('T')[0]
    const API = `https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&apiKey=39959ebc102d49f09e4676e120072a0e`
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
    dispatch(allNews(data));
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <h2><span class="badge bg-secondary mx-auto">Popular News</span></h2>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  );
};
export default App;
