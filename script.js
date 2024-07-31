var countQues = 0;
var lang;
var score = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

var Numericquestions = [
  {
    question: "Multiply 2/3 by 3/4.",
    choices: ["1/2", "2/3", "1/4", "1/6"],
    answer: 1, // Corrected to 1/2
    explanation:
      "To multiply fractions, multiply the numerators and the denominators: (2 * 3) / (3 * 4) = 6/12, which simplifies to 1/2.",
  },
  {
    question: "Divide 5/6 by 2/3.",
    choices: ["5/4", "2/3", "5/6", "3/4"],
    answer: 1,
    explanation:
      "To divide fractions, multiply by the reciprocal of the divisor: (5/6) * (3/2) = 15/12, which simplifies to 5/4.",
  },
  {
    question:
      "A teacher has 400 units of 6% phosphoric acid solution and an unlimited supply of 12% phosphoric acid solution. How many units of the latter must she add to the former to produce a 10% phosphoric acid solution?",
    choices: ["800", "850", "900", "950"],
    answer: 3,
    explanation:
      "To solve this, use the formula for mixing solutions: C1V1 + C2V2 = C3(V1 + V2), where C1 is the concentration of the first solution, V1 is its volume, C2 is the concentration of the second solution, V2 is its volume, and C3 is the concentration of the final solution. In this case: 0.06 * 400 + 0.12 * V2 = 0.10 * (400 + V2). Solving this gives V2 = 900 units.",
  },
  {
    question:
      "A shirt is sold for P300 after a 25% discount. What was the original price?",
    choices: ["P350", "P375", "P400", "P320"],
    answer: 3,
    explanation:
      "To find the original price, use the formula: Original Price = Discounted Price / (1 - Discount Rate). Here, Discount Rate = 25% or 0.25, and Discounted Price = P300. Therefore, Original Price = 300 / (1 - 0.25) = 300 / 0.75 = P400.",
  },
  {
    question: "If you buy 3 apples for P45, what is the cost of 7 apples?",
    choices: ["P105", "P95", "P90", "P100"],
    answer: 1,
    explanation:
      "First, find the cost per apple: Cost per Apple = Total Cost / Number of Apples = 45 / 3 = P15. Then, multiply this by 7: Cost for 7 Apples = 15 * 7 = P105.",
  },
  {
    question:
      "A train travels at a speed of 60 km/h. How far will it travel in 3.5 hours?",
    choices: ["180 km", "200 km", "210 km", "220 km"],
    answer: 3,
    explanation:
      "Use the formula: Distance = Speed * Time. Here, Speed = 60 km/h and Time = 3.5 hours. Therefore, Distance = 60 * 3.5 = 210 km.",
  },
  {
    question:
      "If a product's price increases from P150 to P180, what is the percentage increase?",
    choices: ["15%", "20%", "25%", "30%"],
    answer: 2,
    explanation:
      "Percentage Increase = [(New Price - Old Price) / Old Price] * 100. Here, New Price = P180 and Old Price = P150. Therefore, Percentage Increase = [(180 - 150) / 150] * 100 = 30 / 150 * 100 = 20%.",
  },
  {
    question: "Subtract 275 from 432.",
    choices: ["157", "152", "162", "167"],
    answer: 1,
    explanation: "Simply subtract: 432 - 275 = 157.",
  },
  {
    question: "Multiply 56 by 8.",
    choices: ["345", "456", "436", "448"],
    answer: 4,
    explanation: "Simply multiply: 56 * 8 = 448.",
  },
  {
    question: "Divide 500 by 25.",
    choices: ["25", "20", "15", "30"],
    answer: 2,
    explanation: "Simply divide: 500 / 25 = 20.",
  },
  {
    question: "Find the average of 12, 15, 18, and 20.",
    choices: ["15.75", "15", "16", "16.25"],
    answer: 4,
    explanation:
      "Average = (Sum of Numbers) / (Number of Numbers). Here, Sum = 12 + 15 + 18 + 20 = 65 and Number of Numbers = 4. Therefore, Average = 65 / 4 = 16.25.",
  },
  {
    question: "If 5 notebooks cost P75, what is the cost of one notebook?",
    choices: ["P20", "P15", "P10", "P25"],
    answer: 2,
    explanation:
      "Cost per Notebook = Total Cost / Number of Notebooks = 75 / 5 = P15.",
  },
  {
    question:
      "A car uses 8 liters of gasoline to travel 100 km. How many liters are needed to travel 250 km?",
    choices: ["20 liters", "25 liters", "18 liters", "22 liters"],
    answer: 1,
    explanation:
      "Use the formula: Liters Needed = (Liters per 100 km) * (Distance / 100). Here, Liters per 100 km = 8 and Distance = 250 km. Therefore, Liters Needed = 8 * (250 / 100) = 8 * 2.5 = 20 liters.",
  },
  {
    question: "Solve for x: 2x + 3 = 11.",
    choices: ["x = 3", "x = 4", "x = 5", "x = 6"],
    answer: 2,
    explanation:
      "Subtract 3 from both sides: 2x = 11 - 3 = 8. Then, divide by 2: x = 8 / 2 = 4.",
  },
  {
    question: "If y = 3x + 5, find y when x = 4.",
    choices: ["17", "18", "19", "20"],
    answer: 1,
    explanation:
      "Substitute x = 4 into the equation: y = 3(4) + 5 = 12 + 5 = 17.",
  },
  {
    question: "Solve for x in the equation: 4x - 7 = 21.",
    choices: ["x = 5", "x = 7", "x = 6", "x = 8"],
    answer: 2,
    explanation:
      "Add 7 to both sides: 4x = 21 + 7 = 28. Then, divide by 4: x = 28 / 4 = 7.",
  },
  {
    question: "Simplify the expression: 3(x + 4) - 2(x - 5).",
    choices: ["x + 14", "x + 12", "x + 22", "x + 18"],
    answer: 3,
    explanation:
      "Distribute and combine like terms: 3(x + 4) - 2(x - 5) = 3x + 12 - 2x + 10 = x + 22.",
  },
  {
    question: "If a + b = 10 and a - b = 4, find the values of a and b.",
    choices: ["a = 7, b = 3", "a = 6, b = 4", "a = 8, b = 2", "a = 5, b = 5"],
    answer: 1,
    explanation:
      "Add the two equations: (a + b) + (a - b) = 10 + 4 = 14, which gives 2a = 14, so a = 7. Substitute a = 7 into the first equation: 7 + b = 10, so b = 3.",
  },
  {
    question: "Solve the inequality: 5x - 3 < 12.",
    choices: ["x < 3", "x < 4", "x < 5", "x < 2"],
    answer: 1,
    explanation:
      "Add 3 to both sides: 5x < 12 + 3 = 15. Then, divide by 5: x < 15 / 5 = 3.",
  },
  {
    question: "What is the value of x in the equation: x/5 + 3 = 7?",
    choices: ["x = 25", "x = 20", "x = 15", "x = 10"],
    answer: 2,
    explanation:
      "Subtract 3 from both sides: x/5 = 7 - 3 = 4. Then, multiply by 5: x = 4 * 5 = 20.",
  },
  {
    question: "Simplify: 6x - 4x + 3x.",
    choices: ["3x", "6x", "4x", "5x"],
    answer: 4,
    explanation: "Combine like terms: 6x - 4x + 3x = 5x.",
  },
  {
    question: "If 2x = 14, what is the value of x?",
    choices: ["x = 8", "x = 6", "x = 7", "x = 9"],
    answer: 3,
    explanation: "Divide by 2: x = 14 / 2 = 7.",
  },
  {
    question: "Solve for y in the equation: 3y + 2 = 8y - 7.",
    choices: ["y = 2", "y = 3", "y = 1.8", "y = 4"],
    answer: 3,
    explanation:
      "Subtract 3y from both sides: 2 = 5y - 7. Add 7 to both sides: 9 = 5y. Then, divide by 5: y = 9 / 5 = 1.8.",
  },
  {
    question:
      "What is the perimeter of a rectangle with length 12 cm and width 5 cm?",
    choices: ["34 cm", "32 cm", "30 cm", "36 cm"],
    answer: 1,
    explanation:
      "Use the formula: Perimeter = 2 * (Length + Width). Here, Length = 12 cm and Width = 5 cm. Therefore, Perimeter = 2 * (12 + 5) = 2 * 17 = 34 cm.",
  },
  {
    question:
      "Calculate the area of a triangle with base 10 cm and height 6 cm.",
    choices: ["30 cm^2", "40 cm^2", "50 cm^2", "60 cm^2"],
    answer: 1,
    explanation:
      "Use the formula: Area = 0.5 * Base * Height. Here, Base = 10 cm and Height = 6 cm. Therefore, Area = 0.5 * 10 * 6 = 30 cm^2.",
  },
  {
    question:
      "Find the circumference of a circle with a radius of 7 cm. (Use pie = 3.14)",
    choices: ["44 cm", "43.96 cm", "43.89 cm", "42 cm"],
    answer: 2,
    explanation:
      "Use the formula: Circumference = 2 * pie * Radius. Here, Radius = 7 cm and pie = 3.14. Therefore, Circumference = 2 * 3.14 * 7 = 43.96 cm.",
  },
  {
    question: "A square has a side length of 8 cm. What is its area?",
    choices: ["72 cm^2", "68 cm^2", "64 cm^2", "74 cm^2"],
    answer: 3,
    explanation:
      "Use the formula: Area = Side^2. Here, Side = 8 cm. Therefore, Area = 8^2 = 64 cm^2.",
  },

  {
    question:
      "A rectangle has a perimeter of 30 cm and a width of 5 cm. What is the length?",
    choices: ["10 cm", "12 cm", "15 cm", "8 cm"],
    answer: 1,
    explanation:
      "Use the formula: Perimeter = 2 * (Length + Width). Here, Perimeter = 30 cm and Width = 5 cm. Therefore, 30 = 2 * (Length + 5). Solving for Length: 30 = 2 * Length + 10, so 20 = 2 * Length, and Length = 10 cm.",
  },

  {
    question:
      "A pie chart shows that 25% of a budget is spent on marketing. If the total budget is P200,000, how much is spent on marketing?",
    choices: ["P55,000", "P40,000", "P60,000", "P50,000"],
    answer: 4,
    explanation:
      "Amount Spent on Marketing = Total Budget * Percentage Spent. Here, Percentage Spent = 25% or 0.25. Therefore, Amount Spent = 200,000 * 0.25 = P50,000.",
  },
  {
    question:
      "A bar graph shows sales of P500, P600, P550, and P650 for four months. What is the average monthly sales?",
    choices: ["P582", "P575", "P585", "P590"],
    answer: 2,
    explanation:
      "Average Sales = (Sum of Sales) / (Number of Months). Here, Sum of Sales = 500 + 600 + 550 + 650 = 2300 and Number of Months = 4. Therefore, Average Sales = 2300 / 4 = P575.",
  },
  {
    question:
      "In a survey of 150 people, 90 preferred tea and the rest preferred coffee. What percentage preferred coffee?",
    choices: ["35%", "30%", "40%", "25%"],
    answer: 3,
    explanation:
      "Number of People Preferring Coffee = Total People - People Preferring Tea = 150 - 90 = 60. Percentage Preferring Coffee = (60 / 150) * 100 = 40%.",
  },
  {
    question:
      "A line graph shows the temperature changes from 20°C to 25°C over 5 days. What is the average daily increase in temperature?",
    choices: ["1°C", "0.8°C", "1.2°C", "1.5°C"],
    answer: 1,
    explanation:
      "Average Daily Increase = (Total Temperature Change) / (Number of Days). Here, Total Temperature Change = 25°C - 20°C = 5°C and Number of Days = 5. Therefore, Average Daily Increase = 5 / 5 = 1°C.",
  },
  {
    question:
      "A table shows a company's profits as P120,000 in January and P150,000 in February. What is the percentage increase?",
    choices: ["15%", "20%", "30%", "25%"],
    answer: 4,
    explanation:
      "Percentage Increase = [(New Profit - Old Profit) / Old Profit] * 100. Here, New Profit = P150,000 and Old Profit = P120,000. Therefore, Percentage Increase = [(150,000 - 120,000) / 120,000] * 100 = 30,000 / 120,000 * 100 = 25%.",
  },
  {
    question:
      "If a survey shows 60% of respondents like chocolate and 25% like vanilla, what percentage like neither?",
    choices: ["10%", "20%", "15%", "25%"],
    answer: 3,
    explanation:
      "Percentage Liking Neither = 100% - (Percentage Liking Chocolate + Percentage Liking Vanilla). Here, Percentage Liking Chocolate = 60% and Percentage Liking Vanilla = 25%. Therefore, Percentage Liking Neither = 100% - (60% + 25%) = 15%.",
  },
  {
    question:
      "A chart indicates that 40% of students scored A, 35% scored B, and the rest scored C. If there are 200 students, how many scored C?",
    choices: ["50", "45", "40", "60"],
    answer: 1,
    explanation:
      "Percentage Scoring C = 100% - (Percentage Scoring A + Percentage Scoring B). Here, Percentage Scoring A = 40% and Percentage Scoring B = 35%. Therefore, Percentage Scoring C = 100% - (40% + 35%) = 25%. Number of Students Scoring C = 25% of 200 = 0.25 * 200 = 50.",
  },
  {
    question:
      "A survey reports that 30 out of 200 people commute by bike. What is the ratio of people who commute by bike to those who don't?",
    choices: ["3:1", "1:6", "1:7", "3:17"],
    answer: 4,
    explanation:
      "Number of People Not Commuting by Bike = Total People - People Commuting by Bike = 200 - 30 = 170. Ratio of People Commuting by Bike to Those Who Don't = 30:170. Simplify the ratio: 30 / 10 : 170 / 10 = 3:17.",
  },
  {
    question:
      "A line graph shows a drop in sales from P500 to P350. What is the percentage decrease?",
    choices: ["25%", "30%", "35%", "40%"],
    answer: 2,
    explanation:
      "Percentage Decrease = [(Old Sales - New Sales) / Old Sales] * 100. Here, Old Sales = P500 and New Sales = P350. Therefore, Percentage Decrease = [(500 - 350) / 500] * 100 = 150 / 500 * 100 = 30%.",
  },
  {
    question:
      "A pie chart shows that 45% of a budget is allocated to administration and 30% to research. What percentage is left for other expenses?",
    choices: ["25%", "20%", "30%", "35%"],
    answer: 1,
    explanation:
      "Percentage Left for Other Expenses = 100% - (Percentage Allocated to Administration + Percentage Allocated to Research). Here, Percentage Allocated to Administration = 45% and Percentage Allocated to Research = 30%. Therefore, Percentage Left = 100% - (45% + 30%) = 25%.",
  },
  {
    question:
      "A histogram displays 15 people with 5 apples, 20 people with 10 apples, and 10 people with 15 apples. What is the total number of apples?",
    choices: ["275", "280", "400", "425"],
    answer: 4,
    explanation:
      "Total Apples = (Number of People with 5 Apples * 5) + (Number of People with 10 Apples * 10) + (Number of People with 15 Apples * 15). Here, Total Apples = (15 * 5) + (20 * 10) + (10 * 15) = 75 + 200 + 150 = 425.",
  },
  {
    question:
      "If a pie chart shows 20% of a total amount is allocated to salaries, and the total amount is P150,000, what is allocated to salaries?",
    choices: ["P30,000", "P35,000", "P25,000", "P40,000"],
    answer: 1,
    explanation:
      "Amount Allocated to Salaries = Total Amount * Percentage Allocated. Here, Percentage Allocated = 20% or 0.20. Therefore, Amount Allocated = 150,000 * 0.20 = P30,000.",
  },
  {
    question:
      "A scatter plot shows that as the number of hours studied increases, the test scores also increase. What type of relationship does this show?",
    choices: [
      "Positive Correlation",
      "Negative Correlation",
      "No Correlation",
      "Inverse Correlation",
    ],
    answer: 1,
    explanation:
      "A positive correlation indicates that as one variable increases, the other variable also increases. In this case, as the number of hours studied increases, the test scores increase, indicating a positive correlation.",
  },
  {
    question:
      "In a line graph, if the line slopes downward from left to right, what does it indicate?",
    choices: [
      "Increasing Trend",
      "Decreasing Trend",
      "Constant Trend",
      "Unpredictable Trend",
    ],
    answer: 2,
    explanation:
      "A downward slope from left to right indicates a decreasing trend.",
  },
  {
    question:
      "A table shows that 60% of the students passed an exam and 40% failed. If there are 300 students, how many passed?",
    choices: ["150", "180", "120", "170"],
    answer: 2,
    explanation:
      "Number of Students Passing = Percentage Passing * Total Students. Here, Percentage Passing = 60% or 0.60. Therefore, Number of Students Passing = 300 * 0.60 = 180.",
  },

  {
    question:
      "A bar chart indicates that 35% of the respondents prefer Brand A, 45% prefer Brand B, and the rest prefer Brand C. What percentage prefer Brand C?",
    choices: ["20%", "15%", "25%", "30%"],
    answer: 1,
    explanation:
      "Percentage Preferring Brand C = 100% - (Percentage Preferring Brand A + Percentage Preferring Brand B). Here, Percentage Preferring Brand A = 35% and Percentage Preferring Brand B = 45%. Therefore, Percentage Preferring Brand C = 100% - (35% + 45%) = 20%.",
  },
  {
    question:
      "In a box plot, if the median is lower than the mean, what does it suggest about the data distribution?",
    choices: [
      "Left-skewed Distribution",
      "Symmetric Distribution",
      "Right-skewed Distribution",
      "Uniform Distribution",
    ],
    answer: 3,
    explanation:
      "If the median is lower than the mean, it suggests a right-skewed distribution, where the tail on the right side is longer or fatter than the left side.",
  },
  {
    question:
      "A data set has a mean of 50 and a standard deviation of 5. What is the z-score of a data point that is 55?",
    choices: ["1.5", "2", "0.5", "1"],
    answer: 4,
    explanation:
      "Use the formula: z-score = (Data Point - Mean) / Standard Deviation. Here, Data Point = 55, Mean = 50, and Standard Deviation = 5. Therefore, z-score = (55 - 50) / 5 = 5 / 5 = 1.",
  },
  {
    question:
      "If the mode of a data set is 7 and it appears most frequently, what can be said about the data set?",
    choices: [
      "The data set is bimodal",
      "The data set is unimodal",
      "The data set is multimodal",
      "The data set has no mode",
    ],
    answer: 2,
    explanation:
      "The mode is the value that appears most frequently in a data set. If there is one mode, the data set is unimodal.",
  },
  {
    question:
      "What type of chart is best for comparing proportions of a whole?",
    choices: ["Bar Chart", "Pie Chart", "Line Graph", "Histogram"],
    answer: 2,
    explanation:
      "A pie chart is best for comparing proportions of a whole because it visually shows how each segment contributes to the entire amount.",
  },
  {
    question:
      "A survey of 120 people finds that 15% are vegetarian. How many people are vegetarian?",
    choices: ["18", "15", "20", "25"],
    answer: 1,
    explanation:
      "Number of Vegetarians = Total People * Percentage Vegetarian. Here, Percentage Vegetarian = 15% or 0.15. Therefore, Number of Vegetarians = 120 * 0.15 = 18.",
  },
  {
    question:
      "In a Venn diagram, if the intersection of two sets A and B has 10 elements, and A has 25 elements while B has 20 elements, what is the number of elements in the union of A and B?",
    choices: ["35", "45", "30", "40"],
    answer: 1,
    explanation:
      "Use the formula: Union of A and B = (Number of Elements in A) + (Number of Elements in B) - (Number of Elements in the Intersection). Here, Number of Elements in A = 25, Number of Elements in B = 20, and Number of Elements in the Intersection = 10. Therefore, Union of A and B = 25 + 20 - 10 = 35.",
  },
];

