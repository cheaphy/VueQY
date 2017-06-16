#config yum repo for docker
sudo yum install -y yum-utils
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
#install docker
sudo yum -y install docker-ce
#start docker
sudo systemctl start docker

  docker run ubuntu:14.04 /bin/echo "Hello World"
  # 使用ubuntu打印hello world
  # ubuntu:14.04 表示镜像名称和版本
  # /bin/echo "Hello World"是需要执行的语句和参数

  docker run --name shushanfx-jetty \ 
                    -p 127.0.0.1:8080:8080 \
                    -v /shushanfx/java/ToolJava/target/tool:/var/lib/jetty/webapps/tool \
                    -v /etc/localtime:/etc/localtime \
                    -d \
                    jetty 
 # --name  容器的别名
 # -p，或者--publish, 端口映射，hostPort:containerPort，上述指定了127.0.01表示只允许宿主机内部使用
 # -v，或者--volume，文件挂载，hostFile:containerFile，只有挂载的文件才能保存下来，允许挂载多个文件；
 #     /etc/localtime挂载是为了解决容器内部时间跟宿主机时间不一致的问题
 # -d, 后台执行

 docker exec -it shushanfx-jetty /bin/bash
 # -i, 执行交互任务，如果不使用该参数，则系统运行指令之后就退出了
 # -t, 是否启用pseudo-tty，-t表示--tty=false，不启用
 # /bin/bash，执行的命令，如果进入交互模式，使用exec退出系统