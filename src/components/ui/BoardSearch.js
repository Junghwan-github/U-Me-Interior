import { CiSearch } from "react-icons/ci";
import { IoRefreshSharp } from "react-icons/io5";
import styles from "./BoardSearch.module.css";
import { useState, useEffect } from "react";
import { SlReload } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

const BoardSearch = ({ keywords, onSearch, onKeywordClick, onPriceClick, onReset }) => {
  const [searchText, setSearchText] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [mobileCategory, setMobileCategory] = useState("키워드");
  const [isCategory, setIsCategory] = useState(false);
  const [isMobileSearch, setIsMobileSearch] = useState(false);

  const mobileCategoryArr = [{ category: "키워드" }, { category: "견적별" }];

  const mobilePriceArr = [
    { price: "~ 2천", value: "under_2000" },
    { price: "2천 ~ 3천", value: "2000_3000" },
    { price: "3천 ~ 5천", value: "3000_5000" },
    { price: "5천 ~ 1억", value: "5000_10000" },
    { price: "1억 ~", value: "over_10000" },
  ];

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
    console.log("검색 실행:", searchText);
    onSearch(searchText);
  };

  const handleMobileCategory = () => {
    setIsCategory((prev) => !prev);
    console.log(isCategory);
  };

  const handleSetMobileCategory = (category) => {
    setMobileCategory(category);
    setIsCategory(false);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearch((prev) => !prev);
    if (isMobileSearch && searchText.length > 0) {
      handleSearch();
      setSearchText("");
    }
  };

  return (
    <div className={`${styles.search} ${isActive ? styles.fixed : ""}`}>
      <ul className={`${styles.search_content} ${isActive ? styles.fixed : ""}`}>
        {" "}
        {/* 🔹 중복된 styles.fixed 제거 */}
        {/* 제목 검색 */}
        <li className={styles.search_item}>
          <div>
            <input
              type="text"
              className={styles.content_search}
              placeholder="검색해 보세요"
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
          견적비용
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
          <button
            type="button"
            className={styles.default_button}
            onClick={() => {
              onReset();
              setSearchText("");
            }}
          >
            초기화 <IoRefreshSharp />
          </button>
        </li>
      </ul>
      <ul className={styles.search_content_mobile}>
        <li>
          <button type="button" onClick={handleMobileCategory}>
            {mobileCategory}
            <IoIosArrowDown />
          </button>
          {isCategory && (
            <ul className={styles.mobile_category_list}>
              {mobileCategoryArr.map((item, index) => (
                <li key={index} onClick={() => handleSetMobileCategory(item.category)}>
                  {item.category}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <ul>
            {mobileCategory === "키워드" ? (
              keywords.length > 0 ? (
                keywords.map((keyword) => (
                  <li key={keyword} onClick={() => onKeywordClick(keyword)}>
                    {keyword}
                  </li>
                ))
              ) : (
                <li>키워드 없음</li>
              )
            ) : (
              mobilePriceArr.map((item, index) => (
                <li key={index} onClick={() => onPriceClick(item.value)}>
                  {item.price}
                </li>
              ))
            )}
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <button type="button">
                <SlReload
                  size={20}
                  onClick={() => {
                    onReset();
                    setSearchText("");
                  }}
                />
              </button>
            </li>
            {isMobileSearch && (
              <li>
                <input
                  type="text"
                  className={styles.content_search_mobile_input}
                  placeholder="검색해 보세요"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      console.log("Enter 입력됨, 검색 실행");
                      handleSearch();
                    }
                  }}
                />
              </li>
            )}
            <li>
              <button type="button" onClick={toggleMobileSearch}>
                <SlMagnifier size={20} />
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default BoardSearch;
