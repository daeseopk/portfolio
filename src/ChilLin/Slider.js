import { useEffect, useState, useRef } from "react";
import axios from "axios";
import styles from "./Slider.module.css";
import styled from "styled-components";

export default function Slider_home() {
   const [movie, setMovie] = useState();
   const [loading, setLoading] = useState(true);
   const [genre, setGenre] = useState();
   const [isEvent, setIsEvent] = useState(true); //HOVER이벤트 조건
   const [sequence, setSequence] = useState([0, 1, 2, 3, 4]);
   const [transform, setTranform] = useState([
      "10%,30%",
      "25%,10%",
      "40%,0",
      "55%,10%",
      "70%,30%",
   ]);
   const summary = useRef([]);
   const card = useRef([]);
   const slider_container = useRef();
   useEffect(() => {
      const getMovie = async () => {
         var sequence_ = [];
         var movie_ = [];
         try {
            const result = await axios.get(
               `https://api.themoviedb.org/3/movie/now_playing?api_key=83f61a3baf6174f8aeb8a593cc236386&language=en-US&page=1`
            );
            const genre_ = await axios.get(
               "https://api.themoviedb.org/3/genre/movie/list?api_key=83f61a3baf6174f8aeb8a593cc236386&language=en-US"
            );
            for (let i = 0; i < 5; i++) {
               sequence_.push(i);
               movie_.push(result.data.results[i]);
            }
            setSequence(sequence_);
            setGenre(genre_.data.genres);
            setMovie(movie_);
            setLoading(false);
         } catch (error) {
            console.log(error);
         }
      };
      getMovie();
   }, []);
   useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);
   const handleResize = () => {
      if (window.innerWidth > 1400) {
         setTranform(["10%,30%", "25%,10%", "40%,0", "55%,10%", "70%,30%"]);
      } else if (window.innerWidth <= 1400 && window.innerWidth > 1000) {
         setTranform(["20%,30%", "30%,10%", "40%,0", "50%,10%", "60%,30%"]);
      } else if (window.innerWidth <= 1000) {
         setTranform(["30%,30%", "35%,10%", "40%,0", "45%,10%", "50%,30%"]);
      }
   };

   const onClick = (e) => {
      var sequence_ = Array.from(sequence);
      if (e.target.id === "left") {
         for (let i = 0; i < sequence_.length; i++) {
            if (sequence_[i] === 4) sequence_[i] = -1;
            sequence_[i] = sequence_[i] + 1;
         }
      } else {
         for (let i = 0; i < sequence_.length; i++) {
            if (sequence_[i] === 0) sequence_[i] = sequence_.length;
            sequence_[i] = sequence_[i] - 1;
         }
      }
      // TODO
      for (let i = 0; i < movie.length; i++) {
         i === 2
            ? (card.current[sequence[i]].style =
                 "filter: none; -webkit-filter: none;")
            : (card.current[sequence[i]].style =
                 "filter: blur(8px); -webkit-filter: blur(5px);");
      }
      console.log(sequence_);
      console.log(card.current[sequence_[2]]);
      setSequence(sequence_);
   };
   const onMouseEnter = (e) => {
      if (sequence[e.target.id] === 2) {
         summary.current[e.target.id].style =
            "opacity:1; background-color:rgba(0,0,0,0.5);";
      } else {
         card.current[e.target.id].style =
            "filter: blur(8px); -webkit-filter: blur(2px); cursor:pointer;";
      }
   };
   const onMouseOut = (e) => {
      if (sequence[e.target.id] === 2) {
         summary.current[e.target.id].style = "opacity:0;";
      } else {
         card.current[e.target.id].style =
            "filter: blur(8px); -webkit-filter: blur(5px);";
      }
   };
   const onClick_Card = (seq, e) => {
      // 지나간 카드 blur 처리, 가운데 카드 blur 없애기
      for (let i = 0; i < movie.length; i++) {
         card.current[i] === card.current[e.target.id]
            ? (card.current[i].style = "filter: none; -webkit-filter: none;")
            : (card.current[i].style =
                 "filter: blur(8px); -webkit-filter: blur(5px);");
      }
      // 방향 전환(좌)
      var sequence_ = Array.from(sequence);
      if (seq < 2) {
         for (let j = 0; j < 2 - seq; j++) {
            for (let i = 0; i < sequence_.length; i++) {
               if (sequence_[i] === 4) {
                  sequence_[i] = -1;
               }
               sequence_[i] = sequence_[i] + 1;
            }
            setSequence(sequence_);
         }
      }
      // 방향 전환(우)
      else {
         for (let j = 0; j < seq - 2; j++) {
            for (let i = 0; i < sequence_.length; i++) {
               if (sequence_[i] === 0) {
                  sequence_[i] = sequence_.length;
               }
               sequence_[i] = sequence_[i] - 1;
            }
            setSequence(sequence_);
         }
      }
   };
   const onClick_viewmore = (index, movie, e) => {
      window.location.href = `https://movieweb-2b841.firebaseapp.com/Detail/id=${movie.id}`;
   };
   // 부모 element의 이벤트를 무시하고, 본인 이벤트만 수행되게 해주는 함수
   function prevent(fn, defaultOnly) {
      return (e, ...params) => {
         e && e.preventDefault();
         !defaultOnly && e && e.stopPropagation();
         fn(e, ...params);
      };
   }
   return (
      <>
         {!loading ? (
            <div className={styles.Slider_Container}>
               <div
                  ref={slider_container}
                  className={styles.Slider_poster_Container}>
                  {movie
                     ? movie.map((movie, index) => {
                          return (
                             <Card
                                ref={(elem) => (card.current[index] = elem)}
                                seq={sequence[index]}
                                onMouseEnter={isEvent ? onMouseEnter : null} //isEvent가 true인 경우에만 이벤트 발생
                                onMouseLeave={isEvent ? onMouseOut : null}
                                filter={
                                   sequence[index] === 2
                                      ? null
                                      : "filter: blur(8px);"
                                }
                                webkit_filter={
                                   sequence[index] === 2
                                      ? null
                                      : "-webkit-filter: blur(5px);"
                                }
                                z_index={
                                   sequence[index] === 2
                                      ? "3"
                                      : sequence[index] === 1 ||
                                        sequence[index] === 3
                                      ? "2"
                                      : "1"
                                }
                                height={
                                   sequence[index] === 2
                                      ? "50%"
                                      : sequence[index] === 1 ||
                                        sequence[index] === 3
                                      ? "40%"
                                      : "30%"
                                }
                                backgroundImg={movie.backdrop_path}
                                transform={transform[sequence[index]]}>
                                <div
                                   onClick={(e) => {
                                      onClick_Card(sequence[index], e);
                                   }}
                                   id={index}
                                   ref={(elem) =>
                                      (summary.current[index] = elem)
                                   }
                                   className={styles.Summary_Container}>
                                   <div
                                      id={index}
                                      className={styles.Summary_Wrapper}>
                                      <p
                                         id={index}
                                         className={styles.Summary_Title}>
                                         {movie.title}
                                      </p>
                                      <div
                                         id={index}
                                         className={
                                            styles.Summary_genre_Wrapper
                                         }>
                                         {genre.map((genre) =>
                                            movie.genre_ids.map((genre_) => {
                                               if (genre.id === genre_)
                                                  return (
                                                     <span
                                                        seq={sequence[index]}
                                                        className={
                                                           styles.Summary_genre
                                                        }>
                                                        {genre.name}
                                                     </span>
                                                  );
                                               else return null;
                                            })
                                         )}
                                      </div>
                                      <p
                                         id={index}
                                         className={styles.Summary_overview}>
                                         {movie.overview}
                                      </p>
                                      <span
                                         onClick={prevent((e) =>
                                            onClick_viewmore(index, movie, e)
                                         )}
                                         style={{ cursor: "pointer" }}
                                         className={styles.Summary_viewmore}>
                                         View More
                                      </span>
                                   </div>
                                </div>
                             </Card>
                          );
                       })
                     : null}
                  <img
                     className={styles.leftArrow}
                     src={require("./arrow.png")}
                     alt="leftbtn"
                     id="left"
                     onClick={onClick}></img>
                  <img
                     className={styles.rightArrow}
                     src={require("./arrow.png")}
                     alt="rightbtn"
                     id="right"
                     onClick={onClick}></img>
               </div>
            </div>
         ) : null}
      </>
   );
}
const Card = styled.div`
   position: absolute;
   margin: 0 auto;
   width: 55%;
   height: ${(prop) => prop.height};
   transform: translate(${(prop) => prop.transform});
   background-image: url("https://image.tmdb.org/t/p/original${(prop) =>
      prop.backgroundImg}");
   background-size: cover;
   ${(prop) => prop.filter}
   ${(prop) => prop.webkit_filter}
   z-index: ${(prop) => prop.z_index};
   transition: 0.6s ease all;
   border-radius: 15px;
`;
