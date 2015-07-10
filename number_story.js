function NumberStory () {
	this.init();
}

NumberStory.prototype.init = function () {
  this.template = choose_random(Templates);
	this.template 
	this.items = {};
	var actor = choose_random(People);
	this.items["Name"] = actor.name;
	this.items["Pronoun"] = actor.Pronoun;
	this.items["pronoun"] = actor.pronoun;
	this.items["possessive"] = actor.possessive;

	var q1 = 1 + random_int(5);
	this.items["q1"] = q1;
	this.items["q2"] = q1 + 2 + random_int(5);

	var thing = choose_random(Things);
	this.items["whole"] = thing.whole;
	this.items["ia"] = indeterminate_article(thing.whole);
	this.items["part"] = pluralize(thing.part, q1);
}

NumberStory.prototype.toHtml = function () {
	return this.template.evaluate(this.items);
}


function Person (name, isMale) {
	this.name = name;
	this.pronoun = isMale ? "he" : "she";
	this.Pronoun = this.pronoun.capitalize();
	this.possessive = isMale? "his" : "her";
}


var People = [
	new Person("Bill", true),
	new Person("Rachel", false),
	new Person("Kirsty", false),
	new Person("Ochiro", false),
	new Person("Kiki", false),
	new Person("Ruben", true)];

function PartWhole (part, whole) {
	this.part = part;
	this.whole = whole;
}

var Things = [
	new PartWhole("apple", "apple pie"),
	new PartWhole("screw", "robot"),
	new PartWhole("flower", "boquet"),
	new PartWhole("feather", "rooster"),
	new PartWhole("cup of flour", "loaf of bread"),
	new PartWhole("block", "tower"),
	new PartWhole("brick", "wall"),
	new PartWhole("pillow", "wild rumpus")
];

var Templates = [
	new Template("#{Name} has #{q1} #{part}.  #{Pronoun} needs #{q2} to make #{ia} #{whole}.  How many more does #{pronoun} need?"),
	new Template("#{Name} has #{q1} #{part}.  #{Pronoun} needs #{q2} more to finish #{possessive} #{whole}.  How many will #{pronoun} have then?"),
	new Template("#{Name} made #{ia} #{whole}.  When #{pronoun} started, #{pronoun} had #{q2} #{part}.  When #{pronoun} finished, #{pronoun} had #{q1} left.  How many did #{pronoun} use?")
];
