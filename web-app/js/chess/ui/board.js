var BoardUi = klass( function( board, selector ) {

	this.board = board;
	this.dom = jQuery( selector );
	this.domPieces = null;
	this.domBoard = null;

}).methods({

	render: function() {
		this._renderBoard();
		this._renderPieces();
	},

	getPiece: function( colour, type, number ) {

		var identifier = this.board.pieceManager.generateId( type, colour, number );
		return this.domPieces.find( '.' + identifier );

	},

	_renderPieces: function() {

		var allPieces = this.board.pieceManager.getAllPieces();
		var output = "<div class='chess-pieces'>";

		for ( var i = 0; i < allPieces.length; i ++ ) {

			var piece = allPieces[ i ];
			output += "<div class='chess-piece " + piece.getType() + " " + '></div>"

		}

		output += "</div>";

		this.domPieces = jQuery( output );
		this.dom.append( this.domPieces );

	},

	_renderBoard: function() {

		var output = "<ul class='chess-board'>\n";

		for ( var y = 0; y < 8; y ++ )
		{

			output += "	<li>\n";
			output += "		<ul class='row row-" + y + "'>\n";

			for ( var x = 0; x < 8; x ++ )
			{

				var blackClass = "";
				if ( y % 2 == 0 && x % 2 == 1 || y % 2 == 1 && x % 2 == 0 )
				{
					blackClass = 'black';
				}
				output += "			<li class='cell cell-" + x + "-" + y + " col-" + x + " " + blackClass + "'></li>\n";

			}

			output += "		</ul>\n";
			output += "	</li>\n";

		}

		output += "</ul>\n";

		this.domBoard = jQuery( output );
		this.dom.append( this.domBoard );

	}

});