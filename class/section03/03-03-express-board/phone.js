
function createToken(){
    return String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
  }

  function sendToken(phNumber,token){
      // console.log(phNumber + "번호로 인증번호 " + token + "이 전송되었습니다.");
      console.log(`
          ${phNumber}번호로 
          인증번호 ${token}이 전송되었습니다.
      `);
  }

  function checkPhoneState(phNumber){
    if(phNumber.length != 11){
        throw new Error("올바르지 않은 번호입니다.");
    }
    else if(isNaN(phNumber) != false){
        throw new Error("올바르지 않은 번호입니다.");
    }
}

  export default function TokenAPI(phNumber){    
    try {
        checkPhoneState(phNumber); //휴대폰 상태 점검      
    } catch (error) {
        console.log(error);
        return;
    }
    const token = createToken(); //토큰발급
    sendToken(phNumber,token); //휴대폰에 토큰 발송
  }