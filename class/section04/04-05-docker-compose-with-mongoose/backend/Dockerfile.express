FROM node:18

COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

# 캐시(cache) 깨짐
COPY . /myfolder/
# ================= 여기까지 이미지 생성

# 실행
CMD yarn start:dev