var Analyticalquestions = [
  // Word Association

  {
    question: "Which word is most closely related to 'sun'?",
    choices: ["Moon", "Light", "River", "Mountain"],
    answer: 2,
    explanation:
      "The sun provides light, so 'Light' is the word most closely related to 'sun'.",
  },

  {
    question: "Which word is most closely related to 'doctor'?",
    choices: ["Hospital", "Movie", "Music", "Dance"],
    answer: 1,
    explanation:
      "Doctors work in hospitals, so 'Hospital' is the word most closely related to 'doctor'.",
  },
  // Identifying Assumptions and Conclusions
  {
    question:
      "Assume that all dogs are animals. If 'Rover' is a dog, what can we conclude?",
    choices: [
      "Rover is a plant",
      "Rover is a car",
      "Rover is a book",
      "Rover is an animal",
    ],
    answer: 4,
    explanation:
      "Since all dogs are animals and Rover is a dog, Rover must be an animal.",
  },
  {
    question:
      "If every student in a class passed an exam, what assumption can we make?",
    choices: [
      "All students studied",
      "Some students failed",
      "The exam was easy",
      "All students passed",
    ],
    answer: 4,
    explanation:
      "The given information implies that all students passed, so the assumption is 'All students passed'.",
  },
  {
    question:
      "If a company has a policy that all employees must work 40 hours a week, what can we infer about John if he is an employee of that company?",
    choices: [
      "John works 40 hours a week",
      "John works less than 40 hours a week",
      "John is not an employee",
      "John works more than 40 hours a week",
    ],
    answer: 1,
    explanation:
      "According to the company's policy, all employees work 40 hours a week, so John must work 40 hours a week.",
  },
  {
    question: "If it is raining outside, what can we assume about the weather?",
    choices: [
      "The weather is dry",
      "The weather is sunny",
      "The weather is wet",
      "The weather is cold",
    ],
    answer: 3,
    explanation: "If it is raining, the weather is wet.",
  },
  {
    question: "If a person is wearing a raincoat, what can we infer?",
    choices: ["It is raining", "It is sunny", "It is snowing", "It is windy"],
    answer: 1,
    explanation: "A raincoat is typically worn when it is raining.",
  },
  // Logic
  {
    question:
      "If all cats are animals and some animals are not pets, can we conclude that some cats are not pets?",
    choices: ["Yes", "No", "Not enough information", "Only some cats are pets"],
    answer: 3,
    explanation:
      "We know some animals are not pets, but we don't know if those animals include cats. Therefore, we cannot conclude that some cats are not pets.",
  },
  {
    question:
      "If A is taller than B, and B is taller than C, who is the shortest?",
    choices: ["A", "B", "C", "Not enough information"],
    answer: 3,
    explanation:
      "Since A is taller than B and B is taller than C, C is the shortest.",
  },
  {
    question:
      "If it takes 3 hours for 5 workers to complete a job, how long will it take for 10 workers to complete the same job?",
    choices: ["1 hour", "1.5 hours", "2 hours", "3 hours"],
    answer: 2,
    explanation:
      "If the number of workers doubles, the time required is halved. Therefore, it will take 1.5 hours for 10 workers.",
  },
  {
    question: "If it is Monday today, what day will it be in 50 days?",
    choices: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    answer: 1,
    explanation:
      "50 days from Monday is a multiple of 7 days plus 1 extra day, which means it will also be Monday.",
  },
  {
    question:
      "If every student in a class passed the exam, and John is a student in that class, what statement is true?",
    choices: [
      "John failed the exam",
      "John passed the exam",
      "John is not a student",
      "John is a teacher",
    ],
    answer: 2,
    explanation:
      "Since every student passed the exam, John, being a student, also passed.",
  },
  // Data Interpretation
  {
    question:
      "If a pie chart shows that 30% of a company's revenue comes from product A, and the company has a total revenue of $100,000, how much revenue comes from product A?",
    choices: ["$30,000", "$40,000", "$50,000", "$60,000"],
    answer: 1,
    explanation: "30% of $100,000 is $30,000.",
  },
  {
    question:
      "In a bar graph showing the number of cars sold each month, if January shows 200 cars and February shows 150 cars, how many more cars were sold in January compared to February?",
    choices: ["50 cars", "100 cars", "150 cars", "200 cars"],
    answer: 1,
    explanation:
      "January had 200 cars sold and February had 150 cars sold. The difference is 200 - 150 = 50 cars.",
  },
  {
    question:
      "A table lists that 60% of the sales were made online and 40% in-store. If the total sales amount is $200,000, how much were the online sales?",
    choices: ["$80,000", "$100,000", "$120,000", "$140,000"],
    answer: 3,
    explanation: "60% of $200,000 is $120,000.",
  },
  {
    question:
      "If a line graph shows that the number of units sold increased from 100 to 150 over a period of 6 months, what is the percentage increase in sales?",
    choices: ["25%", "30%", "40%", "50%"],
    answer: 1,
    explanation:
      "The increase in sales is 150 - 100 = 50 units. The percentage increase is (50/100) * 100% = 50%.",
  },
  {
    question:
      "In a data table, if the average score of 5 students is 80, what is the total score of all students?",
    choices: ["400", "500", "600", "700"],
    answer: 1,
    explanation: "The average score is 80, so the total score is 80 * 5 = 400.",
  },
  // Additional Questions
  {
    question: "Which word is most closely related to 'water'?",
    choices: ["Tree", "Mountain", "Ocean", "Book"],
    answer: 3,
    explanation:
      "Water is found in the ocean, so 'Ocean' is the word most closely related to 'water'.",
  },
  {
    question: "If all birds can fly and penguins are birds, can penguins fly?",
    choices: ["Yes", "No", "Only some can fly", "Not enough information"],
    answer: 2,
    explanation:
      "Although all birds can fly, penguins are an exception as they cannot fly.",
  },
  {
    question:
      "If a box contains 10 red balls and 5 blue balls, what is the probability of picking a red ball?",
    choices: ["1/2", "2/3", "1/3", "5/10"],
    answer: 2,
    explanation:
      "There are 10 red balls out of a total of 15 balls, so the probability is 10/15, which simplifies to 2/3.",
  },
  {
    question:
      "If a factory produces 500 units per day and operates 5 days a week, how many units are produced in a week?",
    choices: ["2500", "3000", "3500", "4000"],
    answer: 1,
    explanation: "500 units per day for 5 days is 500 * 5 = 2500 units.",
  },
  {
    question:
      "If the temperature rises from 20°C to 30°C, what is the change in temperature?",
    choices: ["10°C", "20°C", "15°C", "25°C"],
    answer: 1,
    explanation: "The change in temperature is 30°C - 20°C = 10°C.",
  },
  {
    question:
      "If a person saves $100 every month, how much will they save in 6 months?",
    choices: ["$700", "$600", "$400", "$300"],
    answer: 2,
    explanation: "Saving $100 per month for 6 months totals 6 * $100 = $600.",
  },
  {
    question: "If 4 pencils cost $2, how much will 10 pencils cost?",
    choices: ["$4", "$5", "$6", "$8"],
    answer: 2,
    explanation:
      "The cost per pencil is $2 / 4 = $0.50. For 10 pencils, the cost is 10 * $0.50 = $5.",
  },
  {
    question:
      "If the ratio of boys to girls in a class is 4:3 and there are 28 students, how many girls are there?",
    choices: ["12", "14", "16", "18"],
    answer: 1,
    explanation:
      "The total number of parts is 4 + 3 = 7. Each part represents 28 / 7 = 4 students. Therefore, girls are 3 * 4 = 12.",
  },
  {
    question:
      "If a movie starts at 3:15 PM and lasts for 2 hours and 45 minutes, what time does it end?",
    choices: ["6:00 PM", "6:15 PM", "6:30 PM", "7:00 PM"],
    answer: 1,
    explanation: "Adding 2 hours and 45 minutes to 3:15 PM gives us 6:00 PM.",
  },
  {
    question:
      "If the price of an item is reduced by 25% and the new price is $75, what was the original price?",
    choices: ["$200", "$100", "$80", "$70"],
    answer: 2,
    explanation:
      "If $75 is 75% of the original price, the original price is $75 / 0.75 = $100.",
  },
  {
    question:
      "If a group of people has a total height of 540 cm and the average height is 180 cm, how many people are in the group?",
    choices: ["6", "5", "4", "3"],
    answer: 4,
    explanation:
      "The number of people is the total height divided by the average height, which is 540 / 180 = 3.",
  },
  {
    question:
      "If a factory produces 250 units in 5 days, how many units are produced in 1 day?",
    choices: ["70", "60", "50", "40"],
    answer: 3,
    explanation: "The number of units produced per day is 250 / 5 = 50.",
  },
  {
    question:
      "If the sum of three consecutive numbers is 48, what is the smallest number?",
    choices: ["15", "16", "17", "18"],
    answer: 2,
    explanation:
      "Let the numbers be x, x+1, x+2. Then x + (x+1) + (x+2) = 48. Solving this, x = 16.",
  },
  {
    question:
      "If a car travels 120 kilometers in 2 hours, what is its average speed?",
    choices: ["80 km/h", "70 km/h", "60 km/h", "50 km/h"],
    answer: 3,
    explanation:
      "The average speed is distance divided by time, which is 120 km / 2 hours = 60 km/h.",
  },
  {
    question:
      "If the area of a rectangle is 60 square meters and the length is 12 meters, what is the width?",
    choices: ["5 meters", "10 meters", "15 meters", "20 meters"],
    answer: 1,
    explanation:
      "The width is the area divided by the length, which is 60 / 12 = 5 meters.",
  },
  {
    question:
      "If a train travels at 90 km/h and needs to cover a distance of 360 km, how long will it take?",
    choices: ["6 hours", "5 hours", "4 hours", "3 hours"],
    answer: 3,
    explanation:
      "The time required is distance divided by speed, which is 360 km / 90 km/h = 4 hours.",
  },
  {
    question: "If 60% of a number is 48, what is the number?",
    choices: ["80", "70", "60", "50"],
    answer: 1,
    explanation: "The number is 48 / 0.60 = 80.",
  },
  {
    question:
      "If a group of 8 students scores an average of 85 marks, what is the total score of the group?",
    choices: ["680", "700", "750", "800"],
    answer: 1,
    explanation:
      "The total score is the average score multiplied by the number of students, which is 85 * 8 = 680.",
  },
  {
    question:
      "If the cost of 5 kg of apples is $20, what is the cost of 1 kg of apples?",
    choices: ["$7", "$6", "$5", "$4"],
    answer: 4,
    explanation: "The cost per kg is $20 / 5 kg = $4.",
  },
  {
    question:
      "If the average of 5 numbers is 12, what is the sum of these numbers?",
    choices: ["50", "60", "40", "30"],
    answer: 2,
    explanation:
      "The sum is the average multiplied by the number of numbers, which is 12 * 5 = 60.",
  },
  {
    question:
      "If the probability of raining tomorrow is 0.8, what is the probability that it will not rain?",
    choices: ["0.2", "0.3", "0.4", "0.5"],
    answer: 1,
    explanation: "The probability of not raining is 1 - 0.8 = 0.2.",
  },
  {
    question:
      "If a company has a profit of $150,000 and it represents 20% of the total revenue, what is the total revenue?",
    choices: ["$700,000", "$600,000", "$500,000", "$750,000"],
    answer: 4,
    explanation: "The total revenue is $150,000 / 0.20 = $750,000.",
  },
  {
    question:
      "If a book is reduced in price from $25 to $20, what is the percentage discount?",
    choices: ["20%", "25%", "30%", "15%"],
    answer: 1,
    explanation: "The discount is ($25 - $20) / $25 * 100% = 20%.",
  },
  {
    question:
      "If the average number of calls per day is 50 and the average number of days is 10, what is the total number of calls?",
    choices: ["550", "600", "500", "450"],
    answer: 3,
    explanation:
      "The total number of calls is 50 calls/day * 10 days = 500 calls.",
  },
  {
    question:
      "If a car depreciates in value by 15% annually and its current value is $10,000, what will its value be after one year?",
    choices: ["$9,500", "$8,500", "$7,500", "$7,000"],
    answer: 2,
    explanation:
      "The value after one year is $10,000 * (1 - 0.15) = $10,000 * 0.85 = $8,500.",
  },
  {
    question:
      "If the length of a rectangle is twice its width and the perimeter is 60 cm, what is the width?",
    choices: ["10 cm", "12 cm", "15 cm", "20 cm"],
    answer: 2,
    explanation:
      "Let width be x cm and length be 2x cm. Perimeter = 2 * (length + width) = 2 * (2x + x) = 60. Solving gives x = 12 cm.",
  },
  {
    question:
      "If a box contains 5 red, 7 blue, and 3 green balls, what fraction of the balls are red?",
    choices: ["5/15", "1/3", "1/2", "1/5"],
    answer: 2,
    explanation:
      "There are 15 balls in total, and 5 of them are red. So, the fraction of red balls is 5 / 15 = 1 / 3.",
  },
  {
    question:
      "If you have 3 times as many apples as oranges and you have 12 apples, how many oranges do you have?",
    choices: ["3", "4", "6", "9"],
    answer: 2,
    explanation:
      "If there are 3 times as many apples as oranges and there are 12 apples, then there are 12 / 3 = 4 oranges.",
  },
  {
    question:
      "If a rectangle has a length of 8 cm and a width of 6 cm, what is its area?",
    choices: ["48 cm²", "56 cm²", "60 cm²", "64 cm²"],
    answer: 1,
    explanation:
      "The area of a rectangle is length * width, which is 8 cm * 6 cm = 48 cm².",
  },
  {
    question:
      "If a factory produces 120 units in 3 hours, what is the production rate per hour?",
    choices: [
      "30 units/hour",
      "40 units/hour",
      "50 units/hour",
      "60 units/hour",
    ],
    answer: 2,
    explanation:
      "The production rate per hour is 120 units / 3 hours = 40 units/hour.",
  },
  {
    question:
      "If a city has 200,000 residents and 25% are children, how many children are there?",
    choices: ["50,000", "40,000", "30,000", "60,000"],
    answer: 1,
    explanation:
      "25% of 200,000 residents is 0.25 * 200,000 = 50,000 children.",
  },
  {
    question:
      "If a recipe calls for 2 cups of sugar for every 3 cups of flour, how many cups of sugar are needed for 9 cups of flour?",
    choices: ["4 cups", "5 cups", "6 cups", "7 cups"],
    answer: 3,
    explanation:
      "If 3 cups of flour require 2 cups of sugar, then 9 cups of flour will require (9/3) * 2 = 6 cups of sugar.",
  },
  {
    question:
      "If you score 75% on a test and the test has 80 questions, how many questions did you answer correctly?",
    choices: ["60", "65", "70", "75"],
    answer: 1,
    explanation: "75% of 80 questions is 0.75 * 80 = 60 questions.",
  },
];

