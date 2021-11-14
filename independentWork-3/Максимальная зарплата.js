let salaries = {
	'John':500,
	'Pete':300,
	'Mary':250
}

function topSalary(salaries){
let maxSalary=null;
let nameMaxSalary=null;
	for(let [name,salary] of Object.entries(salaries)){
		if(salary>maxSalary)
{maxSalary=salary;
nameMaxSalary=name};
	}
return nameMaxSalary;
}
topSalary(salaries);