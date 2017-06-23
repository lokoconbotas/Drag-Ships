$(function(){
	drawGrid(10);
	activateShips();
})

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var numbers = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];


function activateShips(){

		$(".ship")
		.draggable( {
			containment: '.dragZone',
			stack: '.shipContent td',
			cursor: 'move',
			revert: true
		} );

}


function drawGrid (cells) {
	
	for (var i = 0; i < (cells + 1); i++) {
		var row = $("<tr class='rows'></tr>");

		for (var j = 0; j < (cells + 1); j++)
			if (i == 0) {
				row.append("<td class='cells heads'>" + numbers[j] + "</td>");
			} else {
				if (j == 0) {
					row.append("<td class='cells heads'>" + letters[i - 1] + "</td>");
				} else {
					var cell = $("<td class='cells' id='" + letters[i - 1] + numbers[j] + "'></td>")
					.droppable( {
						accept: '.shipContent div',
						hoverClass: 'hovered',
						drop: dragShip
					} );

					row.append(cell);
				}
			}
			$(".grid").append(row);
		}
	};


	function dragShip( event, ui ) {

		ui.draggable.draggable( 'disable' );
		$(this).droppable( 'disable' );
		ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
		ui.draggable.draggable( 'option', 'revert', false );
		ui.draggable.draggable("option", "grid", [31, 31]);

		calcCells($(this), ui);
	}





	function calcCells(cell, ui){
		var size = Number(ui.draggable.attr('data-size'));
		var lett = cell.attr('id').substring(0, 1);
		var num = Number(cell.attr('id').substring(1, 3));

		var text = "";;

		for (var i = 0; i < size; i++) {
			var customId = (lett + (num + i));
			text += (customId + '\n'); 
		}

		alert(text);


	}