var Verbalquestions = [
  // Grammar and Correct Usage
  {
    question:
      "Choose the correct form of the verb: She ___ to the store yesterday.",
    choices: ["go", "went", "going", "gone"],
    answer: 2,
    explanation:
      "The correct past tense form of 'go' is 'went', so the sentence should be 'She went to the store yesterday.'",
  },
  {
    question: "Which sentence is grammatically correct?",
    choices: [
      "He don't like apples.",
      "He doesn't likes apples.",
      "He doesn't like apples.",
      "He don't likes apples.",
    ],
    answer: 3,
    explanation:
      "The correct sentence is 'He doesn't like apples.' because 'doesn't' is used with the base form of the verb.",
  },
  {
    question:
      "Choose the correct preposition: She is interested ___ learning new languages.",
    choices: ["in", "on", "at", "for"],
    answer: 1,
    explanation:
      "The correct preposition is 'in', so the sentence should be 'She is interested in learning new languages.'",
  },
  {
    question:
      "Identify the error in this sentence: 'The team are winning the game.'",
    choices: ["The", "team", "are", "winning"],
    answer: 3,
    explanation:
      "The correct form should be 'The team is winning the game.' because 'team' is a collective noun and takes a singular verb.",
  },
  {
    question:
      "Select the correct pronoun: The students should bring ___ books to class.",
    choices: ["their", "there", "they", "theirs"],
    answer: 1,
    explanation:
      "The correct pronoun is 'their', so the sentence should be 'The students should bring their books to class.'",
  },
  // Vocabulary
  {
    question: "What is the synonym of 'happy'?",
    choices: ["Sad", "Joyful", "Angry", "Tired"],
    answer: 2,
    explanation: "The synonym of 'happy' is 'joyful'.",
  },
  {
    question: "Choose the word that is closest in meaning to 'benevolent'.",
    choices: ["Kind", "Selfish", "Hostile", "Indifferent"],
    answer: 1,
    explanation: "The word 'benevolent' means 'kind' or 'generous'.",
  },
  {
    question: "What is the antonym of 'increase'?",
    choices: ["Decrease", "Expand", "Raise", "Grow"],
    answer: 1,
    explanation: "The antonym of 'increase' is 'decrease'.",
  },
  {
    question:
      "Select the word that best completes the sentence: 'The novel was so ___ that I couldn't put it down.'",
    choices: ["Dull", "Boring", "Captivating", "Tedious"],
    answer: 3,
    explanation:
      "The word 'captivating' means 'very interesting or charming', which fits the sentence best.",
  },
  {
    question: "Which word is most similar to 'innovative'?",
    choices: ["Creative", "Traditional", "Ordinary", "Boring"],
    answer: 1,
    explanation:
      "The word 'innovative' means 'creative' or introducing new ideas.",
  },
  // Paragraph Organization
  {
    question:
      "Rearrange the following sentences to form a coherent paragraph: 1. Finally, she finished her painting. 2. She began her work early in the morning. 3. The gallery exhibition was a huge success. 4. She worked on her painting throughout the day.",
    choices: ["2, 4, 1, 3", "2, 1, 4, 3", "1, 2, 3, 4", "4, 3, 2, 1"],
    answer: 1,
    explanation:
      "The coherent paragraph is formed by arranging the sentences as 2, 4, 1, 3.",
  },
  {
    question:
      "Which sentence should come last in this paragraph? 1. The festival was a huge success. 2. The community came together to celebrate. 3. Many people enjoyed the music and food.",
    choices: ["1", "2", "3", "None of the above"],
    answer: 1,
    explanation:
      "The concluding sentence should be 'The festival was a huge success.' which summarizes the paragraph.",
  },
  {
    question:
      "Arrange the following sentences to make a logical paragraph: 1. The sun was setting. 2. The park was full of people enjoying the evening. 3. I decided to take a walk. 4. The sky was painted with shades of orange and pink.",
    choices: ["3, 2, 1, 4", "3, 1, 4, 2", "2, 3, 1, 4", "2, 4, 1, 3"],
    answer: 2,
    explanation:
      "The logical paragraph is formed by arranging the sentences as 3, 1, 4, 2.",
  },
  {
    question:
      "Identify the topic sentence for the paragraph: 1. Fresh vegetables are essential for a healthy diet. 2. They provide necessary vitamins and minerals. 3. Eating a variety of vegetables can prevent many diseases. 4. Vegetables should be included in every meal.",
    choices: ["1", "2", "3", "4"],
    answer: 1,
    explanation:
      "The topic sentence, which introduces the main idea of the paragraph, is 'Fresh vegetables are essential for a healthy diet.'",
  },
  {
    question:
      "Choose the sentence that best introduces the main idea of this paragraph: 1. Many people enjoy different types of sports. 2. Playing sports can be a great way to stay fit. 3. Watching sports on television is popular. 4. Some sports require special equipment.",
    choices: ["1", "2", "3", "4"],
    answer: 2,
    explanation:
      "The sentence 'Playing sports can be a great way to stay fit.' introduces the main idea of the paragraph.",
  },
  // Reading Comprehension
  {
    question:
      "Read the passage: 'John went to the store to buy ingredients for a cake. He needed flour, sugar, and eggs. After purchasing the items, he went home to bake.' What did John buy from the store?",
    choices: [
      "Flour and sugar",
      "Flour, sugar, and eggs",
      "A cake",
      "Eggs only",
    ],
    answer: 2,
    explanation: "John bought flour, sugar, and eggs as stated in the passage.",
  },
  {
    question:
      "Read the passage: 'The book was about a young girl who discovered a magical world in her backyard. She went on many adventures and made new friends.' What is the book primarily about?",
    choices: [
      "A magical world",
      "Adventures and friends",
      "A young girl",
      "A backyard",
    ],
    answer: 3,
    explanation:
      "The book is primarily about a young girl who discovers a magical world and goes on adventures.",
  },
  {
    question:
      "Read the passage: 'Tom was excited to start his new job. He had heard great things about the company and was looking forward to meeting his new colleagues.' How did Tom feel about starting his new job?",
    choices: ["Nervous", "Excited", "Indifferent", "Anxious"],
    answer: 2,
    explanation:
      "Tom felt excited about starting his new job, as mentioned in the passage.",
  },
  {
    question:
      "Read the passage: 'The conference will be held in the downtown area. Participants are expected to arrive by 9 AM for registration.' What time should participants arrive for registration?",
    choices: ["8 AM", "9 AM", "10 AM", "11 AM"],
    answer: 2,
    explanation:
      "Participants are expected to arrive by 9 AM for registration, as stated in the passage.",
  },
  {
    question:
      "Read the passage: 'She enjoyed the concert immensely. The performance was spectacular, and the music was enchanting.' How did she feel about the concert?",
    choices: ["Bored", "Enthusiastic", "Disappointed", "Indifferent"],
    answer: 2,
    explanation:
      "She enjoyed the concert immensely, indicating she was enthusiastic about it.",
  },
  {
    question:
      "Identify the error in this sentence: 'Neither the manager nor the employees was aware of the new policy changes.'",
    choices: ["Neither", "the manager", "was", "employees"],
    answer: 3,
    explanation:
      "The correct sentence should be 'Neither the manager nor the employees were aware of the new policy changes.' The subject 'employees' is plural, so the verb should be 'were'.",
  },
  {
    question:
      "Identify the error in this sentence: 'She don't have enough time to complete the assignment.'",
    choices: ["She", "don't", "have", "enough"],
    answer: 2,
    explanation:
      "The correct sentence should be 'She doesn't have enough time to complete the assignment.' The verb 'don't' should be 'doesn't' to agree with the singular subject 'She'.",
  },
  {
    question:
      "Identify the error in this sentence: 'They has been working on the project for several months now.'",
    choices: ["They", "has", "been", "working"],
    answer: 2,
    explanation:
      "The correct sentence should be 'They have been working on the project for several months now.' The verb 'has' should be 'have' to agree with the plural subject 'They'.",
  },
  // Additional Questions
  {
    question:
      "Choose the correct form of the word: 'His contribution was very ___.'",
    choices: ["beneficial", "benefits", "benefit", "benefitfully"],
    answer: 1,
    explanation:
      "The correct form of the word is 'beneficial', which is an adjective describing the contribution.",
  },
  {
    question: "Identify the incorrect sentence:",
    choices: [
      "The quick brown fox jumps over the lazy dog.",
      "The quick brown fox jumped over the lazy dog.",
      "The quick brown fox jump over the lazy dog.",
      "The quick brown fox jumping over the lazy dog.",
    ],
    answer: 3,
    explanation:
      "The sentence 'The quick brown fox jump over the lazy dog.' is incorrect; it should be 'jumps' to agree with the singular subject 'fox'.",
  },
  {
    question:
      "Select the word that fits best: 'Her explanation was so ___ that everyone understood the concept immediately.'",
    choices: ["confusing", "clear", "vague", "complex"],
    answer: 2,
    explanation:
      "The word 'clear' fits best as it means the explanation was easy to understand.",
  },
  {
    question:
      "Choose the correct sentence: 1. Neither the teacher nor the students were aware of the schedule change. 2. Neither the teacher nor the students was aware of the schedule change.",
    choices: ["1", "2"],
    answer: 2,
    explanation:
      "The correct sentence is 'Neither the teacher nor the students was aware of the schedule change.' because 'neither...nor' takes a singular verb.",
  },
  {
    question:
      "Rearrange these sentences into a logical order: 1. The company values employee feedback. 2. Employees were asked to complete a survey. 3. The results were analyzed and used to improve workplace conditions. 4. The company took steps to address the feedback.",
    choices: ["2, 1, 3, 4", "1, 2, 4, 3", "1, 2, 3, 4", "2, 3, 4, 1"],
    answer: 1,
    explanation:
      "The logical order is 2, 1, 3, 4, which describes the process from the survey to using feedback to improve conditions.",
  },
  {
    question:
      "Read the passage: 'She was known for her punctuality and dedication at work. Her manager often praised her for these qualities.' What qualities is the manager praising?",
    choices: [
      "Punctuality and dedication",
      "Creativity and teamwork",
      "Leadership and innovation",
      "Communication and efficiency",
    ],
    answer: 1,
    explanation:
      "The manager is praising her punctuality and dedication as mentioned in the passage.",
  },
  {
    question:
      "Read the passage: 'The city experienced a significant drop in temperature overnight. By morning, it was freezing cold and everyone needed to bundle up.' What caused the city to be freezing cold?",
    choices: [
      "A weather change",
      "A malfunction",
      "A power outage",
      "A festival",
    ],
    answer: 1,
    explanation:
      "The significant drop in temperature overnight caused the city to be freezing cold, as stated in the passage.",
  },
  {
    question:
      "Choose the best word to complete the sentence: 'The manager’s ___ approach made the team feel valued and motivated.'",
    choices: ["distant", "approachable", "critical", "indifferent"],
    answer: 2,
    explanation:
      "The word 'approachable' best describes an attitude that makes the team feel valued and motivated.",
  },
  {
    question:
      "Identify the main idea of the paragraph: 'Many people believe that regular exercise is crucial for maintaining good health. Exercise helps in reducing stress, improving cardiovascular health, and maintaining a healthy weight.'",
    choices: [
      "Exercise is good for health",
      "Exercise reduces stress",
      "Exercise improves cardiovascular health",
      "Exercise helps maintain a healthy weight",
    ],
    answer: 1,
    explanation:
      "The main idea of the paragraph is that regular exercise is crucial for maintaining good health.",
  },
  {
    question:
      "Select the correct form of the adjective: 'The mountain is the ___ in the region.'",
    choices: ["high", "higher", "highest", "highly"],
    answer: 3,
    explanation:
      "The correct form is 'highest' to indicate the superlative degree of the adjective.",
  },
  {
    question:
      "Choose the correct usage of the word 'affect': 'The weather can greatly ___ your mood.'",
    choices: ["affect", "effect", "affects", "effects"],
    answer: 1,
    explanation:
      "The correct usage is 'affect', as it is a verb meaning to influence.",
  },
  {
    question:
      "Read the passage: 'The new policy was implemented to improve efficiency and productivity within the company. The staff received training to adapt to these changes.' What was the purpose of the new policy?",
    choices: [
      "To improve efficiency and productivity",
      "To reduce the staff",
      "To increase salaries",
      "To introduce new products",
    ],
    answer: 1,
    explanation:
      "The purpose of the new policy was to improve efficiency and productivity, as mentioned in the passage.",
  },
  {
    question:
      "Read the passage: 'The novel, set in a dystopian future, explores themes of freedom and control. It follows the journey of a young protagonist who challenges the oppressive regime.' What is the main theme of the novel?",
    choices: [
      "Freedom and control",
      "Dystopian future",
      "Oppressive regime",
      "Young protagonist",
    ],
    answer: 1,
    explanation:
      "The main theme of the novel is 'freedom and control,' as described in the passage.",
  },
  {
    question:
      "Choose the correct verb form: 'They ___ the project by next week.'",
    choices: ["complete", "will complete", "completed", "completes"],
    answer: 2,
    explanation:
      "The correct verb form is 'will complete' to indicate a future action.",
  },
  {
    question: "Identify the correctly punctuated sentence:",
    choices: [
      "Let's eat, Grandma!",
      "Let's eat Grandma!",
      "Lets eat, Grandma!",
      "Lets eat Grandma!",
    ],
    answer: 1,
    explanation:
      "The correct sentence is 'Let's eat, Grandma!' with the comma indicating that we are addressing Grandma.",
  },
  {
    question:
      "Select the word that best completes the sentence: 'She was very ___ about her upcoming presentation.'",
    choices: ["nervous", "confident", "worried", "excited"],
    answer: 2,
    explanation:
      "The word 'confident' fits best, indicating she felt assured about her presentation.",
  },
  {
    question:
      "Read the passage: 'Despite the heavy rain, the outdoor concert continued as planned. The audience remained enthusiastic and enjoyed the performance.' What was the weather like during the concert?",
    choices: ["Sunny", "Snowy", "Rainy", "Windy"],
    answer: 3,
    explanation:
      "The weather during the concert was 'rainy', as stated in the passage.",
  },
  {
    question:
      "Choose the correct word: 'The manager was very ___ in his feedback, which helped the team improve.'",
    choices: ["specific", "vague", "ambiguous", "general"],
    answer: 1,
    explanation:
      "The word 'specific' indicates that the feedback was clear and detailed.",
  },
  {
    question:
      "Identify the error in the sentence: 'She has went to the store earlier today.'",
    choices: ["She", "has", "went", "to"],
    answer: 3,
    explanation:
      "The correct past participle is 'gone', so the sentence should be 'She has gone to the store earlier today.'",
  },
  {
    question:
      "Read the passage: 'The company introduced a new marketing strategy to reach a broader audience. The results were promising, with increased sales and customer engagement.' What was the outcome of the new marketing strategy?",
    choices: [
      "It had no impact",
      "It decreased sales",
      "It increased sales and customer engagement",
      "It led to layoffs",
    ],
    answer: 3,
    explanation:
      "The outcome was increased sales and customer engagement, as mentioned in the passage.",
  },
  {
    question: "Choose the sentence that uses the word 'ensure' correctly:",
    choices: [
      "I will insure the project is completed on time.",
      "Please ensure that all documents are submitted.",
      "The company is insuring the new policies.",
      "She ensured her car was safe.",
    ],
    answer: 2,
    explanation:
      "The correct usage is 'ensure' which means to make certain of something.",
  },
  {
    question:
      "Identify the main idea of this passage: 'Healthy eating habits are crucial for maintaining overall well-being. Incorporating a variety of fruits, vegetables, and whole grains into your diet can help prevent chronic diseases and improve energy levels.'",
    choices: [
      "Healthy eating prevents chronic diseases",
      "Eating fruits is important",
      "Whole grains are beneficial",
      "Diet affects energy levels",
    ],
    answer: 1,
    explanation:
      "The main idea of the passage is that healthy eating habits are crucial for overall well-being and preventing chronic diseases.",
  },
  {
    question:
      "Choose the appropriate word: 'Her explanation was ___ and helped everyone understand the concept better.'",
    choices: ["clear", "muddy", "complicated", "difficult"],
    answer: 1,
    explanation:
      "The word 'clear' means that the explanation was easy to understand.",
  },
  {
    question:
      "Read the passage: 'The book provides an in-depth analysis of modern architectural trends. It highlights various design philosophies and their impact on urban spaces.' What is the book about?",
    choices: [
      "Modern architectural trends",
      "Urban spaces",
      "Design philosophies",
      "In-depth analysis",
    ],
    answer: 1,
    explanation:
      "The book provides an in-depth analysis of modern architectural trends, as described in the passage.",
  },
  {
    question: "Identify the correctly punctuated sentence:",
    choices: [
      "It's going to rain, so we should bring an umbrella.",
      "Its going to rain so we should bring an umbrella.",
      "Its going to rain, so we should bring an umbrella.",
      "It's going to rain so we should bring an umbrella.",
    ],
    answer: 1,
    explanation:
      "The correct sentence is 'It's going to rain, so we should bring an umbrella.' The contraction 'It's' means 'It is'.",
  },
  {
    question:
      "Choose the best word to complete the sentence: 'The scientist's discovery was ___ by many as a breakthrough in the field.'",
    choices: ["regarded", "rejected", "ignored", "overlooked"],
    answer: 1,
    explanation:
      "The word 'regarded' means that the discovery was seen or considered as a breakthrough.",
  },
  {
    question:
      "Read the passage: 'Despite his initial hesitation, Mark decided to join the team project. His contributions were valuable and helped achieve the project's goals.' How did Mark's decision affect the project?",
    choices: [
      "It hindered the project",
      "It had no effect",
      "It was valuable",
      "It delayed the project",
    ],
    answer: 3,
    explanation:
      "Mark's contributions were valuable and helped achieve the project's goals, as mentioned in the passage.",
  },
];

