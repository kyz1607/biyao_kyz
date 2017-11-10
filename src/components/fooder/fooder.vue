<template>
	 <div class="hidfoot" id="m_footer">
                <div class="wap_footer" align="center">
                    <div class="footer">
                        <div class="m_f_top clear_b">
                            <a class="f_l col_666 touri pad_5" id="logina" touri="/account/login">登录</a>
                            <input type="hidden" id="islogin" value="false"/>
                            <span class="f_l col_666 pad_m_5">&nbsp;丨&nbsp;</span>
                            <a class="f_l col_666 touri pad_5" touri="https://m.biyao.com/account/regist">注册</a>
                            <a class="f_r col_666 pointer pad_5 totop" @click="bottom">
                                <span>回顶部</span>
                            </a>
                            <span class="f_r col_666 pad_m_5">&nbsp;丨&nbsp;</span>
                            <a class="f_r col_666 pointer pad_5 touri" touri="https://m.biyao.com/supplier/mini?url_param=ljby">
                                <span>关于必要</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="m_f_bottom">
                    <div onclick="window.location.reload()" style="width:40px;height:40px;float:left;margin-top:-10px;"></div>
                    <span class="col_666 f12">
                        触屏版&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;丨&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="downapp">客户端</a>
                    </span>
                    <div style="width:40px;height:40px;float:right;margin-top:-10px;" id="pay_wx"></div>
                </div>
    </div>
</template>

<script>
	export default {
		data(){
			return {
			}
		},
		methods:{
			bottom(){
				 var gotoTop= function(){
			        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
			        currentPosition -= 10;
			        if (currentPosition > 0) {
			            window.scrollTo(0, currentPosition); 
			        }
		      		else {
			            window.scrollTo(0, 0);
			            clearInterval(timer);
			            timer = null;
		          }
		        }
		        var timer=setInterval(gotoTop,1);
			}
		}
	}
</script>

<style lang='less' scoped>
	.wap_footer{
		width: 100%;
	    min-width: 320px;
	    margin: 0 auto;
	    .footer{
	    	margin: 0 12px;
    		text-align: center;
    		.m_f_top{
    			padding: 5px 0 0;
    			overflow: hidden;
    			.f_l{    float: left;}
    			.col_666{    color: #666;} 
    			.touri{    cursor: pointer;} 
    			.pad_5{padding: 10px 0;}
    			.pad_m_5{    padding: 10px 0;}
    			.f_r {
				    float: right;
				}
    			input{
    				font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
				    font-size: 12px;
				    -webkit-appearance: none;
    			}
    		}
    		.clear_b{
    			clear: both;
    		}
	    }

	}
	.m_f_bottom {
		    padding: 13px 0 15px;
		    min-width: 320px;
		    border-top: solid 1px #999;
		    margin: 0 auto;
		    width: 100%;
		    text-align: center;
		    & .col_666 {
			    color: #666;
			}
			& .f12 {
			    font-size: 12px!important;
			}
			& span {
			    margin: 0 5px;
			    .downapp {
				    color: #B768A5;
				}
			}
	}
</style>