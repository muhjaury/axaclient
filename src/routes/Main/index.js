import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CoreLayout from "../../layout/CoreLayout";
import {
  DesktopWrapper,
  FirstSection,
  FirstTitle,
  IconTitleSection,
  ImageFirstSection,
  MiddleFirstSection,
  MobileWrapper,
  RadiusBox,
  RelativeWrapper,
  SecondSection,
  TextDetail,
  TitleSection,
  UserDetail,
  UserDetailWrapper,
  ValueDetail,
} from "./_mainMenu";
import MALE from "./img/male.png";
import PATIENT from "./img/patient.png";

/* eslint-disable */

function MainMenu() {
  const dataFromRedux = useSelector((state) => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Main Menu";
  }, []);

  useEffect(() => {
    if (!dataFromRedux?.isLogin) {
      navigate("/error");
    }
  }, [dataFromRedux]);

  return (
    <CoreLayout>
      <DesktopWrapper>
        <RadiusBox>
          <TitleSection>
            <IconTitleSection src={PATIENT} alt="patient" />
            <FirstTitle>Axa Technical Test</FirstTitle>
          </TitleSection>
          <MiddleFirstSection>
            <ImageFirstSection src={MALE} alt="imageFirstSection" />
          </MiddleFirstSection>
          <UserDetailWrapper>
            <UserDetail>
              <TextDetail>Name</TextDetail>
              <ValueDetail>
                <TextDetail>Muhammad Jaury</TextDetail>
              </ValueDetail>
            </UserDetail>
            <UserDetail>
              <TextDetail>Date of birth</TextDetail>
              <ValueDetail>
                <TextDetail>26 November 1998</TextDetail>
              </ValueDetail>
            </UserDetail>
            <UserDetail>
              <TextDetail>Goal</TextDetail>
              <ValueDetail>
                <TextDetail>Rich</TextDetail>
              </ValueDetail>
            </UserDetail>
          </UserDetailWrapper>
        </RadiusBox>
        <RadiusBox>
          <TitleSection>
            <IconTitleSection src={PATIENT} alt="patient" />
            <FirstTitle>User Details</FirstTitle>
          </TitleSection>
          <UserDetailWrapper>
            <UserDetail>
              <TextDetail>Name</TextDetail>
              <ValueDetail>
                <TextDetail>{dataFromRedux?.userData?.name}</TextDetail>
              </ValueDetail>
            </UserDetail>
            <UserDetail>
              <TextDetail>Email</TextDetail>
              <ValueDetail>
                <TextDetail>{dataFromRedux?.userData?.email}</TextDetail>
              </ValueDetail>
            </UserDetail>
            <UserDetail>
              <TextDetail>Website</TextDetail>
              <ValueDetail>
                <TextDetail>{dataFromRedux?.userData?.website}</TextDetail>
              </ValueDetail>
            </UserDetail>
          </UserDetailWrapper>
        </RadiusBox>
      </DesktopWrapper>
      <MobileWrapper>
        <RelativeWrapper>
          <FirstSection>
            <RadiusBox>
              <TitleSection>
                <IconTitleSection src={PATIENT} alt="patient" />
                <FirstTitle>Axa Technical Test</FirstTitle>
              </TitleSection>
              <MiddleFirstSection>
                <ImageFirstSection src={MALE} alt="imageFirstSection" />
              </MiddleFirstSection>
              <UserDetailWrapper>
                <UserDetail>
                  <TextDetail>Name</TextDetail>
                  <ValueDetail>
                    <TextDetail>Muhammad Jaury</TextDetail>
                  </ValueDetail>
                </UserDetail>
                <UserDetail>
                  <TextDetail>Date of birth</TextDetail>
                  <ValueDetail>
                    <TextDetail>26 November 1998</TextDetail>
                  </ValueDetail>
                </UserDetail>
                <UserDetail>
                  <TextDetail>Goal</TextDetail>
                  <ValueDetail>
                    <TextDetail>Rich</TextDetail>
                  </ValueDetail>
                </UserDetail>
              </UserDetailWrapper>
            </RadiusBox>
          </FirstSection>
          <SecondSection>
            <RadiusBox>
              <TitleSection>
                <IconTitleSection src={PATIENT} alt="patient" />
                <FirstTitle>User Details</FirstTitle>
              </TitleSection>
              <UserDetail>
                <TextDetail>Name</TextDetail>
                <ValueDetail>
                  <TextDetail>{dataFromRedux?.userData?.name}</TextDetail>
                </ValueDetail>
              </UserDetail>
              <UserDetail>
                <TextDetail>Email</TextDetail>
                <ValueDetail>
                  <TextDetail>{dataFromRedux?.userData?.email}</TextDetail>
                </ValueDetail>
              </UserDetail>
              <UserDetail>
                <TextDetail>Website</TextDetail>
                <ValueDetail>
                  <TextDetail>{dataFromRedux?.userData?.website}</TextDetail>
                </ValueDetail>
              </UserDetail>
            </RadiusBox>
          </SecondSection>
        </RelativeWrapper>
      </MobileWrapper>
    </CoreLayout>
  );
}

export default MainMenu;
