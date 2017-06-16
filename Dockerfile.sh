# 在当前目录build docker镜像，并将镜像名保存为iqiyi-docker
docker build -t iqiyi-docker-test .
# 查看镜像是否存在
docker images iqiyi*
# 运行镜像
docker run iqiyi-docker-test
# 查看镜像进程
docker ps -a


docker run --name shushanfx-node 
    -v /shushanfx/node/data:/shushanfx/node/data 
    -v /shushanfx/node/nfile:/usr/src/app 
    -p 127.0.0.1:18081:18081 
    -d 
    node:onbuild 
    sh -c "npm install && npm start"







mkdir -p /iqiyi/node
cd /iqiyi/node
git clone "https://github.com/shushanfx/nexpress.git"

docker run \
    --name iqiyi-node-express1 \
    -v /iqiyi/node/nexpress:/usr/src/app \
    -v /etc/localtime:/etc/localtime \
    -p 18091:18080 \
    -d \
    node:onbuild \
    sh -c "npm install && npm start"
docker run \
    --name iqiyi-node-express2 \
    -v /iqiyi/node/nexpress:/usr/src/app \
    -v /etc/localtime:/etc/localtime \
    -p 18092:18080 \
    -d \
    node:onbuild \
    sh -c "npm install && npm start"
