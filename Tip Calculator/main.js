
const $bill = $('#bill-amount-field');
const $percentTip = $('#percent-tip-field');
const $resultsRow = $('#results-row');


$(document).ready(function(){
	$resultsRow.hide();
  	$('#calculate-button').click(function(){
  		console.log("Calculating...");
		var bill = $bill.val();
		var percentTip = $percentTip.val();
		if(!bill || isNaN(bill)) {
			console.log("Bill is not a number");
		} else if(!percentTip || isNaN(percentTip)) {
			console.log("Percent tip not a number");
		} else {
			bill = parseFloat(bill);
			percentTip = parseFloat(percentTip);
			const tip = bill*percentTip/100;
			const total = bill + tip;
			console.log('Tip: '+tip);
			console.log('Total: '+total);
			$('#tip-result').html(tip);
			$('#total-result').html(total);
			if(!$resultsRow.is(':visible')) {
  				$resultsRow.show();
  			}
			// $resultsRow.slideDown('fast', 'linear');
		}
  	});
});
