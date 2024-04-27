import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loading from "../../components/Loading";
import { url } from "../../constant/url";
import { useWidget } from "../../context/Context";
import CoreLayout from "../../layout/CoreLayout";
import { albums } from "../../redux/action/userData.action";
import {
  Button,
  ButtonWrapper,
  FirstTitle,
  Img,
  PhotosDetail,
  PhotosText,
  PhotosWrapper,
  RadiusBox,
  TextDetail,
  TitleSection,
  UserDetail,
  UserDetailWrapper,
} from "./_albums";

/* eslint-disable */

function Albums() {
  const [loading, setLoading] = useState(true);

  const dataFromRedux = useSelector((state) => state.userData);
  const albums_data = useSelector((state) => state.albums);
  const navigate = useNavigate();
  const { setServerError } = useWidget();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Albums";
  }, []);

  useEffect(() => {
    if (!dataFromRedux?.isLogin) {
      navigate("/error");
    }
  }, [dataFromRedux]);

  useEffect(() => {
    if (albums_data?.albums?.length > 0) {
      setLoading(false);
    }
  }, [[albums_data]]);

  const handleAlbumClick = (id) => {
    const params = id ? "?id=" + id : "";
    axios
      .get(url + "api/photos" + params, null, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("HTTP status " + res.status);
        }
        const data = res.data.data;
        setLoading(false);
        let albumResult = albums_data.albums.find((item) => item.id === id);
        albumResult["photos"] = data.photos;
        let albumFilter = albums_data.albums.filter((item) => item.id !== id);
        albumFilter.push(albumResult);
        albumFilter.sort((a, b) => a.id - b.id);
        if (data.message === "SUCCESS") {
          dispatch(albums({ albums: albumFilter }));
        } else {
          setServerError(true);
        }
      })
      .catch(() => {
        setServerError(true);
      });
  };

  return (
    <CoreLayout>
      <RadiusBox>
        <TitleSection>
          <FirstTitle>Albums</FirstTitle>
        </TitleSection>
        <Loading visible={loading} />
        {!loading &&
          albums_data?.albums?.map((item, index) => {
            return (
              <UserDetailWrapper>
                <UserDetail>
                  <TextDetail>{item.title.toUpperCase()}</TextDetail>
                </UserDetail>
                {item?.photos?.length === 0 ? (
                  <ButtonWrapper>
                    <Button
                      type="button"
                      value="Show all photos"
                      onClick={() => {
                        handleAlbumClick(item.id, index);
                      }}
                    />
                  </ButtonWrapper>
                ) : (
                  <PhotosWrapper>
                    {item?.photos?.map((childItem) => {
                      return (
                        <PhotosDetail>
                          <PhotosText>{childItem?.title}</PhotosText>
                          <Img src={childItem?.thumbnailUrl} />
                        </PhotosDetail>
                      );
                    })}
                  </PhotosWrapper>
                )}
              </UserDetailWrapper>
            );
          })}
      </RadiusBox>
    </CoreLayout>
  );
}

export default Albums;
