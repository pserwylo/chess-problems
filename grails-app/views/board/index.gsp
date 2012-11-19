<%--
  Created by IntelliJ IDEA.
  User: pete
  Date: 19/11/12
  Time: 1:12 PM
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
	<head>
		<meta name="layout" content="main">

		<script type="text/javascript">

			window.onload = function()
			{

				var board = new Board();
				board.placeDefaultPieces();

				var whiteRook1 = board.pieceManager.getPiece( Piece.WHITE, Rook.TYPE, 0 );
				var whiteRook2 = board.pieceManager.getPiece( Piece.WHITE, Rook.TYPE, 1 );
				var blackRook1 = board.pieceManager.getPiece( Piece.BLACK, Rook.TYPE, 0 );
				var blackRook2 = board.pieceManager.getPiece( Piece.BLACK, Rook.TYPE, 1 );

				blackRook1.cell = board.getCell( 3, 0 );

				var boardUi = new BoardUi( board, '#chess-board' );
				boardUi.render();

			}

		</script>

	</head>
	<body>

		<div id="chess-board">

		</div>

	</body>
</html>