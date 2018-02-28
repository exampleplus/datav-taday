
//显示时间
function times(){
	var mydate=new Date();
	var week;
	//定义星期几
	switch(mydate.getDay()){
		case 1:week="星期一";break;
		case 2: week="星期二"; break;
	    case 3: week="星期三"; break;
	    case 4: week="星期四"; break;
	    case 5: week="星期五"; break;
	    case 6: week="星期六"; break;
	    default:week="星期日"; break;
	}
	//获取年
	var year=mydate.getFullYear();
	if(year<=10){
		year="0"+year;
	}
	//获取月份
	var month=mydate.getMonth()+1;
	if(month<10){
		month="0"+month;
	}
	//获取当天日期
	var day=mydate.getDate();
	if(day<10){
		day="0"+day;
	}
	//获取小时
	var hours=mydate.getHours();
	if(hours<10){
		hours="0"+hours;
	}
	//获取分钟
	var minutes=mydate.getMinutes();
	if(minutes<10){
		minutes="0"+minutes;
	}
	//获取秒
	var seconds=mydate.getSeconds();
	if(seconds<10){
		seconds="0"+seconds;
	}
	var timer=hours + ":" + minutes + ':' + seconds;
	var years=year + "年" + month + "月" + day + "日" + " " + week;
	document.getElementById("time").innerHTML=timer;
	document.getElementById("year").innerHTML=years;

}
	setInterval(times,1000);
	//显示时间  end 
	
	//评估计时 start
	var hour,minute,second,millisecond;
	hour=second=minute=millisecond=0;
	var init;
	function start(){
		init=setInterval(timer,50)
	}
	var global_flag = 0;
	function timer(){
		if(global_flag != 0){
			global_flag = 0;
			Reset();
			return;
		}
		 millisecond=millisecond+50;
	      if(millisecond>=1000)
	      {
	        millisecond=0;
	        second=second+1;
	      }
	      
	      if(second>=60)
	      {
	        second=0;
	        minute=minute+1;
	      }
	      document.getElementById('clock').innerHTML='0'+minute+':'+'0'+second+':'+millisecond;
	}
	
 //重置定时器
   function Reset()
    {
      window.clearInterval(init);
      millisecond=hour=minute=second=0;
      document.getElementById('clock').value='00:00:00';
    }
