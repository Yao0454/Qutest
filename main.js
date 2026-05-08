// ========== 题库 ==========
const ALL_QUESTIONS = [
  // === A: 二次元沉迷度 (25题) ===
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "你的手机壁纸是什么？",
    opts: [
      "风景照或自拍",
      "网上随便找的图",
      "你的二次元老婆/老公",
      "多张轮换，老婆换季如换衣",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "看到喜欢的番被腰斩，你会怎样？",
    opts: [
      "没关系，追番只是爱好",
      "有点可惜，去找同类番",
      "在评论区骂制作组一整天",
      "成立应援会，写联名请愿书",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "你能脱口报出多少部动漫的主角名字？",
    opts: [
      "10部以下",
      "10-50部",
      "50-100部",
      "超过100部，还包括他们的CV（声优）",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: '你怎么看待"二次元老婆"这件事？',
    opts: [
      "纸片人是纸片人，分得清",
      "看看可以，不会说是老婆",
      "他/她就是我老婆，三次元是备胎",
      "不只有老婆，还有后宫，建有专属图册",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "你最近一次追番是什么时候？",
    opts: [
      "很久没追了",
      "上周",
      "昨晚熬夜追完一整季",
      "正在追，暂停了几秒来做这道题",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "你有没有为某个二次元角色做过以下事情？",
    opts: [
      "什么都没做过",
      "买了周边或海报",
      "搜集全套设定集和画册，祭坛级陈列",
      "定制了同款服装，过生日当天换装庆祝",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "当有人批评你喜欢的番剧，你的反应是？",
    opts: [
      "理性交流，能接受不同意见",
      "小争几句，没啥大不了",
      "写一篇长文进行反驳，附上考据资料",
      "直接拉黑，净化时间线",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "下列哪个词你能立刻get到含义？",
    opts: [
      '我只认识"傲娇"',
      '"傲娇""病娇""天然呆"我都懂',
      '"傲娇""病娇""天然呆""腹黑""猫系"全熟',
      "以上我都懂，还知道其日语原词及起源作品",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "你有没有在网上用二次元用语交流？",
    opts: [
      "几乎不用",
      "偶尔用几个",
      "日常对话充满术语，普通人听不懂",
      "已经形成了专属话语体系，和友人发电",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "你的B站账号收藏夹状态是？",
    opts: [
      "没有B站账号",
      "收藏了一些视频，偶尔看",
      "收藏夹超过20个，分门别类整理",
      "收藏夹超过50个，每个都有专属名字和封面",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: '"补番"对你来说意味着什么？',
    opts: [
      "什么是补番？",
      "偶尔回头看几集",
      "定期清理待看列表，补番是严肃任务",
      "待补番单超过300部，感觉这辈子补不完了",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "你会为喜欢的角色投票或氪金吗？",
    opts: [
      "不会，那是浪费钱",
      "买过一两次周边",
      "投过票，买了限定，参与过预约活动",
      "为排名氪金不手软，角色荣辱与我共",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: '你对"发刀"和"发糖"这两个词的反应是？',
    opts: [
      "不懂什么意思",
      "知道，偶尔刷到",
      '看到"发刀"本能紧张，"发糖"立刻冲进去',
      "关注几十个up主，专门整理糖刀分类",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "遇到自己喜欢的角色的生日，你会怎么做？",
    opts: [
      "不知道角色生日",
      "看到提醒发条祝福",
      "提前做好计划，发帖、换头像、买蛋糕",
      "早就在日历上标好了，全天保持仪式感",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "你有没有为某部作品学过日语？",
    opts: [
      "没有，也没打算",
      "学过几个词，大多忘了",
      "因为某部番开始系统学日语",
      "已经能看生肉（无字幕）了，字典是备用的",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: '你觉得"追番"这件事有时间限制吗？',
    opts: [
      "有，兴趣会变化的",
      "没想过，看得开心就行",
      "不看完绝不甘心，追番是一种执念",
      "我不追番，我只是长期生活在番里",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "你怎么称呼自己最喜欢的角色？",
    opts: [
      "直接叫名字就好",
      '"我喜欢的角色"或"最爱"',
      '"我老婆/老公"，没有商量余地',
      '"我的神"，并为此制作了供桌',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "下面哪种情况你经历过？",
    opts: [
      "都没有",
      "为了看新番调过闹钟",
      "因为追番导致第二天上班/上课精神涣散",
      "通宵追番，看完发现天亮了，浑然不觉",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "你在社交平台上的自我介绍中，二次元相关内容占比是？",
    opts: [
      "完全没有提到",
      "提到一两个兴趣",
      "超过一半是番剧、角色或CP介绍",
      "整个简介就是一份ACG自白书",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: '"冬番""春番""夏番""秋番"你都会追吗？',
    opts: [
      "不知道什么意思",
      "知道，但只追自己喜欢的",
      "四季都有在追的番，怎么停得下来",
      "每季都做完整排期表，新番必看前三集再决定",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "你看过黑暗向或高虐向作品后的反应是？",
    opts: [
      "不看这类作品，太难受",
      "哭了，但能接受",
      "一边骂作者一边催更，然后继续看",
      "已经炼成铁石心肠，越虐越上头",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: "你最近一次向别人安利动漫是什么时候？",
    opts: [
      "从来不安利，怕被嫌弃",
      "偶尔提一下",
      "每周都在安利，成功率不高但热情不减",
      "我即安利机器，见人就推荐，无差别输出",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: '你知道"本子""涩图""r18"这些词的含义并有相关阅览习惯吗？',
    opts: [
      "知道但完全不看",
      "偶尔刷到，没在意",
      "……有时候会搜一搜",
      "建有分类文件夹，容量以GB计",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: '你对"拟人化"这件事是什么态度？',
    opts: [
      "看不懂为什么要拟人化",
      "有些拟人很可爱",
      "每种东西都适合拟人化，比如赤道、细胞",
      "坦克娘、军舰少女、国家拟人……我有全系列",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "A",
    catName: "二次元沉迷度",
    q: '看到"泪目""DNA动了""爷青回"这几个词，你的感受是？',
    opts: [
      "没什么感触",
      "懂是懂，但不太共鸣",
      "立刻想到具体作品，微微湿润",
      "泪腺失控，往事如烟，回忆杀已激活",
    ],
    scores: [0, 1, 3, 5],
  },

  // === B: 社交荒漠度 (25题) ===
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "你上一次主动约朋友出门是什么时候？",
    opts: [
      "上周",
      "上个月",
      "……去年？",
      "我已经想不起来了，出门这个概念很陌生",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "朋友邀你参加聚会，你的第一反应是？",
    opts: [
      "欣然前往，很期待",
      "视情况，人少就去",
      "找借口推掉，在家更舒服",
      "连借口都懒得想，直接已读不回",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "你一天中和真实人类（非屏幕）对话超过30分钟的频率是？",
    opts: ["每天都有", "一周几次", "一周一次或以下", '什么是"真实人类"？'],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "你如何处理不认识号码的来电？",
    opts: [
      "接了再说",
      "先查号码再决定",
      "直接拒接，发短信问谁",
      "设置陌生号码自动静音，短信也不回",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: '你的微信消息置顶了多少个"待回复"？',
    opts: [
      "及时处理，不积压",
      "5个以下",
      '10-30个，都是"等我想想怎么回"',
      "超过30个，有些已经过期不需要回了",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "当你独处了整整一周没有社交，你的感受是？",
    opts: [
      "好难受，赶紧约人",
      "有点无聊，还行",
      "很舒服，社交是体力消耗",
      "一周算什么，我能一个月不说话",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "你上一次认识一个新朋友是在什么情境下？",
    opts: [
      "最近就有，主动搭话的",
      "朋友介绍，是被动的",
      "记不清了，应该是几年前",
      '我没有"新朋友"这个概念，社交停在高中',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: '你对"发朋友圈"这件事的态度是？',
    opts: [
      "经常发，记录生活",
      "偶尔发",
      "已经超过半年没发了",
      '我把朋友圈权限设为"仅自己可见"',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "和陌生人用餐时，你会主动找话题吗？",
    opts: [
      "当然，聊天是基本礼貌",
      "会配合，不会主动",
      "沉默，假装在看手机",
      "能不同桌就不同桌",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: '你是否有一套完整的"如何假装不在家"技巧？',
    opts: [
      "没有，直接开门",
      '会说"我不方便"',
      "远程关灯、静音，假装外出",
      "安装了智能门铃，在手机上看谁来了再决定装不在",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "当你在群聊里，你通常是？",
    opts: [
      "积极发言",
      "偶尔附和",
      "只看不发，潜水艇",
      "消息提醒全关，群聊是信息黑洞",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: '你上一次"出远门"是什么时候？',
    opts: [
      "上个月",
      "半年内",
      "去年，是被家人拉去的",
      "超过两年，我觉得出门没必要",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: '你如何对待"节日问候"短信？',
    opts: [
      "认真回，还加表情包",
      "简单回一个",
      "看完不回，他们会理解的",
      '设置快捷回复"收到"，或者不回',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: '朋友说你"消失"了，你的第一反应是？',
    opts: [
      "立刻联系，解释在忙",
      "解释一下，也没什么",
      "我本来就在，只是不想说话",
      "我哪里消失了，我一直在家",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "你外卖备注中出现过下列哪条？",
    opts: [
      "没有备注习惯",
      '"不辣谢谢"这类正常备注',
      '"放门口，不用敲门，不用说话谢谢"',
      '"请勿打电话，请勿敲门，直接放好走人，谢谢理解"',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: '你的"亲密好友"列表里有几个人？',
    opts: ["超过10个", "5-10个", "1-3个，保持稳定", "0个，我比较节约资源"],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "你认为以下哪种娱乐方式最理想？",
    opts: [
      "和朋友一起出去玩",
      "小聚，2-3人喝茶聊天",
      "独自在家看视频/打游戏",
      "完全断联，不看手机，只有我和我自己",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "有人突然来你家拜访，你的心情是？",
    opts: [
      "欢迎，快进来",
      "还行，只要不久待",
      "高度紧张，立刻开始整理房间和情绪",
      "恐慌，这是蓄意犯罪",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "你在公共场合戴耳机的频率是？",
    opts: [
      "很少，要保持对环境的感知",
      "需要专注时戴",
      "出门必戴，不戴难受",
      "耳机已经成为颅骨的一部分",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: '你有没有因为"不想社交"拒绝过一件本来想去的活动？',
    opts: ["从没有", "偶尔", "有过，不少于5次", "这已经成为我的日常操作"],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: '你最后一次被人说"你怎么这么难联系到"是什么时候？',
    opts: [
      "很久没被这么说了",
      "偶尔",
      "这句话我每隔几个月就会听到一次",
      '我已经设置了自动回复："我可能在忙，也可能在蛆"',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: '你有没有在无人的深夜突然感到"世界好安静真好"？',
    opts: [
      "没有，深夜有点孤独",
      "偶尔，还好",
      "经常，深夜是我的主场",
      '我叫这个"灵魂时刻"，每天等它',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "你有没有一个人吃过生日蛋糕（不是主动选择独处）？",
    opts: [
      "没有，生日一定有人陪",
      "有过一次，偶然",
      "不止一次",
      "我每年都这样，已经习惯了，还加了自拍",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: '你对"团建活动"的态度是？',
    opts: [
      "挺好的，可以认识同事",
      "参加，但不激动",
      "去，但全程找角落待着",
      "请假，或者假装生病",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "B",
    catName: "社交荒漠度",
    q: "形容你日常状态，以下哪个最准确？",
    opts: [
      "社交达人，每天行程满档",
      "有社交，但也需要独处充电",
      "能不出门就不出门，社交消耗大",
      "我的生活半径约等于床的对角线",
    ],
    scores: [0, 1, 3, 5],
  },

  // === C: 作息混乱度 (25题) ===
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你通常几点睡觉？",
    opts: [
      "11点前，规律作息",
      "凌晨12-1点，还行",
      "凌晨2-4点，是常态",
      "不存在固定时间，困了就睡",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你上一次在太阳还在时出门是什么时候？",
    opts: [
      "今天",
      "昨天",
      "想不起来了，最近都是晚上出门",
      "等等，太阳白天出来的吗？",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你一天平均在屏幕前花多少时间？",
    opts: ["4小时以下", "4-8小时", "8-12小时", "12小时以上，屏幕就是我的人生"],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你的一日三餐是？",
    opts: [
      "规律，按时吃",
      "偶尔推迟",
      "两顿，早饭被睡觉吃掉了",
      '我的概念是"饿了就吃"，次数不定',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你上次洗澡和上上次洗澡之间隔了多久？",
    opts: [
      "当天洗澡，我每天洗",
      "1-2天",
      "3-5天，还好吧",
      "我需要你提醒我上次是什么时候",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: '"起床气"对你来说有多严重？',
    opts: [
      "我醒了就醒了，没啥气",
      "有点，10分钟内恢复",
      "非常严重，不要在我起床后1小时内和我说话",
      '我根本没有起床这件事，只有"切换睡姿"',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: '你有没有因为"再看一集"把时间拖到凌晨4点？',
    opts: [
      "没有，我有自制力",
      "有过一两次",
      '经常，"就一集"是世界上最大的谎言',
      "我已经不看一集了，一口气看完一季再说",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你的床上有没有存在超过一周没有动过的零食包装？",
    opts: [
      "不可能，保持整洁",
      "偶尔有，会清理",
      "有，已经和床融为一体了",
      "我已经和它们建立了感情，舍不得扔",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你最近一次运动是什么时候？",
    opts: ["今天或昨天", "上周", "上个月或更久", "去上厕所算吗？"],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你通常几点起床？",
    opts: [
      "7-8点，正常起",
      "9-10点，稍微晚点",
      "11点到中午，勉强赶上午饭",
      "下午甚至晚上，是的，太阳已经下山了",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你有没有睡醒了不知道现在是早上还是晚上的经历？",
    opts: [
      "没有，方向感很强",
      "有过一两次",
      "经常，需要看手机时间才能定位",
      "这是我日常的第一个任务：判断当前时区",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你用过多少个闹钟来确保自己起床？",
    opts: [
      "1个就够",
      "2-3个",
      "5个以上，每隔5分钟",
      "闹钟对我无效，我已经进化出了抗性",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你有多久没有换过床单了？",
    opts: [
      "上周，我定期换",
      "一个月内",
      "3个月以上，还好吧",
      "床单和我是共同体，我们一起生长",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: '你的桌面/地板上有没有超过三件东西需要"待处理"？',
    opts: [
      "没有，保持整洁",
      "有一两件",
      "超过5件，但我知道它们在哪",
      '整个房间就是一个"待处理区域"',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: '你有没有在凌晨3点以后"决定点外卖"？',
    opts: [
      "没有，那个点早睡了",
      "有过一次，特殊情况",
      "有过几次，深夜饥饿是真实的",
      "这是我的正常晚餐时间",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你的手机屏幕时间有多长？（平均每天）",
    opts: ["4小时以下", "4-6小时", "6-10小时", "超过10小时，屏幕比人更懂我"],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: '你有没有"三天没出家门"的记录？',
    opts: [
      "没有，我需要出门",
      "有，但是特殊情况",
      "有，不止一次，而且不觉得有什么问题",
      '三天？那叫"正常的周末"',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: '你有没有故意关掉或忽略过某个"健康提醒"通知？',
    opts: [
      "没有，我遵守提醒",
      "关掉过一次",
      "经常关掉，它在妨碍我",
      "我已经把所有健康类App卸载了",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你上次在日落之前结束所有娱乐活动是什么时候？",
    opts: ["经常这样", "偶尔", "记不清了", "日落？那不是我起床的时间吗？"],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你的水杯/杯子上次被洗是什么时候？",
    opts: [
      "每天洗",
      "每两三天",
      "记不清，反正里面是喝光了",
      "我用的是矿泉水瓶，不需要洗",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你有没有因为不想起床去拿快递，让它在门口放了超过24小时？",
    opts: [
      "不可能，快递马上取",
      "有过，但不超过几小时",
      "有过，超过一天",
      "我的快递曾经在门口睡了三天，我们一起起床",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你会主动开窗换气吗？",
    opts: [
      "每天开，空气很重要",
      "偶尔",
      "很少，嫌麻烦",
      "窗帘已经半年没打开了，里面自有生态",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你描述自己睡眠状态最准确的词是？",
    opts: [
      "规律、充足",
      "稍晚但还行",
      "混乱，日夜颠倒",
      "我不睡觉，我只是定时关机",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: "你的垃圾桶上次清理是什么时候？",
    opts: ["昨天或今天", "三天内", "超过一周", "等它满了自己告诉我"],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "C",
    catName: "作息混乱度",
    q: '你有没有"以为自己睡了很久，结果只睡了两小时"的经历？',
    opts: [
      "没有，睡眠质量好",
      "偶尔",
      "经常，我的时间感已经崩溃",
      '时间对我来说只有"现在"和"不知道"',
    ],
    scores: [0, 1, 3, 5],
  },

  // === D: 精神状态指数 (25题) ===
  {
    cat: "D",
    catName: "精神状态指数",
    q: '你上一次感到"生活充满希望"是什么时候？',
    opts: ["最近就有", "上个月吧", "记不清了，很久了", "我不确定我理解这个词"],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '你如何看待"明天的自己"？',
    opts: [
      "充满期待，计划很多",
      "还好，走一步看一步",
      "让明天的我来烦恼吧，反正我也不想管",
      "明天的我会和今天的我一样，一起发呆",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '你有没有"刷手机刷到凌晨，却觉得什么都没看"的经历？',
    opts: [
      "很少",
      "偶尔",
      '经常，我称它为"数字行尸走肉"',
      "每天，这就是我的晚餐后活动",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: "你有待办清单吗？",
    opts: [
      "有，而且定期完成",
      "有，但经常拖延",
      "有，从来没完成过，更新了N版",
      "有，但我主要用来欣赏它，而不是执行它",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '你最后一次说"我要改变了"是什么时候？效果如何？',
    opts: [
      "有改变，已经做到了",
      "说了，也有些改变，断断续续",
      "说了很多次，改变还在路上",
      "每次元旦都说，每次正月初三就忘了",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: "你有没有在某件事上拖延超过一个月？",
    opts: [
      "没有，我行动力很强",
      "有一两件",
      "有，而且不止一件",
      '我有一个"永久待办"文件夹，那里住着我的所有梦想',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '你对"整顿生活"这件事的态度是？',
    opts: [
      "正在进行时",
      '"等周一开始"，还在准备',
      '"等下个月"，还在准备',
      '"等下辈子"，先这样吧',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '你有没有产生过"我很闲但我不想做任何事"的感受？',
    opts: [
      "几乎没有",
      "偶尔",
      "经常，而且有时持续几天",
      "这是我的默认状态，别的才是例外",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '你对"五年后的自己"有具体规划吗？',
    opts: [
      "有，而且在推进",
      "有个大方向，细节模糊",
      "想到就觉得迷茫",
      "五年后？我今晚吃什么都不知道",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '看到别人"积极生活"的动态，你的感受是？',
    opts: [
      "受到鼓励，我也想这样",
      "点个赞，欣赏欣赏",
      "有点酸，但转头继续躺着",
      "已经屏蔽了所有励志内容，维护蛆生平静",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '你的手机相册里有多少张"随便拍的天花板/被子照"？',
    opts: [
      "没有，我不随便拍",
      "几张",
      "超过20张，那是我的日记",
      "超过100张，这是我人生的纪录片",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: "你能坚持一个好习惯超过两周吗？",
    opts: [
      "能，我在坚持多个",
      "大概，但容易中断",
      "坚持到第4天一般就断了",
      "习惯对我来说只是理想，理想不需要实践",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: "当你感到无聊，你会怎么做？",
    opts: [
      "出门走走，或找朋友",
      "打游戏/看视频，充实起来",
      "刷手机刷着刷着就睡着了",
      "无聊就无聊，我已经和无聊达成了共识",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: "你多久没有学习过一样新技能了？",
    opts: ["最近就在学", "三个月内", "半年以上", "学习？那是上辈子的事了"],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: "你的内心OS里，最常出现的是哪句话？",
    opts: [
      "今天也要加油！",
      "还好，明天更努力",
      '"算了"和"随便"交替出现',
      '"就这样吧"已经成为我的人生宣言',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '你最后一次"全力以赴"做一件事是什么时候？',
    opts: [
      "最近，我经常全力以赴",
      "去年，某件大事",
      "想不起来了，好像很久了",
      "我已经不记得全力以赴是什么感觉了",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: "你有没有对着空白的文档/页面发呆超过30分钟？",
    opts: [
      "没有，马上开始工作",
      "有过一两次",
      "经常，然后什么都没写",
      "文档打开就是我和它大眼瞪小眼，最后我输了",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: "你认为现在的自己处于什么状态？",
    opts: [
      "充实，在往前走",
      "平稳，慢慢来",
      "停滞，感觉原地踏步",
      "正在缓慢下沉，但水温很舒适",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '你有没有做过"躺着却完全睡不着，只是发呆"的事？',
    opts: [
      "很少，一般躺下就睡",
      "偶尔",
      '经常，我称之为"脑内电影院"',
      "每天，我的床是哲学沉思的圣地",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '"摆烂"这个词你接受度有多高？',
    opts: [
      "不接受，要积极向上",
      "理解但不推崇",
      "已经接受，摆烂是一种自我保护",
      "摆烂是一种哲学，我是信徒",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: "你最近有没有真正开心大笑过？",
    opts: [
      "有，昨天或今天",
      "有，上周",
      "记不清，好像很久了",
      "开心和我签了个协议，说要晚点来",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '你有没有在别人说"你要振作起来"时内心翻了个白眼？',
    opts: [
      "没有，我接受建议",
      "有一点，但理解他的好意",
      "翻了，而且翻了好几圈",
      '已经把"振作"加入了我的屏蔽词',
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '你对"努力工作"这件事的信念程度是？',
    opts: [
      "很强，努力是应该的",
      "还好，努力但不内耗",
      "努力过，但意义感有点模糊",
      "努力和我分手了，我目送它离开",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: '你有没有觉得"时间过得很快但什么都没做"？',
    opts: [
      "不太有这感觉",
      "偶尔",
      "经常，每周都有这感觉",
      "这是我对时间的全部认知：快，且空",
    ],
    scores: [0, 1, 3, 5],
  },
  {
    cat: "D",
    catName: "精神状态指数",
    q: "如果可以的话，你想要什么样的生活？",
    opts: [
      "充实有目标，积极向上",
      "平静自在，但有所为",
      "有人养着，不用担心钱，随便玩",
      "进入冬眠状态，定期有人投食，不需要思考",
    ],
    scores: [0, 1, 3, 5],
  },
];

// === E: 隐性自卑探测题（穿插用，不显示分类标签，influences multiplier only）===
// selfScore: 0=自信/无所谓, 1=轻微信号, 2=中度信号, 3=强烈自卑信号
const SELF_QUESTIONS = [
  {
    cat: "E",
    catName: "日常随感",
    q: '有人夸你"做得不错"，你的第一反应是？',
    opts: [
      "谢谢，我确实挺用心的",
      "有点意外，但开心",
      "他只是客气，或者没见过更好的",
      "他肯定有别的目的，或者在讽刺我",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "发了一条动态，两小时没人点赞，你会想什么？",
    opts: [
      "没什么，不在乎",
      "有点好奇，可能大家没刷到",
      "是不是发得不好，是不是该删掉",
      "果然，没人在乎我说什么",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "和一群人一起时，你通常是？",
    opts: [
      "自然融入，聊得挺好",
      "会说话，但不是中心",
      "大多时候在观察别人，不太开口",
      "觉得自己格格不入，不知道怎么接话",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "朋友突然变得冷淡，你第一时间会觉得？",
    opts: [
      "他最近可能有事，等他",
      "有点在意，但先观望",
      "是不是我说了什么话惹到他了",
      "一定是我哪里做错了，开始回忆所有细节",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "你认为自己的想法/意见值得被认真听吗？",
    opts: [
      "值得，我想过的事我有把握",
      "大部分情况值得，视场合",
      "不确定，说出来怕被否定",
      "通常不值得，说了也没用",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "有机会在很多人面前展示自己，你的感受是？",
    opts: [
      "好啊，挺期待的",
      "有点紧张但能做到",
      "很抗拒，怕出丑被评价",
      "绝对不，宁可消失在人群里",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: '你上一次真心觉得"我挺好的"是什么时候？',
    opts: [
      "最近就有，状态不错",
      "偶尔会有这种感觉",
      "记不清了，好像很少",
      "我不太有这种感觉，总觉得哪里不够",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "当你特别喜欢一个人（朋友或恋人），你会？",
    opts: [
      "主动靠近，表达喜欢",
      "喜欢但会等对方先开口",
      "喜欢但觉得自己配不上，就远远看着",
      "喜欢但主动消失，怕被嫌烦",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "别人比你优秀，你通常怎么看待？",
    opts: [
      "挺好的，可以学习",
      "有点羡慕，但不影响自己",
      "感到压力和自我怀疑",
      "默默远离，觉得跟不上他们",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "如果有人对你特别好，你会？",
    opts: [
      "开心接受，回馈对方",
      "有点受宠若惊，但挺好",
      "怀疑他为什么对我好，是否有目的",
      "觉得不安，自己不值得这样被对待",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "完成一件事之后，你通常怎么看待结果？",
    opts: [
      "达到预期就满意",
      "觉得还不错，但下次可以更好",
      "总觉得哪里没做好，反复回想",
      "结果再好也会找到自己不足的地方",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "和初次见面的人相处，你会？",
    opts: [
      "轻松自然，很快打开话匣子",
      "比较观察，但能正常交流",
      "担心给对方留下不好的印象，说话很谨慎",
      "基本不主动，因为觉得自己不够有趣",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "你在照片/镜子里看到自己，你的感受通常是？",
    opts: [
      "挺好的，就是我",
      "还行，偶尔觉得不满意",
      "有很多不喜欢的地方，总想修图",
      "看了难受，不太想看",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "当你说了一句话，没人接，你会怎么想？",
    opts: [
      "没什么，话题就过了",
      "有点尴尬，但无所谓",
      "觉得自己说了蠢话，有点后悔",
      "确认了自己说话不值得被回应这件事",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: '你对"我值得被爱"这句话的反应是？',
    opts: [
      "当然，这是基本事实",
      "大概吧，理性上认同",
      "有点难以置信，不太确定",
      "这句话跟我好像没什么关系",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "做决定时，你通常怎么处理？",
    opts: [
      "根据自己判断来，比较有主见",
      "会参考别人意见，但最终自己决定",
      "很依赖别人意见，怕自己判断出错",
      "尽量不做决定，因为怕选错了被怪",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "有人和你意见不同，你的第一反应是？",
    opts: [
      "表达自己的看法，理性讨论",
      "稍微坚持一下，但能接受分歧",
      "立刻怀疑是不是自己错了",
      "基本会认同对方，不太敢坚持自己",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: '你怎么看待"我是一个有价值的人"这件事？',
    opts: [
      "认同，我的存在本身就有价值",
      "大部分时候认同，看状态",
      "需要做到某些事才觉得自己有价值",
      "不太确定，价值感很依赖别人的认可",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: "有人批评你，即使是善意的，你的感受是？",
    opts: [
      "接受，觉得有帮助",
      "有点不舒服，但能消化",
      "会难受很久，反复想",
      "会觉得自己整个人都是错的，不只是那件事",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
  {
    cat: "E",
    catName: "日常随感",
    q: '你有没有觉得自己"总是比别人差一点"？',
    opts: [
      "没有，我有自己擅长的东西",
      "偶尔有这感觉，但不强烈",
      "经常有，但说不清楚差在哪",
      "几乎一直有，是一种背景噪音",
    ],
    scores: [0, 1, 3, 5],
    selfScore: [0, 0, 2, 3],
  },
];

// ========== 抗乱选机制 ==========
const antiCheat = {
  startTimes: {},

  recordStart(idx) {
    this.startTimes[idx] = Date.now();
  },

  recordAnswer(idx) {
    const elapsed = (Date.now() - (this.startTimes[idx] || Date.now())) / 1000;
    return elapsed;
  },

  analyze(answers) {
    if (answers.length < 5) return { penalty: 0, msg: "" };

    const unique = new Set(answers.map((a) => a.optIdx));
    if (unique.size === 1 && answers.length >= 10) {
      return { penalty: 0.7, msg: "检测到异常选择模式，已启动防蛆校正算法" };
    }

    const fastCount = answers.filter((a) => a.time < 2).length;
    if (fastCount / answers.length > 0.6 && answers.length >= 8) {
      return {
        penalty: 0.5,
        msg: "您的手速已超越人类极限，系统已进行惩罚校正",
      };
    }

    const firstLast = answers.filter(
      (a) => a.optIdx === 0 || a.optIdx === answers[0].totalOpts - 1,
    ).length;
    if (firstLast / answers.length > 0.8 && answers.length >= 10) {
      return { penalty: 0.4, msg: "检测到边缘选择偏好，您的蛆性已被重新评估" };
    }

    return { penalty: 0, msg: "" };
  },
};

// ========== 状态 ==========
let quizQuestions = [];
let currentIdx = 0;
let answers = {};

// ========== 题目总数配置 ==========
const TOTAL_Q = 30; // 测试题总数（25行为题 + 5自卑题）
const SELF_COUNT = 5; // 自卑题数量

// ========== 抽题 ==========
function drawQuestions() {
  // ABCD 行为题：每类各抽约6-7题，共25题
  const cats = ["A", "B", "C", "D"];
  let behaviorQs = [];
  cats.forEach((cat) => {
    const pool = ALL_QUESTIONS.filter((q) => q.cat === cat);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    behaviorQs = behaviorQs.concat(shuffled.slice(0, 7));
  });
  behaviorQs = behaviorQs.sort(() => Math.random() - 0.5).slice(0, 25);

  // E 自卑题：从20题库随机抽5题
  const selfQs = [...SELF_QUESTIONS]
    .sort(() => Math.random() - 0.5)
    .slice(0, SELF_COUNT);

  // 将5道自卑题随机穿插到行为题中（避免连续出现，分散插入）
  const result = [...behaviorQs];
  const positions = [];
  while (positions.length < SELF_COUNT) {
    const pos = 3 + Math.floor(Math.random() * (result.length - 3));
    if (!positions.includes(pos)) positions.push(pos);
  }
  positions.sort((a, b) => b - a); // 从后往前插，不影响前面的索引
  positions.forEach((pos, i) => result.splice(pos, 0, selfQs[i]));

  return result; // 共30题
}

// ========== 结果等级（含自卑双版本文案）==========
const LEVELS = [
  {
    min: 0,
    max: 15,
    title: "清醒的灵魂",
    creature: "🌸",
    desc_low:
      "恭喜你，你几乎是正常人。行为健康，内心也踏实。你来这里可能只是好奇——说真的，你来做什么？",
    desc_high:
      "行为上你还算正常，但内心藏着一点点不安全感。那没关系，大部分人都有，只是你比较诚实。",
    badge: "蛆力值：微乎其微",
    badgeColor: "#10b981",
    ring: "#10b981",
  },
  {
    min: 16,
    max: 30,
    title: "潜伏的小蛆苗",
    creature: "🌱",
    desc_low:
      "你身上有一丢丢蛆的基因，但还没完全激活。你蛆得坦然，只是单纯懒，没什么心理包袱。",
    desc_high:
      "蛆的种子刚发芽，但根可能扎得比你想的深。你有时候躲进壳里，不只是懒，是外面让你有点累。",
    badge: "蛆力值：初露端倪",
    badgeColor: "#84cc16",
    ring: "#84cc16",
  },
  {
    min: 31,
    max: 50,
    title: "轻度蛆化患者",
    creature: "🐛",
    desc_low:
      "轻度感染，建议隔离观察。症状有：不想出门、追番熬夜、待消息积压。但你蛆得挺自洽，没啥压力。",
    desc_high:
      "症状在中等线，但驱动力值得注意。你的不出门、不联系，有时候不只是懒，是怕麻烦别人，或者怕被评价。",
    badge: "蛆力值：轻度感染",
    badgeColor: "#f59e0b",
    ring: "#f59e0b",
  },
  {
    min: 51,
    max: 65,
    title: "中度蛆类生命体",
    creature: "🪲",
    desc_low:
      "病情中期。生物钟错位，社交成本高，外卖备注比微信更能表达你。不过你蛆得随心，是主动选择的荒漠。",
    desc_high:
      "病情中期，根源值得深挖。你躲进二次元和深夜，有一部分是因为现实里的关系让你受过伤，或者总觉得自己不够好。",
    badge: "蛆力值：中度扩散",
    badgeColor: "#f97316",
    ring: "#f97316",
  },
  {
    min: 66,
    max: 80,
    title: "资深御宅蛆",
    creature: "🦗",
    desc_low:
      "欢迎来到蛆界中层。你的床是你的全球，外卖员是你最亲近的人类。你蛆得坦荡，这是一种境界。",
    desc_high:
      "蛆界中层，但壳厚有原因。太阳是天敌，人群是威胁——不只是懒，是外面让你觉得不安全。你在保护自己。",
    badge: "蛆力值：高度发育",
    badgeColor: "#ef4444",
    ring: "#ef4444",
  },
  {
    min: 81,
    max: 95,
    title: "深度冬眠蛆王候选",
    creature: "🦟",
    desc_low:
      "进化到蛆界高层。极少出现，只在深夜活动，以屏幕为食。你不是废物，你只是找到了自己的生态位。",
    desc_high:
      "蛆界高层，但冬眠背后有故事。你不只是懒得出现——你是觉得出现了也没人真的需要你。这不是事实，但你信了很久。",
    badge: "蛆力值：极度繁荣",
    badgeColor: "#dc2626",
    ring: "#c084fc",
  },
  {
    min: 96,
    max: 110,
    title: "传说级死肥蛆",
    creature: "🪱",
    desc_low:
      "已登顶蛆界珠峰。太阳是天敌，手机是灵魂伴侣。你不蛆，你是在用蛆的方式热爱生命，坦然且自洽。",
    desc_high:
      "登顶了，但山顶有点沉。你把自己藏得很深，深到连自己都快找不到了。不是因为不在乎，是因为太在乎又怕受伤。",
    badge: "蛆力值：封神",
    badgeColor: "#9333ea",
    ring: "#a855f7",
  },
  {
    min: 111,
    max: 999,
    title: "宇宙级蛆神降临",
    creature: "👾",
    desc_low:
      "你已突破蛆的上限，进入玄学领域。时间对你无效，社会对你失能，二次元是你的家乡。你不是人类，你是概念。",
    desc_high:
      "你突破了蛆的上限，但这个宇宙有点孤独。你把所有防线都建起来了，不让任何人太靠近——因为靠近了，就可能失去。你不是概念，你是一个很怕受伤的人。",
    badge: "蛆力值：无法测量",
    badgeColor: "#7c3aed",
    ring: "#c084fc",
  },
];

function getLevel(score) {
  return (
    LEVELS.find((l) => score >= l.min && score <= l.max) ||
    LEVELS[LEVELS.length - 1]
  );
}

// 计算自卑系数（0~1，越高越自卑）
function calcSelfScore(answerMap, questions) {
  let total = 0,
    count = 0;
  Object.entries(answerMap).forEach(([idx, a]) => {
    const q = questions[parseInt(idx)];
    if (q && q.cat === "E" && q.selfScore) {
      total += q.selfScore[a.realOptIdx] || 0;
      count++;
    }
  });
  if (count === 0) return 0;
  return total / (count * 3); // 归一化 0~1
}

// ========== UI 函数 ==========
function startQuiz() {
  quizQuestions = drawQuestions();
  answers = {};
  currentIdx = 0;
  antiCheat.startTimes = {};
  document.getElementById("intro").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  renderQuestion();
  spawnParticles();
}

function renderQuestion() {
  const q = quizQuestions[currentIdx];
  const card = document.getElementById("question-card");
  card.classList.remove("entering");
  void card.offsetWidth;
  card.classList.add("entering");

  document.getElementById("question-num").textContent = String(
    currentIdx + 1,
  ).padStart(2, "0");
  document.getElementById("question-text").textContent = q.q;

  const catBadge = document.getElementById("cat-badge");
  catBadge.textContent = q.catName;
  catBadge.className = "quiz-category-badge cat-" + q.cat;

  const pct = Math.round((currentIdx / TOTAL_Q) * 100);
  document.getElementById("progress-text").textContent =
    `第 ${currentIdx + 1} / ${TOTAL_Q} 题`;
  document.getElementById("progress-pct").textContent = pct + "%";
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("answered-count").textContent =
    `已答 ${Object.keys(answers).length} / ${TOTAL_Q}`;

  const labels = ["A", "B", "C", "D"];
  const optOrder = shuffleOptions(q.opts.length);
  const grid = document.getElementById("options-grid");
  grid.innerHTML = "";
  optOrder.forEach((realIdx, dispIdx) => {
    const btn = document.createElement("button");
    const isSelected =
      answers[currentIdx] !== undefined &&
      answers[currentIdx].realOptIdx === realIdx;
    btn.className = "option-btn" + (isSelected ? " selected" : "");
    btn.innerHTML = `<span class="option-label">${labels[dispIdx]}</span>${q.opts[realIdx]}`;
    btn.onclick = () => selectOption(realIdx, btn, q.scores[realIdx]);
    grid.appendChild(btn);
  });

  document.getElementById("btn-prev").disabled = currentIdx === 0;
  document.getElementById("btn-next").disabled =
    answers[currentIdx] === undefined;
  document.getElementById("btn-next").textContent =
    currentIdx === TOTAL_Q - 1 ? "提交结果 ✓" : "下一题 →";

  antiCheat.recordStart(currentIdx);
}

function shuffleOptions(len) {
  const arr = Array.from({ length: len }, (_, i) => i);
  if (Math.random() > 0.4) {
    const i = Math.floor(Math.random() * (len - 1));
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return arr;
}

function selectOption(realOptIdx, btnEl, score) {
  const elapsed = antiCheat.recordAnswer(currentIdx);
  answers[currentIdx] = { realOptIdx, score, time: elapsed };

  document
    .querySelectorAll(".option-btn")
    .forEach((b) => b.classList.remove("selected"));
  btnEl.classList.add("selected");

  document.getElementById("btn-next").disabled = false;
  document.getElementById("answered-count").textContent =
    `已答 ${Object.keys(answers).length} / ${TOTAL_Q}`;

  if (elapsed < 0.8) showToast("这么快？你在乱选吗？（已记录）");
}

function nextQ() {
  if (answers[currentIdx] === undefined) return;
  if (currentIdx < TOTAL_Q - 1) {
    currentIdx++;
    renderQuestion();
  } else {
    showResult();
  }
}

function prevQ() {
  if (currentIdx > 0) {
    currentIdx--;
    renderQuestion();
  }
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}

function showResult() {
  // ── 自卑系数计算（E类题，归一化到0~1）──
  const selfCoef = calcSelfScore(answers, quizQuestions);
  const isHighSelf = selfCoef >= 0.5;
  // 自卑权重乘数：最低×1.0，最高×1.4
  const selfMultiplier = 1 + selfCoef * 0.4;

  // ── 各维度原始分（仅ABCD，E类排除）──
  const catScores = { A: 0, B: 0, C: 0, D: 0 };
  const catCounts = { A: 0, B: 0, C: 0, D: 0 };
  Object.entries(answers).forEach(([idx, a]) => {
    const q = quizQuestions[parseInt(idx)];
    if (q.cat !== "E") {
      catScores[q.cat] += a.score;
      catCounts[q.cat]++;
    }
  });

  // ── 各维度分乘上自卑系数 → 加权后求总蛆力值 ──
  const weightedCatScores = {};
  ["A", "B", "C", "D"].forEach((cat) => {
    weightedCatScores[cat] = Math.round(catScores[cat] * selfMultiplier);
  });
  const rawScore = Object.values(weightedCatScores).reduce((s, v) => s + v, 0);

  // ── 抗乱选 ──
  const cheatData = Object.entries(answers).map(([idx, a]) => ({
    optIdx: a.realOptIdx,
    time: a.time,
    totalOpts: quizQuestions[parseInt(idx)].opts.length,
  }));
  const { penalty, msg } = antiCheat.analyze(cheatData);
  const finalScore = Math.min(Math.round(rawScore * (1 - penalty * 0.3)), 125);
  if (msg) setTimeout(() => showToast(msg), 500);

  const level = getLevel(finalScore);
  const desc = isHighSelf ? level.desc_high : level.desc_low;

  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  const badge = document.getElementById("result-badge");
  badge.textContent = level.badge;
  badge.style.background = level.badgeColor + "22";
  badge.style.border = "1px solid " + level.badgeColor + "55";
  badge.style.color = level.badgeColor;

  document.getElementById("result-creature").textContent = level.creature;
  document.getElementById("result-title").textContent = level.title;
  document.getElementById("result-desc").textContent = desc;
  document.getElementById("score-num").textContent = finalScore;

  const pct = Math.min(finalScore / 125, 1);
  const ring = document.getElementById("ring-fill");
  ring.style.stroke = level.ring;
  setTimeout(() => {
    ring.style.strokeDashoffset = 427.26 * (1 - pct);
  }, 300);

  const dimInfo = [
    { cat: "A", name: "二次元沉迷度", icon: "🎌", color: "#c084fc" },
    { cat: "B", name: "社交荒漠度", icon: "🏜️", color: "#fb923c" },
    { cat: "C", name: "作息混乱度", icon: "🌙", color: "#60a5fa" },
    { cat: "D", name: "精神状态指数", icon: "🌀", color: "#34d399" },
  ];

  const grid = document.getElementById("dimension-grid");
  grid.innerHTML = "";
  dimInfo.forEach((dim) => {
    const maxPossible =
      Math.round(catCounts[dim.cat] * 5 * selfMultiplier) || 1;
    const dimScore = weightedCatScores[dim.cat];
    const pctDim = Math.round((dimScore / maxPossible) * 100);
    const card = document.createElement("div");
    card.className = "dim-card";
    card.innerHTML = `
      <div class="dim-header">
        <span class="dim-icon">${dim.icon}</span>
        <span class="dim-name">${dim.name}</span>
      </div>
      <div class="dim-bar-wrap">
        <div class="dim-bar-fill" style="width:0%;background:${dim.color}" data-target="${pctDim}"></div>
      </div>
      <div class="dim-score-text">${dimScore}分 / ${maxPossible}分（${pctDim}%）</div>
    `;
    grid.appendChild(card);
  });

  setTimeout(() => {
    document.querySelectorAll(".dim-bar-fill").forEach((bar) => {
      bar.style.width = bar.dataset.target + "%";
    });
  }, 400);

  // 自卑系数说明标签
  const selfTag = document.getElementById("self-coef-tag");
  if (selfTag) {
    const pctSelf = Math.round(selfCoef * 100);
    selfTag.textContent = isHighSelf
      ? `🔍 自卑系数 ${pctSelf}% — 已对蛆力值施加 ×${selfMultiplier.toFixed(2)} 加权`
      : `🔍 自卑系数 ${pctSelf}% — 内心相对稳定，加权系数 ×${selfMultiplier.toFixed(2)}`;
    selfTag.style.opacity = "1";
  }

  setTimeout(() => {
    document.getElementById("result-title").classList.add("glitch");
  }, 800);

  window._resultData = {
    finalScore,
    level,
    catScores: weightedCatScores,
    catCounts,
    isHighSelf,
    selfCoef,
    selfMultiplier,
  };
}

function retryQuiz() {
  document.getElementById("result").style.display = "none";
  document.getElementById("intro").style.display = "flex";
}

function shareResult() {
  const d = window._resultData;
  if (!d) return;
  const text =
    `【蛆度测试结果】\n` +
    `我的等级：${d.level.title} ${d.level.creature}\n` +
    `蛆力值：${d.finalScore}/125\n` +
    `${d.level.badge}\n\n` +
    `二次元沉迷度：${Math.round((d.catScores.A / (d.catCounts.A * 5 || 1)) * 100)}%\n` +
    `社交荒漠度：${Math.round((d.catScores.B / (d.catCounts.B * 5 || 1)) * 100)}%\n` +
    `作息混乱度：${Math.round((d.catScores.C / (d.catCounts.C * 5 || 1)) * 100)}%\n` +
    `精神状态指数：${Math.round((d.catScores.D / (d.catCounts.D * 5 || 1)) * 100)}%\n\n` +
    `测测你有多蛆 👾`;

  // 加入自卑彩蛋行
  const selfLine = d.isHighSelf
    ? "\n【隐藏属性：蛆壳之下藏着一颗敏感的心】"
    : "";
  const finalText = text + selfLine;

  navigator.clipboard.writeText(finalText).then(() => {
    const tip = document.getElementById("copied-tip");
    tip.classList.add("show");
    setTimeout(() => tip.classList.remove("show"), 2000);
  });
}

function spawnParticles() {
  const colors = ["#7c3aed", "#a855f7", "#c084fc", "#6d28d9"];
  for (let i = 0; i < 8; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration:${8 + Math.random() * 12}s;
      animation-delay:${Math.random() * 5}s;
    `;
    document.body.appendChild(p);
  }
}
