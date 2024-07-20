

function checkEmail(email){
    if(!email.includes('@')){
        throw new Error("이메일 형식을 확인해주세요");
    }
    else{
        console.log("인증 완료.")
    }
}

function createTemplate({name, collage, date}){

    const welcomeTemplate = `
        <html>
            <body>
                <h1>${name}님, 입학을 축하합니다!</h1>
                <hr/>
                <div>${collage}학교는</div>
                <div>${name}님의 입학을 진심으로 축하합니다</div>
                <div>${date}</div>
            </body>
        </html>
    `

    return welcomeTemplate;
}

function sendEmail(template){
    console.log(template);
}


function createUser({name, collage, date, email}){

    try {
        checkEmail(email) //이메일이 정상인지 확인
    } catch (error) {
        console.log(error);
        return;
    }
    
    const template = createTemplate({name, collage, date}); // 가입환영 템플릿 만들기 
    sendEmail(template) // 이메일 전송
}


const name = "이소연";
const collage = "고려대";
const date = "2024-06-20"
const email = "aa@aaa.com"

createUser({name, collage, date, email});