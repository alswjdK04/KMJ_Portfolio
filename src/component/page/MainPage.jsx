import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 900px;
  background: linear-gradient(135deg, #e8fcd7, #fff8b5);
  position: relative;
  overflow: hidden;
`;

const Ribbon = styled.img`
  position: absolute;
  top: 125px;
  left: 40px;
  width: 170px;
  height: auto;
  z-index: 5; /* 제일 위에 배치 */
`;

const BackgroundBanner = styled.div`
  position: absolute;
  width: 2000px;
  height: 600px;
  background: rgba(255, 255, 255, 0.5); /* 반투명 흰색 */
  border-radius: 30px;
  backdrop-filter: blur(8px); /* 유리효과 */
  z-index: 0;
`;

const ColumnBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  z-index: 1;
`;

const TextLine = styled(motion.div)`
  font-size: 60px;
  font-weight: 700;
  font-family: 'Firla', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px; /* 글자 사이의 간격 */
`;

const GradientText = styled.span`
/* 텍스트에 그라데이션 컬러 입히기 */
  background: linear-gradient(90deg, #99c1de, #c79ac7, #99c1de);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const BoldName = styled.span`
  font-size: 75px;
  font-weight: 900;
`;

const UnderlineText = styled.span`
  border-bottom: 2px solid #bbb;
  /* inline처럼 옆으로 배치되면서도
   block처럼 크기 조절(padding, width 등)이 가능한 형태 */
  display: inline-block;
  padding-bottom: 5px;
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 40px;
  align-items: center;
`;

const IconLink = styled.a`
  font-size: 48px;
  color: #333;
  transition: color 0.2s;

  &:hover {
    color: #6e5494;
  }
`;

const MainPage = () => {

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <PageContainer>
        <Ribbon src={process.env.PUBLIC_URL + "/img/bookmark.png"} alt="리본" />
        <BackgroundBanner />
        {/* 텍스트 */}
        <ColumnBox>
          <TextLine
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            안녕하세요!
          </TextLine>
          <TextLine
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <GradientText>성장하는 개발자</GradientText>
          </TextLine>
          <TextLine
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            <UnderlineText>
              <BoldName>김민정</BoldName>입니다.
            </UnderlineText>
          </TextLine>
        </ColumnBox>

        <IconContainer>
          <IconLink
            href="https://github.com/alswjdK04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </IconLink>
          <IconLink href="mailto:salla0624@naver.com">
            <FaEnvelope />
          </IconLink>
        </IconContainer>
      </PageContainer>
    </motion.div>
  );
};

export default MainPage;
