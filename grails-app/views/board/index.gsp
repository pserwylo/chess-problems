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

			var board;
			var boardUi;

			window.onload = function()
			{

				board = new Board().placeDefaultPieces();

				board.pieceManager.getPiece( Piece.WHITE, Pawn.TYPE, 0 ).cell = board.getCell( 0, 5 );
				board.pieceManager.getPiece( Piece.WHITE, Pawn.TYPE, 3 ).cell = board.getCell( 3, 3 );
				board.pieceManager.getPiece( Piece.WHITE, Pawn.TYPE, 5 ).cell = board.getCell( 5, 5 );

				boardUi = new BoardUi( board, '#chess-board' ).render();

			}

		</script>

	</head>
	<body>

		<div id="chess-board">

		</div>

	</body>
</html>