FROM centos

# 环境变量
ENV NAME="value"

# 执行 make dir操作
RUN mkdir -p /iqiyi/webapp

# 指定工作目录
WORKDIR /iqiyi/webapp

COPY package.json $WORKDIR

# 暴露的端口
EXPOSE 8080

# 执行的命令
CMD ["echo", "Hello World"]

