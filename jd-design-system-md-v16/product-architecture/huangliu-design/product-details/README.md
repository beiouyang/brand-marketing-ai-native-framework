## DongBoot 配置文件目录

${project.name}-main/src/main/resources/
├── application.properties          # 主配置文件
├── auto_config.properties          # 环境配置文件,通过占位符实现配置隔离,可通过行云部署->实例列表->配置管理配置(默认路径为/home/export/App/conf/auto_config.properties)
└── profile/
├── jsf.properties              # JSF组件配置
├── ducc.properties             # DUCC组件配置
└── ...                         # 其他组件配置

## DongBoot 本地启动配置
**说明**: 本地IDE启动不经过启动脚本(start.sh),因此需要额外配置IDE参数方可本地启动,步骤如下:
1. 点击顶部“运行”菜单 → 选择 “Edit Configurations”
2. 选择启动类, 如果项目为JDK17, 则需要增加JVM参数:
```properties
--add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.util=ALL-UNNAMED --add-opens java.base/sun.util.calendar=ALL-UNNAMED --add-opens java.base/java.math=ALL-UNNAMED --add-opens java.base/sun.security.action=ALL-UNNAMED --add-opens java.base/java.time=ALL-UNNAMED --add-exports java.base/sun.net.util=ALL-UNNAMED --add-exports java.base/sun.reflect=ALL-UNNAMED --add-opens java.base/java.util.concurrent=ALL-UNNAMED --add-opens java.base/java.net=ALL-UNNAMED --add-opens java.base/jdk.internal.loader=ALL-UNNAMED --add-opens java.base/javax.crypto.spec=ALL-UNNAMED
```
3. 运行主类即可


