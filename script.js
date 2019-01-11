var output=document.querySelector('output');

const inventors =[
	{first:'Johannes',last:'Kepler',year:1571,passed:1630},
	{first:'Nicolaus',last:'Copernicus',year:1473,passed:1543},
	{first:'Max',last:'Planck',year:1858,passed:1947},
	{first:'Thomas',last:'Edison',year:1847,passed:1931},
	{first:'Graham',last:'Bell',year:1847,passed:1922},
	{first:'Leonardo',last:'Da Vinci',year:1452,passed:1519},
	{first:'Henry',last:'Ford',year:1863,passed:1947},
	{first:'Galileo',last:'Galilei',year:1564,passed:1642}
];

const people = ['Brucker, John''Beck, Glenn','Becker, Carl','Buckett, Samuel',
				'Beddoes, Mick','Beethoven, Ludwig','Begin, Menachem',
				'Belloc, Hilaire','Berry, Halle','Biden, Joseph'];


//Array.prototype.filter()
//1. Filter the list of inventors for those who were born in the 1500's

const filtered = inventors.filter(inventor=>{
	return (inventor.year>=1500)&&(inventor.year<1600)?true:false;
})
console.table(filtered);

//or simpler
const filtered = inventors.filter(inventor=>(inventor.year>=1500)&&(inventor.year<1600));


//---------------------------------------------------------

//Array.prototype.map()
//2. Give us an array of the inventors first and last names

const mapped = inventors.map(inventor=>[inventor.first,inventor.last]);

//---------------------------------------------------------


//Array.prototype.sort()
//3. Sort the inventors by birthdate,oldest to youngest

const sorted = inventors.sort((invA,invB)=>{
	return invA.year - invB.year;

// Sort the inventors by birthdate, youngest to oldest
const revSorted = inventors.sort((invA,invB)=>{
	return invB.year-invA.year;
})
// Sort the inventors alphabetically by first name
const alphaSort = inventors.sort((invA,invB)=>{
	if(invB.first>invA.first){return -1;}
	else{return 1};
});
// Sort the inventors alphabetically by last name
const alphaSortLast = inventors.sort((invA,invB)=>{
	if(invB.last>invA.last){return -1;}
	else return 1;
})

//-------------------------------------------------------


//Array.prototype.reduce()
//4. How many years did all the inventors live?
const yearsLived = inventors.reduce((total,currentInv)=>{
	return total+currentInv.passed-currentInv.year;
},0);
//------------------------------------------

//5. Sort the inventors by years lived (less to more)

const oldest = inventors.sort((a,b)=>{
	return (a.passed-a.year) - (b.passed-b.year);
});

// Sort the inventors by years lived (more to less with).

const oldest2 = inventors.sort((a,b)=>{
	return (b.passed-b.year) - (a.passed-a.year);
});

//other way

const oldest3 = inventors.sort((a,b)=>{
	if((a.passed-a.year)>(b.passed-b.year))
		return -1;
	else return 1;
})

//other other way and keeping the 'lived' property in object
const oldest4 = inventors.sort((a,b)=>{
	a.lived = (a.passed-a.year);
	b.lived = (b.passed-b.year);
	return b.lived - a.lived;
});

// Sort the inventors in random order
const randomSort = inventors.sort((a,b)=>{
	return (0.5-Math.random());
})

//6. Create a list of Boulevards in Paris that contain 'de' anywhere
//in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//My try... not the best practice due to forEach().

var container = document.querySelector('.mw-category');
var items = container.querySelectorAll('a');
//or
//var container = document.querySelector('#mw-pages a') 
//which does both of the above.
var mapped = [];
items.forEach(item=>{
   if (item.innerText.includes('de'))
       mapped.push(item.innerText);
})


//Second try.Much better.
var items = document.querySelectorAll('.mw-category a');
//conversion of NodeList into an Array
items = [...items];
//or
//items = Array.from(items);
var text = items.map(item=>item.textContent);
var filtered = text.filter(item=>item.includes('de'));
//----------------------------------------------------

//Best 
var items = document.querySelectorAll('.mw-category a');
items = Array.from(items);
var text = items
			.map(item=>item.textContent)
			.filter(text=>text.includes('de'));
//----------------------------------------------------

//7. Sort exercise
//Sort the people alphabetically by last name

var splittedNames = people.map(person=>person.split(', '));
var sorted = splittedNames.sort((a,b)=>{
					if (a[1]<b[1])
						return -1;
					else return 1;
				});

//or without second variable
var splittedAndSorted = people
					.map(person=>person.split(', '))
					.sort((a,b)=>{
						if (a[0]<b[0])
							return -1;
						else return 1;
					})


//Another solution which returns the array item as is
var alpha = people.sort((a,b)=>{
	var [aLast,aFirst] = a.split(', ');
	var [bLast,bFirst] = b.split(', ');
	return aLast > bLast? 1 : -1;
})

//----------------------------------------------------

						
//8. Reduce Exercise
//Sum up the instances of each of these

const data = ['car','car','truck','truck','bike','walk','car','van','bike','walk','car','van','car','truck'];

const instaSum = data.reduce((total,transport)=>{
	total[transport] = total[transport]+1 || 1;
	return total;
},{});
console.table(instaSum);