var Generalquestions = [
  {
    question: "What is the supreme law of the Philippines?",
    choices: [
      "Civil Code",
      "Labor Code",
      "Philippine Constitution",
      "Family Code",
    ],
    answer: 3,
    explanation:
      "The supreme law of the Philippines is the 'Philippine Constitution.'",
  },
  {
    question:
      "How many articles are there in the 1987 Philippine Constitution?",
    choices: ["14", "16", "18", "20"],
    answer: 3,
    explanation: "The 1987 Philippine Constitution contains 18 articles.",
  },
  {
    question:
      "Which branch of the Philippine government is responsible for making laws?",
    choices: ["Executive", "Legislative", "Judicial", "Administrative"],
    answer: 2,
    explanation:
      "The Legislative branch is responsible for making laws in the Philippines.",
  },
  {
    question: "Who is the current President of the Philippines? (As of 2024)",
    choices: [
      "Rodrigo Duterte",
      "Benigno Aquino III",
      "Ferdinand Marcos Jr.",
      "Gloria Macapagal-Arroyo",
    ],
    answer: 3,
    explanation:
      "As of 2024, the current President of the Philippines is Ferdinand Marcos Jr.",
  },
  {
    question: "What is the official language of the Philippine government?",
    choices: ["English", "Filipino", "Spanish", "Mandarin"],
    answer: 2,
    explanation:
      "The official language of the Philippine government is 'Filipino.'",
  },

  // Code of Conduct and Ethical Standards for Public Officials and Employees
  {
    question:
      "What is the primary purpose of the Code of Conduct and Ethical Standards for Public Officials and Employees?",
    choices: [
      "To provide guidelines for public sector operations",
      "To establish a standard for government procurement",
      "To ensure accountability and integrity in public service",
      "To define the roles of government agencies",
    ],
    answer: 3,
    explanation:
      "The primary purpose is to ensure accountability and integrity in public service.",
  },
  {
    question:
      "According to the Code of Conduct, which of the following is a prohibited act for public officials?",
    choices: [
      "Receiving gifts within prescribed limits",
      "Accepting bribes",
      "Attending official functions",
      "Using official resources for personal use",
    ],
    answer: 2,
    explanation: "Receiving bribes is a prohibited act for public officials.",
  },
  {
    question:
      "Which government agency is primarily responsible for enforcing the Code of Conduct and Ethical Standards for Public Officials and Employees?",
    choices: [
      "Department of Justice",
      "Civil Service Commission",
      "Office of the Ombudsman",
      "Commission on Audit",
    ],
    answer: 3,
    explanation:
      "The Office of the Ombudsman is primarily responsible for enforcing the Code of Conduct and Ethical Standards.",
  },
  {
    question:
      "What is the consequence for public officials who violate the Code of Conduct?",
    choices: ["Promotion", "Reprimand", "Suspension or dismissal", "Bonus"],
    answer: 3,
    explanation:
      "Violations of the Code of Conduct may result in suspension or dismissal from office.",
  },
  {
    question:
      "Which of the following is considered an ethical standard for public officials under the Code of Conduct?",
    choices: ["Favoritism", "Transparency", "Nepotism", "Conflict of interest"],
    answer: 2,
    explanation:
      "Transparency is an ethical standard required of public officials under the Code of Conduct.",
  },

  // Peace and Human Rights Issues
  {
    question:
      "Which international document outlines fundamental human rights and freedoms?",
    choices: [
      "Universal Declaration of Human Rights",
      "Geneva Convention",
      "Hague Convention",
      "Treaty of Versailles",
    ],
    answer: 1,
    explanation:
      "The Universal Declaration of Human Rights outlines fundamental human rights and freedoms.",
  },
  {
    question:
      "Which Philippine law aims to protect the rights of children and prevent child abuse?",
    choices: [
      "Anti-Trafficking in Persons Act",
      "Juvenile Justice and Welfare Act",
      "Anti-Child Pornography Act",
      "Expanded Senior Citizens Act",
    ],
    answer: 2,
    explanation:
      "The Juvenile Justice and Welfare Act aims to protect the rights of children and prevent child abuse.",
  },
  {
    question:
      "What is the primary goal of peacebuilding efforts in conflict-affected areas?",
    choices: [
      "Economic development",
      "Military intervention",
      "Promotion of human rights and reconciliation",
      "Expansion of territory",
    ],
    answer: 3,
    explanation:
      "The primary goal of peacebuilding is the promotion of human rights and reconciliation.",
  },
  {
    question:
      "Which of the following is a fundamental human right recognized under Philippine law?",
    choices: [
      "Right to free education",
      "Right to own property",
      "Right to privacy",
      "Right to travel abroad",
    ],
    answer: 3,
    explanation:
      "The right to privacy is recognized as a fundamental human right under Philippine law.",
  },
  {
    question: "What does the term 'extrajudicial killing' refer to?",
    choices: [
      "Judicial execution carried out by the court",
      "Legal execution for severe crimes",
      "Killing of individuals by government authorities without judicial process",
      "Execution by military tribunal",
    ],
    answer: 3,
    explanation:
      "Extrajudicial killing refers to the killing of individuals by government authorities without judicial process.",
  },

  // Environment Management and Protection
  {
    question: "What is the main purpose of the Philippine Clean Air Act?",
    choices: [
      "To regulate water quality",
      "To promote sustainable forestry",
      "To reduce air pollution and protect air quality",
      "To manage solid waste",
    ],
    answer: 3,
    explanation:
      "The main purpose of the Philippine Clean Air Act is to reduce air pollution and protect air quality.",
  },
  {
    question:
      "Which government agency is responsible for the protection and conservation of the Philippines' natural resources?",
    choices: [
      "Department of Environment and Natural Resources (DENR)",
      "Department of Agriculture",
      "National Commission for Culture and the Arts",
      "Department of Health",
    ],
    answer: 1,
    explanation:
      "The Department of Environment and Natural Resources (DENR) is responsible for the protection and conservation of natural resources.",
  },
  {
    question:
      "What is the purpose of the National Pollution Control Commission (NPCC)?",
    choices: [
      "To oversee the development of new industries",
      "To regulate the emissions of pollutants into the environment",
      "To promote public health",
      "To manage urban planning",
    ],
    answer: 2,
    explanation:
      "The NPCC is responsible for regulating the emissions of pollutants into the environment.",
  },
  {
    question:
      "Which law focuses on the management of solid waste in the Philippines?",
    choices: [
      "Solid Waste Management Act",
      "Environmental Impact Assessment Act",
      "National Integrated Protected Areas System Act",
      "Forestry Reform Code",
    ],
    answer: 1,
    explanation:
      "The Solid Waste Management Act focuses on the management of solid waste in the Philippines.",
  },
  {
    question:
      "What is the key objective of the Philippine Environmental Impact Statement System?",
    choices: [
      "To promote industrial growth",
      "To assess and mitigate the environmental impact of projects",
      "To encourage urban development",
      "To regulate agricultural practices",
    ],
    answer: 2,
    explanation:
      "The key objective is to assess and mitigate the environmental impact of projects.",
  },

  // Additional General Questions
  {
    question:
      "Which of the following is a constitutional body responsible for the enforcement of civil rights in the Philippines?",
    choices: [
      "Commission on Elections",
      "Commission on Audit",
      "Commission on Human Rights",
      "National Economic and Development Authority",
    ],
    answer: 3,
    explanation:
      "The Commission on Human Rights is responsible for the enforcement of civil rights in the Philippines.",
  },
  {
    question:
      "What is the primary focus of the National Disaster Risk Reduction and Management Council (NDRRMC)?",
    choices: [
      "Economic development",
      "Disaster preparedness and response",
      "Educational reforms",
      "Healthcare services",
    ],
    answer: 2,
    explanation:
      "The primary focus of the NDRRMC is disaster preparedness and response.",
  },
  {
    question:
      "Which Philippine law aims to promote the rights and welfare of senior citizens?",
    choices: ["Senior Citizens Act", "Labor Code", "Family Code", "Civil Code"],
    answer: 1,
    explanation:
      "The Senior Citizens Act promotes the rights and welfare of senior citizens in the Philippines.",
  },
  {
    question:
      "Which environmental law in the Philippines aims to protect and conserve the country's coastal and marine resources?",
    choices: [
      "Coastal Resources Management Act",
      "Clean Water Act",
      "National Environmental Awareness and Education Act",
      "Renewable Energy Act",
    ],
    answer: 1,
    explanation:
      "The Coastal Resources Management Act aims to protect and conserve the country's coastal and marine resources.",
  },
  {
    question:
      "What is the main aim of the Renewable Energy Act in the Philippines?",
    choices: [
      "To regulate fossil fuel usage",
      "To promote the use of renewable energy sources",
      "To manage energy consumption",
      "To enforce energy conservation policies",
    ],
    answer: 2,
    explanation:
      "The Renewable Energy Act aims to promote the use of renewable energy sources in the Philippines.",
  },
  {
    question:
      "Which of the following is NOT a recognized environmental issue in the Philippines?",
    choices: [
      "Deforestation",
      "Air pollution",
      "Water scarcity",
      "High crime rate",
    ],
    answer: 4,
    explanation:
      "High crime rate is not an environmental issue; deforestation, air pollution, and water scarcity are recognized environmental issues.",
  },
  {
    question: "What does the Clean Water Act aim to address?",
    choices: [
      "Air pollution",
      "Solid waste management",
      "Water pollution",
      "Deforestation",
    ],
    answer: 3,
    explanation: "The Clean Water Act aims to address water pollution.",
  },
  {
    question:
      "What is the purpose of the National Integrated Protected Areas System (NIPAS) Act?",
    choices: [
      "To establish protected areas for biodiversity conservation",
      "To promote industrial development",
      "To regulate land use",
      "To manage waste disposal",
    ],
    answer: 1,
    explanation:
      "The NIPAS Act aims to establish protected areas for biodiversity conservation.",
  },
  {
    question:
      "Which law mandates the establishment of a comprehensive, nationwide solid waste management program?",
    choices: [
      "Solid Waste Management Act",
      "Clean Air Act",
      "Forestry Code",
      "National Environment Policy",
    ],
    answer: 1,
    explanation:
      "The Solid Waste Management Act mandates the establishment of a comprehensive, nationwide solid waste management program.",
  },
  {
    question:
      "Who is responsible for approving the Environmental Impact Statement (EIS) of a project?",
    choices: [
      "Department of Environment and Natural Resources (DENR)",
      "Department of Trade and Industry",
      "Department of Public Works and Highways",
      "National Economic and Development Authority",
    ],
    answer: 1,
    explanation:
      "The Department of Environment and Natural Resources (DENR) is responsible for approving the Environmental Impact Statement (EIS) of a project.",
  },
];

