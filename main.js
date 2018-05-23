//--Banking/Accounting System Application ----////

//--Arrow Function in EcmaScript --///
emp_info = () => {
    // Variable Initialization Using EcmaScript ---///
    let EmployeeName = prompt("Enter Your Name");
    let EmployeeFullName = prompt("Enter Your Full Name");
    let Employee_FatherName = prompt("Enter Your Father Name");
    let NIC =+prompt("Enter Your NIC no");
    let attendence =+prompt("Enter Your Attendence Out of 100 Days");
    let Over_time = window.confirm("Click Ok if you did Over_time");
    let Emp_fix_sal = 20000;
    let Emp_Advance = 10000;
    let Emp_trorilling_allowance= 13000;
    let Emp_Bonus= 12000;
    let Emp_Bonus_permon=2000;
    let Emp_tax_permon=1600;
    let total_salary;
    let sal_over = Emp_fix_sal-Emp_tax_permon-Emp_Bonus+Emp_Advance+Emp_trorilling_allowance; 
    let t_sal = Emp_fix_sal-Emp_tax_permon+Emp_Bonus_permon+Emp_trorilling_allowance+Emp_Bonus;
    {
        ///-- Print The Results of Above Inputs ---////   
        console.log('Your Name : '+EmployeeName);
        console.log('Your Full Name : '+EmployeeFullName); 
        console.log('Your Father Name : '+Employee_FatherName);
        console.log('Your NIC No : '+NIC);

        ////--- If-Else Condition for overtime and calculate the salary with overtime and without overtime---///
    if (Over_time == false)
    {
        
        console.log('Your Salary would be without Overtime :'+sal_over);
    }
     
    else
     {
       
        console.log("Your Salary Including Overtime is : " + t_sal)
    }
}
    {
        if (attendence < 75){
        let sal = Emp_fix_sal-Emp_tax_permon+Emp_trorilling_allowance; 
        console.log('Your Salary would be :'+sal);
        }
        else {
        let t_sal = Emp_fix_sal-Emp_tax_permon+Emp_Bonus_permon+Emp_trorilling_allowance+Emp_Bonus;
        console.log("Your Salary is : " + t_sal)
        }
    }    

}
///-calling Function---///
emp_info();