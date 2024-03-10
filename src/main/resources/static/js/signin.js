//유효성검사
var idCheck = false;
var pwCheck = false;

$(document).ready(function () {
  $("#txt_user_id").on("keyup focus", function () {
      // 아이디 유효성 검사
      var username = $(this).val();
      var usernameError = testUsername(username);
      $(".user_id_txt").text(usernameError);
      loginBtn();
  });

  $("#txt_user_pwd").on("keyup focus", function () {
      // 비밀번호 유효성 검사
      var password = $(this).val();
      var passwordError = testPassword(password);
      $(".user_pwd_txt").text(passwordError);
      loginBtn();
  });

  function testUsername(username) {
    // 아이디가 빈 문자열인지 확인
    if (username.trim() === "") {
      idCheck = false;
      return "아이디를 입력하세요.";
    }

    // 아이디가 4글자 미만인지 확인
    if (username.length < 4) {
      idCheck = false;
      return "아이디는 4글자 이상이어야 합니다.";
    }

    // 아이디에 한글 또는 특수문자가 포함되어 있는지 확인
    if (/[\uAC00-\uD7A3]|[^a-zA-Z0-9]/.test(username)) {
      idCheck = false;
      return "아이디에는 한글과 특수문자를 사용할 수 없습니다.";
    }

    idCheck = true;
    return ""; // 유효성 검사 통과
  }

  function testPassword(password) {
    // 비밀번호가 빈 문자열인지 확인
    if (password.trim() === "") {
      pwCheck = false;
      return "비밀번호를 입력하세요.";
    }

    // 아이디가 4글자 미만인지 확인
    if (password.length < 4) {
      pwCheck = false;
      return "비밀번호는 8글자 이상이어야 합니다.";
    }

    pwCheck = true;
    return ""; // 유효성 검사 통과
  }

  function loginBtn(){
    if(idCheck && pwCheck){
      document.querySelector('.btn_mem_login').classList.remove('block');
    }else{
      document.querySelector('.btn_mem_login').classList.add('block');
    }
  }

  $(".btn_login").click(function() {
    $("#login-form").submit();
  });
	
});