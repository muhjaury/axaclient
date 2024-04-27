import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loading from "../../components/Loading";
import { url } from "../../constant/url";
import { useWidget } from "../../context/Context";
import CoreLayout from "../../layout/CoreLayout";
import { albums, posts } from "../../redux/action/userData.action";
import {
  Button,
  ButtonWrapper,
  FirstTitle,
  RadiusBox,
  TextDetail,
  TitleSection,
  UserDetail,
  UserDetailWrapper,
  ValueDetail,
} from "./_users";

/* eslint-disable */

function Users() {
  const [loading, setLoading] = useState(true);
  const [listUser, setListUser] = useState([]);

  const dataFromRedux = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const { setServerError } = useWidget();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "List of users";
    axios
      .get(url + "api/userList", null, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("HTTP status " + res.status);
        }
        const data = res.data.data;
        setLoading(false);
        if (data.message === "SUCCESS") {
          setListUser(data.userList);
        } else {
          setServerError(true);
        }
      })
      .catch(() => {
        setServerError(true);
      });
  }, []);

  useEffect(() => {
    if (!dataFromRedux?.isLogin) {
      navigate("/error");
    }
  }, [dataFromRedux]);

  const handlePostsClick = (id) => {
    dispatch(posts({ userId: "", posts: [] }));
    const params = id ? "?id=" + id : "";
    axios
      .get(url + "api/posts" + params, null, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("HTTP status " + res.status);
        }
        const data = res.data.data;
        setLoading(false);
        if (data.message === "SUCCESS") {
          dispatch(posts({ userId: Number(id), posts: data.posts }));
        } else {
          setServerError(true);
        }
      })
      .catch(() => {
        setServerError(true);
      });
    navigate("/posts");
  };

  const handleAlbumsClick = (id) => {
    dispatch(albums({ userId: "", albums: [] }));
    const params = id ? "?id=" + id : "";
    axios
      .get(url + "api/albums" + params, null, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("HTTP status " + res.status);
        }
        const data = res.data.data;
        setLoading(false);
        if (data.message === "SUCCESS") {
          dispatch(albums({ userId: Number(id), albums: data.albums }));
        } else {
          setServerError(true);
        }
      })
      .catch(() => {
        setServerError(true);
      });
    navigate("/albums");
  };

  return (
    <CoreLayout>
      <RadiusBox>
        <TitleSection>
          <FirstTitle>List of users</FirstTitle>
        </TitleSection>
        <Loading visible={loading} />
        {!loading &&
          listUser?.map((item) => {
            return (
              <UserDetailWrapper>
                <UserDetail>
                  <TextDetail>Name</TextDetail>
                  <ValueDetail>
                    <TextDetail>{item.name}</TextDetail>
                  </ValueDetail>
                </UserDetail>
                <UserDetail>
                  <TextDetail>Email</TextDetail>
                  <ValueDetail>
                    <TextDetail>{item.email}</TextDetail>
                  </ValueDetail>
                </UserDetail>
                <UserDetail>
                  <TextDetail>Website</TextDetail>
                  <ValueDetail>
                    <TextDetail>{item.website}</TextDetail>
                  </ValueDetail>
                </UserDetail>
                <ButtonWrapper>
                  <Button
                    type="button"
                    value="Show all posts"
                    onClick={() => {
                      handlePostsClick(item.id);
                    }}
                  />
                  <Button
                    type="button"
                    value="Show all albums"
                    onClick={() => {
                      handleAlbumsClick(item.id);
                    }}
                  />
                </ButtonWrapper>
              </UserDetailWrapper>
            );
          })}
      </RadiusBox>
    </CoreLayout>
  );
}

export default Users;
