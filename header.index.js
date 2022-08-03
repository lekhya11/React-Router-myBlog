import './index.css'

const Home = () => (
  <div className="home-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
      alt="home"
      className="home-img"
    />
    <h1 className="home-heading">Home</h1>
  </div>
)

export default Home




.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
}
.home-img {
  width: 150px;
}
.home-heading {
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 56px;
  color: #3d3d3d;
}

