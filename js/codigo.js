//------Variaveis Globais-------------------------------------------------------------------------
	var contTv = 1, contMic = 1, contTel = 1, contAr = 1, contTorn = 1;
	var jogar = false;
	var concluido = false;
	var tf, vm, vs, mm;
	var caixaDialogoAberta = false;
	var nrelacoes = 0;
	var nn = 0;
	var verificaRelacoes = {tv:false,ar:false,tel:false,micro:false,torneira:false};
	var eSonoro, mFundo;

//------Explicações Cenarios-------------------------------------------------------------------------	

	var falasTV = [
		'Você nem imaginava que o simples ato de ligar a TV poderia te mostrar conceitos de IHC! Vou te mostrar dois deles e, depois, a relação entre eles:',
		'Interface: É a ponte entre dois universos! Através dela, é possível se comunicar para realizar suas tarefas.',
		'Ou seja, é por meio da interface que podemos enviar e receber informações.',
		'Interação: É tudo que acontece quando uma pessoa e um sistema se unem para fazer uma tarefa.', 
		'A pessoa e o sistema trocam turnos em que um “fala” e o outro “ouve”, interpreta e realiza uma ação. Resumindo, interação é comunicação!',
		'Relação: Para ligar a TV, você utiliza o controle remoto! Ele é a interface, pois possibilitou a sua interação - ou comunicação -  com a TV.', 
		'Em outras palavras, a interface (controle remoto) foi a ponte entre você (usuário) e a TV(sistema) e intermediou a interação. Viu como é fácil?'
	];

	var falasTel = [
		'Ainda bem que você ligou e pediu uma pizza. E olha que legal, você soube como interagir com os botões e onde colocá-lo após a ligação, sem dificuldade.',	
		'É uma coisa tão simples que nem percebe, mas está fazendo uso de conceitos de IHC! Vou te mostrar três deles:',
		'Interface: É a ponte entre dois universos! Através dela, é possível se comunicar para realizar suas tarefas. É por meio da interface que podemos enviar e receber informações.',
		'Affordance: É um conjunto de características que um elemento têm que torna óbvio o que ele faz e como ele é utilizado, sem precisar de instruções.',
		'Por exemplo, a bola possui características (affordances) que indicam que ela pode ser lançada, chutada ou quicada.',
		'Interação: É tudo que acontece quando uma pessoa e um sistema se unem para fazer uma tarefa.',
		'A pessoa e o sistema trocam turnos em que um “fala” e o outro “ouve”, interpreta e realiza uma ação. Resumindo, interação é comunicação!',
		'Relação: Olhe para este telefone! É bem legal, pois ninguém sente dificuldade em utiliza-lo, pois o seu formato informa bem onde deve colocar o telefone depois das ligações.',
		'Além disso, o relevo, textura, números e ícones dos botões deixam óbvio que eles são, de fato, clicáveis.',
		'Então, você consegue utilizar o telefone (interface) como mediador da ligação, ',
		'pois ele POSSUI características (affordances) que SUGEREM como ele deve ser utilizado (interação). Interessante, não é? :D'
	];

	var falasAr = [
		'Uffa! Origada por ter desligado o ar-condicionado, já não aguentava mais de tanto frio.',
		'Você deve ter percebido que foi bastante fácil fazer isto, afinal, só existe um botão, ligar/desligar, ou seja, não há possibilidade de erro.',
		'Dois conceitos estão envolvidos no seu sucesso: MODELO CONCEITUAL e INTERFACE. Não entendeu qual a relação entre eles? Calma, eu vou explicar...',
		'Modelo Conceitual: É o conjunto de ideias que, baseado nas necessidades e modelo mental das pessoas,',
		'deve mostrar tudo o que o produto deve fazer, como deve se comportar e como deve se parecer.',
		'Uma das formas de fazer isso, é utilizando um Diagrama Conceitual!',
		'Interface: É a ponte entre dois universos! Através dela, é possível se comunicar para realizar suas tarefas.',
		'Ou seja, é por meio da interface que podemos enviar e receber informações.',
		'Relação:  O modelo conceitual diz que a interação diretamente no aparelho do ar-condicionado',
		'deve ser simples e objetiva, apenas contendo a opção de ligar/desligar.',
		'Então, baseando-se nesse modelo conceitual, a interface possui apenas um botão.',
		'Deu pra entender por quê o MODELO CONCEITUAL SUSTENTA a INTERFACE?',
	];

	var falasMicro = [
		'Você conseguiu preparar a pipoca? Conseguiu ajustar o tempo corretamente?',
		'Com certeza deve ter tido alguns probleminhas ao tentar fazer isso, pois você achou que, como de costume',
		'o botão +1 esquentaria por 1 minuto. O que ocorre, ao invés disso, é o aumento da  temperatura em 1 grau. Estranho isso, né?',
		'Não iria esquentar nunca! Deixa eu te explicar dois conceitos envolvidos nessa dificuldade que você encontrou:',
		'modelo mental e modelo conceitual.',
		'Modelos mentais: são os modelos que as pessoas tem em mente sobre como as coisas devem funcionar.',
		'Eles são baseados em experiências ou percepções intuitivas.',
		'Em outras palavras, são os modelos que as pessoas têm dos outros, do ambiente e das coisas com as quais elas interagem.',
		'Modelo conceitual: é o conjunto de ideias que, baseado nas necessidades e modelo mental das pessoas',
		'deve mostrar tudo o que o produto deve fazer, como deve-se comportar e como deve-se parecer.',
		'O que acontece é: MODELO CONCEITUAL APOIA-SE no MODELO MENTAL, e o MODELO MENTAL EMBASA o MODELO CONCEITUAL.',
		'Desse jeito, a pessoa que usa o produto não encontra dificuldades, pois o modo como ela imagina que algo funciona(modelo mental)',
		'e o modo como foi projetado para funcionar (modelo conceitual) estão são semelhantes. Então, você já deve ter entendido o problema!',
		'modelo conceitual do meu micro-ondas não levou em consideração o modelo mental de quem vai utilizar e por isso a confusão!'
	];

	var falasPia = [
		'Você conseguiu lavar as mãos em uma temperatura adequada? É bem difícil, não é? Eu vou te explicar como isso acontece.',
		'Mas, antes, vou falar de três conceitos muito importantes envolvidos aqui: Modelo Mental, Modelo Conceitual e a temida Engenharia Cognitiva!',
		'Modelo Mental: Modelos mentais são os modelos que as pessoas tem em mente sobre como as coisas devem funcionar.', 
		'Eles são baseados em experiências ou percepções intuitivas.',
		'Em outras palavras, são os modelos que as pessoas têm dos outros, do ambiente e das coisas com as quais elas interagem. ',
		'Modelo conceitual é o conjunto de ideias que, baseado nas necessidades e modelo mental das pessoas, deve mostrar tudo o que o produto deve fazer,',
		'como deve-se comportar e como deve-se parecer. Uma das formas de fazer isso, é utilizando um Diagrama Conceitual!',
		'Engenharia Cognitiva: A Engenharia Cognitiva tenta entender como as pessoas interagem com a interface de um sistema.',
		'Ou seja, ela foca nos processos psicológicos das pessoas e nos fenômenos envolvidos durante a interação.',
		'Assim, foi criado a Teoria da Ação, que agrupa os processos de interação em dois alvos, ou “golfos”, a serem atingidos:',
		'o golfo da Execução - que envolve o esforço mental de planejar e executar uma ação',
		'e o golgo de Avaliação - que envolve os processos de avaliação se os objetivos estabelecidos foram alcançados.',
		'Então, a tão temida Engenharia Cognitiva é nada mais nada menos que uma ferramenta que o designer usa para criar produtos mais próximos da forma que o usuário pensa',
		'e seguindo as tarefas que o produto terá de realizar, ou seja, ela EXPLICA tanto o modelo mental, como o modelo conceitua,',
		'e assim pode ser feito um produto top de linha! :)'
	];

