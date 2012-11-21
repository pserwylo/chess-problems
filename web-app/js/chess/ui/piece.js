var PieceUi = klass( function( piece, boardUi ) {

	this.piece = piece;
	this.boardUi = boardUi;
	this.dom = null;

	this.init();

}).methods({

	init: function() {

		var self = this;

		var numberClass = "";
		if ( typeof this.piece.getNumber() !== "undefined" )
		{
			numberClass = "number-" + this.piece.getNumber();
		}

		this.dom = jQuery( "<div class='chess-piece " + this.piece.colour + " " + this.piece.getType() + " " + numberClass + "'></div>" );
		this.dom.draggable({

			revert: true,

			// Can't assign the function directly, because 'this' will become the dom object rather than the piece object
			// once the handler is called...
			drag: function( event, ui ) { self.onDrag( event, ui ); },
			start: function( event, ui ) { self.onStartDrag( event, ui ); },
			stop: function( event, ui ) { self.onStopDrag( event, ui ); }

		});
	},

	/**
	 * Absolute position of the dom element (not cell position).
	 * @param offsetTop
	 * @param offsetLeft
	 */
	setOffset: function( offsetTop, offsetLeft ) {

		this.dom.offset( { top: offsetTop, left: offsetLeft } );

	},

	highlightBoard: function() {

		for ( var y = 0; y < 8; y ++ ) {
			for ( var x = 0; x < 8; x ++ ) {

				var cell = this.boardUi.board.getCell( x, y );
				if ( this.piece.canMove( cell ) ) {

					var pieceAt = this.boardUi.board.getPieceAt( x, y );
					var takeable = ( pieceAt != null && pieceAt.colour != this.piece.colour );

					this.boardUi.highlightCell( cell, takeable );
				}

			}
		}

	},

	onDrag: function( event, ui ) {



	},

	onStartDrag: function( event, ui ) {

		this.highlightBoard();

	},

	onStopDrag: function( event, ui ) {

		this.boardUi.unhighlightAll();

	}

});
