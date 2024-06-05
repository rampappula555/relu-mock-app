import React from "react";
import "./index.css";
import ProfileCard from "../ProfileCard";
import artwork from "../../assets/pexels-ekaterina-12203460.jpg";
import imgAnastasia from "../../assets/pexels-anastasia-shuraeva-4406721.jpg";
import image1 from "../../assets/pexels-genaro-servín-763210.jpg";
import image2 from "../../assets/pexels-pixabay-164455.jpg";
import image3 from "../../assets/pexels-steve-johnson-1269968.jpg";
import img1 from "../../assets/pexels-andrea-piacquadio-3771118.jpg";
import img2 from "../../assets/pexels-antoni-shkraba-4442005.jpg";
import img3 from "../../assets/pexels-antoni-shkraba-4442102.jpg";
import alipazani from "../../assets/pexels-ali-pazani-2613260.jpg";
import humpreyImg from "../../assets/pexels-humphrey-muleba-2045248.jpg";
import like from "../../assets/heart.jpg";
import comment from "../../assets/comment.jpg";
import share from "../../assets/share.jpg";
import imadClick from "../../assets/pexels-imad-clicks-9810659.png";
import imgTobias from "../../assets/pexels-tobias-bjrkli-2236382.png";

const Content = () => {
  return (
    <div className="content">
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search here..."
          className="search-bar"
        />
        <button className="filter-btn">Filters</button>
      </div>
      <div className="main-content">
        <div className="posts">
          <div className="post">
            <div className="post-header">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={alipazani}
                  alt="Lara Leones"
                  className="user-avatar"
                />
                <div className="user-info">
                  <h3 style={{ margin: 0 }}>Lara Leones</h3>
                  <span className="username">@thewallart</span>
                  <span className="badge">1140</span>
                </div>
              </div>
              <img
                src="https://as1.ftcdn.net/v2/jpg/04/04/25/36/1000_F_404253660_9PHYb2HcUzeFAXDAQ6z6sWBktUGrxBox.jpg"
                alt="menu"
                className="three-dot-menu"
              />
            </div>
            <p className="post-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
              <span className="read-more">Read More</span>
            </p>
            <div className="post-image-container">
              <img src={humpreyImg} alt="Artwork" className="post-image" />
            </div>
            <div className="post-stats">
              <span>
                <img src={like} alt="like" className="like-img" /> 9.8k
              </span>
              <span>
                <img src={comment} alt="comment" className="like-img" /> 8.6k
              </span>
              <span>
                <img src={share} alt="share" className="like-img" /> 7.2k
              </span>
            </div>
          </div>

          <div className="post">
            <div className="post-header">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={imadClick} alt="Thomas J." className="user-avatar" />
                <div className="user-info">
                  <h3 style={{ margin: 0 }}>Thomas J.</h3>
                  <span className="username">@thecustomcreater</span>
                  <span className="badge">980</span>
                </div>
              </div>
              <img
                src="https://as1.ftcdn.net/v2/jpg/04/04/25/36/1000_F_404253660_9PHYb2HcUzeFAXDAQ6z6sWBktUGrxBox.jpg"
                alt="menu"
                className="three-dot-menu"
              />
            </div>
            <p className="post-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
              <span className="read-more">Read More</span>
            </p>
            <div className="post-image-container">
              <img src={imgTobias} alt="Artwork" className="post-image" />
            </div>
            <div className="post-stats">
              <span>
                <img src={like} alt="like" className="like-img" /> 6.3k
              </span>
              <span>
                <img src={comment} alt="comment" className="like-img" /> 5.1k
              </span>
              <span>
                <img src={share} alt="share" className="like-img" /> 4.2k
              </span>
            </div>
          </div>
        </div>

        <div className="sidebar-right">
          <button className="seller-btn">Become a Seller</button>
          <div className="artists-section">
            <div style={{ display: "flex" }}>
              <h3 className="right-sidebar-heading">Artists</h3>
              <h3 className="right-sidebar-second-heading">Photographers</h3>
            </div>
            <ProfileCard
              name="Thomas Edward"
              handle="@thewildwithyou"
              backGroundImage={artwork}
              image={imgAnastasia}
            />
            <ProfileCard
              name="Chris Doe"
              handle="@thewildwithyou"
              backGroundImage={image1}
              image={img1}
            />
            <ProfileCard
              name="Emilie Jones"
              handle="@thewildwithyou"
              backGroundImage={image2}
              image={img2}
            />
            <ProfileCard
              name="Jessica Williams"
              handle="@thewildwithyou"
              backGroundImage={image3}
              image={img3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
