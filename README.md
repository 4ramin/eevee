# 블래키  
밤 + 이브이 = 블래키  

## 개발순서  

0. 설치
1. 소스코드 최신화  
2. 브랜치 나누기  
3. 개발 후 개인 브랜치에 커밋  
4. 마스터 브랜치 풀 리퀘스트  

### 0. 설치  

    $ git clone git://github.com/CartoonIsArt/blacky.git
    $ cd blacky
    $ yarn install

### 1. 소스코드 최신화  
소스코드를 마스터 브랜치에 맞게 최신화한다.  

    $ git pull origin master

### 2. 브랜치 나누기   
처음 브랜치를 나눌 때는 -b옵션을 사용한다.  

    $ git checkout [-b] "본인이름"

### 3. 개발 후 개인 브랜치에 커밋  

    ...개발
    $ git add .
    $ git commit -m "커밋메시지"
    $ git push origin "본인이름"

버그가 없다면 4번으로  

### 4. 마스터 브랜치 풀 리퀘스트  

https://github.com/CartoonIsArt/blacky에서 해당 브랜치의 풀 리퀘스트 버튼을 누른다.  
풀 리퀘스트를 작성하고 머지 리퀘스트를 보낸다.
