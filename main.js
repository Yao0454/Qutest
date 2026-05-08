// ========== 题库 ==========
const ALL_QUESTIONS = [

// === A: 身体荒废度 (25题) ===
{cat:'A', catName:'身体荒废度', q:'你上一次运动是什么时候？', opts:['今天，我保持日常锻炼', '三天内，偶尔动一动', '上周，断断续续', '上个月，完全记不清了', '去上厕所算吗？'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你一天在床上/沙发上待多久（除了睡觉）？', opts:['2小时以内，我比较活跃', '3-4小时，正常水平', '5-7小时，大部分时间是横着的', '8-10小时，我和床已合为一体', '超过10小时，床是我的宇宙'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你上次洗澡距今多久了？', opts:['今天，每天必洗', '1-2天，正常节奏', '3-4天，懒了一下', '5天以上，能撑则撑', '我用香水代替洗澡'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你的一日三餐是？', opts:['规律，自己做饭', '两顿，偶尔凑合', '外卖为主，几乎不做饭', '饿了才吃，次数不定', '我的概念只有"今天吃了吗"'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你有没有办过健身卡或买过运动装备，然后几乎没用过？', opts:['没办过，不需要', '办了，也在用', '办了，偶尔去', '办了，去了三次就再没去', '办了两张，都落灰了，但我还想办第三张'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你上次喝水是什么时候？（白开水/矿泉水）', opts:['刚刚，我随时补水', '今天喝了不少', '今天好像只喝了奶茶/饮料', '想不起来了，渴了才想到喝水', '水？我用奶茶续命'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你的床单上次换洗是什么时候？', opts:['上周，定期换', '一个月内', '两三个月前，还好吧', '超过半年，我们已经磨合出默契', '床单和我是共同体，我们一起进化'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你有没有因为太懒而跳过刷牙？', opts:['从不，这是底线', '几乎没有', '偶尔睡前懒得刷', '早晚各省一次是常态', '我用漱口水代替，效率更高'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你平时的饮食以什么为主？', opts:['自己做，营养均衡', '偶尔外卖，总体还行', '外卖为主，基本不做', '零食+外卖，正餐是奢侈品', '我吃饭只看"方便不方便"，不看"健不健康"'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你上次在太阳下走超过20分钟是什么时候？', opts:['最近就有，我喜欢出去走走', '上周，偶尔出门', '上个月，被迫出去的', '想不起来了，太阳太晒', '太阳是我的天敌，我尽量避开它'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你久坐多久会主动站起来活动一下？', opts:['一小时以内，保持习惯', '两小时左右', '三四个小时，腰提醒我才动', '感觉麻了才起来', '我不站起来，我只是偶尔去上厕所'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你有没有因为懒得做饭点了外卖，但饭到了又懒得去取？', opts:['没有，外卖我秒取', '有过一次，特殊情况', '有过几次，等冷了才取', '经常，骑手在门外我在床上僵持', '骑手打来电话我都不接，等他放门口'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你的房间现在是什么状态？', opts:['整洁，定期打扫', '有点乱但可接受', '明显乱，有一段时间没收拾了', '只有我知道什么在哪里，外人无法理解', '考古学家来了都会觉得有研究价值'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你上次体检是什么时候？', opts:['今年做了，保持定期检查', '一两年内', '超过三年了', '想不起来了，没什么感觉', '我不体检，我选择活在薛定谔的健康里'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你一天喝多少含糖饮料？', opts:['基本不喝', '偶尔一杯', '每天一两杯，奶茶/可乐是刚需', '每天三杯以上，白水太寡淡', '含糖饮料是我的血液替代品'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你有没有感觉自己的体力明显变差了？', opts:['没有，保持得不错', '有一点，但还好', '明显变差了，爬几层楼就喘', '稍微走快一点就心跳加速', '我的极限运动是从床上坐起来'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你的快递通常多久取？', opts:['到了立刻取', '当天取', '第二天取，不急', '放两三天再取', '快递在门口睡过超过三天'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你睡前有没有吃东西的习惯？', opts:['没有，保持健康作息', '偶尔吃点水果', '睡前吃零食是日常', '半夜爬起来找东西吃是常态', '我的最后一餐通常在凌晨两点'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你有没有坐到腿麻了还不起来？', opts:['没有，我会及时活动', '偶尔', '经常，腿麻了就换个姿势继续坐', '麻了就抖一抖，不影响继续刷手机', '腿麻是我身体唯一发出的信号，我通常忽略它'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你上次开窗透气是什么时候？', opts:['今天，我每天开窗', '最近几天', '上周，偶尔开', '很久没开了，空调比风更稳定', '我的窗帘三个月没打开过，室内自有生态'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你有没有因为懒得倒垃圾，让垃圾袋在家放超过一周？', opts:['没有，及时清理', '偶尔推迟两三天', '超过一周是常态', '垃圾袋满了塞，满了再满', '我家垃圾已经开始有自己的气候了'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你有没有穿同一件衣服连续超过三天？', opts:['不会，每天换', '偶尔两天', '在家三天穿一件很正常', '睡衣就是日常服，省去了换衣服的麻烦', '我的衣服是按"还能穿吗"来判断的，不按天数'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你有没有因为不想动而忍过某种轻微的不适？（比如口渴但懒得起来倒水）', opts:['没有，有需求立刻解决', '偶尔忍几分钟', '经常忍，能撑则撑', '口渴忍两小时是正常操作', '我已经把"忍"练成了一种生存技能'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'你的洗碗频率是？', opts:['每次用完马上洗', '当天洗', '攒两三天一起洗', '碗里长东西了才洗', '我用纸碗纸盘，规避了这个问题'], scores:[0,1,2,4,5]},
{cat:'A', catName:'身体荒废度', q:'如果让你用一个词形容你的身体状态，你会选哪个？', opts:['健康活力', '还不错，偶尔懈怠', '将就，没什么大毛病', '亚健康，但懒得改', '一台超期服役却从不保养的机器'], scores:[0,1,2,4,5]},

// === B: 数字沉溺度 (25题) ===
{cat:'B', catName:'数字沉溺度', q:'你每天刷短视频（抖音/快手/视频号等）多久？', opts:['不刷或极少', '1小时以内', '1-3小时', '3-5小时，停不下来', '超过5小时，刷完一天的太阳'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有打开手机只是想看个时间，然后刷了半小时？', opts:['没有，我自制力不错', '偶尔', '经常，手机是黑洞', '每次都这样，时间是不存在的', '我已经忘记自己为什么打开手机了，但我还在刷'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你晚上最晚刷手机到几点？', opts:['11点前，保持作息', '12点左右', '凌晨1-2点是常态', '凌晨3-4点，内容太好看', '不存在"最晚"，因为我不知道什么时候睡的'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有刷到一个"有深度"的视频，点了收藏，然后再也没看？', opts:['没有，我认真看完才收藏', '偶尔', '经常，收藏夹是我的知识坟场', '我的收藏夹超过500个视频，全部未看完', '我的收藏夹对我来说是一种精神安慰，不是工具'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有边吃饭边刷手机的习惯？', opts:['没有，吃饭专心吃', '偶尔看看', '每次吃饭必须有手机陪', '不刷手机我不知道怎么吃饭', '我的叉子和手机是成套的餐具'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有因为刷手机耽误了正事？', opts:['没有，分得清轻重', '偶尔推迟了一点', '经常，截止日期是我唯一的动力', '我所有的事情都是在手机里耽误的', '我的代办清单的主要功能是提醒我有多少事没做'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你一天解锁手机多少次？', opts:['不超过30次，比较节制', '30-80次，正常', '80-150次，随时看', '超过150次，手机是我的另一只眼睛', '我没计算过，因为我几乎没锁过'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有同时开着多个平台刷内容？（比如B站放着，同时刷微博）', opts:['没有，专注一件事', '偶尔', '经常，一个屏幕不够用', '多屏同步是我的日常状态', '我的大脑已经进化出多线程处理废话的能力'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有看过一个"五分钟讲清XX"的视频，但其实什么都没记住？', opts:['没有，我认真看', '偶尔没记住', '经常，看完感觉充实但脑子是空的', '我的知识摄入量很大，掌握量约等于零', '我已经用"看过"代替了"学会"'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你睡前最后一件事是什么？', opts:['刷牙，关灯，睡觉', '看几分钟手机再睡', '刷手机刷到眼睛撑不住', '刷到手机自动息屏才算结束', '睡着了手机还搁在脸上'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你对推荐算法了解你的程度是？', opts:['它推的我不太感兴趣', '有时候推得还行', '推得很准，让我有点细思极恐', '它比我妈更了解我的喜好', '它推什么我就看什么，我已经是算法的形状了'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有在群聊/评论区花超过一小时争论一件毫无意义的事？', opts:['没有，不值得', '偶尔回几句就算了', '有过，打了很多字', '有过不止一次，当时觉得必须赢', '我在网上争论的时间比工作时间还长'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你的浏览器标签页现在开着多少个？', opts:['5个以内，保持整洁', '6-15个，还好', '15-40个，我知道我在找什么', '超过40个，这是我的数字人生', '我从来不关标签页，只要内存撑得住'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有把"看某视频/剧"列入当天计划，并认真执行？', opts:['不会，娱乐不需要计划', '偶尔安排一下', '经常，这是我最认真执行的计划', '娱乐计划比工作计划完成率高得多', '我只有娱乐计划，别的都是将来再说'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有刷到一条让你感到焦虑的新闻，但停不下来继续刷相关内容？', opts:['没有，看到不好的内容我会停', '偶尔多看了几条', '经常，越焦虑越刷', '我有时候刷到抑郁，但我停不下来', '我已经进化出了"焦虑性刷屏"这一特殊技能'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有在不需要手机的场合偷偷看手机？（开会、吃饭、聊天时）', opts:['没有，保持礼貌', '偶尔瞄一眼', '经常，手机放在桌下', '桌下比桌上更熟悉', '我跟人说话时眼睛也没离开过屏幕'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有看了一个视频，然后连续看了同类视频超过两小时？', opts:['没有，能控制', '偶尔多看了一会', '经常，一个视频是一个漩涡的入口', '我进入漩涡的速度比离开的速度快得多', '我不是在看视频，我是在被视频喂食'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你的手机屏幕时间（日均）大概是？', opts:['3小时以内', '3-5小时', '5-8小时', '8-12小时', '超过12小时，我的眼睛已经适应了屏幕温度'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有订阅了很多播客/课程/公众号，但几乎不看？', opts:['没有，订阅的都在看', '有几个积压了', '大部分都没看，但订阅让我感觉自己在学习', '我的未读消息超过1000条，我已经放弃了', '订阅是我的收藏仪式，和实际阅读毫无关系'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有醒来第一件事就是看手机？', opts:['没有，先洗漱', '偶尔看一眼', '每天必看，先了解世界再起床', '手机比闹钟更早叫醒我', '我睡着前和醒来后做的是同一件事：刷手机'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有在上厕所时玩手机？', opts:['不会，如厕专心如厕', '偶尔', '每次都玩，厕所是我的第二书房', '在厕所玩手机玩到腿麻是常态', '我的如厕时间因手机延长了三倍'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有因为"再看一个"导致计划全乱？', opts:['没有，我能控制', '偶尔延误一点', '"再看一个"是我最常说的谎言', '我的一天经常死于"再看一个"', '"再看一个"对我来说相当于打开了潘多拉的盒子'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有在同一个平台重复刷到同一条内容，并且再次看完？', opts:['没有，看过的我会跳过', '偶尔，好内容值得二刷', '经常，我的记性不太好', '有时候刷第三遍了才意识到看过', '平台给我推什么我就看什么，包括已经看过的'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'你有没有尝试过"戒手机"或者设置使用限制？', opts:['不需要，我能自控', '试过，效果还好', '试过，但三天后放弃了', '试过很多次，每次都以失败告终', '我试过，然后删掉了限制App'], scores:[0,1,2,4,5]},
{cat:'B', catName:'数字沉溺度', q:'不看手机的时候，你会感到焦虑或不自在吗？', opts:['不会，很自在', '稍微有一点', '明显有，总想看看有没有消息', '不看手机坐立不安，像少了什么', '手机离我超过一米我就呼吸困难'], scores:[0,1,2,4,5]},

// === C: 社会脱轨度 (25题) ===
{cat:'C', catName:'社会脱轨度', q:'你的待办清单里有没有一件事拖超过一个月还没做？', opts:['没有，我执行力很强', '有一两件，在推进中', '有好几件，都是"重要但不紧急"的', '我的待办清单是一份历史档案', '我有一个文件夹叫"总有一天"，里面住着我所有的计划'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你上次主动出门（非必要，纯粹为了出去转转）是什么时候？', opts:['最近就有，我喜欢出门', '上周', '上个月，偶尔出去', '三个月以上，出门需要理由', '出门本身就是对我的一种考验'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有"打算"做某件事，但从来没有开始？', opts:['没有，打算的事我都做了', '有一两件，还没到时间', '有很多件，一直在打算中', '我的人生充满了"打算"，行动力约等于零', '"打算"是我和梦想之间最宽的那条河'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你最近更新简历或认真规划职业是什么时候？', opts:['最近，我定期更新', '半年内', '超过一年，没动力弄', '我的简历停在了上上家公司', '我的简历存在的意义是提醒我有多久没更新它了'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有看了很多"如何提升自己"的内容，但一件都没实践？', opts:['没有，我会去做', '看了一些，也实践了一些', '看了很多，做了很少', '我的知识摄入量和行动量是反比关系', '看这类内容本身就是我假装在提升自己的方式'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你通常几点起床？', opts:['7点前，保持规律', '7-9点，正常范围', '10点-12点，睡到自然醒', '下午才起，昨晚睡得晚', '起床这件事对我来说是当天最大的挑战'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有说过"等状态好了再开始"，然后等了很久？', opts:['没有，状态不好也会开始', '偶尔等了一两天', '经常，状态是我的挡箭牌', '我已经等了几个月了，状态还没来', '"等状态好了"是我说过最长的谎话'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有连续三天以上没有出过家门？', opts:['没有，我需要出门', '有，但是特殊情况', '有过不止一次', '三天不出门对我来说叫"正常的周末"', '三天是起步，我的记录比这长得多'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'"明天再说"对你来说是？', opts:['偶尔用用，不是习惯', '用得比较频繁，但有时候真的做了', '我的口头禅，明天总是比今天更适合开始', '明天再说已经演变成了下个月再说', '我的"明天"从来没有到来过'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有买了书/课程，但几乎没有看/学？', opts:['没有，买了就认真用', '有一两本，会补上', '有好几本，积灰了', '我的书架是一个没有打开过的展览', '购买这个动作本身给了我很强的满足感，阅读是多余的'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有感到"时间过得很快，但我什么都没做"？', opts:['很少，我效率不错', '偶尔', '经常，每周都有这种感觉', '这是我对时间的全部感知：快，且空', '我的时间是以"又过去了多久"来计量的，不是以"做了什么"'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你对"整顿生活/重新开始"这件事的态度是？', opts:['正在做，一直在调整', '"等周一"，快了', '"等下个月"，在酝酿', '"等明年"，需要一个整数节点', '"等下辈子"，这辈子先这样'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有对某件重要的事情拖延到最后一刻才做？', opts:['没有，我提前完成', '偶尔卡点', '经常，截止日期是我唯一的发动机', '我只在死线压着我的时候才能行动', '我的最佳状态是deadline前一小时'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有对未来感到迷茫且不想面对？', opts:['没有，我有比较清晰的方向', '有点迷茫，但在想办法', '比较迷茫，但还没行动', '很迷茫，选择不去想', '迷茫是我的底色，不去想是我的解决方案'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有积压了超过一周没处理的正事？（账单、文件、回复等）', opts:['没有，及时处理', '有一两件，快了', '有好几件，在拖', '我有一个"不想面对"的精神角落，里面全是正事', '我的邮件未读数已经进入四位数了'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你上一次做了一件"超出舒适区"的事是什么时候？', opts:['最近就有，我喜欢挑战', '几个月内', '超过半年', '想不起来了，好像很久了', '我不突破舒适区，我在舒适区里盖了一栋房子'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有制定过计划，但从来没有执行过？', opts:['没有，我制定了就会做', '有过一两次', '经常，计划是仪式感，不是行动纲领', '我的计划本里住着另一个更好的我', '制定计划是我最高效的活动，执行是别人的事'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你最近一次学习新东西并坚持超过两周是什么时候？', opts:['最近，在坚持', '几个月内', '超过半年', '想不起来了，三分钟热度是我的技能', '我热爱开始，痛恨坚持'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有因为"不想面对"而忽略某个重要问题？', opts:['没有，正视问题是基本', '偶尔回避一下', '经常，眼不见心不烦', '我的应对策略是：如果忽视它足够久，也许它会消失', '我已经把回避升华成了一种生活哲学'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你的闹钟会按时叫醒你吗？', opts:['会，我准时起', '基本会，偶尔赖床', '会叫，但我能睡回去', '我设了5个闹钟，每个都被我关掉了', '闹钟对我的约束力接近于零，它只是噪音'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有在"摆烂"之后感到轻松？', opts:['没有，我不太摆烂', '偶尔摆一下，放松一下没什么', '经常，摆烂是我的减压方式', '摆烂是我唯一有效的情绪出口', '我不是偶尔摆烂，我是以摆烂为基准状态'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有"想做但一直没做"的事情，并且已经想了超过一年？', opts:['没有，想了就会做', '有一两件，快了', '有几件，拖了很久了', '有一整个清单，每年都会想起来一次', '我的"一直想做的事"已经成为了我人生的背景音乐'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有看到励志内容，当时很感动，但完全没有改变任何事？', opts:['没有，看了会去做', '感动了，也改变了一点', '经常感动，改变约等于零', '我的感动是廉价的，行动是昂贵的', '我已经被励志内容感动了几百次，每次都是昙花一现'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'你有没有把"今天休息一下"说了超过一周？', opts:['没有，休息是有计划的', '偶尔多休息了几天', '经常，休息期总是延长', '"今天休息"是我说了一个月的话', '我的休息没有结束时间，开始时间也不确定'], scores:[0,1,2,4,5]},
{cat:'C', catName:'社会脱轨度', q:'用一句话形容你和现实任务的关系，哪句最准确？', opts:['积极面对，及时处理', '能拖就拖，但最终会做', '能拖就拖，有时候不做', '拖延是本能，行动是例外', '我和现实任务处于一种长期冷战状态'], scores:[0,1,2,4,5]},

// === D: 社交萎缩度 (25题) ===
{cat:'D', catName:'社交萎缩度', q:'你上次主动联系朋友是什么时候？', opts:['最近，我经常联系', '上周', '上个月，偶尔联系', '记不清了，一般是被联系', '我的社交是被动等待型的'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'收到消息，你通常多久回复？', opts:['看到就回', '几分钟到半小时内', '几小时，看到了再说', '一天以上，想起来才回', '我有一个"待回复"列表，里面的消息可以追溯到三个月前'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'朋友邀请你聚会，你的第一反应是？', opts:['好啊，期待', '看情况，人少就去', '想找借口推掉', '直接推掉，在家更好', '已读，想借口，最终发了个"最近有点忙"'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你有没有看了消息，想了很久怎么回，最后没回？', opts:['没有，看了就回', '偶尔一两次', '经常，回消息需要消耗心理能量', '这种情况我经历了太多次，发展成了拖延症', '我的已读不回率已经让朋友们习惯了'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'独处一整周，你的感受是？', opts:['会难受，需要社交', '有点无聊，还好', '挺好的，终于清静了', '非常舒适，这就是理想状态', '一周算什么，我能独处一个月不觉得有什么问题'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你外卖备注里有没有出现过"放门口不用敲门"类的字样？', opts:['没有，正常取餐', '偶尔这么写', '经常写，不想和骑手说话', '"请勿打电话请勿敲门直接放好离开谢谢理解"是我的固定备注', '我的备注已经细化到了指定放置角度'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你在群聊里通常是？', opts:['活跃发言，经常参与', '偶尔附和，不沉默', '潜水，只看不说', '消息提醒全关，群聊是噪音', '我在所有群里都是幽灵状态，存在感约等于零'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'有人突然上门拜访，你的感受是？', opts:['欢迎，快进来', '有点措手不及，但能接受', '高度紧张，立刻开始收拾房间和情绪', '极度不适，恨不得装不在家', '这在我看来是一种不经预约的犯罪行为'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你有没有因为不想社交推掉了一件你其实想去的活动？', opts:['没有，想去就去', '偶尔', '经常，社交成本大于活动吸引力', '每次都要经历一场内心拉锯战，多数以推掉结束', '社恐战胜了我对生活的一切期待'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你上次认识一个新朋友是在什么时候？', opts:['最近，我比较外向', '几个月内', '超过一年了', '想不起来了，社交基本停在了某个时间点', '我的朋友圈是一个封闭的存量系统，不接受新增'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你接陌生来电的习惯是？', opts:['直接接，有什么说什么', '查一下号码再接', '基本不接，等对方发短信', '陌生号码一律拒接，短信也未必回', '我的手机长期静音，漏接是我的标准状态'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你有没有觉得和人打交道很耗能，需要很长时间恢复？', opts:['没有，社交让我充能', '有一点，但不明显', '明显有，社交是体力消耗', '每次社交后我需要独处一天来恢复', '社交对我来说相当于高强度运动，事后需要大量休息'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你对"发朋友圈"这件事的态度是？', opts:['经常发，记录生活', '偶尔发，有意思的事才发', '很少发，超过半年没动了', '朋友圈设置了仅自己可见', '我的朋友圈是一片荒漠，最新一条是两年前'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你有多少个微信好友是超过一年没说过话的？', opts:['很少，我保持联系', '20%左右', '超过一半', '超过80%，大部分是陌生人', '我的通讯录是一个陌生人名录，只有头像没有故事'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你在公共场合会主动戴耳机隔绝环境吗？', opts:['很少，保持对环境的感知', '有时候，需要专注时', '出门必戴，不戴难受', '耳机是我和外部世界之间的防火墙', '耳机是我颅骨的延伸，摘下来等于失去盔甲'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你有没有在节假日收到祝福消息但没有回复？', opts:['没有，都会回', '偶尔漏回一两条', '经常不回，太多了', '群发消息我从来不回', '我的节日祝福回复率接近于零，大家已经习惯了'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你觉得和人当面沟通比发消息更让你不舒服吗？', opts:['不会，当面更直接', '稍微有一点，发消息更从容', '明显是，发消息给我时间思考', '当面沟通让我极度不适，发消息是我的安全区', '我能用消息解决的事绝对不打电话，能打电话的绝不见面'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你有没有在别人说话时心不在焉，只是在等对话结束？', opts:['没有，我认真倾听', '偶尔走神', '经常，长时间对话让我疲惫', '社交场合我大部分时间在等结束', '我表演倾听的技术越来越娴熟'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你有没有刻意减少过和某人的联系，只是因为觉得"太麻烦了"？', opts:['没有，关系值得维护', '偶尔减少了一点', '有过，维护关系消耗太大', '经常，能断则断', '我的人际关系是个自然淘汰系统，麻烦的自然消失'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你有没有一个人独处时比和朋友在一起更放松？', opts:['不是，我喜欢热闹', '差不多，看情况', '是的，独处让我更自在', '明显是，和人在一起我一直在消耗', '我和自己是这个世界上最好的伴侣'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你有没有觉得"我只需要网上的社交就够了"？', opts:['不够，我需要线下连接', '线上线下都需要', '网上社交已经能满足大部分需求了', '网上社交比线下舒服多了，没有压力', '现实社交对我来说可有可无，网上已经足够'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你有没有对亲近的人长时间"消失"过？', opts:['没有，保持联系', '偶尔沉默几天', '经常消失一段时间', '我的消失周期已经被身边人摸清规律了', '我的存在感本来就很低，消失和不消失没什么区别'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你最近参加的一次线下活动是什么时候？', opts:['上周，我经常参与', '一个月内', '三个月以上', '超过半年，已经记不清了', '线下活动对我来说是一个遥远的概念'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'你有没有觉得"不联系也没什么，如果对方需要他会来找我"？', opts:['没有，我会主动维系', '偶尔有这种想法', '经常有，我是被动型的', '这是我处理大多数关系的逻辑', '我所有的友谊都建立在"对方愿意主动"这个前提上'], scores:[0,1,2,4,5]},
{cat:'D', catName:'社交萎缩度', q:'用一个词形容你和社交的关系，哪个最准确？', opts:['充能，越社交越有劲', '中性，社交就社交', '耗能，需要之后恢复', '负担，能省则省', '敌对，社交是我最大的精神开销'], scores:[0,1,2,4,5]},
];

// === E: 隐性自卑探测题（穿插用，不显示分类标签，influences multiplier only）===
// selfScore: 0=自信/无所谓, 1=轻微信号, 2=中度信号, 3=强烈自卑信号
const SELF_QUESTIONS = [
  {cat:'E', catName:'日常随感', q:'有人夸你"做得不错"，你的第一反应是？',
    opts:['谢谢，我确实挺用心的', '有点意外，但开心', '他只是客气，或者没见过更好的', '他肯定有别的目的，或者在讽刺我'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'发了一条动态，两小时没人点赞，你会想什么？',
    opts:['没什么，不在乎', '有点好奇，可能大家没刷到', '是不是发得不好，是不是该删掉', '果然，没人在乎我说什么'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'和一群人一起时，你通常是？',
    opts:['自然融入，聊得挺好', '会说话，但不是中心', '大多时候在观察别人，不太开口', '觉得自己格格不入，不知道怎么接话'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'朋友突然变得冷淡，你第一时间会觉得？',
    opts:['他最近可能有事，等他', '有点在意，但先观望', '是不是我说了什么话惹到他了', '一定是我哪里做错了，开始回忆所有细节'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'你认为自己的想法/意见值得被认真听吗？',
    opts:['值得，我想过的事我有把握', '大部分情况值得，视场合', '不确定，说出来怕被否定', '通常不值得，说了也没用'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'有机会在很多人面前展示自己，你的感受是？',
    opts:['好啊，挺期待的', '有点紧张但能做到', '很抗拒，怕出丑被评价', '绝对不，宁可消失在人群里'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'你上一次真心觉得"我挺好的"是什么时候？',
    opts:['最近就有，状态不错', '偶尔会有这种感觉', '记不清了，好像很少', '我不太有这种感觉，总觉得哪里不够'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'当你特别喜欢一个人（朋友或恋人），你会？',
    opts:['主动靠近，表达喜欢', '喜欢但会等对方先开口', '喜欢但觉得自己配不上，就远远看着', '喜欢但主动消失，怕被嫌烦'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'别人比你优秀，你通常怎么看待？',
    opts:['挺好的，可以学习', '有点羡慕，但不影响自己', '感到压力和自我怀疑', '默默远离，觉得跟不上他们'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'如果有人对你特别好，你会？',
    opts:['开心接受，回馈对方', '有点受宠若惊，但挺好', '怀疑他为什么对我好，是否有目的', '觉得不安，自己不值得这样被对待'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'完成一件事之后，你通常怎么看待结果？',
    opts:['达到预期就满意', '觉得还不错，但下次可以更好', '总觉得哪里没做好，反复回想', '结果再好也会找到自己不足的地方'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'和初次见面的人相处，你会？',
    opts:['轻松自然，很快打开话匣子', '比较观察，但能正常交流', '担心给对方留下不好的印象，说话很谨慎', '基本不主动，因为觉得自己不够有趣'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'你在照片/镜子里看到自己，你的感受通常是？',
    opts:['挺好的，就是我', '还行，偶尔觉得不满意', '有很多不喜欢的地方，总想修图', '看了难受，不太想看'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'当你说了一句话，没人接，你会怎么想？',
    opts:['没什么，话题就过了', '有点尴尬，但无所谓', '觉得自己说了蠢话，有点后悔', '确认了自己说话不值得被回应这件事'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'你对"我值得被爱"这句话的反应是？',
    opts:['当然，这是基本事实', '大概吧，理性上认同', '有点难以置信，不太确定', '这句话跟我好像没什么关系'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'做决定时，你通常怎么处理？',
    opts:['根据自己判断来，比较有主见', '会参考别人意见，但最终自己决定', '很依赖别人意见，怕自己判断出错', '尽量不做决定，因为怕选错了被怪'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'有人和你意见不同，你的第一反应是？',
    opts:['表达自己的看法，理性讨论', '稍微坚持一下，但能接受分歧', '立刻怀疑是不是自己错了', '基本会认同对方，不太敢坚持自己'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'你怎么看待"我是一个有价值的人"这件事？',
    opts:['认同，我的存在本身就有价值', '大部分时候认同，看状态', '需要做到某些事才觉得自己有价值', '不太确定，价值感很依赖别人的认可'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'有人批评你，即使是善意的，你的感受是？',
    opts:['接受，觉得有帮助', '有点不舒服，但能消化', '会难受很久，反复想', '会觉得自己整个人都是错的，不只是那件事'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
  {cat:'E', catName:'日常随感', q:'你有没有觉得自己"总是比别人差一点"？',
    opts:['没有，我有自己擅长的东西', '偶尔有这感觉，但不强烈', '经常有，但说不清楚差在哪', '几乎一直有，是一种背景噪音'],
    scores:[0,1,3,5], selfScore:[0,0,2,3]},
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
    if (answers.length < 5) return { penalty: 0, msg: '' };

    const unique = new Set(answers.map(a => a.optIdx));
    if (unique.size === 1 && answers.length >= 10) {
      return { penalty: 0.7, msg: '检测到异常选择模式，已启动防蛆校正算法' };
    }

    const fastCount = answers.filter(a => a.time < 2).length;
    if (fastCount / answers.length > 0.6 && answers.length >= 8) {
      return { penalty: 0.5, msg: '您的手速已超越人类极限，系统已进行惩罚校正' };
    }

    const firstLast = answers.filter(a => a.optIdx === 0 || a.optIdx === answers[0].totalOpts - 1).length;
    if (firstLast / answers.length > 0.8 && answers.length >= 10) {
      return { penalty: 0.4, msg: '检测到边缘选择偏好，您的蛆性已被重新评估' };
    }

    return { penalty: 0, msg: '' };
  }
};

// ========== 状态 ==========
let quizQuestions = [];
let currentIdx = 0;
let answers = {};

// ========== 题目总数配置 ==========
const TOTAL_Q    = 30;  // 测试题总数（25行为题 + 5自卑题）
const SELF_COUNT = 5;   // 自卑题数量

// ========== 抽题 ==========
function drawQuestions() {
  // ABCD 行为题：每类各抽约6-7题，共25题
  const cats = ['A', 'B', 'C', 'D'];
  let behaviorQs = [];
  cats.forEach(cat => {
    const pool = ALL_QUESTIONS.filter(q => q.cat === cat);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    behaviorQs = behaviorQs.concat(shuffled.slice(0, 7));
  });
  behaviorQs = behaviorQs.sort(() => Math.random() - 0.5).slice(0, 25);

  // E 自卑题：从20题库随机抽5题
  const selfQs = [...SELF_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, SELF_COUNT);

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
  { min: 0,   max: 15,
    title: '清醒的人类', creature: '🌿',
    desc_low:  '恭喜，你活得相当体面。按时吃饭，偶尔运动，朋友还记得你的脸。说真的，你来这里测什么？',
    desc_high: '行为上你还算健全，但内心有点拧巴。你维持着表面的正常，偶尔感到疲惫——不只是身体上的。',
    badge: '蛆力值：微乎其微', badgeColor: '#10b981', ring: '#10b981' },
  { min: 16,  max: 30,
    title: '轻度蛆化预警', creature: '🌱',
    desc_low:  '蛆的基因刚开始萌发。你偶尔赖床、偶尔不想出门、外卖点得比自己做饭多。还没严重，但趋势值得关注。',
    desc_high: '轻度蛆化，但驱动力是关键。你有时候不是懒，是觉得出去了也没什么意思。世界让你有点提不起劲。',
    badge: '蛆力值：初露端倪', badgeColor: '#84cc16', ring: '#84cc16' },
  { min: 31,  max: 50,
    title: '中度蛆化患者', creature: '🐛',
    desc_low:  '症状明显：刷手机停不下来，出门需要理由，消息能拖就拖。你蛆得挺自洽，只是懒，没啥负担。',
    desc_high: '中度感染，根源值得看看。你的不出门和不联系，有时候不只是懒，是觉得麻烦别人，或者怕被评价。',
    badge: '蛆力值：轻度感染', badgeColor: '#f59e0b', ring: '#f59e0b' },
  { min: 51,  max: 65,
    title: '资深蛆类生命体', creature: '🪲',
    desc_low:  '病情进入中期。生物钟错位，外卖备注比微信更诚实，截止日期是唯一的发动机。你蛆得相当有个性。',
    desc_high: '中期蛆化，壳有点厚了。你躲在屏幕和沉默后面，不只是图省事，是现实让你觉得有点不安全。',
    badge: '蛆力值：中度扩散', badgeColor: '#f97316', ring: '#f97316' },
  { min: 66,  max: 80,
    title: '高级蛆态生物', creature: '🦗',
    desc_low:  '蛆界中高层。床是你的领土，外卖员是你最稳定的人际关系，太阳是你远观的风景。你蛆得很坦然。',
    desc_high: '蛆得深，但有原因。你把自己围得很严实，不只是懒，是某种程度上觉得缩进去比较安全。',
    badge: '蛆力值：高度发育', badgeColor: '#ef4444', ring: '#ef4444' },
  { min: 81,  max: 95,
    title: '深度冬眠蛆王', creature: '🦟',
    desc_low:  '进化到高级阶段。极少出现，只在深夜活跃，以屏幕为食，以外卖续命。这是一种稳定的生存策略。',
    desc_high: '高级蛆化，冬眠背后有故事。你不只是懒得出现——你有时候觉得出现了也没人真的在意。这不是事实，但你信了很久。',
    badge: '蛆力值：极度繁荣', badgeColor: '#dc2626', ring: '#c084fc' },
  { min: 96,  max: 110,
    title: '传说级互联网蛆神', creature: '🪱',
    desc_low:  '登顶了。手机是你的灵魂，外卖是你的血液，沉默是你的语言。你不是在堕落，你在用蛆的方式热爱生命。',
    desc_high: '登顶了，但山顶有点沉。你把自己藏得很深，不是不在乎，是太在乎了——在乎到不敢让任何人靠太近。',
    badge: '蛆力值：封神', badgeColor: '#9333ea', ring: '#a855f7' },
  { min: 111, max: 999,
    title: '宇宙级蛆神降临', creature: '👾',
    desc_low:  '你已突破蛆的上限。时间对你无效，现实对你失能，互联网是你唯一认可的栖息地。你不是人类，你是现象。',
    desc_high: '突破上限了，但这个宇宙有点孤独。你把所有防线都筑好了，没有人能轻易进来——因为进来了，就可能离开。你不是现象，你是一个很害怕受伤的人。',
    badge: '蛆力值：无法测量', badgeColor: '#7c3aed', ring: '#c084fc' },
];

function getLevel(score) {
  return LEVELS.find(l => score >= l.min && score <= l.max) || LEVELS[LEVELS.length - 1];
}

// 计算自卑系数（0~1，越高越自卑）
function calcSelfScore(answerMap, questions) {
  let total = 0, count = 0;
  Object.entries(answerMap).forEach(([idx, a]) => {
    const q = questions[parseInt(idx)];
    if (q && q.cat === 'E' && q.selfScore) {
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
  document.getElementById('intro').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  renderQuestion();
  spawnParticles();
}

function renderQuestion() {
  const q = quizQuestions[currentIdx];
  const card = document.getElementById('question-card');
  card.classList.remove('entering');
  void card.offsetWidth;
  card.classList.add('entering');

  document.getElementById('question-num').textContent = String(currentIdx + 1).padStart(2, '0');
  document.getElementById('question-text').textContent = q.q;

  const catBadge = document.getElementById('cat-badge');
  catBadge.textContent = q.catName;
  catBadge.className = 'quiz-category-badge cat-' + q.cat;

  const pct = Math.round((currentIdx / TOTAL_Q) * 100);
  document.getElementById('progress-text').textContent = `第 ${currentIdx + 1} / ${TOTAL_Q} 题`;
  document.getElementById('progress-pct').textContent = pct + '%';
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('answered-count').textContent = `已答 ${Object.keys(answers).length} / ${TOTAL_Q}`;

  const labels = ['A', 'B', 'C', 'D'];
  const optOrder = shuffleOptions(q.opts.length);
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  optOrder.forEach((realIdx, dispIdx) => {
    const btn = document.createElement('button');
    const isSelected = answers[currentIdx] !== undefined && answers[currentIdx].realOptIdx === realIdx;
    btn.className = 'option-btn' + (isSelected ? ' selected' : '');
    btn.innerHTML = `<span class="option-label">${labels[dispIdx]}</span>${q.opts[realIdx]}`;
    btn.onclick = () => selectOption(realIdx, btn, q.scores[realIdx]);
    grid.appendChild(btn);
  });

  document.getElementById('btn-prev').disabled = currentIdx === 0;
  document.getElementById('btn-next').disabled = answers[currentIdx] === undefined;
  document.getElementById('btn-next').textContent = currentIdx === TOTAL_Q - 1 ? '提交结果 ✓' : '下一题 →';

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

  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btnEl.classList.add('selected');

  document.getElementById('btn-next').disabled = false;
  document.getElementById('answered-count').textContent = `已答 ${Object.keys(answers).length} / ${TOTAL_Q}`;

  if (elapsed < 0.8) showToast('这么快？你在乱选吗？（已记录）');
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
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
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
    if (q.cat !== 'E') {
      catScores[q.cat] += a.score;
      catCounts[q.cat]++;
    }
  });

  // ── 各维度分乘上自卑系数 → 加权后求总蛆力值 ──
  const weightedCatScores = {};
  ['A','B','C','D'].forEach(cat => {
    weightedCatScores[cat] = Math.round(catScores[cat] * selfMultiplier);
  });
  const rawScore = Object.values(weightedCatScores).reduce((s, v) => s + v, 0);

  // ── 抗乱选 ──
  const cheatData = Object.entries(answers).map(([idx, a]) => ({
    optIdx: a.realOptIdx,
    time: a.time,
    totalOpts: quizQuestions[parseInt(idx)].opts.length
  }));
  const { penalty, msg } = antiCheat.analyze(cheatData);
  const finalScore = Math.min(Math.round(rawScore * (1 - penalty * 0.3)), 125);
  if (msg) setTimeout(() => showToast(msg), 500);

  const level = getLevel(finalScore);
  const desc = isHighSelf ? level.desc_high : level.desc_low;

  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';

  const badge = document.getElementById('result-badge');
  badge.textContent = level.badge;
  badge.style.background = level.badgeColor + '22';
  badge.style.border = '1px solid ' + level.badgeColor + '55';
  badge.style.color = level.badgeColor;

  document.getElementById('result-creature').textContent = level.creature;
  document.getElementById('result-title').textContent = level.title;
  document.getElementById('result-desc').textContent = desc;
  document.getElementById('score-num').textContent = finalScore;

  const pct = Math.min(finalScore / 125, 1);
  const ring = document.getElementById('ring-fill');
  ring.style.stroke = level.ring;
  setTimeout(() => { ring.style.strokeDashoffset = 427.26 * (1 - pct); }, 300);

  const dimInfo = [
    { cat: 'A', name: '身体荒废度', icon: '🛋️', color: '#fb923c' },
    { cat: 'B', name: '数字沉溺度', icon: '📱', color: '#c084fc' },
    { cat: 'C', name: '社会脱轨度', icon: '🏚️', color: '#60a5fa' },
    { cat: 'D', name: '社交萎缩度', icon: '🫥', color: '#34d399' },
  ];

  const grid = document.getElementById('dimension-grid');
  grid.innerHTML = '';
  dimInfo.forEach(dim => {
    const maxPossible = Math.round(catCounts[dim.cat] * 5 * selfMultiplier) || 1;
    const dimScore = weightedCatScores[dim.cat];
    const pctDim = Math.round((dimScore / maxPossible) * 100);
    const card = document.createElement('div');
    card.className = 'dim-card';
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
    document.querySelectorAll('.dim-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.target + '%';
    });
  }, 400);

  // 自卑系数说明标签
  const selfTag = document.getElementById('self-coef-tag');
  if (selfTag) {
    const pctSelf = Math.round(selfCoef * 100);
    selfTag.textContent = isHighSelf
      ? `🔍 自卑系数 ${pctSelf}% — 已对蛆力值施加 ×${selfMultiplier.toFixed(2)} 加权`
      : `🔍 自卑系数 ${pctSelf}% — 内心相对稳定，加权系数 ×${selfMultiplier.toFixed(2)}`;
    selfTag.style.opacity = '1';
  }

  setTimeout(() => {
    document.getElementById('result-title').classList.add('glitch');
  }, 800);

  window._resultData = { finalScore, level, catScores: weightedCatScores, catCounts, isHighSelf, selfCoef, selfMultiplier };
}

function retryQuiz() {
  document.getElementById('result').style.display = 'none';
  document.getElementById('intro').style.display = 'flex';
}

function shareResult() {
  const d = window._resultData;
  if (!d) return;
  const text =
    `【蛆度测试结果】\n` +
    `我的等级：${d.level.title} ${d.level.creature}\n` +
    `蛆力值：${d.finalScore}/125\n` +
    `${d.level.badge}\n\n` +
    `身体荒废度：${Math.round(d.catScores.A / (d.catCounts.A * 5 || 1) * 100)}%\n` +
    `数字沉溺度：${Math.round(d.catScores.B / (d.catCounts.B * 5 || 1) * 100)}%\n` +
    `社会脱轨度：${Math.round(d.catScores.C / (d.catCounts.C * 5 || 1) * 100)}%\n` +
    `社交萎缩度：${Math.round(d.catScores.D / (d.catCounts.D * 5 || 1) * 100)}%\n\n` +
    `测测你有多蛆 👾`;

  // 加入自卑彩蛋行
  const selfLine = d.isHighSelf ? '\n【隐藏属性：蛆壳之下藏着一颗敏感的心】' : '';
  const finalText = text + selfLine;

  navigator.clipboard.writeText(finalText).then(() => {
    const tip = document.getElementById('copied-tip');
    tip.classList.add('show');
    setTimeout(() => tip.classList.remove('show'), 2000);
  });
}

function spawnParticles() {
  const colors = ['#7c3aed', '#a855f7', '#c084fc', '#6d28d9'];
  for (let i = 0; i < 8; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
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