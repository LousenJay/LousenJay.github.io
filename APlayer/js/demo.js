var ap1 = new APlayer({
	    element: document.getElementById('player1'),                       // Optional, player element
	    narrow: false,                                                     // Optional, narrow style
	    autoplay: false,                                                    // Optional, autoplay song(s), not supported by mobile browsers
	    showlrc: 0,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
	    mutex: true,                                                       // Optional, pause other players when this player playing
	    theme: '#8B008B',                                                  // Optional, theme color, default: #b7daff
	    mode: 'random',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
	    preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
	    listmaxheight: '250px',                                             // Optional, max height of play list
			music: [
	    {
	    	title: '1',                                          // Required, music title
	        author: '',                          // Required, music author
	        url: 'https://od.lk/s/MjZfNjk5NTA3OV8/%E6%B0%B4%E6%9E%9C%E7%AF%AE%E5%AD%90.mp3',  // Required, music url
	        pic: ''
	    },
	    {
	    	title: '2',
	    	author: '',
	    	url: 'https://od.lk/s/MjZfNjk5NTA3OV8/%E6%B0%B4%E6%9E%9C%E7%AF%AE%E5%AD%90.mp3',
	    	pic: ''
	    },
	    {
	    	title: '3',
	    	author: '',
	    	url: 'https://od.lk/s/MjZfNjk5NTA3OV8/%E6%B0%B4%E6%9E%9C%E7%AF%AE%E5%AD%90.mp3',
	    	pic: ''
	    }]
});

var myapc1=new APlayer_Controler({
		APC_dom:$('#apc1'),
		//APC_dom:getElementById('#apc1'),
		aplayer:ap1,
		attach_right:false, //APlayer_Controler附着在左边或者右边，默认为右边(true)
		position:{top:'200px',bottom:''}, //APlayer_Controler的位置,无默认值。示例：position:{top:'250px',bottom:''}
		fixed:false,
		btn_width:170,
		btn_height:200,
		img_src:['https://www.lousenjay.top/APlayer/img/11.gif'],  // 背景图1,3,
		img_style:{repeat:'no-repeat',position:'center',size:'contain'}, // 背景图样式
		ctrls_color:'rgba(173,255,47,0.7)',
		ctrls_hover_color:'rgba(255,140,0,0.8)',
		tips_on:false, // 提示开关
		tips_width:140,
		tips_height:25,
		tips_color:'rgba(255,255,255,0.8)',
		tips_content:{on_loading:{top:'音乐加载中',bottom:'自定义提示1'},
					  on_welcome:{top:'音乐加载完成',bottom:'自定义提示2'},
					  on_timeout:{top:'播放器暂无响应',bottom:'自定义提示3'}},
		timeout:30,
		songrecord_log:true
	});

