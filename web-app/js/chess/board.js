var Board = klass( function() {

	/**
	 * @type {Cell[][]}
	 */
	this.cells = [];

	this.pieceManager = new PieceManager( this ).init();

	this.initCells();

}).methods({

	getCell: function( x, y ) {
		return this.cells[ y ][ x ];
	},

	initCells: function() {

		for ( var y = 0; y < 8; y ++ )
		{
			this.cells.push( [] );
			for ( var x = 0; x < 8; x ++ )
			{
				this.cells[ y ][ x ] = new Cell( x, y );
			}
		}

		return this;

	},

	getPieceAt: function( x, y ) {

		var foundPiece = null;
		var allPieces = this.pieceManager.getAllPieces();
		for ( var i = 0; i < allPieces.length; i ++ ) {
			var piece = allPieces[ i ];
			if ( piece.cell != null && piece.cell.x == x && piece.cell.y == y ) {
				foundPiece = piece;
				break;
			}
		}
		return foundPiece;

	},

	placeDefaultPieces: function() {

		// Specifies the rows for the black and white pieces...
		var rows = {};
		rows[ Piece.WHITE ] = { back: 0, front: 1};
		rows[ Piece.BLACK ] = { back: 7, front: 6};

		for ( var i = 0; i < Piece.COLOURS.length; i ++ )
		{
			var colour = Piece.COLOURS[ i ];

			var backRow = rows[ colour ].back;
			var frontRow = rows[ colour ].front;

			this.pieceManager.getPiece( colour, Rook.TYPE, 0 ).cell = this.getCell( 0, backRow );
			this.pieceManager.getPiece( colour, Rook.TYPE, 1 ).cell = this.getCell( 7, backRow );

			for ( var j = 0; j < 8; j ++ ) {
				this.pieceManager.getPiece( colour, Pawn.TYPE, j ).cell = this.getCell( j, frontRow );
			}

		}

		return this;

	}

});