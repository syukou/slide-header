/**
 * Created by taguchimunetaka on 2015/11/17.
 */

var SYUKOU = SYUKOU || {};

SYUKOU.COMMON = {};

SYUKOU.COMMON.FIXHEADER = {

	SCROLL_IGNITION_POINT : 60,

	init : function(){
		this.setParameters();
		this.prepare();
		this.bindEvent();
	},
	setParameters : function(){
		this.$window = $(window);
		this.$fixHeader = $('#jsi-fix-header');
		this.showFlag = false;
	},
	prepare : function(){
		var _self = this;
		this.$window.on('load',function(){
			_self.$fixHeader.css('top','-60px')
		})
	},
	bindEvent : function(){
		this.$window.on('scroll', $.proxy(this.showHeader, this));
	},
	showHeader : function(){
		if(this.$window.scrollTop() > this.SCROLL_IGNITION_POINT){
			if(this.showFlag == false){
				this.showFlag = true;
				this.$fixHeader.stop().animate({'top':'0'},300);
			}
		}else{
			if(this.showFlag == true){
				this.showFlag = false;
				this.$fixHeader.stop().animate({'top':'-60px'},300);
			}
		}
	}
};


$(function(){
	SYUKOU.COMMON.FIXHEADER.init();
});