import { motion } from "framer-motion";
import styled from "styled-components";
import { FaUser, FaBirthdayCake, FaHome, FaEnvelope, FaGraduationCap, FaGithub, FaInstagram, FaPhone  } from "react-icons/fa";

const ImageBox = styled.div`
  width: 400px;
  height: 500px;
  border: 8px solid #a8d5ba;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 900px;
  background: linear-gradient(135deg, #e8fcd7, #fff8b5);
  position: relative;
`;

const PageTitle = styled.h2`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 36px;
  font-weight: 700;
  color: #333;
`;

const ProfileWrapper = styled.div`
  background: rgba(255, 255, 255, 0.92);
  padding: 60px 80px;
  border-radius: 32px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  gap: 100px;
  align-items: center;
  border: 3px dashed #a8d5ba; /* 테두리에 포인트 추가 */
  transition: transform 0.3s, box-shadow 0.3s;


`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 28px;
  color: black;
  font-weight: 600;

  svg {
    margin-right: 12px;
    font-size: 24px;
    color: #555; /* 아이콘 색상은 유지 */
  }

  a {
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const MyInfoPage = () => {

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
    <PageContainer>
      <PageTitle><h2>AboutMe</h2></PageTitle>
      <ProfileWrapper>
        <ImageBox>
          <img src={process.env.PUBLIC_URL + "/img/profile.jpg"} alt="내 사진" />
        </ImageBox>
        <InfoList>
          <InfoItem><FaUser /> 김민정</InfoItem>
          <InfoItem><FaBirthdayCake /> 2004. 06. 24</InfoItem>
          <InfoItem><FaHome /> 서울시 강북구</InfoItem>
          <InfoItem><FaEnvelope /> salla0624@naver.com</InfoItem>
          <InfoItem><FaPhone /> 010-3309-1933</InfoItem>
          <InfoItem><FaGraduationCap /> 명지전문대학교 (소프트웨어콘텐츠학과)</InfoItem>
          <InfoItem><FaGithub /> <a href="https://github.com/alswjdK04" target="_blank" rel="noopener noreferrer">GitHub</a></InfoItem>
          <InfoItem><FaInstagram /><a href="https://www.instagram.com/alwj0624_m" target="_blank" rel="noopener noreferrer">Instagram</a></InfoItem>
        </InfoList>
      </ProfileWrapper>
    </PageContainer>
    </motion.div>
  );
};


export default MyInfoPage;
