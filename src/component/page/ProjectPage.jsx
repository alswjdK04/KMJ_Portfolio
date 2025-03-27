import styled from "styled-components";
import { motion } from "framer-motion";
import projectData from "../data/projectData.json"; // json 파일로부터 데이터 가져오기
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 900px; 
  background: linear-gradient(135deg, #e8fcd7, #fff8b5);
  position: relative;
  overflow: hidden;
`;

const PageTitle = styled.h2`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 42px;
  font-weight: 700;
  color: #333;
`;

const ProjectCard = styled.div`
  flex: none;
  width: 1000px;
  height: 700px;
  margin: auto;
  margin-top: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: row; /* 가로정렬 */
  gap: 10px;  /* ← 여기 gap을 줄이면 글과 사진이 더 붙음 */
  position: relative;   /* 아이콘 배치 위해 추가 */
`;

const ProjectInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; /* 세로정렬 */
  gap: 10px;
`;

const ImageArea = styled.div`
  flex: 1.2;  /* 비율로 조절: 1.2배 넓게 */
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    display: block;
    max-width: 70%;
    height: auto;
    border-radius: 10px;
  }

  img.middle-image {
    margin-left: 120px; 
  }
`;

const InfoBox = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 15px 18px; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  font-size: 22px;
  font-weight: 600; 
  color: #333;
  line-height: 1.6;
`;

const DescriptionBox = styled(InfoBox)`
  font-size: 22px;
  font-weight: 600;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 15px 18px; 
  div {
    margin-bottom: 5px;
  }
`;

const GithubIconButton = styled.a`
  position: absolute;
  top: 40px;
  right: 40px;
  color: #333;
  transition: transform 0.2s, color 0.2s;
  &:hover {
    transform: scale(1.2);
    color: #007acc;
  }
`;
const GoIconButton = styled.a`
  position: absolute;
  top: 45px;
  right: 90px;
  color: #333;
  transition: transform 0.2s, color 0.2s;
  &:hover {
    transform: scale(1.2);
    color: #007acc;
  }
`;

const ProjectPage = () => {

  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: {
      perView: 1.6, // 한 화면에 1.4개 정도 보여서 옆에 다음 카드가 살짝 보임
      spacing: 30,
    },
    rubberband: true,
    dragSpeed: 0.8,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <PageContainer>
        <PageTitle>Project</PageTitle>
        <div ref={sliderRef} className="keen-slider">
          {projectData.map((project, index) => (
            <div className="keen-slider__slide" key={index}>
              <ProjectCard>
                <ImageArea>
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={process.env.PUBLIC_URL + img}
                      alt={`project-${index}-img-${i}`}
                      className={i === 1 ? "middle-image" : ""}
                    />
                  ))}
                </ImageArea>
                <ProjectInfo>
                  <InfoBox>
                    <div><a>게임 이름:</a> {project.title}</div>
                    <div><a>개발 기간:</a> {project.period}</div>
                    <div><a>기술 스택:</a> {project.stack}</div>
                  </InfoBox>
                  <DescriptionBox>
                    <div><a>기술 및 핵심:</a> {project.description.map((desc, idx) => (
                      <div key={idx}>✔️ {desc}</div>
                    ))}</div>
                    <GithubIconButton href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size="35" color="#333" />
                    </GithubIconButton >
                    {project.site && (
                      <GoIconButton href={project.site} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </GoIconButton>
                    )}
                  </DescriptionBox>
                </ProjectInfo>
              </ProjectCard>
            </div>
          ))}
        </div>
      </PageContainer>
    </motion.div>
  );
};

export default ProjectPage;
