// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", function () {
    const title = document.getElementById("main-title");
    title.textContent = "Text Changed Dynamically!";
    title.style.color = "#007BFF"; // Modifies CSS styles
  });
  
  // Add or Remove an Element
  document.getElementById("toggle-element-btn").addEventListener("click", function () {
    const dynamicSection = document.getElementById("dynamic-section");
    if (dynamicSection.style.display === "none" || !dynamicSection.style.display) {
      dynamicSection.style.display = "block";
      dynamicSection.textContent = "This is a dynamically added element!";
      dynamicSection.style.backgroundColor = "#FFD700";
    } else {
      dynamicSection.style.display = "none";
    }
  });
  