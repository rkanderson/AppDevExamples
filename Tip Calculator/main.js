

// Fires off when the document is loading and code is ready to be run!
$(document).ready(function(){

	// Make a few jQuery objects to use later. Anything that starts with a $ is a jQuery object.
	const $bill = $('#bill-amount-field');
	const $percentTip = $('#percent-tip-field');
	const $resultsRow = $('#results-row');

	// Let's make the results row (the part that says Tip:__ and Total:__) hidden at the start.
	$resultsRow.hide();

	// Wait for calculate button to be clicked
  	$('#calculate-button').click(function(){
  		console.log("Calculating..."); //<--Console output is optional, but helpful for debugging.
		var bill = $bill.val(); // grab what's typed into the bill field
		var percentTip = $percentTip.val(); // grab what's typed into the percent tip field

		// Check if something is typed in for both AND they're both numbers
		if(!bill || isNaN(bill)) {
			console.log("Bill is not a number");
		} else if(!percentTip || isNaN(percentTip)) {
			console.log("Percent tip not a number");
		} else {
			// If all is well, we can calculate the tip and show it.
			bill = parseFloat(bill); // Convert the variables' types from strings(words) to floats(decimals)
			percentTip = parseFloat(percentTip);
			const tip = bill*percentTip/100;
			const total = bill + tip;
			console.log('Tip: '+tip);
			console.log('Total: '+total);
			$('#tip-result').html(tip); // .html() set's the inner html of a tag.
			$('#total-result').html(total); // But we can use it this way to just make a tag say something.

			// If the results row is still hidden, show it.
			if(!$resultsRow.is(':visible')) {
  				$resultsRow.show();
  			}
		}
  	});
});
