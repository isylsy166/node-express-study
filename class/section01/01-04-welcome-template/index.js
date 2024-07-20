
function getWelcomeTemplate({name, collage, date}){


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

    console.log(welcomeTemplate);
}

const name = "이소연";
const collage = "고려대";
const date = "2024-06-20"

getWelcomeTemplate({name, collage, date});