$(window).load(function() {    
    if(document.title == "Sala - IHC é uma Delícia" || document.title == "Cozinha - IHC é uma Delícia" || document.title == "Banheiro - IHC é uma Delícia"){
        efeitoPreload();
    }
    if(localStorage.numRelacoes == undefined){
    	//localStorage.setItem("numRelacoes", 0);
    	$('#bt-dc h1, #dc-emerge h1').text(nrelacoes+'/8');
    }else{
    	nrelacoes += Number(localStorage.numRelacoes);
    	$('#bt-dc h1, #dc-emerge h1').html(nrelacoes+'/8');
    }
});

$(document).ready( function(){
	
	$(document).keypress(function(e){
		if(e.wich == 82 || e.keyCode == 82){
			localStorage.removeItem("ar");
			localStorage.removeItem("tv");
			localStorage.removeItem("tel");
			localStorage.removeItem("micro");
			localStorage.removeItem("torneira");
			localStorage.removeItem("numRelacoes");
			localStorage.removeItem("concluido");
			alert("O avanço feito foi remove");
		}
	});

    $('#elemento1').click(function(){ window.location='cozinha.html'; });
    $('#elemento2').click(function(){ window.location='banheiro.html'; });
    $('#elemento6').click(function(){ window.location='sala.html'; });
    $('#elemento8').click(function(){ window.location='sala.html'; });
    $('#bt-sair').click(function(){ window.location='inicio.html'; });
    $('#logo-equipe img').click(function(){ window.open('http://henriqueellery.wix.com/ignicaoprojeto', '_blank'); });

    if(document.title == "Sala - IHC é uma Delícia"){
    	$('.caixa-mapa').css('background-image', "url('img/mapa/mapa-sala.png')");
    }else if(document.title == "Cozinha - IHC é uma Delícia"){
    	$('.caixa-mapa').css('background-image', "url('img/mapa/mapa-cozinha.png')");
    }else if(document.title == "Banheiro - IHC é uma Delícia"){
    	$('.caixa-mapa').css('background-image', "url('img/mapa/mapa-banho.png')");
    }

    eSonoro = $("#efeitoSonoro")[0];
    mFundo = $('#musicaFundo')[0]; 
    mFundo.volume=.15;
    eSonoro.volume=.15;

    $('[data-toggle="tooltip"]').tooltip();

    //------Iniciar Conceitos/Diagrama/Mostrador/Relações------------------------------------------------ 
	    
    	if(localStorage.concluido != undefined){
    		concluido = localStorage.concluido;
    	}else{
    		concluido = false;
    	}

	    if(localStorage.tv != undefined){
	    	verificaRelacoes.tv = localStorage.tv;
	    	mostrarDiagrama();
	    	$('.tv-tela2').fadeIn();
	    	$('.tv-tela3').fadeIn();
	    	$('.tv-tela4').fadeIn();
	    }else{
	    	verificaRelacoes.tv = false;	    	
	    	$('.tv-tela2').hide();
	    	$('.tv-tela3').hide();
	    	$('.tv-tela4').hide();
	    }

	    if(localStorage.ar != undefined){
	    	verificaRelacoes.ar = localStorage.ar;
	    	mostrarDiagrama()
	    	$('.ar-tela1').fadeIn();
	    	$('.ar-tela2').fadeIn();
	    	$('.ar-tela3').fadeIn();
	    }else{
	    	verificaRelacoes.ar = false;
	    	$('.ar-tela1').hide();
	    	$('.ar-tela2').hide();
	    	$('.ar-tela3').hide();
	    }

	    if(localStorage.tel != undefined){
	    	verificaRelacoes.tel = localStorage.tel;
	    	mostrarDiagrama();
	    	$('.tel-tela1').fadeIn();
	    	$('.tel-tela2').fadeIn();
	    	$('.tel-tela3').fadeIn();
	    	$('.tel-tela4').fadeIn();
	    	$('.tel-tela5').fadeIn();
	    }else{
	    	verificaRelacoes.tel = false;
	    	$('.tel-tela1').hide();
	    	$('.tel-tela2').hide();
	    	$('.tel-tela3').hide();
	    	$('.tel-tela4').hide();
	    	$('.tel-tela5').hide();
	    }

	    if(localStorage.micro != undefined){
	    	verificaRelacoes.micro = localStorage.micro;
	    	mostrarDiagrama();
	    	$('.micro-tela1').fadeIn();
	    	$('.micro-tela2').fadeIn();
	    	$('.micro-tela3').fadeIn();
	    	$('.micro-tela4').fadeIn();
	    }else{
	    	verificaRelacoes.micro = false;
	    	$('.micro-tela1').hide();
	    	$('.micro-tela2').hide();
	    	$('.micro-tela3').hide();
	    	$('.micro-tela4').hide();
	    }

	    if(localStorage.torneira != undefined){
	    	verificaRelacoes.torneira = localStorage.torneira;
	    	mostrarDiagrama();
	    	$('.torneira-tela1').fadeIn();
	    	$('.torneira-tela2').fadeIn();
	    	$('.torneira-tela3').fadeIn();
	    	$('.torneira-tela4').fadeIn();
	    	$('.torneira-tela5').fadeIn();
	    }else{
	    	verificaRelacoes.torneira = false;
	    	$('.torneira-tela1').hide();
	    	$('.torneira-tela2').hide();
	    	$('.torneira-tela3').hide();
	    	$('.torneira-tela4').hide();
	    	$('.torneira-tela5').hide();
	    }

	//------Iniciar configurações-------------------------------------------------------------------------
	    
	    if( localStorage.tamanhoFonte == undefined){
	        mudarTamanhoFonte($('#barrafont')[0].value);
	    }else{
	        mudarTamanhoFonte(localStorage.tamanhoFonte);
	    }

	    
	    if(localStorage.volumeMusica == undefined){
	        mudarVolume($('#barramusicavol')[0].value, mFundo);
	    }else{
	        mudarVolume(localStorage.volumeMusica, mFundo);
	    }
	    
	    
	    if(localStorage.volumeSom == undefined){
	        mudarVolume($('#barrasom')[0].value, eSonoro);
	    }else{
	        mudarVolume(localStorage.volumeSom, eSonoro);
	    }
	    
	    
	    if(localStorage.habilitarMusica == undefined){
	        habilitarSom($('#barramusica')[0].value);
	    }else{
	        habilitarSom(localStorage.habilitarMusica);
	    }

	//------Iniciar Telas---------------------------------------------------------------------------------
	    
	    $('#preload').css('height',$(window).height()+'px');
	    $('.fundo').css('height',$(window).height()+'px');
	    TamanhoTelaO('#conteiner','#inicio');
	    TamanhoTelaO('#conteiner','#tela-s');
	    TamanhoTelaO('#conteiner','#tela-c');
	    TamanhoTelaO('#conteiner','#tela-b');
	    
	    $(window).resize(function(){
	        $('.fundo').css('height',$(window).height()+'px');
	        $('#preload').css('height',$(window).height()+'px');
	        TamanhoTelaO('#conteiner','#inicio');
	        TamanhoTelaO('#conteiner','#tela-s');
	        TamanhoTelaO('#conteiner','#tela-c');
	        TamanhoTelaO('#conteiner','#tela-b');
	    });

	    $('#btTelaCheia').click(function(){
	        jogar = true;
	        eSonoro.play();
	        if(jogar){
	            efeitoPreload();
	        }
	    });

	//------Display telas---------------------------------------------------------------------------------
	    darDica();

	    $('#btInfoIr').click(function(){
	    	$('.contem-info').fadeOut(400);
	    	$('.contem-info2').delay(400).fadeIn(400);
	    });

	    $('#btInfoVoltar').click(function(){
	    	$('.contem-info2').fadeOut(400);
	    	$('.contem-info').delay(400).fadeIn(400);
	    });

	    $('#FecharCaixaDialogo img').click(function(){
	        eSonoro.play();
	        FecharCaixaTexto(); 
	    });

	    $('.config-caixa').click( function(){
	        eSonoro.play();
	        $('.fundo, .caixa-config-inicio').animate({'opacity':'.8'}, 400, 'linear');
	        $('.caixa-config-inicio').animate({'opacity':'1.00'}, 500, 'linear');
	        $('.fundo, .caixa-config-inicio').css('display', 'block');
	    });

	    $('#fecharConfig, .fundo').click(function(){
	        if($(this).attr('id') == 'fecharConfig' ){
	            eSonoro.play();
	        }
	        $('.fundo, .caixa-config-inicio').animate({'opacity':'.0'}, 400, 'linear',function(){ 
	            $('.fundo, .caixa-config-inicio').css('display','none');
	        });
	    });

	    $('.info-caixa').click(function(){
	        eSonoro.play();
	        $('.fundo, .caixa-info').animate({'opacity':'.8'}, 400, 'linear');
	        $('.caixa-info').animate({'opacity':'1.00'}, 500, 'linear');
	        $('.fundo, .caixa-info').css('display', 'block');
	    });

	    $('#fecharInfo, .fundo').click(function(){
	        if($(this).attr('id') == 'fecharInfo' ){
	            eSonoro.play();
	        }
	        $('.fundo, .caixa-info').animate({'opacity':'.0'}, 400, 'linear',function(){ 
	            $('.fundo, .caixa-info, .caixa-config').css('display','none');
	        });
	    });

	    $('#Mapa').click(function(){
	        eSonoro.play();
	        ChamarMapa($(this));
	    });

	    $('#fecharMapa').click( function(){
	        eSonoro.play();
	        $('.caixa-mapa').fadeOut(600);
	    });

	    $('#bt-confg, #bt-ajuda').click(function(){
	        eSonoro.play();
	        var posicao1 = $(this).offset();
	        
	        $('.fundo').animate({'opacity':'.6'}, 600, 'linear');
	        $('.fundo').css('display', 'block');

	        if(  $(this).attr('id') == 'bt-confg' ){

	            $('#config-emerge').css({'top': posicao1.top, 'left': posicao1.left, 'display':'block'});
	            $('.caixa-config').css({'top': posicao1.top+65, 'left': posicao1.left-540+60});
	            $('.caixa-config').fadeIn(600);

	        }else if( $(this).attr('id') == 'bt-ajuda' ){
	            
	            $('#ajuda-emerge').css({'top': posicao1.top, 'left': posicao1.left, 'display':'block'});
	            $('.caixa-ajuda').css({'top': posicao1.top+60, 'left': posicao1.left-620+60});
	            $('.caixa-ajuda').fadeIn(600);
	        
	        }else{
	            alert("Deu ruim");
	        }
	    });
	    
	    $('#config-emerge, #ajuda-emerge, .fundo').click(function(){    
	        $(this).fadeOut();
	        
	        if( $(this).attr('id') == 'config-emerge' ){
	            eSonoro.play();
	            $('.caixa-config').fadeOut(600);
	            $('.fundo').animate({'opacity':'0'}, 800, 'linear', function(){
	                $('.fundo').css('display', 'none');
	            });

	        }else if( $(this).attr('id') == 'ajuda-emerge' ){
	            eSonoro.play();
	            $('.caixa-ajuda').fadeOut(600);
	            $('.fundo').animate({'opacity':'0'}, 800, 'linear', function(){
	                $('.fundo').css('display', 'none');
	            });

	        }else if( $(this).attr('class') == 'fundo' ){
	            $('.caixa-ajuda').fadeOut(600);
	            $('.caixa-config').fadeOut(600);
	            $('#config-emerge').fadeOut(600);
	            $('#ajuda-emerge').fadeOut(600); 
	        }
	    });

	    $('#bt-dc, #bt-lilica').click(function(){
	        eSonoro.play();
	        var posicao2 = $(this).offset();
	        $('#contador').fadeOut(300);

	        $('.fundo').animate({'opacity':'.6'}, 600, 'linear');
	        $('.fundo').css('display', 'block');

	        if(  $(this).attr('id') == 'bt-dc' ){
	             nn = 0;
	            $('#dc-emerge').css({'top': posicao2.top, 'left': posicao2.left, 'display':'block'});
	            $('.caixa-diagramaC').css({'top': posicao2.top - 545 - 12, 'left': posicao2.left });
	            $('.caixa-diagramaC').fadeIn(600);
	        }else if( $(this).attr('id') == 'bt-lilica' ){
	            $('#lilica-emerge').css({'top': posicao2.top, 'left': posicao2.left, 'display':'block'});
	            $('.caixa-lilica').css({'top': posicao2.top - 483, 'left': posicao2.left });
	            $('.caixa-lilica').fadeIn(600);            
	        }
	    });

	    $('#dc-emerge, #lilica-emerge, .fundo').click(function(){
	        
	        $(this).fadeOut();
	        
	        if( $(this).attr('id') == 'dc-emerge' ){
	            eSonoro.play();
	            $('.caixa-diagramaC').fadeOut(600);
	            $('.fundo').animate({'opacity':'0'}, 800, 'linear', function(){
	                $('.fundo').css('display', 'none');
	            });  
	        }
	        else if( $(this).attr('id') == 'lilica-emerge' ){
	            eSonoro.play();
	            $('.caixa-lilica').fadeOut(600);
	            $('.fundo').animate({'opacity':'0'}, 800, 'linear', function(){
	                $('.fundo').css('display', 'none');
	            });  
	        }
	        else if( $(this).attr('class') == 'fundo' ){
	             $('.caixa-lilica').fadeOut(600);
	             $('.caixa-diagramaC').fadeOut(600);
	             $('#dc-emerge').fadeOut(600);
	             $('#lilica-emerge').fadeOut(600);
	        }
	    });
	        
	//------Configurações---------------------------------------------------------------------------------

	    $('#barrafont').mouseup(function(){
	        eSonoro.play();
	        tf = $('#barrafont')[0].value;
	        mudarTamanhoFonte(tf);
	        localStorage.setItem("tamanhoFonte", tf);
	    });

	    $('#barramusica').mouseup(function(){
	        eSonoro.play();
	        mm = $('#barramusica')[0].value;
	        habilitarSom(mm);
	        localStorage.setItem("habilitarMusica", mm);
	    });

	    $('#barramusicavol').mouseup(function(){
	        eSonoro.play();
	        vm = $('#barramusicavol')[0].value;
	        mudarVolume(vm, mFundo);
	        localStorage.setItem("volumeMusica", vm);
	    });

	    $('#barrasom').mouseup(function(){
	        eSonoro.play();
	        vs = $('#barrasom')[0].value;
	        mudarVolume(vs, eSonoro);
	        localStorage.setItem("volumeSom", vs);
	    });

	//------Elementos em Tela-----------------------------------------------------------------------------
	    verificarMapa();

		$('.bt-confirma').click(function(){
			$('.fundo').fadeOut(500, function(){
				$('.caixa-conclusao').fadeOut(500);
			});	
		});

	    $('#elemento3').click(function(){
	        chamarTelaAtividade($(this).attr('id'));
	        $('.bt-passar-texto').show();
	    });

	    $('#elemento4').click(function(){
	        chamarTelaAtividade($(this).attr('id'));
	        $('.bt-passar-texto').show();
	    });

	    $('#elemento5').click(function(){
	        chamarTelaAtividade($(this).attr('id'));
	        $('.bt-passar-texto').show();
	    });

	    $('#elemento7').click(function(){
	        chamarTelaAtividade($(this).attr('id'));
	        $('.bt-passar-texto').show();
	    });

		$('#elemento9').click(function(){
	        chamarTelaAtividade($(this).attr('id'));
	        $('.bt-passar-texto').show();
	    });	    

	//------Elementos em Explicação------------------------------------------------------------------------
	    
	    $('#fecharTelaTv').click(function(){
	        eSonoro.play();
	        $('#tv').fadeOut(1000);
	        if(verificaRelacoes.tv == false){
	            adicionarContador($(this).attr('id'));
	        }
	        FecharCaixaTexto()
	        verificaRelacoes.tv = true;
	        mostrarDiagrama();
	        contTv = 0;
	        darDica();
	        verificarMapa();

	        if(verificaRelacoes.tv && verificaRelacoes.ar && verificaRelacoes.tel && verificaRelacoes.micro && verificaRelacoes.torneira){
		    	if(!concluido){
		    		concluido = true;
		    		localStorage.setItem("concluido", concluido);
		    		setTimeout(function(){ chamarConclusão(); }, 3000);
		    	}
		    }
	    });

	   	$('#fecharTelaMicro').click(function(){
	        eSonoro.play();
	        $('#micro-ondas').fadeOut(1000);
	        if(verificaRelacoes.micro == false){
	            adicionarContador($(this).attr('id'));
	        }
	        FecharCaixaTexto()
	        verificaRelacoes.micro = true;
	        mostrarDiagrama(); 
	        contMic = 0;
	        darDica();
	        verificarMapa();

	        if(verificaRelacoes.tv && verificaRelacoes.ar && verificaRelacoes.tel && verificaRelacoes.micro && verificaRelacoes.torneira){
		    	if(!concluido){
		    		concluido = true;
		    		localStorage.setItem("concluido", concluido);
		    		setTimeout(function(){ chamarConclusão(); }, 3000);
		    	}
		    }
	    });
	    
	   	$('#fecharTelaTel').click(function(){
	        eSonoro.play();
	        $('#telefone').fadeOut(1000);
	        if(verificaRelacoes.tel == false){
	            adicionarContador($(this).attr('id'));
	        }
	        FecharCaixaTexto()
	        verificaRelacoes.tel = true;
	        mostrarDiagrama();
	        contTel = 0;
	        darDica();
	        verificarMapa();

	        if(verificaRelacoes.tv && verificaRelacoes.ar && verificaRelacoes.tel && verificaRelacoes.micro && verificaRelacoes.torneira){
		    	if(!concluido){
		    		concluido = true;
		    		localStorage.setItem("concluido", concluido);
		    		setTimeout(function(){ chamarConclusão(); }, 3000);
		    	}
		    }
	    });

	    $('#fecharTelaAr').click(function(){
	        eSonoro.play();
	        $('#ar-condic').fadeOut(1000);
	        if(verificaRelacoes.ar == false){
	            adicionarContador($(this).attr('id'));
	        }
	        FecharCaixaTexto()
	        verificaRelacoes.ar = true;
	        mostrarDiagrama();
	        contAr = 0;
	        darDica();
	        verificarMapa();

	        if(verificaRelacoes.tv && verificaRelacoes.ar && verificaRelacoes.tel && verificaRelacoes.micro && verificaRelacoes.torneira){
		    	if(!concluido){
		    		concluido = true;
		    		localStorage.setItem("concluido", concluido);
		    		setTimeout(function(){ chamarConclusão(); }, 3000);
		    	}
		    }
	    });

	    $('#fecharTelaTorn').click(function(){
	        eSonoro.play();
	        $('#torneira').fadeOut(1000);
	        if(verificaRelacoes.torneira == false){
	            adicionarContador($(this).attr('id'));
	        }
	        FecharCaixaTexto()
	        verificaRelacoes.torneira = true;
	        mostrarDiagrama();
	        contTorn = 0;
	        darDica();
	        verificarMapa();

	        if(verificaRelacoes.tv && verificaRelacoes.ar && verificaRelacoes.tel && verificaRelacoes.micro && verificaRelacoes.torneira){
		    	if(!concluido){
		    		concluido = true;
		    		localStorage.setItem("concluido", concluido);
		    		setTimeout(function(){ chamarConclusão(); }, 3000);
		    	}
		    }
	    });

	    $('.bt-passar-texto').click(function(){
	        var o = $(this).parent().parent().attr('id');
	    	
	    	if( o == "tv"){
	    		chamarTelaAtividadeCenas(contTv, $(this));
	        	contTv+=1;
	    	}else if(o == "micro-ondas"){
	    		chamarTelaAtividadeCenas(contMic, $(this));
	        	contMic+=1;
	    	}else if(o == "telefone"){
	    		chamarTelaAtividadeCenas(contTel, $(this));
	        	contTel+=1;
	    	}else if(o == "ar-condic"){
	    		chamarTelaAtividadeCenas(contAr, $(this));
	        	contAr+=1;
	    	}else if(o == "torneira"){
	    		chamarTelaAtividadeCenas(contTorn, $(this));
	        	contTorn+=1;
	    	} 
	    });
});

