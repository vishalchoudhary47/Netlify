import { useSelector } from "react-redux";

const Home = () => {
  const news = useSelector((state) => {
    return state.Apicall.news.articles;
  });

  return (
    <>
      {news === undefined ? (
        <h1>Loading..</h1>
      ) : (
        news.map((data) => {
          return (
            <>
              <div class="card m-5" style={{ maxWidth: "540" }}>
                <div class="row g-0">
                  <div class="col-md-3">
                    <img
                      src={data.urlToImage}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{data.title}</h5>
                      <p class="card-text">{data.description}</p>
                      <div class="card-text">
                        <small class="text-muted">Author: {data.author}</small>
                      </div>
                      <a href={data.url} type="button" class="btn btn-secondary">
                        Read Further
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};
export default Home;
