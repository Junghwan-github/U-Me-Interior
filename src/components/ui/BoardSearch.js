import { CiSearch } from "react-icons/ci";
import { IoRefreshSharp } from "react-icons/io5";
import styles from './BoardSearch.module.css';

const BoardSearch = () => {
  return (
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
      <li className={styles.keyword}>
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
      <li className={styles.prices}>
        견적
        <ul>
          <li>2,000만원 이하</li>
          <li>2,000만원 ~ 3,000만원</li>
          <li>3,000만원 ~ 5,000만원</li>
          <li>5,000만원 ~ 1억</li>
          <li>1억 이상</li>
        </ul>
      </li>
      <li>
        <button type="button" className={styles.default_button}>초기화 <IoRefreshSharp /></button>
      </li>
    </ul>
  </div>
  );
}

export default BoardSearch;