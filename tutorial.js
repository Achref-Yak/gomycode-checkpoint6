

class Human {
	name = "Achref"
	job = "Engineer"
	skills = ["python","javascript","django"];


	getJob(Job){
		this.job = Job; 
	}
	learnNewSkill(skl)
	{
		this.skills.push(skl)
	}
	forgetSkill(skl)
	{
		this.skills.pop(skl);
	}
	leaveJob()
	{
		this.job= "Unemployed";
	}



}



class Student extends Human {


}

