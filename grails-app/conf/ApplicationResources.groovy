modules = {

	klass {

		resource url: 'js/lib/klass/klass.min.js'

	}

	chess {

		dependsOn "klass"

		resource url: 'css/chess/board.css'

		resource url: 'js/chess/cell.js'
		resource url: 'js/chess/board.js'

		resource url: 'js/chess/pieces/pieceManager.js'
		resource url: 'js/chess/pieces/piece.js'
		resource url: 'js/chess/pieces/rook.js'

		resource url: 'js/chess/ui/board.js'

	}

}