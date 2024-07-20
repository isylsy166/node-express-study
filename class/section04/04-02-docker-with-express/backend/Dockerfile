# 1. 운영체제 설치(node 14버전과 npm과 yarn이 모두 설치되어있는 리눅스)
FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
# RUN mkdir myfolder => copy 할 때 자동으로 만들어주므로 굳이 필요없음
COPY . /myfolder/
WORKDIR /myfolder/
RUN yarn install

# 실행
CMD yarn start:dev
