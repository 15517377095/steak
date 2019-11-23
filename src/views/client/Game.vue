<template>
    <div class="game">
        <Header />
        <div class="container-fluid">
            <div class="row">
                <div class="col" id="top_bg"></div>
            </div>
            <div class="row" id="top_nav">
                <div class="col offset-0 offset-sm-1">
                    <router-link to="/list" id="top_nav_type">游戏</router-link>
                    <i id="top_nav_fenge" class="fas fa-chevron-right"></i>
                    <router-link :to="'/list/' + game.type.id" id="top_nav_name">{{ game.type.name }}</router-link>
                    <i id="top_nav_fenge" class="fas fa-chevron-right"></i>
                    <span id="top_nav_name">{{ game.name }}</span>
                </div>
            </div>
            <div class="row" id="top_info">
                <div class="col-auto offset-0 offset-sm-1">
                    <div id="top_img" :style="'background:url(' + gameImgs[gameImgs.length-1] + ')'"></div>
                </div>
                <div class="col-auto">
                    <span id="top_name">{{ game.name }}</span>
                </div>
            </div>
        </div>
        <div class="container-fluid" id="game_details_all">
            <div class="row" id="main">
                <div class="col-sm-10 col-xl-7 offset-0 offset-sm-1 pl-0 pr-0">
                    <div id="main_imgs">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="4000">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" :class="index == 0 ? 'active' : ''" v-for="(gameImg,index) in gameImgs" :key="index" :data-slide-to="index"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div :class="index == 0 ? 'carousel-item active' : 'carousel-item'" v-for="(gameImg,index) in gameImgs" :key="index">
                                    <img :src="gameImg" class="d-block w-100" alt="scrollimg">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-10 col-xl-3 pl-0 pr-0 offset-0 offset-sm-1 offset-xl-0" id="main_game_message">
                    <div class="row s_message">
                        <div class="col-4">上架时间</div>
                        <div class="col-8">{{ game.releasedate }}</div>
                    </div>
                    <div class="row s_message">
                        <div class="col-4">开发商</div>
                        <div class="col-8">{{ game.developers }}</div>
                    </div>
                    <div class="row s_message">
                        <div class="col-4">运营商</div>
                        <div class="col-8">{{ game.publisher }}</div>
                    </div>
                    <div class="row" id="main_game_Introduction">
                        {{ game.introduction }}
                    </div>
                    <div class="row">
                        <div class="col-10 pl-0 d-none d-xl-block p-abs game_price_xl" id="game_price">￥{{ game.money }} RMB</div>
                        <div class="col-10 d-none d-xl-block p-abs join_shop_xl" id="join_shop">
                            <a href="#" >加入购物车</a><br/>
                            <input type="checkbox" checked="checked" /><span>已了解<a href="#" data-toggle="modal" data-target="#exampleModal2">Steak协议</a></span>
                        </div>
                        <div class="col-10 pl-0 d-block d-xl-none" id="game_price">￥{{ game.money }} RMB</div>
                        <div class="col-6 d-block d-xl-none" id="join_shop">
                            <a href="#" >加入购物车</a><br/>
                            <input type="checkbox" checked="checked" /><span>已了解<a href="#" data-toggle="modal" data-target="#exampleModal2">Steak协议</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-0 offset-sm-1 title">游戏详情</div>
                <div class="col-sm-10 col-xl-7 offset-0 offset-sm-1 pl-0 pr-0">
                    <textarea style="display:none"></textarea>  
                    <div id="test-editormd-view">
                        <textarea style="display:none">a</textarea>
                    </div>
                </div>
                <div class="col-sm-10 col-xl-3 offset-0 offset-sm-1 offset-xl-0">
                    <div class="row">
                        <div class="col-12 col-xl-11 offset-xl-1 title">语言支持</div>
                        <div class="col-12 col-xl-11 offset-xl-1 info_card">
                            <div class="row s_message" v-for="(gameLangage,index) in gameLangages" :key="index">
                                <div class="col-4">{{ gameLangage }}</div>
                                <div class="col-8">√</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 用户协议模态框 -->
        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Steak用户协议</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <span class="info">请阅读下方的协议。您必须同意这些协议条款才能完成Steak上的购买。</span>
                <div class="protocol-cont">
                    <h5 class="tit">Supernova使用条款 <span> 自2016-12-2起生效</span></h5>
                    <ul>
                        <li>
                            <h6>条款介绍与接受</h6>
                            <p>请仔细阅读下述条款，因为该等条款构成了您与Entropy Game Global Limited（“Supernova”）之间具法律约束力的协议（“使用条款”）；该等条款载明了您在使用网址为[supernovaspace.com]的网站（“Supernova”）以及（但不限于）任何相关的子域、论坛、聊天室、账号及网站所提供的产品和服务时享有的权利和负有的责任。您在使用下述各项时亦需遵守本使用条款：即Supernova通过网站和相关游戏平台（可通过个人电脑、手机或游戏内置的应用或软件平台提供）所提供的任何游戏（定义见下文第7条）、优势（定义见下文第7条）和其它产品及服务，以及任何相关的内容、软件、移动终端应用、材料和或服务。在本使用条款中，“您”是指服务使用者。</p>
                            <p>您在使用服务时应遵守本使用条款以及隐私政策。我们可经自行酌情，随时修改或更新本使用条款。您应经常查阅本页面，以注意到任何该等修改，因为这些修改对您均具约束力。如您在任何该等修改作出之后仍继续使用服务，即视为您同意受届时最新版本之使用条款的约束。如您不同意任何修改之处，则您必须立即停止使用服务。</p>
                        </li>
                        <li>
                            <h6>1. 授予有限许可</h6>
                            <p>在您同意本使用条款且始终遵守本使用条款的前提下，Supernova特此向您授予接入并使用服务的个人、非排他性且不可转让的许可（“许可”），但您仅可为个人而非商业的目的使用服务，不得出于任何其它目的使用服务。Supernova无需就该等许可提供任何维护更新或支持。Supernova有权出于任何原因、在任何时间撤销该等许可或者对您根据该许可使用服务作出限制。</p>
                            <p>本许可的某些方面，包括但不限于使用特定的游戏（定义见下文第7条）和优势（定义见下文第7条），可能会要求您就网站和/或服务的某些特定内容另行购买使用权限。Supernova有权出于任何原因、在任何时间修改条款和任何需要支付的费用，具体见下文第7条。</p>
                        </li>
                        <li>
                            <h6>2. 许可限制</h6>
                            <p>上文第1条中授予您的许可受制于本第2条中所载明的限制（合称“许可限制”）。如您在使用服务时违反了许可限制或本使用条款，即视为您侵犯了Supernova的权利。许可未授予您下述权利，您亦同意不会在任何情况下作出下述行为：</p>
                            <p>A.经Supernova事先明确书面同意，下载、修改、拷贝、传播、发表、许可或要约出售服务中所含有的、从服务中获得的、或通过服务所获得的任何信息，或创作任何该等信息的衍生作品；</p>
                            <p>B.复制、反向编译、反向工程、反向汇编或解码服务，或作出该等尝试；</p>
                            <p>C.使用、复制或移除服务中或通过服务所展现的任何知识产权或其它专有标记；</p>
                            <p>D.未经我们明确同意，利用任何框选技术使用Supernova的任何商标、标识或其它专有信息；</p>
                            <p>E.使用作弊软件、自动化软件（机器人程序）、非法闯入软件、病毒、修改软件（模组）或任何其它未经授权且旨在修改服务的第三方软件；</p>
                            <p>F.出于商业目的而使用服务，包括(i)为换取报酬而参与服务（例如“代练”服务），或(ii)在服务之外出售服务内置的物品，或出售账号，但经Supernova授权且通过Supernova所提供之服务而进行的交易除外；</p>
                            <p>G.试图以任何会破坏或损害服务或会使服务中断的方式擅自接入或使用服务；</p>
                            <p>H.规避、移除或变更服务的任何技术措施或内容保护，或使任何该等技术措施或内容保护无效；</p>
                            <p>I.使用任何机器人、网络蜘蛛、爬虫或其它自动装置接入服务，或以手动的方式，从服务中监控或收集信息，或通过服务监控或收集信息；</p>
                            <p>J.使用服务以冒充或试图冒充Supernova或任何其它人士或实体，或以其它方式歪曲自己的身份；</p>
                            <p>K.将服务用于非法、骚扰、不道德或破坏性的目的；</p>
                            <p>L.以任何会对我们产生不利影响的方式、或会让别人对我们或服务产生负面印象的方式、或会让任何人士不想使用服务中的全部或任何特性的方式使用服务；</p>
                            <p>M.在使用服务时违反任何适用法律或法规；或以本使用条款中未明确许可的任何方式使用服务。</p>
                        </li>
                        <li>
                            <h6>3. 数据和知识产权所有权</h6>
                            <p>在Supernova和用户之间，香港平台拥有服务及服务中所展现的全部内容，香港平台已对服务及该等内容作出许可，或以其它方式拥有服务及该等内容中的权利、所有权和权益。所有软件（包括源代码）、标识、图示、服务的“界面外观”、文字、图片、形象、视频剪辑、音频剪辑、内容、通知、数据、页面布局以及内容的任何摘选或排列，以及所有版权、专利、商业机密、商标（包括所有相关的名称、产品和服务名称、设计以及标语）和其中的所有其它知识产权均应由Supernova和/或授予其许可的人士独家且排他性地拥有，且前述所有各项均受国际知识产权法律和条约保护。Supernova和授予其许可的人士保留与服务及其内容相关的所有权利。</p>
                        </li>
                        <li>
                            <h6>4. 用户账号</h6>
                            <p>为使用服务中的某些特性，可能需要您拥有在线服务的用户账号（例如第三方平台或社交网站账号）（“第三方账号”）或拥有Supernova或其关联方的账号，并保持该等账号始终有效，从而使服务中的相关特性（整体或部分）正常运行。服务也可能会要求您在Supernova或其关联方处创建专门用于游戏的用户账号（“用户账号”），从而可以使用服务中的特定功能和特性。您的用户账号登陆可以与第三方账号相关联。对于您的用户账号以及您用来接入和使用服务的任何第三方账号，您应对其所有使用和安全负责。您不得出售或转让您的用户账号，亦不得允许任何其他人士接入您的用户账号，您应始终确保您用户账号信息的保密性。</p>
                        </li>
                        <li>
                            <h6>5. 第三方网站、应用或资源</h6>
                            <p>服务中可能会提供接入第三方网站、应用或资源的链接，Supernova并未审阅、控制、检查、资助或认可该等网站、应用或资源，且Supernova不对任何第三方网站、应用或资源中的信息、广告、产品、资源或其它材料负责，亦不对任何第三方网站、应用或资源中所含的任何链接负责。如您因使用、未能使用或依赖该等网站、应用或资源中所提供的任何内容、物品或服务而产生（或声称产生）了任何直接或间接的损害或损失，Supernova或香港平台各方（定义见下文第10条）均不对此负责。</p>
                        </li>
                        <li>
                            <h6>6. 年龄限制</h6>
                            <p>Supernova所提供之网站和服务的目标用户不包括未满13岁的儿童；未经家长或监护人的同意，未满13岁的儿童不得访问网站，亦不得使用服务。如果家长或监护人协助未满13岁的儿童访问网站或使用服务，包括通过使用计算机、可联网的装置、网络连接和/或设备，则该等家长或监护人应对任何后果承担全责。[年满18岁（包括18岁）的用户方可购买游戏（定义见下文第7条）或优势（定义见下文第7条）]</p>
                        </li>
                        <li>
                            <h6>7. 购买</h6>
                            <p>在购买Supernova或其关联方和合作伙伴通过网站平台所提供之任何在线游戏的接入权限，或游戏中的任何优势、福利或物品（包括但不限于能使用户获得额外功能的额外能量、武器或类似物品）前，请仔细阅读本使用条款。在您购买游戏或优势前，您必须：(i)同意受本使用条款约束，(ii)确认您已年满18岁（如未满18岁，则您已征得家长或监护人的同意，并根据Supernova的要求提供家长或监护人的具体信息），(iii)您同意按相关的出售价格购买游戏或优势，并且您确认有权使用该等支付渠道，以及(iv)您授权Supernova或其处理支付的相关方通过您为交易指定的支付渠道全额扣款。 </p>
                            <p>Supernova将不时在网站上或通过网站出售某些游戏和优势。Supernova有权随时调整游戏或优势的购买价格。所有游戏和优势的购买均将被分配到作出该等购买的相关Supernova账号。在任何情况下，各账号所购买的游戏或优势均不能相互转让，您亦不能和任何其他人士相互转让任何游戏或优势，但Supernova授权并使之完成的转让除外。</p>
                            <p>您购买的所有游戏或优势均不可退款，您在网站上存有的结余款项均不计利息。Supernova可调整优势或游戏的范围、种类和类型，亦可随时暂停提供或不允许接入，在任何情况下均无需通知您。Supernova可经其自行酌情决定，根据您所在的国家限制或调整向您提供之游戏或优势的类型。</p>
                            <p>购买了游戏即提供了数字物品的有限许可。您一旦购买了一个游戏，即可在网站提供该游戏的期间内玩该游戏；对于您玩该游戏的次数和时长则不存在限制。</p> 					<p>您所购买的优势并不构成您的私人财产，亦非任何类型的法定货币。除非Supernova以书面形式明确同意，否则您无法在Supernova将任何优势兑换为任何金额的货币或币值。网站上所提供的各个游戏之间的不同优势以及游戏内部的不同优势具有不同的性质和使用期限，可能会基于有限制的使用次数或固定的使用时长而存在上限。在相关的情况下，如果您的账号连续[三个月]未发生任何与游戏相关的活动，则未使用的优势将会自动到期并从您的账号中删除；与游戏相关的活动系指用您的用户账号或通过您的用户账号接入游戏，或通过网站购买新的游戏或优势。</p> 					<p>如果您对与游戏或优势相关的任何交易存在争议，或发觉您的账号存在未经授权即作出的交易，请立即通知Supernova。</p> 				</li> 				<li> <h6>8. 终止</h6> <p>本使用条款在终止前始终有效。您可停止使用服务以终止本使用条款。</p> 					<p>如果Supernova经其自行酌情，认为其无法接受您的任何行为或认为您的任何行为违反了本使用条款，Supernova有权（无论是否向您发出通知）在任何时间终止本使用条款，并/或暂时或永久性地暂停、撤销或限制您使用部分或全部服务，且该等终止、暂停、撤销或限制均即刻生效。如果Supernova终止或限制您使用并接入服务，您必须立刻停止使用所有服务。本使用条款第2条、第3条以及第8条至第14条在本使用条款终止后仍然有效。</p> 					<p>如果您的账号被暂停或被终止，您将（暂时或永久，以适用者为准）失去您用您的账号所购买的部分或全部游戏和优势。您同意：在该等情况下，您无权要求任何偿付或退款，经Supernova自行酌情决定作出的偿付或退款除外。</p> 				</li> 				<li> <h6>9. 免责声明</h6> <p>在法律许可的最大限度内，服务、网站和任何已购买的游戏和优势均“按现状”“以可提供的方式”提供，其中可能存在缺陷，对此概不作出任何保证。Supernova各方（定义见下文第10条）均未作出任何明示或暗示的陈述或保证，且拒绝作出任何保证，包括但不限于任何与准确性、完整性、可能产生的结果、责任、信息、数据、数据处理、运行时间、不间断接入或无接入错误相关的保证，以及任何暗示的保证或适销条件、质量、适用于特定目的或使用、所有权、无侵权或其它违反权利方面的保证。Supernova各方均不承担任何责任。如果您的设备因浏览、接入或使用服务而感染了任何病毒或受到其它有害的影响，Supernova各方均不就此对任何损害赔偿负责。</p> 				</li> 				<li> <h6>10. 责任限制</h6> <p>A.Supernova对您因使用（或未能使用）服务、网站或任何游戏或优势而产生的损害赔偿不负责任。在任何情况下，Supernova、其子公司、关联方、拥有人、董事、高管、员工、代理人、许可人、供应商或任何其他参与创建、制作或分配服务中所含之任何内容或服务的其他人士（“Supernova各方”）均不对任何间接或后果性的损害赔偿负责。</p> 					<p>B.在任何情况下，香港平台均不对下述损害赔偿或因下述原因而引起的损害赔偿负责（即使Supernova各方中的一方或多方已知晓或已被告知可能存在该等损害赔偿）：与本使用条款、服务、服务的使用、延迟使用服务或未能使用服务相关的（包括与游戏或优势的购买相关的）使用损失、数据、利润或商誉的损失或损害、业务中断、擅自使用或其它无形损失，而不考虑法律理论（包括疏忽）。</p> 					<p>C.您确认并同意：对于与Supernova各方存在的任何争议，您唯一且排他性的救济就是停止使用服务。在任何情况下，Supernova各方均不就超出下述两项金额中较高一项的损害赔偿金额对您或任何其他人士或实体承担责任：(i)您为购买游戏或优势已支付的金额，或(ii)100美元。前述限制在法律允许的最大范围内适用。</p> 					<p>D.本使用条款中概无任何内容试图将无法根据法律排除在外的人员伤亡责任、欺诈责任或其它权利排除在外。</p> 				</li> 				<li> <h6>11.	赔偿</h6> <p>您特此同意：如果因为您使用服务、或在您使用服务时存在任何欺诈或不实行为、或您违反本使用条款和隐私政策或任何适用法律、或在未经授权的情况下使用服务，而产生了任何权利主张、诉因、要求、负债、税项、义务、损害赔偿、损失、罚金或具管辖权的法院判处的惩罚、或费用（包括合理的律师费），或因第三方主张的任何前述事项而支付了任何调查、辩护及和解的费用，则您应向Supernova各方作出赔偿并使其免受损害。</p> 				</li> 				<li> <h6>12.	争议解决和管辖法</h6> <p>A.因本使用条款或任何相关服务而产生的任何争议均应提交香港国际仲裁中心（“HKIAC”）根据递交仲裁通知时有效的HKIAC 仲裁规则进行最终的仲裁。</p> 					<p>B.仲裁应根据香港法律进行，仲裁地点为香港，仲裁语言为英语。仲裁员共三（3）名，仲裁双方应在递交仲裁通知之后的三十（30）天内各自指定一名仲裁员；该等指定应获HKIAC 确认，而该两名仲裁员应根据指示在其获HKIAC 确认之后的十（10）天内指定第三名仲裁员。如果仲裁方未能指定仲裁员，或两名仲裁员未能在该十（10）天的期限内就第三名仲裁员的指定达成合意，则该等仲裁员应由HKIAC 的秘书长指定。仲裁员所裁定的损害赔偿应是本使用条款所许可的损害赔偿。</p> 					<p>C.每一方均应自行承担其与该等仲裁相关的成本和费用（包括律师费），但仲裁员的费用和支出则由双方平摊。</p> 					<p>D.尽管本使用条款中存在相反的规定，任何一方均可随时向具管辖权的法院申请禁制令或其它法律或衡平法下的救济。双方特此明确同意：《仲裁条例》（香港法例第609章）之附表2的第5条、第6条和第7条可适用。</p> 				</li> 				<li> <h6>13.	一般条款</h6> <p>A.转让。Supernova可随时将本使用条款（全部或部分）转让或通过更替等其它方式让与任何人士或实体，而无需征得您的同意。您不得转让任何利益，或通过更替等其它方式转让本使用条款中的任何权利和义务，或转许可、质押或以其它方式转让或与他人共享您在服务中所享有之任何权利（如有）中的利益；任何尝试作出的前述转让或让与均属无效。</p> 					<p>B.可分性。如果本使用条款中的任何规定被认定为不合法、无效，或出于任何原因无法强制执行，则该规定应被视为从本使用条款中分割，不会影响任何其它规定的有效性和可强制执行性。</p> 					<p>C.无弃权。任何一方未追究本使用条款的任何违反或违规行为，不得视为该方放弃追究任何之前或之后的违反或违规行为。 </p> 					<p>D.第三者合约。非本使用条款之一方的人士不享有《合约（第三者权利）条例》项下的权利，即无法强制执行本使用条款的任何规定。</p>
                            <p>E.完整协议。在受制于第10.D条规定的前提下，本使用条款是您与Supernova之间就服务所达成的完整协议，本使用条款取代任何先前或同时达成的其它协议，但对于Supernova的隐私政策而言，本使用条款是作出了补充，而非取代。</p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
        <Bottom />
    </div>