shuffleArray(Generalquestions);
console.log(Generalquestions);

shuffleArray(Analyticalquestions);
console.log(Analyticalquestions);

shuffleArray(Verbalquestions);
console.log(Verbalquestions);

shuffleArray(Numericquestions);
console.log(Numericquestions);

document.getElementById("score").textContent = "Score: " + 0;
document.querySelector(".view-results").style.display = "none";
document.querySelector(".quiz").style.display = "none";
document.querySelector(".final-result").style.display = "none";

document.querySelector(".choose-lang").addEventListener("click", function () {
  lang = document.getElementById("language").value + "questions";
  document.getElementById("ques-left").textContent =
    "Question: " + (countQues + 1) + "/" + window[lang].length;

  document.querySelector(".quiz").style.display = "block";

  document.querySelector(".question").innerHTML =
    "<h1>" + window[lang][countQues].question + "</h1>";
  for (let i = 0; i <= 3; i++) {
    document.getElementById("opt" + i).value =
      window[lang][countQues].choices[i];
    document.getElementById("lb" + i).innerHTML =
      window[lang][countQues].choices[i];
  }
});

document.querySelector(".submit-answer").addEventListener("click", function () {
  const selectedOption = document.querySelector(
    'input[name="options"]:checked'
  );

  // Function to show the modal
  function showModal(title, message) {
    // Create the modal elements
    const modal = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalTitle = document.createElement("span");
    const modalBody = document.createElement("div");
    const closeButton = document.createElement("button");

    // Apply styles to modal
    modal.style.display = "flex";
    modal.style.position = "fixed";
    modal.style.zIndex = "1000";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";

    // Style modal content
    modalContent.style.backgroundColor = "white";
    modalContent.style.margin = "15% auto";
    modalContent.style.padding = "20px";
    modalContent.style.border = "1px solid #888";
    modalContent.style.borderRadius = "5px";
    modalContent.style.width = "80%";

    // Style modal header
    modalHeader.style.padding = "10px";
    modalHeader.style.borderBottom = "1px solid #ddd";

    modalTitle.textContent = title;
    modalTitle.style.fontWeight = "bold";
    modalTitle.style.fontSize = "18px";

    // Style modal body
    modalBody.style.padding = "20px";
    modalBody.style.fontSize = "16px";

    // Apply style to the message
    const messageParagraph = document.createElement("p");
    const correctMessage = "Correct!";
    const incorrectMessage = "Incorrect!";

    // Check and style the message
    if (message.startsWith(correctMessage)) {
      messageParagraph.innerHTML = message.replace(
        correctMessage,
        `<span style="color: green; font-weight: bold;">${correctMessage}</span>`
      );
    } else if (message.startsWith(incorrectMessage)) {
      messageParagraph.innerHTML = message.replace(
        incorrectMessage,
        `<span style="color: red; font-weight: bold;">${incorrectMessage}</span>`
      );
    } else {
      messageParagraph.textContent = message;
    }

    // Style close button
    closeButton.textContent = "Proceed";
    closeButton.style.backgroundColor = "#4CAF50";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.padding = "10px 20px";
    closeButton.style.textAlign = "center";
    closeButton.style.textDecoration = "none";
    closeButton.style.display = "inline-block";
    closeButton.style.fontSize = "16px";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";

    closeButton.addEventListener("click", () => {
      document.body.removeChild(modal); // Remove the modal from the DOM
    });

    // Assemble the modal
    modalHeader.appendChild(modalTitle);
    modalBody.appendChild(messageParagraph);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);

    // Append the modal to the body
    document.body.appendChild(modal);
  }

  // Your existing script logic
  if (
    selectedOption &&
    selectedOption.value ===
      window[lang][countQues].choices[window[lang][countQues].answer - 1]
  ) {
    score += 1;
    document.getElementById("score").textContent = "Score: " + score;
    showModal(
      "Your Answer is:",
      "Correct! " + window[lang][countQues].explanation
    );
  } else {
    showModal(
      "Your Answer is:",
      "Incorrect! " + window[lang][countQues].explanation
    );
  }

  if (countQues < window[lang].length - 1) {
    countQues++;
  } else {
    document.querySelector(".submit-answer").style.display = "none";
    document.querySelector(".view-results").style.display = "unset";
  }

  document.getElementById("ques-left").textContent =
    "Question: " + (countQues + 1) + "/" + window[lang].length;
  document.querySelector(".question").innerHTML =
    "<h1>" + window[lang][countQues].question + "</h1>";
  for (let i = 0; i <= 3; i++) {
    document.getElementById("opt" + i).value =
      window[lang][countQues].choices[i];
    document.getElementById("lb" + i).innerHTML =
      window[lang][countQues].choices[i];
  }
});

