
describe 'CowsAndBulls'

	describe 'init'

		before_each
			palavra = 'velha'
		 	jogo = new CowsAndBulls(palavra)
			msg = jogo.start()
		end

		it 'should give a non null message'
			msg.should_not.be null
			msg.should_not.be undefined
		end

		it 'should give a welcome message'
			msg.should.be "I'm thinking of a " + jogo.word.length + " letter word."
		end

		it 'should give a welcome message for another word'
			jogo.setWord('velhas')
			msg = jogo.start()
			msg.should.be "I'm thinking of a " + jogo.word.length + " letter word."
		end

	end


	describe 'player give a try'
		
		describe '2 letter word'
			
			before_each
			 	jogo = new CowsAndBulls('eu')
				jogo.start()
			end

			it 'should answer 0 cows and 0 bulls'
				msg = jogo.try('as')
				msg.should.be '0 cows and 0 bulls'
			end

			it 'should find 1 cows on the first letter'
				msg = jogo.try('ae')
				msg.should.be '1 cows and 0 bulls'
			end

			it 'should find 1 cows on the second letter'
				msg = jogo.try('ui')
				msg.should.be '1 cows and 0 bulls'
			end

			it 'should find 2 cows'
				msg = jogo.try('ue')
				msg.should.be '2 cows and 0 bulls'
			end

			it 'should find 1 bull on the first letter'
				msg = jogo.try('ei')
				msg.should.be '0 cows and 1 bulls'
			end

			it 'should find 2 bulls'
				msg = jogo.try('eu')
				msg.should.be '0 cows and 2 bulls'
			end
		end

		describe 'with repeated letters'
			
			before_each
			 	jogo = new CowsAndBulls('carro')
				jogo.start()
			end
			
			it 'should not count repeated cows'
				jogo.try('rxxxx').should.be '1 cows and 0 bulls'
			end

			it 'should same letter as cow and bull'
				//		  carro
				jogo.try('xrxrx').should.be '1 cows and 1 bulls'
			end
					
		end
	end
	
end