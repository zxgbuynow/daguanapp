var config = {
    server:'http://39.105.4.51:88/api.php/',
    imgser:'http://39.105.4.51:88/',
    source: 'shop', //来源
    pagesize: 10, // 分页组件每页显示数量
    cpage: 1, //分页当前页
    apimethod: { //接口method集合
        login: 'user.login', //用户登录
        logout: 'user.logout', //用户登出
        register: 'user.register', //注册
        vcode: 'user.vcode', //验证码
        confirm: 'user.confirm', //注册验证手机
        userinfo: 'user.userinfo', //我的、
        article: 'home.article', //好文推荐
        lunbo: 'home.lunbo', //广告
        category: 'counsellor.category', //咨询分类
        recommend: 'counsellor.recommend', //推荐咨询师
        counsellor: 'counsellor.info', //咨询师
        ondate: 'counsellor.ondate', //预约
        point: 'user.point', //积分明细
        trade: 'user.trade',//订单信息
        updateloginpwd:'user.uppw',//更新密码
        checkpassword:'user.checkpassword',//检查密码
        updatenickname:'user.updatenickname',//更新密码
        updatepreference:'user.updatepreference',//更新updatepreference
        updategender:'user.updategender',//检查密码
        updateonline:'user.updateonline',//检查密码
        contentinfo:'article.contentinfo',//文章
        allcategory: 'all.category', //咨询分类
        counsellorlist:'counsellor.list',//咨询列表
        articallist:'artical.list',//咨询列表
        agency:'agency.list',//机构列表
        createTrade:'create.trade',//生成订单
        tradepay:'trade.pay',//支付
        msg:'msg.list',//消息列表
        msginfo:'msg.info',//消息祥情
        msgup:'msg.up',//消息更新
        income:'income',//收入
        counsellorindex:'counsellor.index',//会员信息
        calendatoday:'calenda.today',//当日日程安排
        calendaall:'calenda.all',//所有日程安排
        calendaadd:'calenda.add',//日程添加
        social:'social',
        identifi:'identifi',
        upavar:'user.upavar',//
        getAvatar:'user.getAvatar',
        usersendSms:'user.sendSms',
        getMemberInfoByTid:'getMemberInfoByTid',
        caseAdd:'caseAdd',
        calendaondate:'calenda.ondate',
        setcalenda:'setcalenda',
        findPassword:'user.findPassword',
        cancleDate:'cancle.date',
        setallcalenda:'setall.calenda',
        getUserMsgCount:'getUser.msgCount',
        getCurrentCander:'getCurrent.cander',
        userIntro:'user.intro',
        clca:'clca.index',
        clcadetail:'clca.detail',
        clcamanger:'clca.manger',
        clcamy:'clca.my',
        clcauserlist:'clca.userlist',
        clcauserinfo:'clca.userinfo',
        articlemy:'article.my',
        articleadd:'article.add',
        articleedit:'article.edit',
        articlemydl:'article.mydl',
		msgsys:'msg.sys',
		ismsg:'is.msg',
		getUserList:'getUser.list',
		counsellorst:'counsellor.st',
		articalcate:'artical.cate',
		claccate:'clac.cate',
		recordlist:'recordlist',
		sendhxmsg:'send.hxmsg',
		hxmsgls:'hxmsg.ls',
		hxmsgtwo:'hxmsg.two',
		hxmsgup:'hxmsg.up',
    }
}
