import { CiSearch } from "react-icons/ci";
import { IoRefreshSharp } from "react-icons/io5";
import styles from "./BoardSearch.module.css";
import { useState, useEffect } from "react";

const BoardSearch = ({ keywords, onSearch, onKeywordClick, onPriceClick, onReset }) => {
  const [searchText, setSearchText] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // 현재 스크롤 위치
      const threshold = 400; // 스크롤이 400px 이상이면 고정
      
      if (scrollY > threshold && !isActive) {
        setIsActive(true);
      } else if (scrollY <= threshold && isActive) {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isActive]);

  const handleSearch = () => {
    console.log("검색 실행:", searchText); // 🔍 값 확인
    onSearch(searchText);
  };

  return (
    <div className={`${styles.search} ${isActive ? styles.fixed : ""}`}>
      <ul className={styles.search_content}>  {/* 🔹 중복된 styles.fixed 제거 */}
        {/* 제목 검색 */}
        <li className={styles.search_item}>
          <div>
            <input
              type="text"
              className={styles.content_search}
              placeholder="키워드를 검색하세요"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  console.log("Enter 입력됨, 검색 실행");
                  handleSearch();
                }
              }}
            />
            <CiSearch onClick={handleSearch} />
          </div>
        </li>

        {/* 키워드 검색 */}
        <li className={styles.keyword}>
          키워드
          <ul>
            {keywords.length > 0 ? (
              keywords.map((keyword) => (
                <li key={keyword} onClick={() => onKeywordClick(keyword)}>
                  {keyword}
                </li>
              ))
            ) : (
              <li>키워드 없음</li>
            )}
          </ul>
        </li>

        {/* 가격 필터 */}
        <li className={styles.prices}>
          견적
          <ul>
            <li onClick={() => onPriceClick("under_2000")}>2,000만원 이하</li>
            <li onClick={() => onPriceClick("2000_3000")}>2,000만원 ~ 3,000만원</li>
            <li onClick={() => onPriceClick("3000_5000")}>3,000만원 ~ 5,000만원</li>
            <li onClick={() => onPriceClick("5000_10000")}>5,000만원 ~ 1억</li>
            <li onClick={() => onPriceClick("over_10000")}>1억 이상</li>
          </ul>
        </li>

        {/* 초기화 버튼 */}
        <li>
          <button type="button" className={styles.default_button} onClick={onReset}>
            초기화 <IoRefreshSharp />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BoardSearch;
