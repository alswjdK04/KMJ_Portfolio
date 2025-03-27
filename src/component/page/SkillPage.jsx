import styled from "styled-components";
import { motion } from "framer-motion";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 950px;
  background: linear-gradient(135deg, #e8fcd7, #fff8b5);
  position: relative;
  overflow: hidden;
`;

const PageTitle = styled.h2`
  position: absolute;
  top: 30px;
  left: 50%;
  margin-left: -60px;
  font-size: 42px;
  font-weight: 700;
  color: #333;
`;

const SkillWrapper = styled.div`
  width: 80%;
  height: 650px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.4);
`;

const IconWrapper = styled(motion.div)`
  position: absolute;
  cursor: pointer;
  width: fit-content; /* 내부 콘텐츠 크기만큼 자동으로 width/height 조절 (내용물 딱 맞게) */
  height: fit-content;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* 이미지 비율 유지 + 부모 영역 안에 전부 맞춰 넣기 (자르지 않음) */
    display: block;
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
  }

  &:hover::after {
    content: attr(data-label);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    white-space: pre-wrap;
    text-align: center;
    z-index: 2;
  }
`;

const skillImages = [
  { src: process.env.PUBLIC_URL + "/img/java.png", alt: "Java", left: "calc(10% - 30px)", top: "calc(20% - 30px)" },
  { src: process.env.PUBLIC_URL + "/img/jQuery.png", alt: "jQuery", left: "calc(30% - 30px)", top: "calc(58% - 30px)" },
  { src: process.env.PUBLIC_URL + "/img/mysql.png", alt: "MySQL", left: "calc(60% - 30px)", top: "calc(30% - 30px)" },
  { src: process.env.PUBLIC_URL + "/img/JS.png", alt: "JavaScript", left: "calc(80% - 30px)", top: "calc(60% - 30px)" },
  { src: process.env.PUBLIC_URL + "/img/mariadb.png", alt: "MariaDB", left: "calc(20% - 30px)", top: "calc(70% - 30px)" },
  { src: process.env.PUBLIC_URL + "/img/springF.png", alt: "Spring\nFramework", left: "calc(50% - 30px)", top: "calc(20% - 30px)", size: 100 },
  { src: process.env.PUBLIC_URL + "/img/springboot.png", alt: "Springboot", left: "calc(22% - 30px)", top: "calc(25% - 30px)", size: 140 },
  { src: process.env.PUBLIC_URL + "/img/html5.png", alt: "HTML5", left: "calc(75% - 30px)", top: "calc(25% - 30px)" },
  { src: process.env.PUBLIC_URL + "/img/css3.png", alt: "CSS3", left: "calc(40% - 30px)", top: "calc(80% - 30px)" },
  { src: process.env.PUBLIC_URL + "/img/jsp.png", alt: "JSP", left: "calc(15% - 30px)", top: "calc(45% - 30px)" },
  { src: process.env.PUBLIC_URL + "/img/thymeleaf.png", alt: "Thymeleaf", left: "calc(68% - 30px)", top: "calc(75% - 30px)" },
  { src: process.env.PUBLIC_URL + "/img/oracleDB.png", alt: "OracleDB", left: "calc(85% - 30px)", top: "calc(40% - 30px)" },
  { src: process.env.PUBLIC_URL + "/img/Node.png", alt: "Node.js", left: "calc(55% - 30px)", top: "calc(65% - 30px)", size: 120 },
  { src: process.env.PUBLIC_URL + "/img/git.png", alt: "Git", left: "calc(35% - 30px)", top: "calc(35% - 30px)" },
  { src: process.env.PUBLIC_URL + "/img/github.png", alt: "GitHub", left: "calc(10% - 30px)", top: "calc(82% - 30px)", size: 130 },
  { src: process.env.PUBLIC_URL + "/img/react.png", alt: "ReactJS", left: "calc(45% - 30px)", top: "calc(45% - 30px)", size: 120 },
  { src: process.env.PUBLIC_URL + "/img/ajax.png", alt: "Ajax", left: "calc(70% - 30px)", top: "calc(50% - 30px)" },
  { src: process.env.PUBLIC_URL + "/img/Lombok.png", alt: "Lombok", left: "calc(90% - 30px)", top: "calc(70% - 30px)" },
];

const SkillPage = () => {

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
    <PageContainer>
      <PageTitle>Skill</PageTitle>
      <SkillWrapper>
        {skillImages.map((img, index) => (
          <IconWrapper
            key={index}
            data-label={img.alt}
            style={{
              left: img.left,
              top: img.top,
              width: img.size ? `${img.size}px` : '80px',
              height: img.size ? `${img.size}px` : '80px',
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <img src={img.src} alt={img.alt} />
          </IconWrapper>
        ))}
      </SkillWrapper>
    </PageContainer>
    </motion.div>
  );
};

export default SkillPage;
