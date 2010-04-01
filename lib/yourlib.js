function CowsAndBulls(word){
	this.word = word
}

CowsAndBulls.prototype = {
	start : function(){ 
		return "I'm thinking of a " + this.word.length + " letter word." 
	},
	
	setWord: function(word) {
		this.word = word
	},
	
	try: function(guess) {
		var cows=0;
		var bulls=0;
		
		var clone_word = this.word;
		
		for (var i=0; i< guess.length ; i++){
			var position = clone_word.search(guess[i]);
			
			if (position==i) {
				bulls++;
				
			} else if (position>=0){
				cows++;
				//FIXME: não tem um jeito melhor?
				clone_word = clone_word.substring(0,position) + '.' + clone_word.substring(position+1, clone_word.length)
			} 
		}
		
		return cows + " cows and " + bulls + " bulls";
		
	}
};
