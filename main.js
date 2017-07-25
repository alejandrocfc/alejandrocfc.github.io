jQuery(function () { /* your function */

    var Counter = 0;
	
	var Memory = {

		init: function(cards){
			this.$game = $('.game');
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.binding();
		},



		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     		this.guess = null;
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
            Counter++;
            $("#counter").html("" + Counter);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
            this.hideModal();
            this.shuffleCards(this.cardsArray);
            this.setup();
            this.$game.show("slow");
            location.reload();
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
            Counter = 0;
            var flag = 1;
            $("#counter").html("" + Counter);
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"alt="'+ v.name +'" /></div>\
				<div class="back">\
				    <img src="ondas.jpeg" alt="Codepen" />\
				    <span>'+ flag++ +'</span>\
                </div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "php",
			img: "images/aceite.png",
			id: 1
		},
		{
			name: "css3",
			img: "images/albert.png",
			id: 2
		},
		{
			name: "css3",
			img: "images/alimento.png",
			id: 3
		},
        {
            name: "php",
            img: "images/arbol.png",
            id: 4
        },
        {
            name: "css3",
            img: "images/aves.png",
            id: 5
        },
        {
            name: "css3",
            img: "images/biodiversidad.png",
            id: 6
        },
        {
            name: "php",
            img: "images/bombillo.png",
            id: 7
        },
        {
            name: "css3",
            img: "images/cachama.png",
            id: 8
        },
        {
            name: "css3",
            img: "images/caracol.png",
            id: 9
        },
        {
            name: "php",
            img: "images/cascara.png",
            id: 10
        },
        {
            name: "css3",
            img: "images/celular.png",
            id: 11
        },
        {
            name: "css3",
            img: "images/co2.png",
            id: 12
        },
        {
            name: "computer_vocabulary",
            img: "images/computer_vocabulary.png",
            id: 13
        },
        {
            name: "css3",
            img: "images/cuadro.png",
            id: 14
        },
        {
            name: "cuerpo_humano",
            img: "images/cuerpo_humano.png",
            id: 15
        },
        {
            name: "energia",
            img: "images/energia.png",
            id: 16
        },
        {
            name: "estudiantes",
            img: "images/estudiantes.png",
            id: 17
        },
        {
            name: "figura",
            img: "images/figura.png",
            id: 18
        },
        {
            name: "forraje",
            img: "images/forraje.png",
            id: 19
        },
        {
            name: "fotografo",
            img: "images/fotografo.png",
            id: 20
        },
        {
            name: "fuentes",
            img: "images/fuentes.png",
            id: 21
        },
        {
            name: "granja",
            img: "images/granja.png",
            id: 22
        },
        {
            name: "hoja",
            img: "images/hoja.png",
            id: 23
        },
        {
            name: "huerta",
            img: "images/huerta.png",
            id: 24
        },
        {
            name: "interdisciplinar",
            img: "images/interdisciplinar.png",
            id: 25
        },
        {
            name: "jabon",
            img: "images/jabon.png",
            id: 26
        },
        {
            name: "kid",
            img: "images/kid.png",
            id: 27
        },
        {
            name: "libro",
            img: "images/libro.png",
            id: 28
        },
        {
            name: "matico",
            img: "images/matico.png",
            id: 29
        },
        {
            name: "matico",
            img: "images/matico.png",
            id: 30
        },
        {
            name: "microalgas",
            img: "images/microalgas.png",
            id: 31
        },
        {
            name: "palabras",
            img: "images/palabras.png",
            id: 32
        },
        {
            name: "paloma",
            img: "images/paloma.png",
            id: 33
        },
		{
            name: "pirinola",
            img: "images/pirinola.png",
            id: 34
        },
		{
            name: "plantas",
            img: "images/plantas.png",
            id: 35
        },
        {
            name: "plastico",
            img: "images/plastico.png",
            id: 36
        },
        {
            name: "programa_3d",
            img: "images/programa_3d.png",
            id: 37
        },
        {
            name: "pronostico",
            img: "images/pronostico.png",
            id: 38
        },
        {
            name: "rio",
            img: "images/rio.png",
            id: 39
        },
        {
            name: "sabila",
            img: "images/sabila.png",
            id: 40
        },
        {
            name: "semillas",
            img: "images/semillas.png",
            id: 41
        },
        {
            name: "taza",
            img: "images/taza.png",
            id: 42
        },
        {
            name: "titi",
            img: "images/titi.png",
            id: 43
        },
        {
            name: "vivero",
            img: "images/vivero.png",
            id: 44
        },
        {
            name: "yage",
            img: "images/yage.png",
            id: 45
        }
	];
    
	Memory.init(cards);


});