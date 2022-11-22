import {
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    collection,
    orderBy,
    query,
    getDocs,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { dbService, authService } from "../firebase.js";

export async function getcomments() {
    const q = query(
        collection(dbService, "comments"),
        orderBy("createdAt", "desc")
    );

    // query 조건에 맞는 documents 데이터를 배열로 받아오기
    const querySnapshot = await getDocs(q);
    const cmtObjList = []
    // doc.id는 DB가 자체적으로 생성하는 값으로, id도 함께 포함시키기 위해 객체 재구성
    querySnapshot.forEach((doc) => {
        const commentObj = {
            id: doc.id,
            ...doc.data(),
        };
        cmtObjList.push(commentObj);
    });

    cmtObjList.forEach((cmtObj) => {
        const temp_html = `<div id="comments" class="card">
    <img src="/assets/images.jpg" onclick="location.href='http://www.naver.com';" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${cmtObj.nickname}</h5>
      <p class="card-text">${cmtObj.profileImg}</p>
      <p class="card-text"><small class="text-muted">${cmtObj.text}</small></p>
    </div>
  </div>`;
        $('#commentlist').append(temp_html)
    });
};





// -------------------------------------

// const db = firebase.firestore();
// db.collection('myreview').get().then((결과)=>{
//   결과.forEach((doc)=>{
//     console.log(doc.data())
//   })
// })


// const db = firebase.firestore();
// db.collection('myreview').get().then((결과) => {
//     결과.forEach((doc) => {
//         console.log(doc)
//         var temp_html = `<div id="comments" class="card">
//     <img src="/assets/images.jpg" onclick="location.href='http://www.naver.com';" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${doc.data().영화제목}(</h5>
//       <p class="card-text">${doc.data().평점}</p>
//       <p class="card-text"><small class="text-muted">${doc.data().리뷰}</small></p>
//     </div>
//   </div>`;
//         $('.container').append(temp_html)
//     })
// })

// ------------------------------------------------


// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,


//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });