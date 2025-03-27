import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const FixedButtonContainer = styled.div`
  position: fixed;
  top: 50%;
  right: -40px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  z-index: 1000;
`;

const NavButton = styled(motion.button)`
  width: 150px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
`;

const NavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <FixedButtonContainer>
      {[
        { path: "/", label: "Info" },
        { path: "/myinfo", label: "AboutMe" },
        { path: "/skill", label: "Skill" },
        { path: "/project", label: "Project" },
      ].map((btn) => (
        <NavButton
          key={btn.path}
          animate={{
            x: location.pathname === btn.path ? -60 : -10, // 전체적으로 덜 튀어나오게 & 기본 위치 더 안쪽
          }}
          whileHover={{ x: -30 }} // 호버 시 살짝만 나오게 조정
          whileTap={{ scale: 1.05 }}
          onClick={() => navigate(btn.path)}
        >
          {btn.label}
        </NavButton>
      ))}
    </FixedButtonContainer>
  );
};

export default NavigationButtons;
