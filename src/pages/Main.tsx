import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.p`
  font-family: "Nanum Pen Script";
  font-size: 40px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: black;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 80%;
  height: 70vh;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 20px;
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

type ImageProps = {
  isActive: boolean;
};

const Image = styled.img<ImageProps>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  position: absolute; // 모든 이미지를 동일한 위치에 배치
  top: 0;
  left: 0;
  z-index: ${({ isActive }) => (isActive ? 1 : -1)}; // 활성화된 이미지가 최상위에 보이도록 조정
`;


const ScrollButton = styled.button`
  font-size: 3rem;
  background: none;
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  right: 50%;
  animation: scrollAnimation 1s infinite;
  &:focus {
    outline: none;
  }
  @keyframes scrollAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const ReasonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const ReasonItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  width: 70%;
`;

const ReasonImage = styled.img`
  width: 50%;
  object-fit: cover;
  border-radius: 20px;
`;

const ReasonText = styled.div`
  font-family: "Gaegu", cursive;
  font-size: 30px;
  color: black;
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
`;

const Developer = styled.div`
  font-family: "Gaegu", cursive;
  font-size: 30px;
  color: black;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;

const DevelopText = styled.div`
  font-family: "Gaegu", cursive;
  font-size: 30px;
  color: black;
  text-align: center;
  margin-top: 10px;
`;

const Main = () => {
  const images = [
    "Banner1.jpg",
    "Banner2.jpg",
    "Banner3.jpg",
    "Banner4.jpg",
    "Banner5.jpg",
  ];
  const [current, setCurrent] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    console.log('이미지 배열:', images); // 이미지 배열 로깅

    const timer = setInterval(() => {
      setActiveIndex((prevActiveIndex) => {
        const nextIndex = (prevActiveIndex + 1) % images.length;
        console.log('다음 activeIndex:', nextIndex); // 다음 인덱스 로깅
        setCurrent(nextIndex);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  useEffect(() => {
    console.log('현재 이미지 인덱스:', current); // 현재 이미지 인덱스 로깅
  }, [current]);
  
  

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const reasons = [
    { img: "E1.png", text: "First reason I like you, <br/> Because you're Beautiful," },
    {
      img: "E2.png",
      text: "Second reason I love you, <br/> Because you have a warm heart,",
    },
    {
      img: "E3.png",
      text: "Third reason I love you, <br/> Because you are honest,",
    },
    {
      img: "E4.png",
      text: "Fourth reason I love you, <br/> Because i like your broken sense of humor,",
    },
    {
      img: "E5.png",
      text: "Fifth reason I love you, <br/> Because you do your best",
    },
  ];

  return (
    <BannerContainer>
      <Title>😼 All About Beyza 😼</Title>
      <ImageContainer>
        <SlideButton onClick={prevSlide} style={{ left: "10px" }}>
          &#10094;
        </SlideButton>
        {images.map((img, index) => (
          <Image
            key={index}
            src={`/images/${img}`}
            alt=""
            isActive={index === current}
          />
        ))}
        <SlideButton onClick={nextSlide} style={{ right: "10px" }}>
          &#10095;
        </SlideButton>
      </ImageContainer>
      <ScrollButton>&#8595;</ScrollButton>
      <ReasonContainer>
        {reasons.map((reason, index) => (
          <ReasonItem key={index}>
            {index % 2 === 0 ? (
              <>
                <ReasonImage src={`/images/${reason.img}`} alt="" />
                <ReasonText dangerouslySetInnerHTML={{ __html: reason.text }} />
              </>
            ) : (
              <>
                <ReasonText dangerouslySetInnerHTML={{ __html: reason.text }} />
                <ReasonImage src={`/images/${reason.img}`} alt="" />
              </>
            )}
          </ReasonItem>
        ))}
      </ReasonContainer>
      <Title>🎉24번째 생일을 진심으로 축하해 congrats on your 24th birthday🎉</Title>
      <Developer>Developed by your one and only boyfriend🐶 i did use a template hehe... </Developer>
    </BannerContainer>
  );
};

export default Main;
