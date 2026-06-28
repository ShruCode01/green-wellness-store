import { Link } from "react-router-dom";
import "../Style/Store.css";

const Store = () => {
  return (
    <div className="store-container">
      <div className="contain">
        <div className="text-box">
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>Welcome To Chauhan Herbs</h2>
          <p>Chauhan Herbs mein hum laaye hain aapke liye prakriti se prerit 100% shuddh aur asliyat bhare Ayurvedic utpaad,
            jo aapke sharir, man aur aatma ko deti hai santulan aur urja.
            Hamare sabhi products pure herbs aur natural ingredients se bane hain — bina kisi chemical ya preservative ke. <br /><br />
            Hamari commitment hai – bina milawat, bina compromise, sirf aapke swasth aur khushhaal jeevan ka vada.
            Rozana apne jeevan mein Ayurveda ka sparsh layein, aur mehsoos karein prakriti ki asli shakti ke saath — sirf Chauhan Herbs ke saath.</p>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <img src="../Image/Gee.jpeg" alt="Gee" />
          <h3>Ahinsak Gau Ghee</h3>
          <p>The secret of pure taste</p>
          <Link to="/card1"><button>View More</button></Link>
        </div>

        <div className="card">
          <img src="../Image/Gir.jpeg" alt="Gir" />
          <h3>Ayurvedic Food By Category</h3>
          <p>Pure honey, nature’s sweet gift.</p>
          <Link to="/card2"><button>View More</button></Link>
        </div>

        <div className="card">
          <img src="../Image/face.jpeg" alt="Face" />
          <h3>Face Care</h3>
          <p>Face glow, naturally.</p>
          <Link to="/card3"><button>View More</button></Link>
        </div>

        <div className="card">
          <img src="../Image/pack1.jpeg" alt="Pack" />
          <h3>Ayurvedic Churna</h3>
          <p>Full of Vitamin C & natural energy.</p>
          <Link to="/card4"><button>View More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Store;