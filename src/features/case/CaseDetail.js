import React, { useEffect, useState } from "react";
import styles from "./CaseDetail.module.css";
import { useParams } from "react-router-dom";
import Contents from "../../components/layout/Contents";
import Section from "../../components/layout/Section";
import { AiOutlineInfoCircle } from "react-icons/ai";

const CaseDetail = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null); 

  useEffect(() => {
    fetch(`https://uandme.kr/gb5/get_board_detail.php?id=${id}&bo_table=case`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); 
      })
      .then((data) => {
        setPost(data); // 가져온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

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
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.category}>
            {post.category.map((item, index) => (
              <span key={index} className={styles.category_item}>
                {item}
              </span>
            ))}
          </div>

          <div className={styles.price}>
            <div className={styles.price_header}>
              <h2>인테리어 견적서</h2>
              <div>
                <span>
                  시공일 <br />
                <strong>{post.start}</strong>
                </span>
                <span>
                  기간
                  <br />
                  <strong>{post.period} 일</strong>
                </span>
              </div>
            </div>
            <ul>
              {post.wr_fields.map((priceItem, index) => {
                return (
                  priceItem.value > 0 && (
                    <li key={index}>
                      <div>
                        <p className={styles.price_title}>{priceItem.wr}</p>
                        <span>{Number(priceItem.value).toLocaleString()} 원</span>
                      </div>
                      <span className={styles.price_desc}>{priceItem.content}</span>
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
            <div className={styles.info}>
              <h3>
                <AiOutlineInfoCircle /> 꼭 읽어주세요!
              </h3>
              <ul>
                <li>견적서는 참고만 하시길 바랍니다. </li>
                <li>실제 견적과는 차이가 있을수있습니다.</li>
                <li>견적서의 모든 금액은 부가세(VAT)가 포함되어 있지 않습니다.</li>
              </ul>
            </div>
          </div>
          <div className={styles.detail_info}>
          <span>Detailed information</span><p>시공 상세 정보</p>
          </div>
          <div className={styles.thumbnail}>
            {post.files.length > 0 && (
              <img
                src={`https://uandme.kr/gb5${post.files[0].file_url}`} // 첫 번째 파일을 썸네일로 사용
                alt={post.files[0].original_name}
              />
            )}
          </div>
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
