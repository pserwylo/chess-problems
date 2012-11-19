var Rook = Piece.extend( function( board, colour ) {

}).statics({

	TYPE: "rook"

}).methods({

	getType: function() {

		return Rook.TYPE;

	},

	canMove: function( to ) {

		var legal = true;
		var min, max, piece;

		// Moving in straight lines (either x or y plane).
		// We will check all cells between this.cell and to, not including those two.
		// The to piece will be checked later if we can move, to see if it is an opponents piece.
		if ( this.cell.y == to.y ) {

			if ( this.cell.x > to.x )
			{
				min = to.x + 1;
				max = this.cell.x - 1;
			}
			min = Math.min( this.cell.x, to.x );
			max = Math.max( this.cell.x, to.x );

			for ( var x = min; x <= max; x ++ )
			{
				piece = this.board.getCell( x, this.cell.y );
				if ( piece != null && piece != this ) {
					legal = false;
				}
			}

		} else if ( this.cell.x == to.x ) {

			min = Math.min( this.cell.y, to.y );
			max = Math.max( this.cell.y, to.y );

			for ( var y = min; y <= max; y ++ )
			{
				piece = this.board.getCell( this.cell.x, y );
				if ( piece != null && piece != this ) {
					legal = false;
				}
			}

		} else {

			legal = false;

		}

		// See if there is an opponents piece
		if ( legal ) {

			piece = this.board.getCell( to.x, to.y );
			if ( piece != null )
			{
				// Only legal if we are not moving onto a piece of the same colour (i.e. we are taking this piece)
				legal = piece.isWhite != this.isWhite
			}

		}

	}

});
