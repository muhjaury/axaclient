import styled from "styled-components";

export const DesktopWrapper = styled.div`
  display: none;
  @media all and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const MobileWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  @media all and (min-width: 1024px) {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #transparent;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #transparent;
  }
`;

export const RelativeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: aliceblue;
`;

export const FirstSection = styled.div`
  position: relative;
  height: 320px;
  width: 100%;
  background: #ffffff;
  padding: 12px;
`;

export const RadiusBoxEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  width: 100%;
  padding: 8px;
  background: #ffffff;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.05), 0px 3px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  :hover {
    transform: scale(1.02);
    transition: 0.25s ease-out;
    cursor: pointer;
  }
`;

export const RadiusBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 8px;
  background: #ffffff;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.05), 0px 3px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  overflow: auto;
  &:hover {
    transform: scale(1.02);
    transition: 0.25s ease-out;
  }

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconTitleSection = styled.img`
  height: 40px;
  width: 40px;
`;

export const FirstTitle = styled.span`
  color: #000000;
  font-size: 28px;
  font-weight: bold;
`;

export const MiddleFirstSection = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ImageFirstSection = styled.img`
  height: 120px;
  width: 120px;
`;

export const NoRmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleNoRm = styled.span`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: #848a90;
`;

export const ValueNoRm = styled.span`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #000000;
`;

export const UserDetailWrapper = styled.div`
  margin-top: 16px;
  padding: 8px;
  border: 1px solid #000000;
  border-radius: 8px;
`;

export const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const TextDetail = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 14px;
  color: #000000;
`;

export const ValueDetail = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 14px;
  color: #000000;
`;

export const SecondSection = styled.div`
  position: relative;
  height: 320px;
  width: 100%;
  background: #000000;
  padding: 12px;
`;

export const TitleSectionSecond = styled.div`
  padding: 20px 20px 16px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SecondTitle = styled.span`
  margin: 8px 0 0 8px;
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
`;

export const VisitWrapper = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  padding: ${({ visitLength }) => (visitLength > 1 ? "8px 8px 8px 0" : "8px")};
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #transparent;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #transparent;
  }
`;

export const VisitCard = styled.div`
  position: relative;
  display: ${({ visitLength }) => (visitLength === 0 ? "flex" : "block")};
  align-items: center;
  justify-content: center;
  min-height: 192px;
  min-width: ${({ visitLength }) => (visitLength > 1 ? "350px" : "100%")};
  padding: 8px;
  margin: ${({ visitLength }) => (visitLength > 1 ? "0 8px" : "0px")};
  margin-bottom: 12px;
  background: #ffffff;
  box-shadow: 0px 7px 10px rgba(43, 81, 110, 0.3),
    0px 3px 8px rgba(43, 81, 110, 1);
  border: 1px solid rgba(43, 81, 110, 0.04);
  border-radius: 8px;

  :hover {
    transform: scale(1.02);
    transition: 0.25s ease-out;
    cursor: pointer;
  }
`;

export const VisitCardNotFound = styled.div`
  line-height: 1;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #848a90;
`;

export const VisitCardTitle = styled.div`
  text-transform: uppercase;
  line-height: 1;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #000000;
`;

export const ButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

export const Button = styled.input`
  width: auto;
  margin: 0px;
  background: #821199;
  color: #ffffff;
  display: inline-block;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  background-clip: padding-box;
  border: 1px solid #000;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #660d78;
    color: #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const ThirdSection = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  background: #ffffff;
`;

export const TitleSectionThird = styled.div`
  padding: 20px 20px 8px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const VisitDetail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const ClinicName = styled.span`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;
export const VisitDate = styled.span`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  color: #848a90;
`;

export const MedicineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
`;

export const MedicineTitle = styled.span`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;

export const MedicineDescWrapper = styled.div`
  text-align: justify;
`;

export const MedicineDesc = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #848a90;
`;

export const AskMedicineWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const AskMedicine = styled.div`
  height: auto;
  width: auto;
  padding: 4px 8px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05), 0px 3px 8px rgba(0, 0, 0, 0.3);
  color: #000000;
  font-size: 16px;
  font-weight: 600;
`;

export const PhotosWrapper = styled.div`
  max-height: 240px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: scroll;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
`;

export const PhotosDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 8px 0 8px 0;
`;

export const PhotosText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;
