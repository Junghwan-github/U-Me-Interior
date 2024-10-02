import React, { useState, useEffect } from "react";
import Contents from "../../components/layout/Contents";
import Section from "../../components/layout/Section";
import { Link } from "react-router-dom";
import styles from "./Case.module.css";
import { CiSearch } from "react-icons/ci";

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
            <Link to="#">
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
              <p className={styles.category}>{post.category}</p>
              <p className={styles.price}>{post.total}원</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Contents>
      <div className={styles.case_wrap}>
        <Section attr={styles.keyword}>
          <div className={styles.search}>
            <ul>
              <li className={styles.search_item}>
                <div>
                  <input
                    type="text"
                    className={styles.content_search}
                    placeholder="키워드를 검색하세요"
                  />
                  <CiSearch />
                </div>
              </li>
              <li>
                키워드
                <ul>
                  <li>욕실</li>
                  <li>싱크대</li>
                  <li>타일</li>
                  <li>창호</li>
                  <li>조명</li>
                  <li>도배</li>
                  <li>장판</li>
                  <li>마루</li>
                  <li>시트</li>
                </ul>
              </li>
              <li>
                견적
                <ul>
                  <li>2,000만원 이하</li>
                  <li>2,000만원 ~ 3,000만원</li>
                  <li>3,000만원 ~ 5,000만원</li>
                  <li>5,000만원 ~ 1억</li>
                  <li>1억 이상</li>
                </ul>
              </li>
            </ul>
          </div>
        </Section>
        <Section attr={styles.content}>{renderContent()}</Section>
      </div>
    </Contents>
  );
};

export default Case;
