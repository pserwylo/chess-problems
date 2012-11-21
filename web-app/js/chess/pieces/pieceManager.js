var PieceManager = klass( function( board ) {

	this.board = board;
	this.pieces = {};

	this.allWhitePieces = null;
	this.allBlackPieces = null;
	this.allPieces = null;

}).statics({



}).methods({

	init: function () {

		this._createPiecesForColour( Piece.WHITE );
		this._createPiecesForColour( Piece.BLACK );

		return this;

	},

	getAllPieces: function( colour ) {

		if ( typeof colour === 'undefined' ) {

			if ( this.allPieces == null ) {

				this.allPieces = this.getAllPieces( Piece.WHITE ).concat( this.getAllPieces( Piece.BLACK ) );

			}

			return this.allPieces;

		}
		else
		{
			var pieces = colour == Piece.WHITE ? this.allWhitePieces : this.allBlackPieces;
			if ( pieces == null ) {

				pieces = [
					this.getPiece( colour, Rook.TYPE, 0 ),
					this.getPiece( colour, Rook.TYPE, 1 )
				];

				for ( var i = 0; i < 8; i ++ ) {
					pieces.push( this.getPiece( colour, Pawn.TYPE, i ) );
				}

				if ( colour == Piece.WHITE ) {
					this.allWhitePieces = pieces;
				} else if ( colour == Piece.BLACK ) {
					this.allBlackPieces = pieces;
				}

				return pieces;

			}

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
		this._createPawns( colour );

	},

	_createPiece: function( type, piece, number ) {

		this.pieces[ this.generateId( type, piece.colour, number ) ] = piece;
	},

	_createPawns: function( colour ) {

		for ( var i = 0; i < 8; i ++ ) {
			this._createPiece( Pawn.TYPE, new Pawn( this.board, colour ), i );
		}
	},

	_createRooks: function( colour ) {

		this._createPiece( Rook.TYPE, new Rook( this.board, colour ), 0 );
		this._createPiece( Rook.TYPE, new Rook( this.board, colour ), 1 );
	}


});
