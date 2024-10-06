import React, { useEffect, useState } from "react";
import styles from "./CaseDetail.module.css";
import { useParams } from "react-router-dom";
import Contents from "../../components/layout/Contents";
import Section from "../../components/layout/Section";

const CaseDetail = () => {
  const { id } = useParams(); // URL에서 id 값을 가져옴
  const [post, setPost] = useState(null); // 게시글 데이터를 저장할 상태

  useEffect(() => {
    // Fetch API로 id에 해당하는 게시글 상세 정보를 가져옴
    fetch(`https://uandme.kr/gb5/get_board_detail.php?id=${id}&bo_table=case`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // JSON 형식으로 변환
      })
      .then((data) => {
        setPost(data); // 가져온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]); // id가 변경될 때마다 데이터를 다시 가져옴

  console.log(post);

  if (!post) {
    return <p>Loading...</p>; // 데이터를 로드하는 동안 로딩 메시지 표시
  }

  return (
    <Contents>
      <Section attr={styles.nav}>
        <div className={styles.bar}></div>
      </Section>
      <Section attr={styles.contents}>

        <div className={styles.content_wrap}>
        <div className={styles.thumbnail}>
            {post.files.length > 0 && (
              <img
                src={`https://uandme.kr/gb5${post.files[0].file_url}`} // 첫 번째 파일을 썸네일로 사용
                alt={post.files[0].original_name}
              />
            )}
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.category}>
            {post.category.map((item, index) => (
              <span key={index} className={styles.category_item}>
                {item}
              </span>
            ))}
          </div>
 
          <div className={styles.price}>
            <h2>U&ME 인테리어 견적서</h2>
            <ul>
              {post.wr_fields.map((priceItem, index) => {
                return (
                  priceItem.value > 0 && (
                    <li key={index}>
                      <p className={styles.price_title}>
                        {priceItem.wr}
                        <span>{priceItem.content}</span>
                      </p>
                      <span>{Number(priceItem.value).toLocaleString()} 원</span>
                    </li>
                  )
                );
              })}
            </ul>
            <div className={styles.total}>
              <p>TOTAL</p>
              <span>
                {Number(post.total).toLocaleString()} <span>원</span>
              </span>
            </div>
          </div>
          <div className={styles.info}></div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </Section>
    </Contents>
  );
};

export default CaseDetail;
