import React, { useState, useEffect } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const TitleText = styled.h1`
  font-family: "Gaegu", cursive;
  font-size: 30px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  color: black;
  margin-bottom: 15px;
  margin-top: 0px;
`;

const LetterPaper = styled.div`
  width: 600px;
  height: 630px;
  background-color: white;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const AnimatedLetterText = styled.p`
  font-family: "Gaegu", cursive;
  line-height: 28px;
  position: relative;
  color: black;
  animation: fadeIn 1s ease-in;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const WaveLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 20px,
    black 21px,
    black 22px,
    transparent 23px
  );
  opacity: 0.05;
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

const LetterPage: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  const letterLines = [
    "I decided to make this webpage to save us both",
    "Me from my horrible hand writing and you from my horrible hand writing..hehe",
    "But first lets start the letter with a happy birthday!!",
    "welcome to the club of over half 50 muhehe",
    "I know~~ you're 24 yes yes~~",
    "But i can't belive it's been almost two years since we started dating",
    "I know i'm not the most romantic person but thank you for standing by me all this time",
    "I think you have become a part of my day that i look forward to every morning",
    "I especially love hearing you talk about your day",
    "And i look forward to more days of us",
    "Thank you for the past two years and for the days to come",
    "고마워 자기야 사랑해~~❤️",

    "From : Your one and only boyfriend"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLine < letterLines.length) {
        setVisibleLines((prevLines) => [...prevLines, letterLines[currentLine]]);
        setCurrentLine(currentLine + 1);
      }
    }, 3000); // 각 줄이 1초 간격으로 표시됨

    return () => clearInterval(timer);
  }, [currentLine, letterLines.length]);

  const videoOptions = {
    width: "600",
    height: "338",
    playerVars: {
      autoplay: 1, // 자동 재생 활성화
    },
  };

  return (
    <LetterContainer>
      <TitleText>Dear Beyza</TitleText>
      <LetterPaper>
        <WaveLines />
        {visibleLines.map((line, index) => (
          <AnimatedLetterText key={index}>{line}</AnimatedLetterText>
        ))}
      </LetterPaper>
      <VideoWrapper>
        <TitleText>Listen to Our Song 🎤</TitleText>
        <YouTube videoId="OFeb1LK1vhM" opts={videoOptions} />
      </VideoWrapper>
    </LetterContainer>
  );
};

export default LetterPage;