//Funções das coisas tudo----------------------------------------------------------------------------------

    function TamanhoTelaO(c,t){
        $(c).css('height', $(window).height()+'px');
        $(c).css('width', $(window).width()+'px');
        var x = 0;
        var p = 0;
        var altura = $(window).height();
        x = (altura*888)/666;
        p = (altura*84)/666;
        $(t).css('width',(x-p)+'px');
        $(t).css('height', ($(window).height()-p)+'px');
        $(t).css('padding', (p/2)+'px');
    }

    function mudarTamanhoFonte(n){
        var fonteP =['22px','24px','26px'];
        var fonteT =['36px','38px','40px'];
        var $paragrafo = $('p, span, h2, .jeito-tooltip, .config-caixa, .info-caixa');
        var $titulo = $('h1, #display2 ul li p');
        $paragrafo.css('font-size',fonteP[n]);
        $titulo.css('font-size',fonteT[n]);
        $('#barrafont').attr('value',n);
    }

    function mudarVolume(n, obj){
        var v = ['0','0.1','0.3','0.5'];
        obj.volume = v[n];
        
        if(obj.id == "musicaFundo"){
            $('#barramusicavol').attr('value', n);
        }else{
            $('#barrasom').attr('value', n);
        }
    }

    function habilitarSom(mm){
        if(mm == 0){
            mFundo.muted = true;
            eSonoro.muted = true;
            $('.configESom input').prop('disabled',true);
            $('.configSomF input').prop('disabled',true);  
            
            $('.configESom').css('-webkit-filter', 'grayscale(1)');
            $('.configESom').css('-moz-filter', 'grayscale(1)');
            $('.configESom').css('filter', 'grayscale(1)');
            $('.configESom').css('opacity',.4);

            $('.configSomF').css('-webkit-filter', 'grayscale(1)');
            $('.configSomF').css('-moz-filter', 'grayscale(1)');
            $('.configSomF').css('filter', 'grayscale(1)');
            $('.configSomF').css('opacity',.4);

            $('#barramusica')[0].value = mm;
        }else{ 
            mFundo.muted = false;
            eSonoro.muted = false;
            $('.configESom input').prop('disabled',false);
            $('.configSomF input').prop('disabled',false);

            $('.configESom').css('-webkit-filter', 'none');
            $('.configESom').css('-moz-filter', 'none');
            $('.configESom').css('filter', 'none');
            $('.configESom').css('opacity',1);

            $('.configSomF').css('-webkit-filter', 'none');
            $('.configSomF').css('-moz-filter', 'none');
            $('.configSomF').css('filter', 'none');
            $('.configSomF').css('opacity',1);

            $('#barramusica')[0].value = mm;
        }
    }

    function efeitoPreload(){
        $('#preload').animate({'opacity':0},500, 'linear',function(){
            $('#preload').css("display","none"); 
        });
    }

    function adicionarContador(origem){
        var posicaoDC = $('#bt-dc').offset();
        
        if(origem == 'fecharTelaTv'){
        	nrelacoes += 1;
        	nn += 1;
        }else if(origem == 'fecharTelaTel'){
        	nrelacoes += 2;
        	nn += 2;
        }else if(origem == 'fecharTelaTorn'){
        	nrelacoes += 2;
        	nn += 2;
        }else if(origem == 'fecharTelaAr'){
        	nrelacoes += 1;
        	nn += 1;
        }else if(origem == 'fecharTelaMicro'){
        	nrelacoes += 2;
        	nn += 2;
        }
        $('#contador').fadeIn(300);
        $('#contador').css( { 'top' : posicaoDC.top-11, 'left' : posicaoDC.left + 125 });
        $('#contador').text(nn);
        $('#bt-dc h1, #dc-emerge h1').text(nrelacoes+'/8');
        localStorage.numRelacoes = Number(nrelacoes);
    }

    function mostrarDiagrama(){        
        if(verificaRelacoes.tv){
            $('#imgdiagramaII').css('display','block');
            $('#interface').css('display','block');
            $('#interacao').css('display','block');
        }
        if(verificaRelacoes.ar){
            $('#imgdiagramaMCI').css('display','block');
            $('#interface').css('display','block');
            $('#modelo-conceitual').css('display','block');

        }
        if(verificaRelacoes.tel){
            $('#imgdiagramaAI').css('display','block');
            $('#imgdiagramaIF').css('display','block');
            $('#affordance').css('display','block');
            $('#interface').css('display','block');
            $('#interacao').css('display','block');
        }
        if(verificaRelacoes.micro){
            $('#imgdiagramaMCMM').css('display','block');
            $('#imgdiagramaMMMC').css('display','block');
            $('#modelo-conceitual').css('display','block');
            $('#modelo-mental').css('display','block');
        }
        if(verificaRelacoes.torneira){
        	$('#imgdiagramaEMC').css('display','block');
			$('#imgdiagramaEMM').css('display','block');
            $('#modelo-conceitual').css('display','block');
            $('#modelo-mental').css('display','block');
            $('#eng-cognitiva').css('display','block')
        }
    }

    function ChamarMapa(obj){
         var posicao = obj.offset();
         $('.caixa-mapa').css({'top': (posicao.top - 170) , 'left': (posicao.left - 240)});
         $('.caixa-mapa').fadeIn(600);
    }

    function AbrirCaixaTexto(){
        $('#FecharCaixaDialogo').show();
        $('#caixaDialogo article').css('display','block');
        $('#caixaDialogo').animate({'width':'80%'}, 500, 'linear');
        caixaDialogoAberta = true;
    }

    function FecharCaixaTexto(){
    	$('#caixaDialogo article p').text('');
        $('#FecharCaixaDialogo').delay(500).hide();
        $('#caixaDialogo').animate({'width':'0px'}, 500, 'linear', function(){
            $('#caixaDialogo article').css('display','none');
        });
        caixaDialogoAberta = false;
    }

    function darDica(){
    	if(document.title == "Sala - IHC é uma Delícia"){

    		if(verificaRelacoes.tv == false && caixaDialogoAberta == false){
		        setTimeout(  function() {
		            AbrirCaixaTexto();
		            $('#caixaDialogo article p').delay(500).text('Fique a vontade! Se estiver entediado, ligue a TV para assistir à um filme ou série…');
		        }, 2000);
		    }else if(verificaRelacoes.tel == false && caixaDialogoAberta == false){
		    	setTimeout(  function() {
		            AbrirCaixaTexto();
		            $('#caixaDialogo article p').delay(500).text('Estou com fome! O que acha de pedirmos uma pizza?');
		        }, 2000);
		    }else if(verificaRelacoes.ar == false && caixaDialogoAberta == false){
		    	setTimeout(  function() {
		            AbrirCaixaTexto();
		            $('#caixaDialogo article p').delay(500).text('Que frio! Nesta temperatura, a gente vai acabar congelando!');
		        }, 2000);
		    }else if(verificaRelacoes.torneira == false || verificaRelacoes.micro == false && caixaDialogoAberta == false){
		    	setTimeout(  function() {
		            AbrirCaixaTexto();
		            $('#caixaDialogo article p').delay(500).text('Veja o resto da casa :D');
		        }, 2000);
		    }
	    	
	    }else if(document.title == "Cozinha - IHC é uma Delícia"){

		    if(verificaRelacoes.micro == false && caixaDialogoAberta == false){
		    	setTimeout(  function() {
		            AbrirCaixaTexto();
		            $('#caixaDialogo article p').delay(500).text('Você pode fazer a pipoca pra nós? Eu ja coloquei no micro-ondas, ajusta o tempo e inicia');
		        }, 2000);
		    }else if(verificaRelacoes.torneira == false || verificaRelacoes.tel == false ||verificaRelacoes.tv == false || verificaRelacoes.ar == false && caixaDialogoAberta == false){
		    	setTimeout(  function() {
		            AbrirCaixaTexto();
		            $('#caixaDialogo article p').delay(500).text('Veja o resto da casa :D');
		        }, 2000);
		    }
	    	
	    }else if(document.title == "Banheiro - IHC é uma Delícia"){
	    	if(verificaRelacoes.torneira == false && caixaDialogoAberta == false){
		    	setTimeout(  function() {
		            AbrirCaixaTexto();
		            $('#caixaDialogo article p').delay(500).text('Já viu como a torneira do meu banheiro é intrigante?');
		        }, 2000);	
		    }else if(verificaRelacoes.micro == false || verificaRelacoes.tel == false ||verificaRelacoes.tv == false || verificaRelacoes.ar == false && caixaDialogoAberta == false){
		    	setTimeout(  function() {
		            AbrirCaixaTexto();
		            $('#caixaDialogo article p').delay(500).text('Veja o resto da casa :D');
		        }, 2000);	
		    }	
	    }
    }

    function apareceTexto(texto, origem){
    	if(origem == "tv"){
    		$('#texto-dialogoTv article p').text(texto);

    	}else if( origem == "micro-ondas"){
    		$('#texto-dialogoMic article p').text(texto);

    	}else if( origem == "telefone"){
    		$('#texto-dialogoTel article p').text(texto);

    	}else if( origem == "ar-condic"){
    		$('#texto-dialogoAr article p').text(texto);

    	}else if( origem == "torneira"){
    		$('#texto-dialogoTorn article p').text(texto);
    	}else{
    		console.log('Deu ruim');
    	}       
    }

    function chamarTelaAtividade(i){
    	var posicaotela, wtela, htela, ptela;

    	if(i == "elemento3" || i == "elemento4" || i == "elemento5"){
    		posicaotela = $('#tela-s').offset();
	        wtela = Math.floor($('#tela-s').css('width').replace(/[^-\d\.]/g, ''));
	        htela = Math.floor($('#tela-s').css('height').replace(/[^-\d\.]/g, ''));
	        ptela = Math.floor($('#tela-s').css('paddingRight').replace(/[^-\d\.]/g, ''))*2;
    	}else if(i == "elemento7"){
    		posicaotela = $('#tela-c').offset();
	        wtela = Math.floor($('#tela-c').css('width').replace(/[^-\d\.]/g, ''));
	        htela = Math.floor($('#tela-c').css('height').replace(/[^-\d\.]/g, ''));
	        ptela = Math.floor($('#tela-c').css('paddingRight').replace(/[^-\d\.]/g, ''))*2;
    	}else if(i == "elemento9"){
    		posicaotela = $('#tela-b').offset();
	        wtela = Math.floor($('#tela-b').css('width').replace(/[^-\d\.]/g, ''));
	        htela = Math.floor($('#tela-b').css('height').replace(/[^-\d\.]/g, ''));
	        ptela = Math.floor($('#tela-b').css('paddingRight').replace(/[^-\d\.]/g, ''))*2;
    	}

    	if(i == "elemento3"){
    		$('#tv').css({ 'top': posicaotela.top , 'left': posicaotela.left });
	        $('#tv').css({ 'width': wtela+ptela+'px', 'height': htela+ptela+'px'});
	        $('#tv').fadeIn(1000);
    	}

    	if(i == "elemento4"){
    		$('#ar-condic').css({ 'top': posicaotela.top , 'left': posicaotela.left });
	        $('#ar-condic').css({ 'width': wtela+ptela+'px', 'height': htela+ptela+'px'});
	        $('#ar-condic').fadeIn(1000);
    	}

    	if(i == "elemento5"){
    		$('#telefone').css({ 'top': posicaotela.top , 'left': posicaotela.left });
	        $('#telefone').css({ 'width': wtela+ptela+'px', 'height': htela+ptela+'px'});
	        $('#telefone').fadeIn(1000);
    	}

    	if(i == "elemento7"){
    		$('#micro-ondas').css({ 'top': posicaotela.top , 'left': posicaotela.left });
	        $('#micro-ondas').css({ 'width': wtela+ptela+'px', 'height': htela+ptela+'px'});
	        $('#micro-ondas').fadeIn(1000);
    	}

    	if(i == "elemento9"){
    		$('#torneira').css({ 'top': posicaotela.top , 'left': posicaotela.left });
	        $('#torneira').css({ 'width': wtela+ptela+'px', 'height': htela+ptela+'px'});
	        $('#torneira').fadeIn(1000);
    	}
    }

    function chamarTelaAtividadeCenas(i, obj){
        var origem = obj.parent().parent().attr('id');
    	
    	if(origem == "tv"){
    		if(i==0){
	            apareceTexto(falasTV[0], origem);
	        }else if(i==1){	        	
	        	$('.tv-tela2').fadeIn();
	            apareceTexto(falasTV[1], origem);
	            localStorage.setItem("tv", true);
	        }else if(i==2){
	            apareceTexto(falasTV[2], origem);
	        }else if(i==3){
	        	$('.tv-tela3').fadeIn();
	            apareceTexto(falasTV[3], origem);
	        }else if(i==4){
	            apareceTexto(falasTV[4], origem);
	        }else if(i==5){
	            $('.tv-tela4').fadeIn();
	            apareceTexto(falasTV[5], origem);
	        }else if(i==6){
	            apareceTexto(falasTV[6], origem);
	        }else if(i==7){
	        	$('.bt-passar-texto').fadeOut(200);
	            apareceTexto(falasTV[6], origem);
	        }

    	}else if( origem == "micro-ondas"){
    		if(i==0){
	            apareceTexto(falasMicro[0], origem);
	        }else if(i==1){	        	
	            apareceTexto(falasMicro[1], origem);
	            localStorage.setItem("micro", true);
	        }else if(i==2){
	            apareceTexto(falasMicro[2], origem);
	        }else if(i==3){
	            apareceTexto(falasMicro[3], origem);
	        }else if(i==4){
	            apareceTexto(falasMicro[4], origem);
	        }else if(i==5){
	        	$('.micro-tela1').fadeIn();	            
	            apareceTexto(falasMicro[5], origem);
	        }else if(i==6){
	            apareceTexto(falasMicro[6], origem);
	        }else if(i==7){
	            apareceTexto(falasMicro[7], origem);
	        }else if(i==8){
	        	$('.micro-tela2').fadeIn();
	            apareceTexto(falasMicro[8], origem);
	        }else if(i==9){
	            apareceTexto(falasMicro[9], origem);
	        }else if(i==10){
	        	$('.micro-tela3').fadeIn();
	        	$('.micro-tela4').fadeIn();
	            apareceTexto(falasMicro[10], origem);
	        }else if(i==11){
	            apareceTexto(falasMicro[11], origem);
	        }else if(i==12){
	            apareceTexto(falasMicro[12], origem);
	        }else if(i==13){
	        	$('.bt-passar-texto').fadeOut(200);
	            apareceTexto(falasMicro[13], origem);
	        }

    	}else if( origem == "telefone"){
    		if(i==0){
	            apareceTexto(falasTel[0], origem);
	        }else if(i==1){
	            apareceTexto(falasTel[1], origem);
	            localStorage.setItem("tel", true);
	        }else if(i==2){
	        	$('.tel-tela1').fadeIn();
	            apareceTexto(falasTel[2], origem);
	        }else if(i==3){	        	
	            $('.tel-tela2').fadeIn();
	        	apareceTexto(falasTel[3], origem);
	        }else if(i==4){
	            apareceTexto(falasTel[4], origem);
	        }else if(i==5){
	            $('.tel-tela3').fadeIn();
	            apareceTexto(falasTel[5], origem);
	        }else if(i==6){
	            apareceTexto(falasTel[6], origem);
	        }else if(i==7){
	            apareceTexto(falasTel[7], origem);
	        }else if(i==8){
	        	apareceTexto(falasTel[8], origem);
	        }else if(i==9){
	            $('.tel-tela4').fadeIn();
	        	$('.tel-tela5').fadeIn();
	            apareceTexto(falasTel[9], origem);
	        }else if(i==10){
	        	$('.bt-passar-texto').fadeOut(200);
	            apareceTexto(falasTel[10], origem);
	        }

    	}else if( origem == "ar-condic"){
    		if(i==0){
	            apareceTexto(falasAr[0], origem);
	        }else if(i==1){
	        	localStorage.setItem("ar", true);
	            apareceTexto(falasAr[1], origem);
	        }else if(i==2){	            
	            apareceTexto(falasAr[2], origem);
	        }else if(i==3){
	        	$('.ar-tela1').fadeIn();	            
	            apareceTexto(falasAr[3], origem);
	        }else if(i==4){
	            apareceTexto(falasAr[4], origem);
	        }else if(i==5){
	            apareceTexto(falasAr[5], origem);
	        }else if(i==6){
	        	$('.ar-tela2').fadeIn();
	            apareceTexto(falasAr[6], origem);
	        }else if(i==7){
	            apareceTexto(falasAr[7], origem);
	        }else if(i==8){
	            apareceTexto(falasAr[8], origem);
	        }else if(i==9){
	            apareceTexto(falasAr[9], origem);
	        }else if(i==10){
	            apareceTexto(falasAr[10], origem);
	        }else if(i==11){
	        	$('.bt-passar-texto').fadeOut(200);
	        	$('.ar-tela3').fadeIn();
	            apareceTexto(falasAr[11], origem);
	        }

    	}else if( origem == "torneira"){
    		if(i==0){    
	            apareceTexto(falasPia[0], origem);
	        }else if(i==1){
	            apareceTexto(falasPia[1], origem);
	            localStorage.setItem("torneira", true);
	        }else if(i==2){
	        	$('.torneira-tela1').fadeIn();
	            apareceTexto(falasPia[2], origem);
	        }else if(i==3){
	        	apareceTexto(falasPia[3], origem);
	        }else if(i==4){
	        	apareceTexto(falasPia[4], origem);
	        }else if(i==5){
	        	$('.torneira-tela2').fadeIn();
	        	apareceTexto(falasPia[5], origem);
	        }else if(i==6){
	            apareceTexto(falasPia[6], origem);
	        }else if(i==7){
	        	$('.torneira-tela3').fadeIn();
	        	apareceTexto(falasPia[7], origem);
	        }else if(i==8){
	            apareceTexto(falasPia[8], origem);
	        }else if(i==9){
	        	apareceTexto(falasPia[9], origem);
	        }else if(i==10){
	            apareceTexto(falasPia[10], origem);
	        }else if(i==11){
	            apareceTexto(falasPia[11], origem);
	        }else if(i==12){
	            apareceTexto(falasPia[12], origem);
	        }else if(i==13){
	        	$('.torneira-tela4').fadeIn();
	        	$('.torneira-tela5').fadeIn();
	            apareceTexto(falasPia[13], origem);
	        }else if(i==14){
	            apareceTexto(falasPia[14], origem);
	            $('.bt-passar-texto').fadeOut(200);
	        }    	
    	}
    }

    function chamarConclusão(){
    	$('.fundo, .caixa-conclusao').animate({'opacity':'.8'}, 300, 'linear', function(){
    		$('.caixa-conclusao').fadeIn(400);
    		$('.caixa-conclusao').animate({'opacity':'1'}, 200, 'linear');
    	});
		$('.fundo').css('display', 'block');  	
    }

    function verificarMapa(){
    	if(document.title == "Sala - IHC é uma Delícia"){

			if(verificaRelacoes.tv && verificaRelacoes.ar && verificaRelacoes.tel){
		    	$('.mapa-concluido1').fadeIn(400);
		    }

		    if(verificaRelacoes.micro){
		    	$('.mapa-concluido2').fadeIn(400);
		    	$('.mapa-concluido2').css('-webkit-filter', 'grayscale(1)');
	            $('.mapa-concluido2').css('-moz-filter', 'grayscale(1)');
	            $('.mapa-concluido2').css('filter', 'grayscale(1)');
		    }

		    if(verificaRelacoes.torneira){
		    	$('.mapa-concluido3').fadeIn(400);
		    	$('.mapa-concluido3').css('-webkit-filter', 'grayscale(1)');
	            $('.mapa-concluido3').css('-moz-filter', 'grayscale(1)');
	            $('.mapa-concluido3').css('filter', 'grayscale(1)');
		    }
	    	
	    }else if(document.title == "Cozinha - IHC é uma Delícia"){
	    	if(verificaRelacoes.tv && verificaRelacoes.ar && verificaRelacoes.tel){
		    	$('.mapa-concluido1').fadeIn(400);
		    	$('.mapa-concluido1').css('-webkit-filter', 'grayscale(1)');
	            $('.mapa-concluido1').css('-moz-filter', 'grayscale(1)');
	            $('.mapa-concluido1').css('filter', 'grayscale(1)');
		    }

		    if(verificaRelacoes.micro){
		    	$('.mapa-concluido2').fadeIn(400);
		    }

		    if(verificaRelacoes.torneira){
		    	$('.mapa-concluido3').fadeIn(400);
		    	$('.mapa-concluido3').css('-webkit-filter', 'grayscale(1)');
	            $('.mapa-concluido3').css('-moz-filter', 'grayscale(1)');
	            $('.mapa-concluido3').css('filter', 'grayscale(1)');
		    }
	    	
	    }else if(document.title == "Banheiro - IHC é uma Delícia"){
	    	if(verificaRelacoes.tv && verificaRelacoes.ar && verificaRelacoes.tel){
		    	$('.mapa-concluido1').fadeIn(400);
		    	$('.mapa-concluido1').css('-webkit-filter', 'grayscale(1)');
	            $('.mapa-concluido1').css('-moz-filter', 'grayscale(1)');
	            $('.mapa-concluido1').css('filter', 'grayscale(1)');
		    }

		    if(verificaRelacoes.micro){
		    	$('.mapa-concluido2').fadeIn(400);		    	
		    	$('.mapa-concluido2').css('-webkit-filter', 'grayscale(1)');
	            $('.mapa-concluido2').css('-moz-filter', 'grayscale(1)');
	            $('.mapa-concluido2').css('filter', 'grayscale(1)');
		    }

		    if(verificaRelacoes.torneira){
		    	$('.mapa-concluido3').fadeIn(400);
		    }
	    }
    }