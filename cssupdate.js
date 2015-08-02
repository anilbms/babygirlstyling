(function($) {
    var $form = $('form'),
        $dressTopColor = $('#dress-top'),
        $dressColor = $('#dress-color'),
        $skinColor = $('#skin-color'),
        $lipstickColor = $('#lipstick-color'),
        $girlScale = $('#girl-scale'),
        code = $('#code'),
        old = null,
        $head = $('head');
    $form.on('change', function(event) {
        changevalues();
        event.preventDefault();
    });


    function changevalues() {
        code.className = '';

        css = '.dress-top {' +
		 		 'position: relative;'+
		  			'z-index: 200;' +
		  			'top: -140px;' +
		  			'left: 15px;' +
		  			'border-bottom: 150px solid ' + $dressTopColor.val() + ';' +
					'border-left: 12px solid transparent;' +
					'border-right: 12px solid transparent;' +
					'height: 0;' +
					'width: 150px;' +
				'}\n' +
				'.dress-bottom-top {'+
      				'background: ' + $dressColor.val() + ';' +
  					'width: 204px;' +
				  	'height: 50px;'+
				  	'border-radius: 60px 60px 0 0;'+
				  	'position: relative;'+
				  	'left: 0px;' +
				  	'top: -155px;'+
				  	'box-shadow: 0 5px 3px rgba(102,102,102, 0.8);' +
				  	'z-index: 100;' +
				'}\n'+
				'.dress-bottom-bottom {'+
				    'position: relative;'+
				  'z-index: 200;'+
				  'top: -160px;'+
				  'left: -30px;'+
				  'border-bottom: 200px solid '+ $dressColor.val()+ ';' +
				  	'border-left: 30px solid transparent;'+
					'border-right: 30px solid transparent;'+
					'height: 0;'+
					'width: 204px;'+
				'}\n' +
				'.body-top {'+
				    'background: '+ $dressColor.val()+ ';' +
				  'width: 250px;'+
				  'height: 100px;'+
				  'border-radius: 100px 100px 0 0;'+
				  'position: relative;'+
				  'left: -20px;'+
				  'top: -40px;'+
				  'box-shadow: 0 5px 3px rgba(102,102,102, 0.8);'+
				'}\n' +
				'.neck {' +
				  'position: relative;'+
				  'left: 65px;'+
				  'border-bottom: 50px solid '+ $skinColor.val() + ';' +
					'border-left: 10px solid transparent;'+
					'border-right: 10px solid transparent;'+
					'height: 0;'+
					'width: 50px;'+
				  'top: -10px;'+
				'}'+
				'.neck-bottom {'+
				    'background: '+ $skinColor.val() + ';' +
				  'width: 70px;'+
				  'height: 30px;'+
				  'border-radius: 0 0 60px 60px;'+
				  'position: relative;'+
				  'left: 65px;'+
				  'top: -10px;'+
				  'position: relative;'+
				  'z-index: 300;'+
				'}\n'+
				'.face {'+
				  'background: '+ $skinColor.val() + ';' +
				  'width: 126px;'+
				  'height: 100px;'+
				  'border-radius: 0 0 60px 60px;'+
				  'position: relative;'+
				  'left: 35px;'+
				  'top: 80px;'+
				  'box-shadow: 0 5px 3px rgba(102,102,102, 0.8);'+
				'}\n'+
				'.cheek {'+
				  'background: '+ $skinColor.val() + ';' +
				  'width: 10px;'+
				  'height: 10px;'+
				  'border: 4px solid #666;'+
				  'border-radius: 8px;'+
				  'position: relative;'+
				  'top: 50px;'+
				  'display: inline-block;'+
				'}\n'+
				'.mouth {'+
				  'background: '+ $skinColor.val() + ';' +
				  'width: 26px;'+
				  'height: 20px;'+
				  'border: 4px solid '+ $lipstickColor.val() + ';' +
				  'border-radius: 12px;'+
				  'position: absolute;'+
				  'top: 55px;'+
				  'display: inline-block;'+
				  'border-width: 0 0px 5px 0px;'+
				  'left: 48px;'+
				'}'+
				'.hand {'+
					'position: absolute;'+
					'top: 320px;'+
				    'border-top: 75px solid '+ $skinColor.val() + ';' +
				    'border-left: 10px solid rgba(0, 0, 0, 0);'+
				    'border-right: 10px solid rgba(0, 0, 0, 0);'+
				    'height: 0;'+
				    'width: 30px;'+
				'}\n'+
				'.hand-palm {'+
				    'width: 35px;'+
				    'height: 42px;'+
				    'background: '+ $skinColor.val() + ';' +
				    '-moz-border-radius: 100px / 50px;'+
				    '-webkit-border-radius: 100px / 50px;'+
				    'border-radius: 100px / 50px;'+
				    'position: relative;'+
				    'left: -3px;'+
				    'top: -5px;'+
				'}\n'+
				'.hand-left {'+
				    'left: -17px;'+
				    'transform: rotateZ(18deg);'+
				'}\n'+
				'.hand-right {'+
				    'left: 205px;'+
				    'transform: rotateZ(-18deg);'+
				'}\n'+
				'.leg {'+
					'position: absolute;'+
					'top: 600px;'+
				    'border-top: 101px solid  '+ $skinColor.val() + ';' +
				    'border-left: 10px solid rgba(0, 0, 0, 0);'+
				    'border-right: 10px solid rgba(0, 0, 0, 0);'+
				    'height: 0;'+
				    'width: 30px;'+
				'}\n'+
				'.leg-foot {'+
				    'width: 50px;'+
				    'height: 25px;'+
				    'background: '+ $skinColor.val() + ';' +
				    '-moz-border-radius: 100px / 50px;'+
				    '-webkit-border-radius: 100px / 50px;'+
				    'border-radius: 100px / 50px;'+
				    'position: relative;'+
				    'left: -10px;'+
				    'top: -5px;'+
				'}\n'+
				'.leg-left {'+
				    'left: 40px;'+
			    '}\n'+
			    '.leg-right {'+
				    'left: 150px;'+
			    '}\n' +
			    '.baby-girl {' +
					'transform: scale('+ $girlScale.val()/100 +'); \n' +
				'}\n';
        if (old) {
            old.parentNode.removeChild(old);
        }
        var s = document.createElement('style');
        s.innerHTML = css;
        old = s;
        $head.append(s);
        console.log(css);
        code.html('<textarea>' + css + '</textarea>');
    }

    changevalues();
})($);
