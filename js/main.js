var maVar = "Salut les amis!";

console.log("length : " + maVar.length);
console.log("ToUpperCase : " + maVar.toUpperCase());
console.log("ToLowercase : " + maVar.toLowerCase());
console.log("charAt : " + maVar.charAt(4));
console.log("substring : " + maVar.substring(8));
console.log("LastIndexOf : " + maVar.lastIndexOf('les'));
console.log("Slice : " + maVar.slice(2,4));
console.log("substr : " + maVar.substr(2,4));

console.log(typeof(maVar));

var monObject = {
	mot : "coucou",
	somme : 445
}

console.log("coucou","toit",5+4);

console.log(monObject);
console.log("monObject : " + monObject);
console.log("monObject : ", monObject());

var nbVoiture = prompt("Combien de voiture");
console.log("vous avez " + nbVoiture + " voitures");

var annee = prompt("En quelle année etes-vous né ?");

if (annee >= 1998)
{
	console.log("vous etes mineur!, vous ne pouvez pas aller sur ce site");
}
else
{
	console.log("Vous etes majeur!, vous pouvez aller sur ce site");
}

var currentYear = new Date()
console.log(currentYear)

var annee = prompt("En quelle année etes-vous né ?");
console.log(annee)

var age = (currentYear - annee);
console.log(age)

if (age >= 18)// a corriger
{
	console.log("vous etes majeur!, vous ne pouvez pas aller sur ce site");
}
else 
{
	console.log("Vous etes mineur!, vous pouvez aller sur ce site");
}


 nombre = Math.ceil(Math.random()*10);
 var jeu = true;
 var i = 0;

	while(jeu)
	{
		i = i + 1;
		var chance = prompt("Entrez un nombre entre 1 et 10");
		console.log(chance)

		if(nombre > chance)
		{
			console.log("c'est plus grand !");
		}
		else if(nombre < chance)
		{
			console.log("c'est plus petit !");
		}
		else
		{
			console.log("c'est gagner, Félicitations en ", + i," fois !!!");
			jeu = false;

		}
	}


des = Math.ceil(Math.random()*6);// a corriger
var jeu = true;
var caseLievre = 0;
var caseTortue = 0;

		var choix = prompt("Qui va gagner ?");
		console.log(choix);

	while(jeu)
	{
		while(caseTortue || caseLievre != 6)
		{

			if(des == 6)
			{
				caseLievre = caseLievre + 6;
				caseTortue = caseTortue + 1;
				console.log("le lapin à gagné ! ");
			}
			else
			{
				caseTortue = caseTortue + 1;
				
			}

		caseTortue || caseLievre === 6;
		caseTortue = CaseTortue ++1;
		caseLievre = caseLievre ++1;

		}

	jeu = false;

	}
	

	var Tvoiture=[],voiture

	while(voiture = prompt("entrez un modele de voiture?"));
	{
	Tvoiture.push(voiture);
	}

	if(Tvoiture.length > 0)
	{
	alert("Tvoiture.join('')");
	}
	else
	{
	alert("Aucune voiture");
	}
 
	

	// Approche DOM 

	document.getElementById("maDiv").innerHTML = "<p>Mon super texte</p>";

	document.getElementById("maDiv2").innerHTML = "<p>Mon super texte 2</p>";




	// changement de lien en js
document.getElementById("superDIV").innerHTML = '<a href=www.google.com>nouveau lien</a>';

	// mettre une citation entre blockquote
console.log(document.getElementById("superDiv").innerHTML);
var c = document.getElementById("superDiv").innerHTML; 
document.getElementById("superDiv").innerHTML = 'citation d\'Oscar Wilde<blockquote>' + c + '</blockquote>';
console.log(c);

	
x = document.querySelector("#superDIV").getElementsByTagName('a');

for (i=0;i<5;i++)
console.log(x[i]);


Tcheckbox = document.querySelectorAll('input[type = checkbox]');
console.log(Tcheckbox);

for (var i in Tcheckbox)
{
    Tcheckbox[i].checked = true;
}



