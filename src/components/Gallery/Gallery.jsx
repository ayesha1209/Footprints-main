import React, { useEffect, useState } from "react";
import Heading from "../Common/Headings/Heading";
import Sponsors from "../Common/SponsorSlide/Sponsors";
import Footer from "../Common/Footer/Footer";
import "./Gallery.css";
import RS from "../../assets/images/gallary/concert.jpg";
import MECH from "../../assets/images/gallary/mech.jpg";
import SANGA from "../../assets/images/gallary/sanga.jpg";

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery | FootPrints'25";
  }, []);

  // var [numLoaded, setLoaded] = useState(0);

  // function inrLoaded() {
  //   console.log(numLoaded);
  //   setLoaded((prevNum) => {
  //     return prevNum + 1;
  //   });
  // }

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // console.log(entry.target.children);
          if (entry.isIntersecting) {
            entry.target.children[0].style.animation = "frontAnim 2s";
            entry.target.children[1].style.animation = "backAnim 2s";
            entry.target.children[1].classList.add("SheenAnimate");
            // entry.target.classList.add("img-transition");
          } 
        });
      },
      {
        threshold: "0.7",
      }
    );
  
    const imgBoxes = document.querySelectorAll(".img-card");
    imgBoxes.forEach((el) => {
      observer.observe(el);
    });
  },[]);
  

  // function animate() {
  //   // document.getElementById("img-loader").style.animation = "fadeLoader 2s";
  //   setTimeout(() => {
  //     data.forEach((item, idx) => {
  //       setTimeout(() => {
  //         document.querySelector(`#ImgCard${item.id} > .front`).style.animation = "frontAnim 2s";
  //         document.querySelector(`#ImgCard${item.id} > .back`).style.animation = "backAnim 2s";
  //         document.querySelector(`#ImgCard${item.id} > .back`).classList.add("SheenAnimate");
  //       }, 350 * idx);
  //     });
  //   }, 1000);
  // }

  let data = [
    {
      id: 1,
      imgSrc: RS,
      title: "Rolling Squares",
      subtitle: "Concert",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
    {
      id: 2,
      imgSrc: MECH,
      title: "Macheanema",
      subtitle: "Burnout",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
    
    {
      id: 3,
      imgSrc: SANGA,
      title: "Sanganikee",
      subtitle: "Smackbots",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
    {
      id: 4,
      imgSrc: RS,
      title: "Kaleidoscope",
      subtitle: "Guest Lecture",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },

    {
      id: 5,
      imgSrc: RS,
      title: "FSR",
      subtitle: "FootPrints Social Responsibility",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },

    {
      id: 6,
      imgSrc: RS,
      title: "College Decoration",
      subtitle: "During the Fest",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
    // {
    //   id: 7,
    //   imgSrc: "https://res.cloudinary.com/du1tas6pe/image/upload/v1705862197/main%20website%20gallery/pvrnbunbbqbrgtxscvit.png",
    //   title: "Sanganikee",
    //   subtitle: "Technokick",
    //   cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    // },
    {
      id: 7,
      imgSrc: RS,
      title: "Rolling squares",
      subtitle: "Concert",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
    {
      id: 8,
      imgSrc: RS,
      title: "Citadel",
      subtitle: "Tremors Apsida",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
    {
      id: 9,
      imgSrc: RS,
      title: "Kaleidoscope",
      subtitle: "Podcast",
      cardImg: "https://res.cloudinary.com/diniuq0eg/image/upload/v1703862699/Blank_card_eqh4f4.png",
    },
  ];
  return (
    <>
      <div className="gal_header_img" id="parent_div">
        <div className="text-on-image-gal">
          <Heading id="heading_gallerypage" title="GALLERY" />
        </div>
      </div>
      <section>
        <div className="card-gallery">
          {/* {numLoaded === data.length ? animate() : ""} */}
          {data.map((item) => {
            return (
              <div className="img-card" key={item.id} id={`ImgCard${item.id}`}>
                <div className="front" style={{ backgroundImage: `url(${item.cardImg})` }}>
                  {/* 
                  Either use different card url for each card or make fixed blank bg in css
                  and set text in item property
                */}
                  {/* <div className="cardText">{item.cardText}</div> */}
                </div>
                <div className="back">
                  <img src={item.imgSrc} alt=""/>
                  <div className="imgtext" style={{ textAlign: "center" }}>
                    <p className="imgtitle" style={{ fontSize: "1em" }}>
                      {item.title}
                    </p>
                    <hr />
                    <p className="imgsubtitle" style={{ fontSize: "1em" }}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Sponsors />
      <Footer />
    </>
  );
};
export default Gallery;
