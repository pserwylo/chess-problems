var Rook = Piece.extend( function( board, colour ) {

}).statics({

	TYPE: "rook"

}).methods({

	getType: function() {

		return Rook.TYPE;

	},

	canMove: function( to ) {

		var legal = false;
		var min, max, piece;

		// Moving in straight lines (either x or y plane).
		// We will check all cells between this.cell and to, not including those two.
		// The to piece will be checked later if we can move, to see if it is an opponents piece.
		if ( this.cell.y == to.y ) {

			legal = true;

			if ( this.cell.x > to.x )
			{
				min = to.x + 1;
				max = this.cell.x - 1;
			}
			else
			{
				min = this.cell.x + 1;
				max = to.x - 1;
			}

			for ( var x = min; x <= max; x ++ )
			{
				piece = this.board.getPieceAt( x, this.cell.y );
				if ( piece != null ) {
					legal = false;
				}
			}

		} else if ( this.cell.x == to.x ) {

			legal = true;

			if ( this.cell.y > to.y ) {

				min = to.y + 1;
				max = this.cell.y - 1;

			} else {

				min = this.cell.y + 1;
				max = to.y - 1;

			}

			for ( var y = min; y <= max; y ++ ) {

				piece = this.board.getPieceAt( this.cell.x, y );
				if ( piece != null ) {
					legal = false;
				}

			}

		}

		// See if there is an opponents piece
		if ( legal ) {

			piece = this.board.getPieceAt( to.x, to.y );
			if ( piece != null ) {

				// Only legal if we are not moving onto a piece of the same colour (i.e. we are taking this piece)
				legal = piece.colour != this.colour

			}

		}

		return legal;

	}

});
