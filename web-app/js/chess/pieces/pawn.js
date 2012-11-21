var Pawn = Piece.extend( function( board, colour ) {

}).statics({

	TYPE: "pawn"

}).methods({

	getType: function() {

		return Pawn.TYPE;

	},

	canMove: function( to ) {

		// Most moves are illegal, we'll try to prove the ones that are legal...
		var legal = false;

		var direction = 1;
		var startRow = 1;
		if ( this.colour == Piece.BLACK ) {
			direction = -1;
			startRow = 6;
		}

		var piece;

		if ( this.cell.x != to.x ) {

			// Can't move left or right...

			if (
				Math.abs( this.cell.x - to.x ) == 1 // ... unless we are moving only one square to the left or right...
				&& this.cell.y + direction == to.y  // ... one square forward...
			) {

				// ...and taking an opponents piece...
				piece = this.board.getPieceAt( to.x, to.y );
				if ( piece != null && piece.colour != this.colour ) {
					legal = true;
				}

			}

		} else {

			// Can only move forward one cell, unless we are on the first row, in which case we can move two...
			var withinRange = false;
			var maxDistance = this.cell.y == startRow ? 2 * direction : 1 * direction;
			if ( direction < 0 ) {
				withinRange = to.y < this.cell.y && to.y - this.cell.y >= maxDistance;
			} else {
				withinRange = to.y > this.cell.y && to.y - this.cell.y <= maxDistance;
			}

			if ( withinRange ) {

				// Can't move forward if there is a piece there (doesn't matter who's)...
				piece = this.board.getPieceAt( to.x, to.y );
				if ( piece == null ) {
					legal = true;
				}

			}

		}

		return legal;

	}

});
