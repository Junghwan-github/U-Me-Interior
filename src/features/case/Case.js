import React, { useState, useEffect } from "react";
import Contents from "../../components/layout/Contents";

const Case = () => {
  const [posts, setPosts] = useState([]);
  const path = "case";

  useEffect(() => {
    if(path){
      // Fetch API로 커스텀 PHP API에서 게시판 데이터 가져오기
      fetch(`https://uandme.kr/gb5/get_board_posts.php?bo_table=${path}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json(); // JSON 형식으로 변환
        })
        .then((data) => {
          setPosts(data); // 가져온 데이터를 상태에 저장
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      }
  }, [path]); // subpath가 변경될 때마다 데이터를 다시 가져옴

  console.log(posts);

  const renderContent = () => {
    return (
      <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div>
            {/* 파일이 존재할 경우 썸네일 출력 */}
            {post.files.length > 0 && (
              <img
                src={`https://uandme.kr/gb5${post.files[0].file_url}`}  // 첫 번째 파일을 썸네일로 사용
                alt={post.files[0].original_name}
                style={{ width: '100px', height: '100px' }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
    );
  };

  return (
    <Contents>
      <div>{renderContent()}</div>
    </Contents>
  );
};

export default Case;