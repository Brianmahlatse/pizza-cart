// This function takes an array of sales data and returns the department with the highest total sales
export default function mostProfitableDepartment(salesData) {
    let department;
    let Departments = [];
    let DepartmentSale = 0;
    let highSale = 0;

    // Extract the unique department names from the sales data
    for (let mysales of salesData) {
        if (!Departments.includes(mysales.department)) {
            Departments.push(mysales.department);
        }
    };

    // Calculate the total sales for each department and track the highest total sales and corresponding department
    for (let i = 0; i < Departments.length; i++) {
        for (let mysales of salesData) {
            if (Departments[i] === mysales.department) {
                DepartmentSale += mysales.sales;
            }
        };

        // Update the highest total sales and corresponding department
        if (DepartmentSale >= highSale) {
            highSale = DepartmentSale;
            department = Departments[i];
        }

        // Reset the department sale count for the next department
        DepartmentSale = 0;
    }

    // Return the department with the highest total sales
    return department;
};