</template>

<script>
import Header from './Header'
import Bottom from './Bottom'

import Editormd from '../../assets/lib/editormd.js'
import Marked from '../../assets/lib/marked.min.js'
import Prettify from '../../assets/lib/prettify.min.js'

export default {
    components: {
        Header,
        Bottom
    },
    data(){
        return {
            gameId: '',
            game: {id:'',type:{id:''}},
            gameImgs: [],
            gameLangages: []
        }
    },
    methods:{
        getGame(){
            this.$http({
                methods: 'post',
                params: {
                    id: this.gameId
                },
                url: '/api/game/getById'
            }).then((response) => {
                this.game=response.data
                this.gameImgs=this.game.imgs.split(";");  //拆分滚播图片
                this.gameLangages=this.game.language.split(";");  //拆分语言
                this.game.releasedate=/^[0-9]+-[0-9]+-[0-9]+/.exec(this.game.releasedate)[0];  //格式化日期
                $("#test-editormd-view textarea").text(this.game.mdfile);  //操作dom并转换md字符
                editormd.markdownToHTML("test-editormd-view");
            })
        },
        getGameId(){
            var path=this.$route.path;
            var reg = /[0-9]+/
            if(path.search(reg) >= 0){
                this.gameId=path.match(reg)[0];
                this.getGame();
            }
        }
    },
    mounted(){
        this.getGameId();
        $("html,body").animate({scrollTop:0},100); 
    },
    watch:{
        $route(from,to){
            
        }
    }
}
</script>

<style src="../../assets/css/editormd.min.css"></style>
<style src="../../assets/css/game.css" scoped></style>