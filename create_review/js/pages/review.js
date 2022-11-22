import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
import {
  doc,
  addDoc,
  collection
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

import { dbService, authService } from "../firebase.js";

// Create API
// reviews 라는 이름의 collection에 객체 형태의 Document를 신규 등록
export const save_review = async (event) => {
  event.preventDefault();
  const review = document.getElementById("review");
  const movieTitle = document.getElementById("movieTitle")
  const {uid,photoURL, displayName} = authService.currentUser;
  try {
    await addDoc(collection(dbService, "reviews"), {
      movieTitle : movieTitle.value,
      review : review.value,
      createdAt: Date.now(),
      creatorId: uid,
      profileImg: photoURL,
      nickname: displayName,
    });
    review.value = "",
    movieTitle.value = "",
    getReviewList();
    alert('리뷰저장')
  } catch (error) {
    alert (error);
    console.log("error in addDoc")
  }
}

export const getReviewList = async () => {
    console.log('review')
  };

  export const onEditing = (event) => {
    // 수정버튼 클릭
    event.preventDefault();
    const udBtns = document.querySelectorAll(".summit_bttn, .delete_bttn");
    udBtns.forEach((udBtn) => (udBtn.disabled = "true"));
  
    const cardBody = event.target.parentNode.parentNode;
    const commentText = cardBody.children[0].children[0];
    const commentInputP = cardBody.children[0].children[1];
  
    commentText.classList.add("noDisplay");
    commentInputP.classList.add("d-flex");
    commentInputP.classList.remove("noDisplay");
    commentInputP.children[0].focus();
  };
  
  export const update_comment = async (event) => {
    event.preventDefault();
    const newComment = event.target.parentNode.children[0].value;
    const id = event.target.parentNode.id;
  
    const parentNode = event.target.parentNode.parentNode;
    const commentText = parentNode.children[0];
    commentText.classList.remove("noDisplay");
    const commentInputP = parentNode.children[1];
    commentInputP.classList.remove("d-flex");
    commentInputP.classList.add("noDisplay");
  
    const commentRef = doc(dbService, "reviews", id);
    try {
      await updateDoc(commentRef, { movieTitle: newComment });
      getCommentList();
    } catch (error) {
      alert(error);
    }
  };
  
  export const delete_comment = async (event) => {
    event.preventDefault();
    const id = event.target.name;
    const ok = window.confirm("해당 응원글을 정말 삭제하시겠습니까?");
    if (ok) {
      try {
        await deleteDoc(doc(dbService, "comments", id));
        getCommentList();
      } catch (error) {
        alert(error);
      }
    }
  };