## DongBoot 行云启动配置
**说明**：脚手架默认采用[配置简化](https://joyspace.jd.com/pages/dcICgUKHMkFt8oTvqJO2)方式集成各组件,所有示例组件配置均绑定至DongBoot脚手架应用(行云应用名: dong-boot-initializr),且默认配置仅适用于本地及测试环境验证。
进入开发阶段后,需要将application.properties中spring.application.name变量替换为您行云测试站应用名称,并如下指引按需申请各组件资源或绑定权限。

### JSF 接口注册
- **配置说明**: 脚手架工程内置 ${project.name}.client.order.api.OrderService 接口,需在JSF平台([[测试环境]](http://test.taishan.jd.com/jsf/interfaceList)[[生产环境]](https://taishan.jd.com/jsf/interfaceList))"接口管理"-"接口新增"中手动注册后方可正常使用
- **接入文档**: 如有新增JSF接口或JSF调用需求,请参照Demo接口样例或按[接入文档](https://joyspace.jd.com/pages/r5mVZMP8PIqi4nXt9NqJ)进行接入

### DUCC 配置中心
- **配置说明**:
1. 新应用进入DUCC平台([[测试环境]](http://test.taishan.jd.com/ducc/web/nswork) [[生产环境]](https://taishan.jd.com/ducc/web/nswork))后,点击“命名空间”左上角“＋”号,创建新的命名空间并绑定至应用
2. 命名空间创建完成后, 在“应用配置 - 生成URI”中拷贝简化URI,并将其配置至auto_config.properties 的 DUCC_URI1 占位置中,URI格式为 _“应用名/命名空间/配置列表/环境列表/Resource名称”_
- **接入文档**：详细说明文档请参考[[接入文档]](https://joyspace.jd.com/pages/s4HKRDrzKIdzjOFEBl0E)

### JIMDB 分布式缓存
- **配置说明**:
1. 新应用进入JimDB平台([[测试环境]](http://test.taishan.jd.com/jimdb/cluster/list) [[生产环境]](https://taishan.jd.com/jimdb/cluster/list))后,选择集群申请,填入申请信息后等待创建流程完成
2. 集群创建完成后,在“集群列表 - 集群配置 - 客户端配置”中新增逻辑数据源后,将数据源名称配置到auto_config.properties 中的 JIM1_NAME 占位置即可
- **接入文档**：详细说明文档请参考[[接入文档]](https://joyspace.jd.com/pages/UGBpZE4EblUd7R9koIUT)


### JMQ 消息队列
- **配置说明**:
1. 新应用进入JMQ平台([[测试环境]](http://test.taishan.jd.com/jmq/application?JMQ_ENV=prod) [[生产环境]](https://taishan.jd.com/jmq/topic?JMQ_ENV=prod))后,点击新增Group,填入申请信息后等待流程完成
2. Group申请完成后, 可根据需求点击“生产发布”或“消费订阅”绑定Group及Topic关系
3. 拷贝Group, 替换 auto_config.properties 中 JMQ_PRODUCER1_GROUP 或 JMQ_CONSUMER1_GROUP中的值。拷贝 Topic 替换 jmq.properties 中 dong.jmq4.demo.topic的值
- **接入文档**：详细说明文档请参考[[接入文档]](https://joyspace.jd.com/pages/ETzeq5qzbRS9aJA5mAmA)

### DongDal 数据访问
- **配置说明**:
1. 新应用进入DongDAL平台([[测试环境]](http://test.taishan.jd.com/dongDal/app) [生产环境](https://taishan.jd.com/dongDal/app))后,点击“新建数据源”,填入申请信息后等待流程完成
2. 完成新建数据源后,将数据源名称及版本配置到 auto_config.properties 的 DONG_DAL_NAME 和 DONG_DAL_VERSION 中
- **接入文档**：详细说明文档请参考[[接入文档]](https://joyspace.jd.com/pages/O0rNekNL9Yv0GIbLhUtE)

### DongRegistry 服务注册中心
- **配置说明**: 脚手架代码中包含了服务标识为dong-registry-http的服务,需要在registry平台([[测试环境]](http://test.taishan.jd.com/dongregistry/jsf/interfaceList) [[生产环境]](https://taishan.jd.com/dongregistry/jsf/interfaceList))点击“服务申请”走完申请流程后方可正常使用
- **接入文档**：详细说明文档请参考[[接入文档]](https://joyspace.jd.com/pages/tthOFF1y1CG7tNddO2Bo)

### DongBoot其他组件接入文档
- [DongLog](https://joyspace.jd.com/pages/iW3Tt8zUkxgoNqZmbnu8)
- [DongCache](https://joyspace.jd.com/pages/Y54N3XY94SqF4BexyRj2)
- [DongThread](https://joyspace.jd.com/pages/QC6YAkxyJI9MDudZksjh)
- [DongContext](https://joyspace.jd.com/pages/5DEZXYeYI864ge8NjBBX)
- [DongSchedule](https://joyspace.jd.com/pages/nK9WC6MXtrckgXslaHD9)
- [DongGuardian](https://joyspace.jd.com/pages/Ph29w9cuZRYrd3neN1O5)
- [DongHTTP](https://joyspace.jd.com/pages/5ZqYhuE1GRbqZUTcphW2)
- [DongLock](https://joyspace.jd.com/pages/tDGkIKm32OBJrGXc190c)
- [DongRouter](https://joyspace.jd.com/pages/zyMGkkaM4DqOrsFETDgL)
- [DongES](https://joyspace.jd.com/pages/wzapD04zS4dQopoVx3HP)
- [DongUtil](https://joyspace.jd.com/pages/KgLS0cgCBF04Ml7vnihJ)

## DongBoot 其他常用文档

* [工程结构说明](https://joyspace.jd.com/pages/x5OmvRPZhBSJwnszSJM4)
* [如何启动/部署](https://joyspace.jd.com/pages/m7zWa2AbjLQS94wNkgP9)
* [中间件使用说明](https://joyspace.jd.com/pages/pLL9q4PiXZOZSNkiODwb)
* [标准规范沉淀](https://joyspace.jd.com/teams/1oFd2Uxdj9G5KaI33pRDd/bG6Qkz5JdDxaTPIpQO1h)
* [Release Note](https://joyspace.jd.com/pages/brfuVBTDyUvyk4felpfz)
* [FAQ](https://joyspace.jd.com/pages/MbnhrqDiY11zO8eVjgGL)

## DongBoot技术支持

京ME群：10213829638, 10208699013

