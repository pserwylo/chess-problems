var BoardUi = klass( function( board, selector ) {

	this.board = board;
	this.dom = jQuery( selector );
	this.domPieces = null;
	this.domBoard = null;

}).methods({

	render: function() {
		this._renderBoard();
		this._renderPieces();
		return this;
	},

	getPiece: function( colour, type, number ) {

		var identifier = this.board.pieceManager.generateId( type, colour, number );
		return this.domPieces.find( '.' + identifier );

	},

	_renderPieces: function() {

		var allPieces = this.board.pieceManager.getAllPieces();
		this.domPieces = jQuery( "<div class='chess-pieces'></div>" );
		this.dom.append( this.domPieces );

		var tileSize = this.domBoard.find( '.cell').width();
		var boardLeft = this.domBoard.offset().left;
		var boardTop = this.domBoard.offset().top;

		for ( var i = 0; i < allPieces.length; i ++ ) {

			var piece = allPieces[ i ];
			var pieceUi = new PieceUi( piece, this );

			this.domPieces.append( pieceUi.dom );

			var top = boardTop + tileSize * piece.cell.y;
			var left = boardLeft + tileSize * piece.cell.x;
			pieceUi.setOffset( top, left );

		}

	},

	unhighlightAll: function() {

		this.domBoard.find( '.cell' ).removeClass( 'highlighted takeable' );

	},

	highlightCell: function( cell, isTakeable ) {

		var domCell = this.domBoard.find( '.cell-' + cell.x + '-' + cell.y );
		domCell.addClass( 'highlighted' );
		if ( isTakeable ) {
			domCell.addClass( 'takeable' );
		}

	},

	_renderBoard: function() {

		var output = "<ul class='chess-board'>\n";

		for ( var y = 0; y < 8; y ++ )
		{

			output += "	<li>\n";
			output += "		<ul class='row row-" + y + "'>\n";

			for ( var x = 0; x < 8; x ++ ) {

				var colourClass = "";
				if ( y % 2 == 0 && x % 2 == 1 || y % 2 == 1 && x % 2 == 0 ) {
					colourClass = 'black';
				} else {
					colourClass = 'white';
				}
				output += "			<li class='cell cell-" + x + "-" + y + " col-" + x + " " + colourClass + "'></li>\n";

			}

			output += "		</ul>\n";
			output += "	</li>\n";

		}

		output += "</ul>\n";

		this.domBoard = jQuery( output );
		this.dom.append( this.domBoard );

	}

});