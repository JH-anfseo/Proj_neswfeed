//최상위파일로 전체적인 허브역할을 하여 페이지별로 쪼개는 역할
import { authService } from "./firebase.js"; //firebase에서 authservice가 임포트
import { handleLocation , route ,goToMain} from "./router.js"; 
//firebase,router.js와 한 파일이라고 생각
import {
    save_review,
    update_comment,
    onEditing,
    delete_comment,
  } from "./pages/review.js";
import { 
    handleAuth, 
    onToggle, 
    logout,
    socialLogin } from './pages/auth.js';

// url 바뀌면 handleLocation 실행하여 화면 변경
window.addEventListener("hashchange", handleLocation);

// 첫 랜딩 또는 새로고침 시 handleLocation 실행하여 화면 변경
document.addEventListener("DOMContentLoaded", function () {
  // Firebase 연결상태를 감시
  authService.onAuthStateChanged((user) => {
    // Firebase 연결되면 화면 표시
    handleLocation();
    const hash = window.location.hash;
    if (user) {
      // 로그인 상태이므로 항상 팬명록 화면으로 이동
      if (hash === "") {
        // 로그인 상태에서는 로그인 화면으로 되돌아갈 수 없게 설정
        window.location.replace("#review");
      }
    } else {
      // 로그아웃 상태이므로 로그인 화면으로 강제 이동
      if (hash !== "") {
        window.location.replace("");
      }
    }
  });
});

// 전역 함수 리스트
window.route = route;
window.onToggle = onToggle;
window.handleAuth = handleAuth;
window.socialLogin = socialLogin;
window.logout = logout;
window.goToMain = goToMain;
window.save_review = save_review;
window.update_comment = update_comment;
window.onEditing = onEditing;
window.delete_comment = delete_comment;

