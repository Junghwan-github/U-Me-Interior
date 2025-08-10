import React, { useState, useEffect, useCallback } from "react";
import Contents from "../../components/layout/Contents";
import Section from "../../components/layout/Section";
import { Link } from "react-router-dom";
import styles from "./Case.module.css";
import BoardSearch from "../../components/ui/BoardSearch";
import { IoIosArrowDown } from "react-icons/io";

const Case = () => {
  const [posts, setPosts] = useState([]);
  const [searchSubject, setSearchSubject] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const path = "case";

  // ✅ 검색 기능을 위한 API 호출 함수
  const fetchPosts = useCallback(() => {
    setIsFetching(true);

    let url = `https://uandme.kr/gb5/search_board_posts.php?bo_table=${path}`;

    if (searchSubject) url += `&query=${encodeURIComponent(searchSubject)}`;
    if (searchKeyword) url += `&category=${encodeURIComponent(searchKeyword)}`;
    if (searchPrice) url += `&price=${searchPrice}`;

    console.log("API 호출됨:", url); // ✅ API 호출 로그 확인

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setPosts(data.data || []);
        }
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setIsFetching(false));
  }, [path, searchSubject, searchKeyword, searchPrice]);

  // ✅ 검색 조건이 변경될 때마다 API 호출
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const extractUniqueKeywords = () => {
    const keywordsSet = new Set();
    posts.forEach((post) => {
      if (post.category) {
        post.category.forEach((cat) => keywordsSet.add(cat.trim()));
      }
    });
    return Array.from(keywordsSet);
  };

  const renderContent = () => (
    <>
      <ul className={styles.case_items}>
        {posts.map((post) => (
          <li key={post.id} className={styles.infinity_item}>
            <Link to={`/case/${post.id}`}>
              <div className={styles.image_box}>
                {post.files.length > 0 && (
                  <img
                    src={`https://uandme.kr/gb5${post.files[0].file_url}`}
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
              <p className={styles.price}>
                {Number(post.total.slice(0, -4)).toLocaleString()}
                <span>만원</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <button type="button" className={styles.next_page}>
        더보기 <IoIosArrowDown />
      </button>
    </>
  );

  return (
    <Contents>
      <Section attr={styles.case_wrap}>
        <BoardSearch
          keywords={extractUniqueKeywords()}
          onSearch={(query) => {
            console.log("검색 실행:", query);
            setSearchSubject(query);
          }}
          onKeywordClick={(keyword) => {
            console.log("키워드 검색 실행:", keyword);
            setSearchKeyword(keyword);
          }}
          onPriceClick={(price) => {
            console.log("가격 필터 실행:", price);
            setSearchPrice(price);
          }}
          onReset={() => {
            console.log("검색 초기화 실행");
            setSearchSubject("");
            setSearchKeyword("");
            setSearchPrice("");
          }}
        />
        <div className={styles.content}>{renderContent()}</div>
      </Section>
    </Contents>
  );
};

export default Case;
