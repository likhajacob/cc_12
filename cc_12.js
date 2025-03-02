// Task 1: Business Dashboard – DOM Element Selection and Creation
console.log("********** Created Revenue Metric Card **********");
// Select The Dashboard Container:
const dashboardContainer = document.getElementById("dashboard");
const dashboardContainerQuery = document.querySelector("#dashboard");
// Create <div> Element To Represent The Metric Card
const revenueCard = document.createElement("div");
// Use setAttribute To Assign A Class And An Id To The New Element
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
// Populate The Card With A Title And A Placeholder Value
revenueCard.innerHTML = `
  <h3>Revenue</h3>
  <p>$50,000</p>
`;
// Append The New Metric Card To The Dashboard Container
dashboardContainer.appendChild(revenueCard);
// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
console.log("********** Updated Metric Cards via Array Conversion **********");
// Use document.querySelectorAll To Select All Elements With The Class "metric-card"
const metricCards = document.querySelectorAll(".metric-card");
// Convert The Resulting NodeList Into An Array
const metricCardsArray = [...metricCards];
// Use An Array Method To Update Each Card’s Inner Text 
metricCardsArray.forEach((card) => {
  const title = card.querySelector("h3");
  if (title) {
    title.textContent += " - Updated";
  }
  card.style.backgroundColor = "#FFC0CB"; // Baby Pink
});