//评估计时 end
		var text; //存放评估结果
		function getNumber() {
				global_flag=1;
			var newRiskFlag=$(".info_cont:visible .newRiskFlag").val();
				if(newRiskFlag == 1) {
					text = '通过';
					$('.pass_before').css({'width':'744px','height':'488px','border-style':'solid solid none',
					'border-top-left-radius': '390px','border-top-right-radius': '390px','transform': 'rotate(180deg)','position': 'absolute',
					'top': '116px','left': '36px','margin-top': '174px','border-color':'rgb(35,229,75)','background': 'rgb(35,229,75)','z-index':1
					});
					$('.pass_before p').css({'position': 'absolute','top':'50%','left':'42%','color':'#fff','font-size': '60px','font-weight': '600px','transform': 'rotate(-180deg)'})
				} else{
					text = '不通过'
					$('.pass_before').css({'width':'744px','height':'488px','border-style':'solid solid none',
					'border-top-left-radius': '390px','border-top-right-radius': '390px','transform': 'rotate(180deg)','position': 'absolute',
					'top': '116px','left': '36px','margin-top': '174px','border-color':'red','background': 'red','z-index':1})
					$('.pass_before p').css({'position': 'absolute','top':'50%','left':'42%','color':'#fff','font-size': '60px','font-weight': '600px','transform': 'rotate(-180deg)'})
				}
				$('.pass_before p').text(text); //将文字添加到div中
				$('.pass_before').css('display', 'block');//控制通过或者不通过的出现 
//				j++; 
		}
		setTimeout(slider, 1000);
		var ok1=false;
		setInterval(condition,100); //判断是否重新之执行整个动画
		//进入界面就加载动画1和地图
		function condition(){
			if(ok1){
				animat1();
				Map();
				ok1=false;
			}
		}
		var time1 =Math.floor(Math.random()*(4000-1000+1)+1000);
		var time2 =Math.floor(Math.random()*(4000-1000+1)+1000);
		var time3 =Math.floor(Math.random()*(3000-1000+1)+1000);
		var time4 =Math.floor(Math.random()*(3000-1000+1)+1000);
		var times=time1+time2+time3+time4;
		var result;	//存放从ajax获取的地理位置的name和value
		//产生随机数，使其每个评估过程的时间不同
		function random(){
			 time1 =Math.floor(Math.random()*(4000-1000+1)+1000);//第一个滚动条的时间
			 time2 =Math.floor(Math.random()*(4000-1000+1)+1000);//第二个滚动条的时间
			 time3 =Math.floor(Math.random()*(3000-1000+1)+1000);//第三个滚动条的时间
			 time4 =Math.floor(Math.random()*(3000-1000+1)+1000);//第四个滚动条的时间
		}
		//初始化setOption,进入界面就加载地图
		function Map(){
				var num = Math.random()*200;
				num = Math.floor(num % (20));
//				console.log(num)  //0-19的数值
				var arr1 = [];
				$.each(result, function(index,values) {
					var obj=new Object();
					obj.name=values.name;
					obj.value=values.value;
					if (index == num) {
						arr1.push(obj)
						return;
					}
				});
				setMyChart(arr1);
		}
		//评估过程1-----》个人信息验证
		function animat1(){
			random();//每次产生不同的随机数
			ok1=false;
			$('.wrap').show();
			$('.rot_c').addClass('rote');
			$('.test').show();
			start();//开启定时器
			$('.person_check').css('display','block');
			$('.bar').css('display', 'block');
			$('.person_test').css('background-color','#23eeff')
			$('.bar-animat').css({'-webkit-transition':'width 1s ease' ,'-moz-transition': 'width 1s ease','transition': 'width 1s ease','animation':'progressbar '+time1/1000+'s forwards'})    ;
			$('.bar-fill').addClass('bar-animat');
			setTimeout(animat2, time1);
		}
		//评估过程2-----》信用评估
		function animat2(){
			$('.wrap').hide();
			$('.wrap2').show();
			$('.credit_ass').css('display','block');
			$('.bar1').css('display', 'block');
			$('.person_test').css('background-color','transparent');
			$('.credit').css('background-color','#23eeff');
			$('.bar1-animat').css({'-webkit-transition':'width 1s ease' ,'-moz-transition': 'width 1s ease','transition': 'width 1s ease','animation':'progressbar1 '+time2/1000+'s forwards'})    ;
			$('.bar1-fill').addClass('bar1-animat');
			setTimeout(animat3, time2);
		}
		//评估过程3-----》反欺诈分析
		function animat3() {
			$('.wrap2').hide();
			$('.wrap3').show();
			$(".analysis").show();
			$('.uncheat_ass').css('display','block');
			$('.bar2').css('display', 'block');
			$('.credit').css('background-color','transparent');
			$('.uncheat').css('background-color','#23eeff')
		//	$('.bar2-fill').addClass('bar2-animat');
			$('.bar2-animat').css({'-webkit-transition':'width .5s ease' ,'-moz-transition': 'width .5s ease','transition': 'width .5s ease','animation':'progressbar2 '+time3/1000+'s forwards'})    ;
			$('.bar2-fill').addClass('bar2-animat');
			setTimeout(animat4, time3);
		}
		//评估过程4-----》禁止项分析
		function animat4() {
			$('.wrap3').hide();
			$(".analysis").hide();
			$('.wrap4').show();
			$('.forbid_ass').css('display','block');
			$('.bar3').css('display', 'block');
			$('.bar3-animat').css({'-webkit-transition':'width .5s ease' ,'-moz-transition': 'width .5s ease','transition': 'width .5s ease','animation':'progressbar3 '+time3/1000+'s forwards'})    ;
			$('.bar3-fill').addClass('bar3-animat');
			$('.uncheat').css('background-color','transparent')
			$('.forbid').css('background-color','#23eeff')
			setTimeout(getNumber, 2000);
			setTimeout(animat5, time4+2000);
		}
		//一个评估过程结束，进度条消失，清楚计时器，显示通过与否，执行下一个评估过程
		function animat5() {
			$('.bar,.bar1,.bar2,.bar3,.pass_before,.forbid_ass,.uncheat_ass,.credit_ass,.person_check').css('display', 'none');
			$('.wrap4').hide();
			$('.rot_c').removeClass('rote');
			$('.test').hide();
			$('.forbid').css('background-color','transparent')
			Reset();
		//	ok1=true; //控制是否重新开始的开关
			slider();
		}
		//重新开始整个评估过程动画的开关
		function turnoff(){
			ok1=true;
		}
	
		//轮播
		function slider(){
		var sliderindex = 0;
			let numslider =sliderindex*50+'px';
			var ban=$(".banner")
			var oUl = ban.find("ul");
			var aImg = ban.find("img");
			var info=$(".info");
//			 console.log(aImg.length);
			var imgWidth = parseFloat(ban.css("width"));//容器宽度
			 oUl.css("width", imgWidth * aImg.length + 'px');//ul宽度
			var $list = $('.banner .clearfix li'); //头像列表
			var $uLlist = $('.info .info_cont'); //个人信息列表
			if($list.eq(sliderindex).index() == $uLlist.eq(sliderindex).index()) {  //当前滚动头像的索引等于个人信息列表的索引
				$uLlist.eq(sliderindex).show().siblings().hide();//显示对应头像的个人信息，其他隐藏
			}
			if($list.eq(sliderindex).index() == sliderindex) {   
			$list.eq(sliderindex).addClass('posit').siblings().removeClass('posit');   //滚动到当前头像，头像移动到指定位置
			
		}
		$uLlist.eq(sliderindex).appendTo(info);   //把当前的个人借款信息追加到最后
		$list.eq(sliderindex).appendTo(oUl);	//把当前的头像追加到头像列表最后边	
		$('.banner ul').css('margin-left', numslider);
		setTimeout(turnoff, 1000); //打开开关
		if(sliderindex >= $('.banner ul li').length) {
			sliderindex = 0;
			$('.banner ul').css('margin-left',0);
			$list.last().removeClass('posit');
			$list.first().addClass('posit');
			$uLlist.last().hide()
			$uLlist.eq(sliderindex).show()
				}
		sliderindex++;
	}
	//随机的在地图上产生地理位置，和头像轮播联动
		var myChart=echarts.init(document.getElementById("main"));
		var geoCoordMap = {
		    '海门':[121.15,31.89],
		    '鄂尔多斯':[109.781327,39.608266],
		    '招远':[120.38,37.35],
		    '舟山':[122.207216,29.985295],
		    '齐齐哈尔':[123.97,47.33],
		    '盐城':[120.13,33.38],
		    '赤峰':[118.87,42.28],
		    '青岛':[120.33,36.07],
		    '乳山':[121.52,36.89],
		    '金昌':[102.188043,38.520089],
		    '南宁':[108.33,22.84],
			'北京':[116.46,39.92],
			'郑州':[113.65,34.76],
			'石家庄':[114.48,38.03],
			'长沙':[113,28.21],
			'合肥':[117.27,31.86],
			'武汉':[114.31,30.52],
			'兰州':[103.73,36.03],
			'大庆':[125.03,46.58],
			'呼和浩特':[111.65,40.82],
			
			};
		var convertData = function (data) {
		var res = [];
		    for (var i = 0; i < data.length; i++) {
		        var geoCoord = geoCoordMap[data[i].name];
		        if (geoCoord) {
		            res.push({
	//	              	name: data[i].name,
		                value: geoCoord.concat(data[i].value)
		            });
		        }
		    }
		    return res;
		};
		var option={};
		$.ajax({
			type:"get",
	        url:"js/map.json",
	        dataType:"json",
			async:false,
			success:function(res){
				result=res.data;
		}
	});
   	//记载地图
	function setMyChart(d) {
		myChart.setOption({
		  geo: {
		  map: 'china',
		  label: {
		      emphasis: {
		          show: false
		      }
		  },
		  roam: false,
		  itemStyle: {
		      normal: {
		          areaColor: 'rgba(24,44,90,0.4)',
		          borderColor: 'rgba(56,112,212,0.6)',
		  		},
		       emphasis: {
		             areaColor: '#2a333d'
		            }
		      }
		  },
		  series : [
		      {
		          type: 'effectScatter',
				  coordinateSystem: 'geo',
				  data: convertData(d.sort(function (a, b) {
				      return b.value - a.value;
				  }).slice(0, 20)),
				  symbolSize:20,
				  showEffectOn: 'render',
				  rippleEffect: {
				      brushType: 'stroke'
				  },
				  hoverAnimation: true,
				   label: {
	                normal: {
	                    formatter: '{b}',
	                    position: 'right',
	                    show: true
	                }
	            },
				  itemStyle: {
				      normal: {
				          color: 'yellow',
				          shadowBlur: 20,
				          shadowColor: '#333'
					              }
					          },
					          zlevel: 1
					      }
			 	 ]
		})
	};
		//每隔一定时间请求一次比接口
		window.onload=function(){
				move();
				refresh_05();
			}
		function refresh_05(){
			setTimeout(refresh_05,1*30*60*1000);//借款人信息接口 ，半小时调用一次接口
			$.ajax({
				type:"get",
				url:"http://api.pettycash.cn/pjapiksh/userinfo/queryUserInfo.do",//借款人信息
				dataType:"jsonp",
				jsonp:"jsonpCallback",
				async:true,
				success:function(res){
					list=res.list;//个人信息
					console.log(list);
					 var  info = $(".info");
				 	 var  clearfix = $(".clearfix");
					 $(list).each(function(index){
				 	var val = list[index];
                    //个人信息
					if(index==0){  
						var  Mydiv=$("<div class='info_cont'></div>"); 	//如果index=0，只显示当前借款人信息
					}else{
						var  Mydiv=$("<div class='info_cont none'></div>"); 
					}
				 	 Mydiv.append('<div class="info_left">'  //存放个人信息---》姓名和ID
				 	 + '<p class="first_name">'+val.realname+'</p>'
				 	 +'<p>'+'ID:'+val.ID+'</p>'
				 	 +'</div>'
				 	 +'<div class="info_right">'              //存放个人信息---》借款金额和地址，联系方式
				 	 +'<p class="lend">'+'<span>'+'借贷￥'+'<span class="lend_money">'+val.moneyAmount+'</span>'+  '元'+'</span>'+'</p>'
					 +'<p>'+'<span class="sex">'+val.userSex+'<span>'+'&nbsp;&nbsp;&nbsp;'+'</span>'+'</span>' +'<span>'+val.userAge+'</span>'+'</p>'
					 +'<p class="add">'+val.address+'</p>'
					 +'<p>'+val.userPhone+'</p>'
					 +'<input type="hidden" value=" '+val.newRiskFlag+' "class="newRiskFlag"/>'  //newRiskFlag:是否通过
					 +'</div>');
				   info.append(Mydiv); 
			       // 头像轮播
				   var  myli=$("<li class='con-show01'></li>");
				   var  mydv=$("<div class='con-show02'></div>");
				   var  myd=$("<div class='con-show03'></div>");
				   myli.append(mydv);
				   mydv.append(myd);
				   myd.append("<img src='"+val.src+"' alt=''/>");
				   clearfix.append(myli); //存放头像
				 }) //each
				},//success
		})
	}
	    //当天统计    每隔20秒请求一次当天的统计数据信息
		$("#total_momey,#borrow_per,#success_per").text("");
			var total_momey=$("#total_momey");//当天借贷总金额
			var borrow_per=$("#borrow_per");//当天申请借款人数
			var success_per=$("#success_per");//当天成功借款人数
			function move(){
				setTimeout(move,20000);   //每隔20秒请求一次当天的统计数据信息
					$.ajax({
						type:"get",
						url:"http://api.pettycash.cn/pjapiksh/userinfo/queryCountry.do",
						dataType:"jsonp",
						jsonp:"jsonpCallback",
						async:true,
						success:function(res){
							data=res.data;//借款信息
							total_momey.text(data.DayTotalBorrowing); //当天借贷总金额
							borrow_per.text(data.dayLoanApply);   //当天申请借款人数
							success_per.text(data.DayLoanApply);  //当天成功借款人数
						}
				})
		}
	
			