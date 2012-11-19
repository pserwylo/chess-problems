var Piece = klass( function( /*Board*/ board, colour, number ) {

	this.board = board;
	this.colour = colour;
	this.number = null;
	this.cell = null;

}).statics({

	WHITE: 'white',
	BLACK: 'black',
	COLOURS: [ "white", "black" ] // Useful for iterating over all pieces from both teams...

}).methods({

	canMove: function ( /*Cell*/ to ) {

		return false;

	},

	getId: function() {
		console.log( this.colour + '_' + this.getType() + '_' + this.getNumber() );
	},

	getType: function() {

		throw new Error( "Abstract method 'getType()' not implemented." );

	},

	getNumber: function() {

		return this.number;

	},

	move: function( to ) {

		if ( !this.canMove( to ) )
		{
			throw new Error( "Cannot move from: " + this.position.toString() + " to " + to.toString() );
		}

	}

});