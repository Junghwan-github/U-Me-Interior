import React, { useState, useEffect } from "react";
import Contents from "../../components/layout/Contents";
import Section from "../../components/layout/Section";
import { Link } from "react-router-dom";
import styles from "./Case.module.css";

import BoardSearch from "../../components/ui/BoardSearch";

const Case = () => {
  const [posts, setPosts] = useState([]);
  const path = "case";

  useEffect(() => {
    if (path) {
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
      <ul className={styles.case_items}>
        {posts.map((post) => (
          <li key={post.id} className={styles.infinity_item}>
            <Link to={`/case/${post.id}`}>
              <div className={styles.image_box}>
                {/* 파일이 존재할 경우 썸네일 출력 */}
                {post.files.length > 0 && (
                  <img
                    src={`https://uandme.kr/gb5${post.files[0].file_url}`} // 첫 번째 파일을 썸네일로 사용
                    alt={post.files[0].original_name}
                  />
                )}
              </div>
              <h2 className={styles.title}>{post.title}</h2>
              <div className={styles.category_wrap}>
                {post.category.map((item, index) => (
                  <span key={index} className={styles.category}>
                    {item}
                  </span>
                ))}
              </div>
              <p className={styles.price}>{Number(post.total.slice(0, -4)).toLocaleString()}<span>만원</span></p>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Contents>
      <Section attr={styles.case_wrap}>
        <BoardSearch />
        <div className={styles.content}>{renderContent()}</div>
      </Section>
    </Contents>
  );
};

export default Case;
