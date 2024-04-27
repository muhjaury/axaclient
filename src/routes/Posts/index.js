import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loading from "../../components/Loading";
import { url } from "../../constant/url";
import { useWidget } from "../../context/Context";
import CoreLayout from "../../layout/CoreLayout";
import { posts } from "../../redux/action/userData.action";
import {
  Button,
  ButtonWrapper,
  CommentsDetail,
  CommentsName,
  CommentsText,
  CommentsWrapper,
  FirstTitle,
  RadiusBox,
  TextDetail,
  TitleSection,
  UserDetail,
  UserDetailWrapper,
  ValueDetail,
} from "./_posts";

/* eslint-disable */

function Posts() {
  const [loading, setLoading] = useState(true);
  const [listUser, setListUser] = useState([]);

  const dataFromRedux = useSelector((state) => state.userData);
  const postData = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const { setServerError } = useWidget();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Posts";
  }, []);

  useEffect(() => {
    if (!dataFromRedux?.isLogin) {
      navigate("/error");
    }
  }, [dataFromRedux]);

  useEffect(() => {
    if (postData?.posts?.length > 0) {
      setLoading(false);
    }
  }, [[postData]]);

  const handleCommentClick = (id) => {
    const params = id ? "?id=" + id : "";
    axios
      .get(url + "api/comments" + params, null, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("HTTP status " + res.status);
        }
        const data = res.data.data;
        setLoading(false);
        let postResult = postData.posts.find((item) => item.id === id);
        postResult["comments"] = data.comments;
        let postFilter = postData.posts.filter((item) => item.id !== id);
        postFilter.push(postResult);
        postFilter.sort((a, b) => a.id - b.id);
        if (data.message === "SUCCESS") {
          dispatch(posts({ posts: postFilter }));
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
          <FirstTitle>Posts</FirstTitle>
        </TitleSection>
        <Loading visible={loading} />
        {!loading &&
          postData?.posts?.map((item) => {
            return (
              <UserDetailWrapper>
                <UserDetail>
                  <TextDetail>{item.title.toUpperCase()}</TextDetail>
                  <ValueDetail>{item.body}</ValueDetail>
                </UserDetail>
                {item?.comments?.length === 0 ? (
                  <ButtonWrapper>
                    <Button
                      type="button"
                      value="Show all comments"
                      onClick={() => {
                        handleCommentClick(item.id);
                      }}
                    />
                  </ButtonWrapper>
                ) : (
                  <>
                    <CommentsName>Comments :</CommentsName>
                    <CommentsWrapper>
                      {item?.comments?.map((childItem) => {
                        return (
                          <CommentsDetail>
                            <CommentsName>{childItem?.name}</CommentsName>
                            <CommentsText>{childItem?.body}</CommentsText>
                          </CommentsDetail>
                        );
                      })}
                    </CommentsWrapper>
                  </>
                )}
              </UserDetailWrapper>
            );
          })}
      </RadiusBox>
    </CoreLayout>
  );
}

export default Posts;
