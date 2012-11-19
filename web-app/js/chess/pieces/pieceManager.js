var PieceManager = klass( function( board ) {

	this.board = board;
	this.pieces = {};


}).statics({



}).methods({

	init: function () {

		this._createPiecesForColour( Piece.WHITE );
		this._createPiecesForColour( Piece.BLACK );

		return this;

	},

	getAllPieces: function( colour ) {

		var allPieces = [];

		if ( typeof colour === 'undefined' ) {

			allPieces = this.getAllPieces( Piece.WHITE ).concat( this.getAllPieces( Piece.BLACK ) );

		}
		else
		{
			allPieces = [
				this.getPiece( colour, Rook.TYPE, 0 ),
				this.getPiece( colour, Rook.TYPE, 1 )
			];
		}

		return allPieces;

	},

	/**
	 *
	 * @param colour
	 * @param type
	 * @param number If there is more than one (e.g. two rooks, eight pawns), specify the number here...
	 * @return {*}
	 */
	getPiece: function( colour, type, number ) {

		var key = this.generateId( type, colour, number );
		if ( !this.pieces.hasOwnProperty( key ) ) {
			throw new Error( "Could not find piece: '" + key + "'." );
		}
		return this.pieces[ key ];

	},

	generateId: function( type, colour, number ) {

		var numValue = '';
		if ( typeof number !== 'undefined' ) {
			numValue = '_' + number;
		}

		return colour + "_" + type + numValue;

	},

	_createPiecesForColour: function( colour ) {

		this._createRooks( colour );

	},

	_createPiece: function( type, piece, number ) {

		this.pieces[ this.generateId( type, piece.colour, number ) ] = piece;
	},


	_createRooks: function( colour ) {

		this._createPiece( Rook.TYPE, new Rook( this.board, colour ), 0 );
		this._createPiece( Rook.TYPE, new Rook( this.board, colour ), 1 );
	}


});