document.querySelector(".view-results").addEventListener("click", function () {
  document.querySelector(".final-result").style.display = "block";

  document.querySelector(".solved-ques-no").innerHTML =
    "You solved " +
    (countQues + 1) +
    " questions of " +
    document.getElementById("language").value;

  var correct = score;
  var totalQuestions = window[lang].length;
  var percentage = (correct / totalQuestions) * 100;

  document.querySelector(".right-wrong").innerHTML =
    correct + " correct/s and " + (totalQuestions - correct) + " incorrect/s";

  document.getElementById("display-final-score").innerHTML =
    "Your final score is: " + score + " (" + percentage.toFixed(2) + "%)";

  if (percentage >= 80) {
    document.querySelector(".remark").innerHTML = "Outstanding! :)";
  } else if (percentage >= 50) {
    document.querySelector(".remark").innerHTML = " Good, Keep Improving.";
  } else if (percentage > 0) {
    document.querySelector(".remark").innerHTML = "Better Luck Next Time";
  } else {
    document.querySelector(".remark").innerHTML = "Try Again.";
  }
});

document.getElementById("restart").addEventListener("click", function () {
  location.reload();
});
document.getElementById("restart2").addEventListener("click", function () {
  location.reload();
});

/* Inline CSS to be injected dynamically if necessary */
const style = document.createElement("style");
style.innerHTML = `
  #notification {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    border: 0px solid #000000;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    max-width: 300px;
    z-index: 1000;
    text-align: center;
  }

  .notification-title {
    font-weight: bold;
    margin-bottom: 20px;
    font-family: Prompt, sans-serif;
  }

  .notification-content {
    font-family: Prompt, sans-serif;
  }
`;

// Inject the styles into the document
document.head.appendChild(style);

document.getElementById("read").addEventListener("click", function () {
  // Create notification element
  let notification = document.createElement("div");
  notification.id = "notification";
  notification.className = "notification";

  // Create title element
  let title = document.createElement("div");
  title.className = "notification-title";
  title.textContent = "Eyyyyyy ka munaaaaa |--/ |--/ |--/";

  // Create content element
  let content = document.createElement("div");
  content.className = "notification-content";
  content.innerHTML =
    " <b>Note:</b> The specifics of the question might not be exactly the same on the actual exam, but the concept remains consistent. It is based on research and personal experience. If there are any inconsistencies with the sample question, please email me. Thanks.";

  // Append title and content to notification
  notification.appendChild(title);
  notification.appendChild(content);

  // Append notification to the body
  document.body.appendChild(notification);

  // Automatically remove the notification after 10 seconds
  setTimeout(() => {
    notification.remove();
  }, 11000);
});

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
});

/* Smooth Scroll End */
