// integer >= 0 and < max
function random_int (max) {
  return Math.floor(max * Math.random());
}

function choose_random(list) {
	return list[random_int(list.length)];
}

function pluralize(noun, count) {
	if (count == 1) {
		return noun;
	} else {
		if (noun.indexOf(" ") >= 0) {
			var np = noun.split(" ");
			return pluralize(np[0], count) + " " + np.slice(1).join(" ");
		} else {
			return noun + "s";
		}
	}
}

function print_worksheet () {
	window.print();
}

function first_letter (x) {
  return x.substring(0, 1);
}

function vowelp(l) {
	return /[aeiou]/.match(l);
}

function indeterminate_article(np) {
  return vowelp(first_letter(np)) ? "an" : "a";
}
